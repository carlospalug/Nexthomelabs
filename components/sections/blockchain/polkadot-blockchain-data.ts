import { useState, useEffect } from 'react';

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
}

export interface SmartContract {
    name: string;
    description: string;
    features: string[];
    metrics: {
        deployments: string;
        transactions: string;
    };
}


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

// Subscan API Key (Replace with your actual API Key)
const SUBSCAN_API_KEY = '44afcbf81a064e9bb89f2f08c5a923dd';

// Mock data for fallback when API fails
const mockBlocks: Block[] = [
    {
        id: "0x12345678",
        age: "2m ago",
        transactions: "120",
        size: "384 KB",
        blockHeight: 14253698,
        blockTime: Math.floor(Date.now() / 1000) - 120
    },
    {
        id: "0x23456789",
        age: "3m ago",
        transactions: "95",
        size: "256 KB",
        blockHeight: 14253697,
        blockTime: Math.floor(Date.now() / 1000) - 180
    },
    {
        id: "0x34567890",
        age: "4m ago",
        transactions: "150",
        size: "320 KB",
        blockHeight: 14253696,
        blockTime: Math.floor(Date.now() / 1000) - 240
    },
    {
        id: "0x45678901",
        age: "5m ago",
        transactions: "78",
        size: "192 KB",
        blockHeight: 14253695,
        blockTime: Math.floor(Date.now() / 1000) - 300
    },
    {
        id: "0x56789012",
        age: "6m ago",
        transactions: "105",
        size: "275 KB",
        blockHeight: 14253694,
        blockTime: Math.floor(Date.now() / 1000) - 360
    }
];

const mockTransactions: Transaction[] = [
    {
        hash: "0xabcdef1234567890",
        blockHeight: 14253698,
        blockTime: Math.floor(Date.now() / 1000) - 120,
        amount: "12.5 DOT",
        age: "2m ago"
    },
    {
        hash: "0xbcdef1234567890a",
        blockHeight: 14253698,
        blockTime: Math.floor(Date.now() / 1000) - 125,
        amount: "0.75 DOT",
        age: "2m ago"
    },
    {
        hash: "0xcdef1234567890ab",
        blockHeight: 14253697,
        blockTime: Math.floor(Date.now() / 1000) - 180,
        amount: "5.2 DOT",
        age: "3m ago"
    },
    {
        hash: "0xdef1234567890abc",
        blockHeight: 14253697,
        blockTime: Math.floor(Date.now() / 1000) - 185,
        amount: "8.1 DOT",
        age: "3m ago"
    },
    {
        hash: "0xef1234567890abcd",
        blockHeight: 14253696,
        blockTime: Math.floor(Date.now() / 1000) - 240,
        amount: "1.9 DOT",
        age: "4m ago"
    },
    {
        hash: "0xf1234567890abcde",
        blockHeight: 14253696,
        blockTime: Math.floor(Date.now() / 1000) - 245,
        amount: "3.4 DOT",
        age: "4m ago"
    },
    {
        hash: "0x1234567890abcdef",
        blockHeight: 14253695,
        blockTime: Math.floor(Date.now() / 1000) - 300,
        amount: "7.6 DOT",
        age: "5m ago"
    },
    {
        hash: "0x2345678901abcdef",
        blockHeight: 14253695,
        blockTime: Math.floor(Date.now() / 1000) - 305,
        amount: "0.45 DOT",
        age: "5m ago"
    },
    {
        hash: "0x3456789012abcdef",
        blockHeight: 14253694,
        blockTime: Math.floor(Date.now() / 1000) - 360,
        amount: "2.8 DOT",
        age: "6m ago"
    },
    {
        hash: "0x456789012abcdef3",
        blockHeight: 14253694,
        blockTime: Math.floor(Date.now() / 1000) - 365,
        amount: "9.3 DOT",
        age: "6m ago"
    }
];

const mockStats: NetworkStats = {
    tps: 1000,
    tpsChange: 7.2,
    nodes: 297,
    nodesChange: 1.8,
    blockTime: 6,
    blockTimeChange: 0,
    contracts: 1250,
    contractsChange: 11.5
};

export function usePolkadotData() {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
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
    const [useFallback, setUseFallback] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Check if we should use fallback data
                if (useFallback) {
                    setBlocks(mockBlocks);
                    setTransactions(mockTransactions);
                    setStats(mockStats);
                    return;
                }

                // Try to fetch from API
                try {
                    // Fetch Latest Blocks (Example - Adapt based on Subscan Docs)
                    const blocksResponse = await fetch('https://polkadot.api.subscan.io/api/v2/blocks', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': SUBSCAN_API_KEY,
                        },
                        body: JSON.stringify({ row: 5, page: 0 }),
                    });

                    // First try to get the raw text to see what's being returned
                    const rawBlocksData = await blocksResponse.text();
                    
                    // Try to parse as JSON
                    let blocksData;
                    try {
                        blocksData = JSON.parse(rawBlocksData);
                    } catch (parseError) {
                        console.error("Failed to parse blocks response as JSON:", rawBlocksData);
                        throw new Error(`Invalid JSON response from blocks endpoint: ${parseError}`);
                    }

                    if (blocksData.code === 0 && blocksData.message === 'Success') { // Check Success
                        const processedBlocks: Block[] = blocksData.data.list.map((block: any) => {
                            return {
                                id: block.header,
                                age: formatAge(block.block_timestamp),
                                transactions: block.extrinsics.toString(),
                                size: block.size.toString() + " KB",
                                blockHeight: block.block_num,
                                blockTime: block.block_timestamp
                            };
                        });
                        setBlocks(processedBlocks);
                    } else {
                        console.warn("Failed to fetch or process block data from Subscan", blocksData);
                        throw new Error(`API returned error: ${blocksData.message || "Unknown error"}`);
                    }

                    // Fetch Latest Transactions (Example - Adapt based on Subscan Docs)
                    const transactionsResponse = await fetch('https://polkadot.api.subscan.io/api/v2/extrinsics', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': SUBSCAN_API_KEY,
                        },
                        body: JSON.stringify({ row: 10, page: 0 }),
                    });
                    
                    // First try to get the raw text to see what's being returned
                    const rawTransactionsData = await transactionsResponse.text();
                    
                    // Try to parse as JSON
                    let transactionsData;
                    try {
                        transactionsData = JSON.parse(rawTransactionsData);
                    } catch (parseError) {
                        console.error("Failed to parse transactions response as JSON:", rawTransactionsData);
                        throw new Error(`Invalid JSON response from transactions endpoint: ${parseError}`);
                    }

                    if (transactionsData.code === 0 && transactionsData.message === 'Success') { // Check Success
                        const processedTransactions: Transaction[] = transactionsData.data.list.map((transaction: any) => {
                            return {
                                hash: transaction.hash,
                                blockHeight: transaction.block_num,
                                blockTime: transaction.block_timestamp,
                                amount: transaction.amount,
                                age: formatAge(transaction.block_timestamp),
                            };
                        });
                        setTransactions(processedTransactions);
                    } else {
                        console.warn("Failed to fetch or process transaction data from Subscan", transactionsData);
                        throw new Error(`API returned error: ${transactionsData.message || "Unknown error"}`);
                    }

                    // Set network stats
                    setStats(mockStats); // Using mock stats since we don't have a separate API for these

                } catch (apiError) {
                    console.error("API request failed, using fallback data:", apiError);
                    setUseFallback(true);
                    setBlocks(mockBlocks);
                    setTransactions(mockTransactions);
                    setStats(mockStats);
                }

            } catch (err) {
                console.error("Error fetching Polkadot blockchain data:", err);
                setError(`Failed to fetch Polkadot blockchain data: ${err instanceof Error ? err.message : "Unknown error"}`);
                // Ensure we still have data to display
                setBlocks(mockBlocks);
                setTransactions(mockTransactions);
                setStats(mockStats);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Refresh data periodically
        const intervalId = setInterval(fetchData, 30000);
        return () => clearInterval(intervalId);
    }, [useFallback]);

    return { blocks, transactions, stats, loading, error };
}

export function getSmartContracts (): SmartContract[] {
    return [
        {
            name: "RMRK NFT Framework",
            description: "Advanced NFT standard for the Polkadot ecosystem",
            features: [
                "Nested NFTs",
                "Multi-resource NFTs",
                "Conditional rendering"
            ],
            metrics: {
                deployments: "850+",
                transactions: "6.2M+"
            }
        },
        {
            name: "Acala EVM+",
            description: "Ethereum compatibility layer for Polkadot",
            features: [
                "EVM compatibility",
                "Unified fee payment",
                "On-chain scheduler"
            ],
            metrics: {
                deployments: "635",
                transactions: "4.8M+"
            }
        },
        {
            name: "Moonbeam XC-20",
            description: "Cross-chain token standard for Polkadot parachains",
            features: [
                "Cross-chain transfers",
                "ERC-20 compatibility",
                "Cross-consensus messaging"
            ],
            metrics: {
                deployments: "745",
                transactions: "5.5M+"
            }
        }
    ];
}