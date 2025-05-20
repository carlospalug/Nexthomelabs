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

export function usePolkadotData() {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [stats, setStats] = useState<NetworkStats>({ // Corrected line
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // *** Replace these with actual Subscan API calls ***

                // Fetch Latest Blocks (Example - Adapt based on Subscan Docs)
                const blocksResponse = await fetch('https://polkadot.api.subscan.io/api/v2/blocks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': SUBSCAN_API_KEY,
                    },
                    body: JSON.stringify({ row: 5, page: 0 }),  // Adjust parameters
                });

                const blocksData = await blocksResponse.json();

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
                }



                // Fetch Latest Transactions (Example - Adapt based on Subscan Docs)
                const transactionsResponse = await fetch('https://polkadot.api.subscan.io/api/v2/extrinsics', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': SUBSCAN_API_KEY,
                    },
                    body: JSON.stringify({ row: 10, page: 0 }), // Adjust parameters
                });
                const transactionsData = await transactionsResponse.json();

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
                }

                // Fetch Network Stats - Adapt based on Subscan and Polkadot data

                const polkadotStats: NetworkStats = {
                    tps: 1000, // Placeholder needs more accurate data
                    tpsChange: 7.2,
                    nodes: 297,  // Placeholder needs more accurate data
                    nodesChange: 1.8,
                    blockTime: 6,   // Placeholder needs more accurate data
                    blockTimeChange: 0,
                    contracts: 1250, // Placeholder needs more accurate data
                    contractsChange: 11.5
                };

                setStats(polkadotStats);

            } catch (err) {
                console.error("Error fetching Polkadot blockchain data:", err);
                setError(`Failed to fetch Polkadot blockchain data: ${err instanceof Error ? err.message : "Unknown error"}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Refresh data periodically
        const intervalId = setInterval(fetchData, 30000);
        return () => clearInterval(intervalId);
    }, []);

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