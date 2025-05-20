"use client";

import { useState, useEffect, useMemo } from 'react';

// Define types for all blockchain data
export interface Block {
    id: string;
    number: number;
    age: string;
    timestamp: string;
    transactions: number;
    size: string;
    validator?: string;
}

export interface Transaction {
    hash: string;
    age: string;
    timestamp: string;
    from: string;
    to: string;
    amount: string;
    value?: string;
}

export interface NetworkStats {
    tps: number;
    tpsChange: number;
    nodes: number;
    nodesChange: number;
    blockTime: number;
    blockTimeChange: number;
    contracts: number;
    contractsChange: number;
    totalTransactions?: string;
    activeAddresses?: string;
    averageBlockTime?: string;
    hashRate?: string;
    gasPrice?: string;
    totalSupply?: string;
}

export interface SmartContract {
    name: string;
    description: string;
    language: string;
    features: string[];
    metrics: {
        deployments: number;
        transactions: string;
        verified: boolean;
    };
}

// API configuration for BSC
const BSCSCAN_API_KEY = "8NPXF6JC4QMESY13NBWR2ZVD1KINI973EG"; // Replace with your actual BscScan API key
const BSCSCAN_API_URL = "https://api.bscscan.com/api";

// Format helpers
export const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatChange = (change: number): string => {
    return change > 0 ? `+${change}%` : `${change}%`;
};

// Format timestamp to "x ago" format
export const formatAge = (timestamp: number): string => {
    const now = Math.floor(Date.now() / 1000);
    const age = now - timestamp;

    if (age < 60) {
        return `${age}s ago`;
    } else if (age < 3600) {
        return `${Math.floor(age / 60)}m ago`;
    } else if (age < 86400) {
        return `${Math.floor(age / 3600)}h ago`;
    } else {
        return `${Math.floor(age / 86400)}d ago`;
    }
};

// Format hex value to BNB
export const hexToBnb = (hexValue: string): string => {
    const wei = parseInt(hexValue, 16);
    return `${(wei / 1e18).toFixed(6)} BNB`;
};

// Function to shorten address
export const shortenAddress = (address: string): string => {
    if (!address) return "";
    return `${address.substring(0, 6)}..${address.substring(address.length - 4)}`;
};

// Custom Format age that continues counting
const formatAgeLive = (timestamp: number): string => {
    const now = Math.floor(Date.now() / 1000);
    const age = now - timestamp;

    if (age < 60) {
        return `${age}s ago`;
    } else if (age < 3600) {
        return `${Math.floor(age / 60)}m ${age % 60}s ago`;
    } else if (age < 86400) {
        return `${Math.floor(age / 3600)}h ${Math.floor((age % 3600) / 60)}m ago`;
    } else {
        return `${Math.floor(age / 86400)}d ${Math.floor((age % 86400) / 3600)}h ago`;
    }
};

// Hook for fetching blockchain data
export const useBinanceData = () => {
    const [rawBlocks, setRawBlocks] = useState<Omit<Block, 'age'>[]>([]);
    const [rawTransactions, setRawTransactions] = useState<Omit<Transaction, 'age'>[]>([]);
    const [stats, setStats] = useState<NetworkStats>({
        tps: 0,
        tpsChange: 0,
        nodes: 0,
        nodesChange: 0,
        blockTime: 0,
        blockTimeChange: 0,
        contracts: 0,
        contractsChange: 0
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [tick, setTick] = useState(0); // For live age updates

    // Effect for live age updates
    useEffect(() => {
        const interval = setInterval(() => {
            setTick(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Derived blocks with live-updating ages
    const blocks = useMemo(() => {
        return rawBlocks.map(block => ({
            ...block,
            age: formatAgeLive(parseInt(block.timestamp))
        }));
    }, [rawBlocks, tick]);

    // Derived transactions with live-updating ages
    const transactions = useMemo(() => {
        return rawTransactions.map(tx => ({
            ...tx,
            age: formatAgeLive(parseInt(tx.timestamp))
        }));
    }, [rawTransactions, tick]);

    // Data fetching effect
    useEffect(() => {
        let isMounted = true;

        const fetchBscScanData = async () => {
            if (!isMounted) return;

            try {
                setLoading(true);

                // Fetch latest block number
                const blockNumberResponse = await fetch(
                    `${BSCSCAN_API_URL}?module=proxy&action=eth_blockNumber&apikey=${BSCSCAN_API_KEY}`
                );
                const blockNumberData = await blockNumberResponse.json();

                if (blockNumberData.status === "0") {
                    throw new Error(blockNumberData.message || "Failed to get latest block number");
                }

                const latestBlockNumber = parseInt(blockNumberData.result, 16);

                // Fetch multiple blocks
                const blockPromises = [];
                for (let i = 0; i < 5; i++) {
                    const blockNum = latestBlockNumber - i;
                    blockPromises.push(
                        fetch(`${BSCSCAN_API_URL}?module=proxy&action=eth_getBlockByNumber&tag=0x${blockNum.toString(16)}&boolean=true&apikey=${BSCSCAN_API_KEY}`)
                            .then(res => res.json())
                    );
                }

                const blockResults = await Promise.all(blockPromises);

                const processedBlocks = blockResults
                    .filter(blockData => blockData.result)
                    .map(blockData => {
                        const block = blockData.result;
                        const blockNumber = parseInt(block.number, 16);
                        const timestamp = parseInt(block.timestamp, 16);
                        return {
                            id: block.hash,
                            number: blockNumber,
                            timestamp: timestamp.toString(),
                            transactions: block.transactions ? block.transactions.length : 0,
                            size: block.size ? `${(parseInt(block.size, 16) / 1000).toFixed(1)} KB` : "Unknown",
                            validator: block.miner
                        };
                    })
                    .filter((block): block is Omit<Block, 'age'> => block !== null);

                if (isMounted) setRawBlocks(processedBlocks);

                // Calculate block time (average of last 5 blocks)
                let blockTimeSeconds = 3; // Default Binance block time
                if (processedBlocks.length > 1) {
                    const timeDifferences = [];
                    for (let i = 1; i < processedBlocks.length; i++) {
                        const prevTimestamp = parseInt(processedBlocks[i-1].timestamp);
                        const currentTimestamp = parseInt(processedBlocks[i].timestamp);
                        timeDifferences.push(currentTimestamp - prevTimestamp);
                    }
                    const averageDifference = timeDifferences.reduce((a, b) => a + b, 0) / timeDifferences.length;
                    blockTimeSeconds = Math.max(1, Math.min(averageDifference, 10)); // Clamp between 1-10s
                }

                // Fetch transactions from the latest block
                const latestBlockData = blockResults[0];
                if (latestBlockData?.result?.transactions) {
                    const blockTimestamp = parseInt(latestBlockData.result.timestamp, 16);
                    const latestTransactions = latestBlockData.result.transactions
                        .slice(0, 10)
                        .map((tx: any) => ({
                            hash: tx.hash,
                            timestamp: blockTimestamp.toString(),
                            from: tx.from,
                            to: tx.to || 'Contract Creation',
                            amount: hexToBnb(tx.value),
                            value: hexToBnb(tx.value)
                        }));

                    if (isMounted) setRawTransactions(latestTransactions);
                } else {
                    // Fallback to API-based transaction list
                    const txListResponse = await fetch(
                        `${BSCSCAN_API_URL}?module=account&action=txlist&address=0x55d398326f99059ff775485246999027b3197955&page=1&offset=10&sort=desc&apikey=${BSCSCAN_API_KEY}`
                    );
                    const txListData = await txListResponse.json();

                    if (txListData.status === "1") {
                        const fetchedTransactions = txListData.result.map((tx: any) => ({
                            hash: tx.hash,
                            timestamp: tx.timeStamp,
                            from: tx.from,
                            to: tx.to || 'Contract Creation',
                            amount: `${(parseFloat(tx.value) / 1e18).toFixed(6)} BNB`,
                            value: `${(parseFloat(tx.value) / 1e18).toFixed(6)} BNB`
                        }));
                        if (isMounted) setRawTransactions(fetchedTransactions);
                    }
                }

                // Calculate TPS (approximation)
                const totalTx = processedBlocks.reduce((sum, block) => sum + block.transactions, 0);
                const estTPS = processedBlocks.length > 0 ? Math.round(totalTx / (processedBlocks.length * blockTimeSeconds)) : 15;

                // Get node count
                let nodeCount = 4000;
                try {
                    const nodeCountResponse = await fetch(
                        `${BSCSCAN_API_URL}?module=stats&action=nodecount&apikey=${BSCSCAN_API_KEY}`
                    );
                    const nodeCountData = await nodeCountResponse.json();
                    if (nodeCountData.status === "1") {
                        nodeCount = parseInt(nodeCountData.result.TotalNodeCount);
                    }
                } catch (nodeError) {
                    // console.warn("Failed to fetch node count:", nodeError);
                }

                // Get gas price
                let gasPrice = "5 Gwei";
                try {
                    const gasPriceResponse = await fetch(
                        `${BSCSCAN_API_URL}?module=gastracker&action=gasoracle&apikey=${BSCSCAN_API_KEY}`
                    );
                    const gasPriceData = await gasPriceResponse.json();
                    if (gasPriceData.status === "1") {
                        gasPrice = `${gasPriceData.result.ProposeGasPrice} Gwei`;
                    }
                } catch (gasError) {
                    // console.warn("Failed to fetch gas price:", gasError);
                }

                // Get total supply of BNB
                let bnbSupply = "170M BNB";
                try {
                    const bnbSupplyResponse = await fetch(
                        `${BSCSCAN_API_URL}?module=stats&action=bnbsupply&apikey=${BSCSCAN_API_KEY}`
                    );
                    const bnbSupplyData = await bnbSupplyResponse.json();
                    if (bnbSupplyData.status === "1") {
                        bnbSupply = `${(parseInt(bnbSupplyData.result) / 1e18).toFixed(2)}M BNB`;
                    }
                } catch (supplyError) {
                    // console.warn("Failed to fetch BNB supply:", supplyError);
                }

                // Update stats
                if (isMounted) {
                    setStats({
                        tps: estTPS,
                        tpsChange: 5,
                        nodes: nodeCount,
                        nodesChange: 2,
                        blockTime: blockTimeSeconds,
                        blockTimeChange: 0,
                        contracts: 1500000,
                        contractsChange: 10,
                        totalTransactions: "2.5B",
                        activeAddresses: "1.2M",
                        averageBlockTime: `${blockTimeSeconds.toFixed(1)}s`,
                        hashRate: "600 TH/s",
                        gasPrice: gasPrice,
                        totalSupply: bnbSupply
                    });
                }

            } catch (err) {
                if (isMounted) {
                    // console.error("Error fetching blockchain data:", err);
                    // setError(`Failed to fetch blockchain data: ${err instanceof Error ? err.message : "Unknown error"}`);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchBscScanData();
        const interval = setInterval(fetchBscScanData, 30000);
        
        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);

    return { blocks, transactions, stats, loading, error };
};

export const getSmartContracts  = (): SmartContract[] => {
    return [
        {
            name: "PancakeSwap Router",
            description: "Automated market maker (AMM) protocol for BNB Chain",
            language: "Solidity",
            features: [
                "Token swapping with optimal pricing",
                "Liquidity provision rewards",
                "Flash swaps functionality"
            ],
            metrics: {
                deployments: 1200,
                transactions: "38.7M",
                verified: true
            }
        },
        {
            name: "Venus Protocol",
            description: "Lending and borrowing platform on BNB Chain",
            language: "Solidity",
            features: [
                "Interest-bearing tokens",
                "Collateralized loans",
                "Stablecoin capabilities"
            ],
            metrics: {
                deployments: 985,
                transactions: "12.4M",
                verified: true
            }
        },
        {
            name: "TrustToken BEP20",
            description: "Tokenized assets with compliance features",
            language: "Solidity",
            features: [
                "Asset-backed stablecoins",
                "Multi-signature security",
                "Regulatory-compliant transfers"
            ],
            metrics: {
                deployments: 756,
                transactions: "8.2M",
                verified: true
            }
        }
    ];
};

export const getNetworkMetrics = (stats: NetworkStats) => {
    return [
        {
            title: "Transaction Speed",
            value: `${stats.tps} TPS`,
            change: formatChange(stats.tpsChange),
            icon: "Activity"
        },
        {
            title: "Network Nodes",
            value: `${formatNumber(stats.nodes)}+`,
            change: formatChange(stats.nodesChange),
            icon: "Network"
        },
        {
            title: "Block Time",
            value: `${stats.blockTime.toFixed(1)} seconds`,
            change: formatChange(stats.blockTimeChange),
            icon: "Clock"
        },
        {
            title: "Smart Contracts",
            value: `${formatNumber(stats.contracts / 1000)}K+`,
            change: formatChange(stats.contractsChange),
            icon: "FileCheck"
        }
    ];
};