// src/services/blockchain-data.ts
import { useState, useEffect } from 'react';

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

// API configuration
const ETHERSCAN_API_KEY = "PZRXH4C9H7THHEQRCTJ4PACC2CUVSQNM9T";
const ETHERSCAN_API_URL = "https://api.etherscan.io/api";

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

// Format hex value to ETH
export const hexToEth = (hexValue: string): string => {
  const wei = parseInt(hexValue, 16);
  return `${(wei / 1e18).toFixed(6)} ETH`;
};

// Function to shorten address
export const shortenAddress = (address: string): string => {
  if (!address) return "";
  return `${address.substring(0, 6)}..${address.substring(address.length - 4)}`;
};


// Hook for fetching blockchain data
export const useBlockchainData = () => {
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [lastBlockTimestamp, setLastBlockTimestamp] = useState<number | null>(null);
  const [ageCounter, setAgeCounter] = useState<number>(0);

  useEffect(() => {
    // Update age counter every second
    const intervalId = setInterval(() => {
      setAgeCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []); // Run only once


  // Custom Format age that continues counting
  const formatAgeLive = (timestamp: number): string => {
    const now = Math.floor(Date.now() / 1000);
    const age = now - timestamp;

    if (age < 60) {
      return `${age}s ago`;
    } else if (age < 3600) {
      return `${Math.floor(age / 60)}m ${age % 60}s ago`; // Include seconds
    } else if (age < 86400) {
      return `${Math.floor(age / 3600)}h ${Math.floor((age % 3600) / 60)}m ago`;
    } else {
      return `${Math.floor(age / 86400)}d ${Math.floor((age % 86400) / 3600)}h ago`;
    }
  };


  useEffect(() => {
    const fetchEtherscanData = async () => {
      try {
        setLoading(true);

        // Fetch latest block number
        const blockNumberResponse = await fetch(
          `${ETHERSCAN_API_URL}?module=proxy&action=eth_blockNumber&apikey=${ETHERSCAN_API_KEY}`
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
            fetch(`${ETHERSCAN_API_URL}?module=proxy&action=eth_getBlockByNumber&tag=0x${blockNum.toString(16)}&boolean=true&apikey=${ETHERSCAN_API_KEY}`)
              .then(res => res.json())
          );
        }

        const blockResults = await Promise.all(blockPromises);

        const processedBlocks = blockResults
          .filter(blockData => blockData.result) // Filter out any null results
          .map(blockData => {
            const block = blockData.result;

            if (!block) {
              return null;
            }

            const blockNumber = parseInt(block.number, 16);
            const timestamp = parseInt(block.timestamp, 16);
            const age = formatAgeLive(timestamp); // Use formatAgeLive
            return {
              id: block.hash,
              number: blockNumber,
              age: age,
              timestamp: age, // Using age string instead of attempting Date conversion
              transactions: block.transactions ? block.transactions.length : 0,
              size: block.size ? `${(parseInt(block.size, 16) / 1000).toFixed(1)} KB` : "Unknown",
              validator: block.miner
            };
          })
          .filter((block): block is Block => block !== null); // Type guard to filter out null values


        setBlocks(processedBlocks);
        if (processedBlocks.length > 0) {
          // Use timestamp of the first block in the processedBlocks array
          const firstBlockTimestamp = parseInt(processedBlocks[0].timestamp, 10);
          setLastBlockTimestamp(firstBlockTimestamp);
        }
        // Extract blockTime from processed blocks
        let blockTimeSeconds = 13; // Default Ethereum block time
        if (processedBlocks.length > 1) {
          // Since we're now using the age string format instead of timestamps,
          // we'll use the default block time for simplicity
          blockTimeSeconds = 13;
        }

        // Fetch the latest transactions from the latest block
        const latestBlockData = blockResults[0];
        if (latestBlockData?.result?.transactions && Array.isArray(latestBlockData.result.transactions)) {
          const blockTimestamp = parseInt(latestBlockData.result.timestamp, 16);
          const latestTransactions = latestBlockData.result.transactions
            .slice(0, 10) // Get top 10 transactions
            .map(tx => {
              return {
                hash: tx.hash,
                age: formatAgeLive(blockTimestamp),  // Use formatAgeLive
                timestamp: formatAgeLive(blockTimestamp), // Using age string instead of Date
                from: shortenAddress(tx.from), //Shorten Address
                to: shortenAddress(tx.to) || 'Contract Creation', //Shorten Address
                amount: hexToEth(tx.value),
                value: hexToEth(tx.value)
              };
            });

          setTransactions(latestTransactions);
        } else {
          // Alternate method: Get latest transactions using separate API call
          try {
            const txListResponse = await fetch(
              `${ETHERSCAN_API_URL}?module=account&action=txlist&address=0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f&page=1&offset=10&sort=desc&apikey=${ETHERSCAN_API_KEY}`
            );
            const txListData = await txListResponse.json();

            if (txListData.status === "1" && Array.isArray(txListData.result)) {
              const fetchedTransactions = txListData.result.map((tx: any) => {
                return {
                  hash: tx.hash,
                  age: formatAgeLive(parseInt(tx.timeStamp)),  // Use formatAgeLive
                  timestamp: formatAgeLive(parseInt(tx.timeStamp)),
                  from: shortenAddress(tx.from), //Shorten Address
                  to: shortenAddress(tx.to) || 'Contract Creation', //Shorten Address
                  amount: `${(parseFloat(tx.value) / 1e18).toFixed(6)} ETH`,
                  value: `${(parseFloat(tx.value) / 1e18).toFixed(6)} ETH`
                };
              });

              setTransactions(fetchedTransactions);
            }
          } catch (txError) {
            // console.warn("Error fetching transaction list, using fallback data:", txError);
            // Fallback to static transaction data if both methods fail
            const fallbackTransactions = [
              { hash: '0x123...abc', age: '< 1min ago', timestamp: '< 1min ago', from: '0xabc...123', to: '0xdef...456', amount: '1.5 ETH', value: '1.5 ETH' },
              { hash: '0x456...def', age: '2min ago', timestamp: '2min ago', from: '0xfed...789', to: '0x321...cba', amount: '0.8 ETH', value: '0.8 ETH' },
              { hash: '0x789...ghi', age: '3min ago', timestamp: '3min ago', from: '0x654...321', to: '0x987...fed', amount: '2.3 ETH', value: '2.3 ETH' }
            ];
            setTransactions(fallbackTransactions);
          }
        }

        // Calculate TPS (approximation)
        const totalTx = processedBlocks.reduce((sum, block) => sum + block.transactions, 0);
        const estTPS = processedBlocks.length > 0 ? Math.round(totalTx / (processedBlocks.length * blockTimeSeconds)) : 15;

        // Get node count via separate API call
        let nodeCount = 6000; // Default node count
        try {
          const nodeCountResponse = await fetch(
            `${ETHERSCAN_API_URL}?module=stats&action=nodecount&apikey=${ETHERSCAN_API_KEY}`
          );
          const nodeCountData = await nodeCountResponse.json();
          if (nodeCountData.status === "1") {
            nodeCount = parseInt(nodeCountData.result.TotalNodeCount);
          }
        } catch (nodeError) {
          // console.warn("Failed to fetch node count:", nodeError);
          // Keep using default value
        }

        // Get gas price info
        let gasPrice = "15 Gwei"; // Default gas price
        try {
          const gasPriceResponse = await fetch(
            `${ETHERSCAN_API_URL}?module=gastracker&action=gasoracle&apikey=${ETHERSCAN_API_KEY}`
          );
          const gasPriceData = await gasPriceResponse.json();
          if (gasPriceData.status === "1") {
            gasPrice = `${gasPriceData.result.ProposeGasPrice} Gwei`;
          }
        } catch (gasError) {
          // console.warn("Failed to fetch gas price:", gasError);
          // Keep using default value
        }

        // Get total supply of Ether
        let ethSupply = "118M ETH"; // Default ETH supply
        try {
          const ethSupplyResponse = await fetch(
            `${ETHERSCAN_API_URL}?module=stats&action=ethsupply&apikey=${ETHERSCAN_API_KEY}`
          );
          const ethSupplyData = await ethSupplyResponse.json();
          if (ethSupplyData.status === "1") {
            ethSupply = `${(parseInt(ethSupplyData.result) / 1e24).toFixed(2)}M ETH`;
          }
        } catch (supplyError) {
          // console.warn("Failed to fetch ETH supply:", supplyError);
          // Keep using default value
        }

        // For contracts, use static approximation
        const contractCount = 1000000; // Placeholder for total contracts

        const updatedStats = {
          tps: estTPS,
          tpsChange: 5, // Placeholder
          nodes: nodeCount,
          nodesChange: 2, // Placeholder
          blockTime: blockTimeSeconds,
          blockTimeChange: 0, // Ethereum's block time is relatively stable
          contracts: contractCount,
          contractsChange: 10, // Placeholder
          totalTransactions: "1.2B", // Additional stats
          activeAddresses: "850K",
          averageBlockTime: `${blockTimeSeconds.toFixed(1)}s`,
          hashRate: "980 TH/s",
          gasPrice: gasPrice,
          totalSupply: ethSupply
        };

        setStats(updatedStats);

      } catch (err) {
        // console.error("Error fetching blockchain data:", err);
        // setError(`Failed to fetch blockchain data: ${err instanceof Error ? err.message : "Unknown error"}`);
      } finally {
        setLoading(false);
      }
    };

    fetchEtherscanData();

    // Set up polling to refresh data every 30 seconds
    const interval = setInterval(fetchEtherscanData, 30000);

    return () => clearInterval(interval);
  }, []);

  return { blocks, transactions, stats, loading, error };
};

// Additional API functions for direct access to specific Etherscan endpoints
export const getTokenInfo = async (tokenAddress: string) => {
  try {
    const response = await fetch(
      `${ETHERSCAN_API_URL}?module=token&action=tokeninfo&contractaddress=${tokenAddress}&apikey=${ETHERSCAN_API_KEY}`
    );
    const data = await response.json();

    if (data.status === "1") {
      return data.result;
    }

    // throw new Error(data.message || "Failed to fetch token info");
  } catch (err) {
    // console.error("Error fetching token info:", err);
    throw err;
  }
};

export const getAccountTransactions = async (address: string, page = 1, offset = 10) => {
  try {
    const response = await fetch(
      `${ETHERSCAN_API_URL}?module=account&action=txlist&address=${address}&page=${page}&offset=${offset}&sort=desc&apikey=${ETHERSCAN_API_KEY}`
    );
    const data = await response.json();

    if (data.status === "1") {
      return data.result.map((tx: any) => ({
        hash: tx.hash,
        age: formatAgeLive(parseInt(tx.timeStamp)),  // Use formatAgeLive
        timestamp: formatAgeLive(parseInt(tx.timeStamp)),
        from: shortenAddress(tx.from),  //Shorten Address
        to: shortenAddress(tx.to) || 'Contract Creation',  //Shorten Address
        amount: `${(parseFloat(tx.value) / 1e18).toFixed(6)} ETH`,
        value: `${(parseFloat(tx.value) / 1e18).toFixed(6)} ETH`,
        gasPrice: `${(parseFloat(tx.gasPrice) / 1e9).toFixed(2)} Gwei`,
        gasUsed: tx.gasUsed,
        txFee: `${((parseFloat(tx.gasPrice) * parseFloat(tx.gasUsed)) / 1e18).toFixed(6)} ETH`,
        isError: tx.isError === "1",
        functionName: tx.functionName || "Transfer",
        blockNumber: parseInt(tx.blockNumber)
      }));
    }

    throw new Error(data.message || "Failed to fetch account transactions");
  } catch (err) {
    // console.error("Error fetching account transactions:", err);
    throw err;
  }
};

export const getTokenTransfers = async (address: string, page = 1, offset = 10) => {
  try {
    const response = await fetch(
      `${ETHERSCAN_API_URL}?module=account&action=tokentx&address=${address}&page=${page}&offset=${offset}&sort=desc&apikey=${ETHERSCAN_API_KEY}`
    );
    const data = await response.json();

    if (data.status === "1") {
      return data.result.map((tx: any) => ({
        hash: tx.hash,
        age: formatAgeLive(parseInt(tx.timeStamp)),  // Use formatAgeLive
        timestamp: formatAgeLive(parseInt(tx.timeStamp)),
        from: shortenAddress(tx.from),  //Shorten Address
        to: shortenAddress(tx.to),  //Shorten Address
        tokenName: tx.tokenName,
        tokenSymbol: tx.tokenSymbol,
        tokenDecimal: parseInt(tx.tokenDecimal),
        amount: `${(parseFloat(tx.value) / Math.pow(10, parseInt(tx.tokenDecimal))).toFixed(6)} ${tx.tokenSymbol}`,
        contractAddress: tx.contractAddress
      }));
    }

    // throw new Error(data.message || "Failed to fetch token transfers");
  } catch (err) {
    // console.error("Error fetching token transfers:", err);
    throw err;
  }
};

export const getContractABI = async (contractAddress: string) => {
  try {
    const response = await fetch(
      `${ETHERSCAN_API_URL}?module=contract&action=getabi&address=${contractAddress}&apikey=${ETHERSCAN_API_KEY}`
    );
    const data = await response.json();

    if (data.status === "1") {
      return JSON.parse(data.result);
    }

    throw new Error(data.message || "Failed to fetch contract ABI");
  } catch (err) {
    // console.error("Error fetching contract ABI:", err);
    throw err;
  }
};

export const getGasPrice = async () => {
  try {
    const response = await fetch(
      `${ETHERSCAN_API_URL}?module=gastracker&action=gasoracle&apikey=${ETHERSCAN_API_KEY}`
    );
    const data = await response.json();

    if (data.status === "1") {
      return {
        safeLow: `${data.result.SafeGasPrice} Gwei`,
        standard: `${data.result.ProposeGasPrice} Gwei`,
        fast: `${data.result.FastGasPrice} Gwei`
      };
    }

    // throw new Error(data.message || "Failed to fetch gas prices");
  } catch (err) {
    // console.error("Error fetching gas prices:", err);
    throw err;
  }
};

// Smart contracts data
export const getSmartContracts = (): SmartContract[] => {
  return [
    {
      name: "Token Contract",
      description: "ERC-20 token implementation with advanced features",
      language: "Solidity",
      features: [
        "Token minting/burning",
        "Transfer restrictions",
        "Ownership management"
      ],
      metrics: {
        deployments: 150,
        transactions: "25K",
        verified: true
      }
    },
    {
      name: "NFT Marketplace",
      description: "Decentralized NFT trading platform",
      language: "Solidity",
      features: [
        "Listing management",
        "Bidding system",
        "Royalty distribution"
      ],
      metrics: {
        deployments: 85,
        transactions: "15K",
        verified: true
      }
    },
    {
      name: "DeFi Protocol",
      description: "Decentralized finance lending protocol",
      language: "Solidity",
      features: [
        "Lending pools",
        "Interest calculation",
        "Collateral management"
      ],
      metrics: {
        deployments: 120,
        transactions: "40K",
        verified: true
      }
    }
  ];
};

// Network metrics for the UI
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
