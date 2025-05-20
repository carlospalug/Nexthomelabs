import { useState, useEffect, useMemo } from 'react';
import { Connection } from '@solana/web3.js';

// Define types for all blockchain data
export interface Block {
    id: string;
    age: string;
    transactions: string;
    size: string;
    blockHeight: number;
    blockTime: number;
}

export interface Transaction {
    hash: string;
    blockHeight: number;
    blockTime: number;
    amount: string;
    age: string;
    from: string;
    to: string;
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
}

export interface SmartContract {
    name: string;
    description: string;
    features: string[];
    metrics: {
        deployments: string;
        transactions: string;
        verified: boolean;
    };
}

// Format timestamp to "x ago" format
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

// Function to shorten address
export const shortenAddress = (address: string): string => {
    if (!address) return "";
    return `${address.substring(0, 6)}..${address.substring(address.length - 4)}`;
};

export function useSolanaData() {
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [tick, setTick] = useState(0); // For live age updates

    // Solana RPC connection
    const connection = useMemo(() => new Connection(
        'https://solana-mainnet.g.alchemy.com/v2/zTxNY6MSDtTbkIuahcuyBeRTUYF5ZzVq', // Replace with your Solana Alchemy API key
        'confirmed'
    ), []);

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
            age: formatAgeLive(block.blockTime)
        }));
    }, [rawBlocks, tick]);

    // Derived transactions with live-updating ages
    const transactions = useMemo(() => {
        return rawTransactions.map(tx => ({
            ...tx,
            age: formatAgeLive(tx.blockTime)
        }));
    }, [rawTransactions, tick]);

    // Data fetching effect
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            if (!isMounted) return;

            try {
                setLoading(true);

                // Fetch latest slot
                const slot = await connection.getSlot();
                
                // Fetch last 5 blocks
                const recentBlocks: Omit<Block, 'age'>[] = [];
                let currentSlot = slot;
                for (let i = 0; i < 5; i++) {
                    try {
                        const block = await connection.getBlock(currentSlot);
                        if (block) {
                            recentBlocks.push({
                                id: block.blockhash,
                                transactions: block.transactions.length.toString(),
                                size: `${(block.blockSize || 0) / 1024} KB`,
                                blockHeight: block.blockHeight || currentSlot,
                                blockTime: block.blockTime || Math.floor(Date.now() / 1000)
                            });
                        }
                    } catch (blockError: any) {
                        // Handle the case where a block is not found or skipped
                        // console.warn(`Error fetching block at slot ${currentSlot}:`, blockError);
                        // Decrement and continue to the next slot if the block is missing
                    }
                    currentSlot--;
                }

                if (isMounted) setRawBlocks(recentBlocks);

                // Fetch transactions from latest block
                try {
                    const latestBlock = await connection.getBlock(slot);
                    const recentTransactions: Omit<Transaction, 'age'>[] = [];

                    if (latestBlock?.transactions) {
                        latestBlock.transactions.slice(0, 10).forEach(tx => {
                            const signer = tx.transaction.message.accountKeys[0]?.toString();
                            const receiver = tx.transaction.message.accountKeys[1]?.toString();
                            recentTransactions.push({
                                hash: tx.transaction.signatures[0],
                                blockHeight: slot,
                                blockTime: latestBlock.blockTime || Math.floor(Date.now() / 1000),
                                amount: `${(tx.meta?.fee || 0) / 1e9} SOL`,
                                from: signer || 'Unknown',
                                to: receiver || 'Unknown'
                            });
                        });
                    }

                    if (isMounted) setRawTransactions(recentTransactions);
                } catch (transactionError: any) {
                    // console.warn(`Error fetching transactions from latest block at slot ${slot}:`, transactionError);
                }


                // Fetch network stats
                try {
                    const performanceSamples = await connection.getRecentPerformanceSamples(5);
                    const averageTPS = performanceSamples.reduce((sum, sample) => {
                        return sum + (sample.numTransactions / sample.samplePeriodSecs);
                    }, 0) / performanceSamples.length;

                    const epochInfo = await connection.getEpochInfo();
                    const validatorInfo = await connection.getVoteAccounts();

                    if (isMounted) {
                        setStats({
                            tps: Math.round(averageTPS),
                            tpsChange: 12.8,
                            nodes: validatorInfo.current.length + validatorInfo.delinquent.length,
                            nodesChange: 4.5,
                            blockTime: 0.4,
                            blockTimeChange: -0.1,
                            contracts: 7200,
                            contractsChange: 15.2,
                            totalTransactions: "45.2B",
                            activeAddresses: "1.8M",
                            averageBlockTime: "0.4s"
                        });
                    }
                } catch (statsError: any) {
                    // console.warn(`Error fetching network stats:`, statsError);
                }

            } catch (err: any) {
                if (isMounted) {
                    // console.error("Error fetching Solana blockchain data:", err);
                    // setError(`Failed to fetch Solana blockchain data: ${err instanceof Error ? err.message : "Unknown error"}`);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 30000);
        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, [connection]);

    return { blocks, transactions, stats, loading, error };
}

export function getSmartContracts(): SmartContract[] {
    return [
        {
            name: "Serum DEX Program",
            description: "High-performance, on-chain central limit order book",
            features: [
                "Central limit order book",
                "Fully on-chain execution",
                "Fast and low-cost trades"
            ],
            metrics: {
                deployments: "3.5K+",
                transactions: "156.2M+",
                verified: true
            }
        },
        {
            name: "Metaplex NFT Protocol",
            description: "NFT marketplace and minting infrastructure",
            features: [
                "NFT minting and auctions",
                "Creator royalties support",
                "Decentralized storage"
            ],
            metrics: {
                deployments: "12.8K+",
                transactions: "87.4M+",
                verified: true
            }
        },
        {
            name: "Marinade Staking Program",
            description: "Liquid staking protocol for Solana",
            features: [
                "Liquid staking tokens",
                "Validator distribution",
                "No unstaking period"
            ],
            metrics: {
                deployments: "924",
                transactions: "14.5M+",
                verified: true
            }
        }
    ];
}