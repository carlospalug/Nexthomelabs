import { useState, useEffect } from 'react';

// Define types for all blockchain data
export interface Block {
    id: string;
    age: string;
    transactions: string;
    size: string;
    block_height: number;
    block_time: number;

}

export interface Transaction {
    hash: string;
    block_height: number;
    block_time: number;
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

// Mock data for fallback when API fails
const mockBlocks: Block[] = [
    {
        id: "9b1dd12f5f5a9cef19c84e8feba0c2d9a8ebb7d5c18ec4799c55e1b2fc09caef",
        age: "45s ago",
        transactions: "28",
        size: "245.15 KB",
        block_height: 8921674,
        block_time: Math.floor(Date.now() / 1000) - 45
    },
    {
        id: "8a2cc12e6f5a9cef19c84e8feba0c2d9a8ebb7d5c18ec4799c55e1b2fc09caef",
        age: "1m ago",
        transactions: "12",
        size: "123.45 KB",
        block_height: 8921673,
        block_time: Math.floor(Date.now() / 1000) - 60
    },
    {
        id: "7b3dd12f5f5a9cef19c84e8feba0c2d9a8ebb7d5c18ec4799c55e1b2fc09caef",
        age: "2m ago",
        transactions: "35",
        size: "198.72 KB",
        block_height: 8921672,
        block_time: Math.floor(Date.now() / 1000) - 120
    },
    {
        id: "6c4ed12f5f5a9cef19c84e8feba0c2d9a8ebb7d5c18ec4799c55e1b2fc09caef",
        age: "3m ago",
        transactions: "18",
        size: "156.23 KB",
        block_height: 8921671,
        block_time: Math.floor(Date.now() / 1000) - 180
    },
    {
        id: "5d5fd12f5f5a9cef19c84e8feba0c2d9a8ebb7d5c18ec4799c55e1b2fc09caef",
        age: "4m ago",
        transactions: "42",
        size: "278.91 KB",
        block_height: 8921670,
        block_time: Math.floor(Date.now() / 1000) - 240
    }
];

const mockTransactions: Transaction[] = [
    {
        hash: "abcd1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921674,
        block_time: Math.floor(Date.now() / 1000) - 45,
        amount: "152.75 ADA",
        age: "45s ago"
    },
    {
        hash: "bcde1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921674,
        block_time: Math.floor(Date.now() / 1000) - 50,
        amount: "28.45 ADA",
        age: "50s ago"
    },
    {
        hash: "cdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921673,
        block_time: Math.floor(Date.now() / 1000) - 60,
        amount: "540.12 ADA",
        age: "1m ago"
    },
    {
        hash: "def01234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921673,
        block_time: Math.floor(Date.now() / 1000) - 65,
        amount: "15.78 ADA",
        age: "1m ago"
    },
    {
        hash: "ef001234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921672,
        block_time: Math.floor(Date.now() / 1000) - 120,
        amount: "200.54 ADA",
        age: "2m ago"
    },
    {
        hash: "f0001234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921672,
        block_time: Math.floor(Date.now() / 1000) - 125,
        amount: "45.67 ADA",
        age: "2m ago"
    },
    {
        hash: "01001234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921671,
        block_time: Math.floor(Date.now() / 1000) - 180,
        amount: "120.89 ADA",
        age: "3m ago"
    },
    {
        hash: "12001234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921671,
        block_time: Math.floor(Date.now() / 1000) - 185,
        amount: "8.12 ADA",
        age: "3m ago"
    },
    {
        hash: "23001234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921670,
        block_time: Math.floor(Date.now() / 1000) - 240,
        amount: "375.22 ADA",
        age: "4m ago"
    },
    {
        hash: "34001234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        block_height: 8921670,
        block_time: Math.floor(Date.now() / 1000) - 245,
        amount: "64.35 ADA",
        age: "4m ago"
    }
];

const mockStats: NetworkStats = {
    tps: 1,
    tpsChange: 0,
    nodes: 3000,
    nodesChange: 0,
    blockTime: 20,
    blockTimeChange: 0,
    contracts: 500,
    contractsChange: 0,
};

export function useCardanoData() {
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
    const [useMockData, setUseMockData] = useState(true); // Default to using mock data since API endpoints are placeholders

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // If we're using mock data, just set it and return early
                if (useMockData) {
                    setBlocks(mockBlocks);
                    setTransactions(mockTransactions);
                    setStats(mockStats);
                    return;
                }

                // The following API calls are NOT active, this is retained for reference
                // when proper API endpoints become available
                
                /* 
                // CardanoScan API Key (Replace with your actual API Key)
                const CARDANOSCAN_API_KEY = 'd2fdc55e-c294-46bb-8f27-57ef1c15525a';

                try {
                    // Fetch Latest Blocks
                    const blocksResponse = await fetch(`https://cardanoscan.io/latest_blocks_api_endpoint?apiKey=${CARDANOSCAN_API_KEY}`);
                    
                    // Check content type to ensure we're getting JSON
                    const contentType = blocksResponse.headers.get('content-type');
                    if (!contentType || !contentType.includes('application/json')) {
                        console.error("Response is not JSON:", contentType);
                        throw new Error("API response is not JSON");
                    }
                    
                    const blocksData = await blocksResponse.json();

                    if (blocksData && Array.isArray(blocksData.blocks)) {
                        const processedBlocks: Block[] = blocksData.blocks.map((block: any) => {
                            return {
                                id: block.hash,
                                age: formatAge(block.timestamp),
                                transactions: block.tx_count.toString(),
                                size: (block.size / 1024).toFixed(2) + ' KB',
                                block_height: block.block_height,
                                block_time: block.block_time
                            };
                        }).slice(0, 5);
                        setBlocks(processedBlocks);
                    } else {
                        console.warn("Failed to fetch or process block data from CardanoScan");
                        throw new Error("Invalid block data format");
                    }

                    // Fetch Latest Transactions
                    const transactionsResponse = await fetch(`https://cardanoscan.io/latest_transactions_api_endpoint?apiKey=${CARDANOSCAN_API_KEY}`);
                    
                    // Check content type to ensure we're getting JSON
                    const txContentType = transactionsResponse.headers.get('content-type');
                    if (!txContentType || !txContentType.includes('application/json')) {
                        console.error("Transactions response is not JSON:", txContentType);
                        throw new Error("Transactions API response is not JSON");
                    }
                    
                    const transactionsData = await transactionsResponse.json();

                    if (transactionsData && Array.isArray(transactionsData.transactions)) {
                        const processedTransactions: Transaction[] = transactionsData.transactions.map((transaction: any) => {
                            return {
                                hash: transaction.hash,
                                block_height: transaction.block_height,
                                block_time: transaction.block_time,
                                amount: transaction.amount,
                                age: formatAge(transaction.timestamp),
                            };
                        }).slice(0, 10);
                        setTransactions(processedTransactions);
                    } else {
                        console.warn("Failed to fetch or process transaction data from CardanoScan");
                        throw new Error("Invalid transaction data format");
                    }
                } catch (apiError) {
                    console.error("API request failed, using mock data:", apiError);
                    throw apiError;
                }
                */

            } catch (err) {
                console.error("Error fetching Cardano blockchain data:", err);
                setError(`Failed to fetch Cardano blockchain data: ${err instanceof Error ? err.message : "Unknown error"}`);
                // Ensure we have data to display even if API fails
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
    }, [useMockData]);

    return { blocks, transactions, stats, loading, error };
}

export function getSmartContracts (): SmartContract[] {
    return [
        {
            name: "Plutus Governance",
            description: "DAO governance platform for Cardano-based organizations",
            features: [
                "On-chain voting",
                "Treasury management",
                "Proposal system"
            ],
            metrics: {
                deployments: "320+",
                transactions: "2.8M+"
            }
        },
        {
            name: "Marlowe Financial",
            description: "Financial smart contracts platform for Cardano",
            features: [
                "Financial instruments",
                "Trading contracts",
                "Domain-specific language"
            ],
            metrics: {
                deployments: "285",
                transactions: "1.9M+"
            }
        },
        {
            name: "Hydra Payment Channels",
            description: "Layer 2 scaling solution for Cardano",
            features: [
                "Fast finality",
                "Low transaction fees",
                "Isomorphic state channels"
            ],
            metrics: {
                deployments: "175",
                transactions: "3.6M+"
            }
        }
    ];
}