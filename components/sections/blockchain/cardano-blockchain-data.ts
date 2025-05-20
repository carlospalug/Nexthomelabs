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



// CardanoScan API Key (Replace with your actual API Key)
const CARDANOSCAN_API_KEY = 'd2fdc55e-c294-46bb-8f27-57ef1c15525a';

export function useCardanoData() {
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

                // *** Replace these with actual CardanoScan API calls ***

                // Fetch Latest Blocks (Example - inspect CardanoScan network requests)
                const blocksResponse = await fetch(`https://cardanoscan.io/latest_blocks_api_endpoint?apiKey=${CARDANOSCAN_API_KEY}`); // Replace with actual API endpoint
                const blocksData = await blocksResponse.json();  // Adjust parsing based on actual response format


                if (blocksData && Array.isArray(blocksData.blocks)) {
                    const processedBlocks: Block[] = blocksData.blocks.map((block: any) => {

                        return {
                            id: block.hash,
                            age: formatAge(block.timestamp), // Adjust property names based on response
                            transactions: block.tx_count.toString(),
                            size: (block.size / 1024).toFixed(2) + ' KB',  // Adjust property names based on response
                            block_height: block.block_height,
                            block_time: block.block_time
                        };
                    }).slice(0, 5);
                    setBlocks(processedBlocks);
                } else {
                    console.warn("Failed to fetch or process block data from CardanoScan");
                }

                // Fetch Latest Transactions (Example - inspect CardanoScan network requests)
                const transactionsResponse = await fetch(`https://cardanoscan.io/latest_transactions_api_endpoint?apiKey=${CARDANOSCAN_API_KEY}`); // Replace with actual API endpoint
                const transactionsData = await transactionsResponse.json(); // Adjust parsing based on actual response format

                if (transactionsData && Array.isArray(transactionsData.transactions)) {
                    const processedTransactions: Transaction[] = transactionsData.transactions.map((transaction: any) => {

                        return {
                            hash: transaction.hash,
                            block_height: transaction.block_height,
                            block_time: transaction.block_time,
                            amount: transaction.amount, // Adjust property names based on response
                            age: formatAge(transaction.timestamp),  // Adjust property names based on response
                        };
                    }).slice(0, 10);;

                    setTransactions(processedTransactions);
                } else {
                    console.warn("Failed to fetch or process transaction data from CardanoScan");
                }



                // Fetch Network Stats (Very likely you won't find all these directly)
                // This is HIGHLY simplified and relies on the CardanoScan website data
                // You will have to adapt this section significantly
                const cardanoStats: NetworkStats = {
                    tps: 1,
                    tpsChange: 0,
                    nodes: 3000, // Placeholder
                    nodesChange: 0,
                    blockTime: 20, // Average block time
                    blockTimeChange: 0,
                    contracts: 500, // Placeholder
                    contractsChange: 0,
                };

                setStats(cardanoStats);


            } catch (err) {
                console.error("Error fetching Cardano blockchain data:", err);
                setError(`Failed to fetch Cardano blockchain data: ${err instanceof Error ? err.message : "Unknown error"}`);
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