import { useState, useEffect, useMemo } from 'react';
import { Alchemy, Network, CoreNamespace } from 'alchemy-sdk'; // Import Alchemy SDK

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
    from: string; // Added from field
    to: string;   // Added to field
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

export function useWorldChainData() {
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

    const alchemySettings = useMemo(() => ({
        apiKey: "zTxNY6MSDtTbkIuahcuyBeRTUYF5ZzVq",
        // Remove network setting, rely on the URL
        baseUrl: "https://worldchain-mainnet.g.alchemy.com/v2",
    }), []);

    const alchemy = useMemo(() => new Alchemy(alchemySettings), [alchemySettings]);

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

                // Fetch latest block with transactions
                const latestBlock = await alchemy.core.getBlockWithTransactions('latest');

                const recentBlocks: Omit<Block, 'age'>[] = [];
                if (latestBlock) {
                    for (let i = 0; i < 5; i++) {
                        try {
                            const block = await alchemy.core.getBlock(latestBlock.number - i);

                            if (block) {
                                recentBlocks.push({
                                    id: block.hash,
                                    transactions: block.transactions.length.toString(),
                                    size: `${(block.size || 0) / 1024} KB`,
                                    blockHeight: block.number,
                                    blockTime: block.timestamp
                                });
                            }
                        } catch (blockError: any) {
                            console.warn(`Error fetching block ${latestBlock.number - i}:`, blockError);
                        }
                    }
                }

                if (isMounted) setRawBlocks(recentBlocks);

                // Fetch transactions from the latest block
                const recentTransactions: Omit<Transaction, 'age'>[] = [];
                if (latestBlock?.transactions) {
                    for (const tx of latestBlock.transactions.slice(0, 10)) {
                        try {
                            const transactionDetails = await alchemy.core.getTransaction(tx.hash);

                            if (transactionDetails) {
                                recentTransactions.push({
                                    hash: tx.hash,
                                    blockHeight: latestBlock.number,
                                    blockTime: latestBlock.timestamp,
                                    amount: `${(parseInt(tx.value.toString()) / 1e18)} ETH`, // Convert Wei to Ether,
                                    from: transactionDetails.from || 'Unknown',
                                    to: transactionDetails.to || 'Unknown'
                                });
                            }
                        } catch (txError: any) {
                            console.warn(`Error fetching transaction ${tx.hash}:`, txError);
                        }
                    }
                }

                if (isMounted) setRawTransactions(recentTransactions);

                // Fetch network stats - Placeholder, replace with actual data
                const networkStats: NetworkStats = {
                    tps: 50, // Placeholder
                    tpsChange: 2.5, // Placeholder
                    nodes: 1500, // Placeholder
                    nodesChange: 1.2, // Placeholder
                    blockTime: 12, // Placeholder
                    blockTimeChange: 0.1, // Placeholder
                    contracts: 5000, // Placeholder
                    contractsChange: 5.0, // Placeholder
                    totalTransactions: "45.2B", //Placeholder
                    activeAddresses: "1.8M",    //Placeholder
                    averageBlockTime: "0.4s"     //Placeholder
                };

                if (isMounted) {
                    setStats(networkStats);
                }

            } catch (err: any) {
                if (isMounted) {
                    console.error("Error fetching World Chain blockchain data:", err);
                    setError(`Failed to fetch World Chain blockchain data: ${err instanceof Error ? err.message : "Unknown error"}`);
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
    }, [alchemy]);

    return { blocks, transactions, stats, loading, error };
}

export function getSmartContracts(): SmartContract[] {
    return [
        {
            name: "WorldChain Token",
            description: "Native token of the WorldChain ecosystem",
            features: [
                "Governance",
                "Staking rewards",
                "Fee payment"
            ],
            metrics: {
                deployments: "1",
                transactions: "10M+",
                verified: true
            }
        },
        {
            name: "DeFi Protocol X",
            description: "Decentralized finance protocol on WorldChain",
            features: [
                "Lending",
                "Borrowing",
                "Yield farming"
            ],
            metrics: {
                deployments: "50+",
                transactions: "5M+",
                verified: false
            }
        },
        {
            name: "NFT Marketplace Y",
            description: "NFT marketplace for WorldChain assets",
            features: [
                "NFT minting",
                "NFT trading",
                "Creator royalties"
            ],
            metrics: {
                deployments: "100+",
                transactions: "2M+",
                verified: false
            }
        }
    ];
}