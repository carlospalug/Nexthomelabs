import React, { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Code2, Activity, Network, Clock, FileCheck, ArrowUpRight, Cuboid as Cube } from "lucide-react";
import Link from "next/link";
import { useBlockchainData, getSmartContracts, SmartContract } from './blockchain/eth-blockchain-data';
import { useBinanceData , getSmartContracts as getBinanceSmartContracts } from './blockchain/binance-blockchain-data';
import { useSolanaData, getSmartContracts as getSolanaSmartContracts } from './blockchain/solana-blockchain-data';
import { usePolkadotData, getSmartContracts as getPolkadotSmartContracts } from './blockchain/polkadot-blockchain-data';
import { useCardanoData, getSmartContracts as getCardanoSmartContracts } from './blockchain/cardano-blockchain-data';
import { useWorldChainData, getSmartContracts as getWorldChainSmartContracts } from "./blockchain/worldchain-blockchain";

// Define supported blockchain types
type BlockchainType = 'ethereum' | 'binance' | 'solana' | 'polkadot' | 'cardano' | 'worldchain';

// Utility function to shorten addresses
const shortenAddress = (address: string | undefined, startLength: number = 6, endLength: number = 4): string => {
    if (!address || address.length <= (startLength + endLength)) {
        return address || ""; // Return original if too short or undefined
    }
    return `${address.substring(0, startLength)}..${address.substring(address.length - endLength)}`;
};

export function BlockchainExplorerSection() {
  // State for active blockchain
  const [activeBlockchain, setActiveBlockchain] = useState<BlockchainType>('ethereum');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fetch blockchain data based on active chain
  const ethereumData = useBlockchainData();
  const binanceData = useBinanceData(); // Comment out
  const solanaData = useSolanaData();
  const polkadotData = usePolkadotData();
  const cardanoData = useCardanoData();
  const worldChainData = useWorldChainData();

  // State to hold the current blockchain data
  const [currentData, setCurrentData] = useState(() => {
    return {
      blocks: ethereumData.blocks,
      transactions: ethereumData.transactions,
      stats: ethereumData.stats,
      loading: ethereumData.loading,
      error: ethereumData.error,
      smartContracts: getSmartContracts()
    };
  });

  // Function to fetch blockchain data based on active chain
  const fetchBlockchainData = () => {
    switch (activeBlockchain) {
      case 'ethereum':
        setCurrentData({
          blocks: ethereumData.blocks,
          transactions: ethereumData.transactions,
          stats: ethereumData.stats,
          loading: ethereumData.loading,
          error: ethereumData.error,
          smartContracts: getSmartContracts()
        });
        break;
      case 'binance':
        setCurrentData({
          blocks: binanceData.blocks,
          transactions: binanceData.transactions,
          stats: binanceData.stats,
          loading: binanceData.loading,
          error: binanceData.error,
          smartContracts: getBinanceSmartContracts()
        });
        break;
      case 'solana':
        setCurrentData({
          blocks: solanaData.blocks,
          transactions: solanaData.transactions,
          stats: solanaData.stats,
          loading: solanaData.loading,
          error: solanaData.error,
          smartContracts: getSolanaSmartContracts()
        });
        break;
      case 'polkadot':
        setCurrentData({
          blocks: polkadotData.blocks,
          transactions: polkadotData.transactions,
          stats: polkadotData.stats,
          loading: polkadotData.loading,
          error: polkadotData.error,
          smartContracts: getPolkadotSmartContracts()
        });
        break;
      case 'cardano':
        setCurrentData({
          blocks: cardanoData.blocks,
          transactions: cardanoData.transactions,
          stats: cardanoData.stats,
          loading: cardanoData.loading,
          error: cardanoData.error,
          smartContracts: getCardanoSmartContracts()
        });
        break;
      case 'worldchain':
        setCurrentData({
          blocks: worldChainData.blocks,
          transactions: worldChainData.transactions,
          stats: worldChainData.stats,
          loading: worldChainData.loading,
          error: worldChainData.error,
          smartContracts: getWorldChainSmartContracts()
        });
        break;
      default:
        setCurrentData({
          blocks: ethereumData.blocks,
          transactions: ethereumData.transactions,
          stats: ethereumData.stats,
          loading: ethereumData.loading,
          error: ethereumData.error,
          smartContracts: getSmartContracts()
        });
    }
  };

  // Fetch data initially and then every 1 minute
  useEffect(() => {
    fetchBlockchainData(); // Initial fetch

    const intervalId = setInterval(fetchBlockchainData, 60000); // Fetch every 1 minute

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [activeBlockchain, ethereumData.blocks, ethereumData.transactions, ethereumData.stats,
       binanceData.blocks, binanceData.transactions, binanceData.stats,
       solanaData.blocks, solanaData.transactions, solanaData.stats,
       polkadotData.blocks, polkadotData.transactions, polkadotData.stats,
       cardanoData.blocks, cardanoData.transactions, cardanoData.stats,
       worldChainData.blocks, worldChainData.transactions, worldChainData.stats]);

  const [selectedContract, setSelectedContract] = useState<SmartContract | undefined>(currentData.smartContracts?.[0]);

  // Update selected contract when blockchain changes
  useEffect(() => {
    setSelectedContract(currentData.smartContracts?.[0]);
  }, [activeBlockchain, currentData.smartContracts]);

  // Handle blockchain switch with transition
  const handleBlockchainSwitch = (chain: BlockchainType) => {
    if (chain === activeBlockchain) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveBlockchain(chain);
      setIsTransitioning(false);
    }, 300); // Transition duration
  };

  const [transactionAges, setTransactionAges] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (currentData.transactions && currentData.transactions.length > 0) {
      // Initialize ages when transactions load
      const initialAges: { [key: string]: number } = {};
      currentData.transactions.forEach(tx => {
        initialAges[tx.hash] = 0; // Start from 0 seconds
      });
      setTransactionAges(initialAges);

      // Set up interval to increment ages
      const intervalId = setInterval(() => {
        setTransactionAges(prevAges => {
          const updatedAges: { [key: string]: number } = {};
          Object.keys(prevAges).forEach(hash => {
            updatedAges[hash] = prevAges[hash] + 1; // Increment age by 1 second
          });
          return updatedAges;
        });
      }, 1000); // Update every 1 second

      return () => clearInterval(intervalId); // Clean up interval on unmount
    } else {
      // Reset ages when there are no transactions
      setTransactionAges({});
    }
  }, [currentData.transactions]);

  const formatAge = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}d ${hours % 24}h`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  };

  // Create network metrics array from stats
  const networkMetrics = [
    {
      title: "Transaction Speed",
      value: currentData.loading ? "Loading..." : (currentData.stats.tps ? `${currentData.stats.tps} TPS` : "N/A"),
      change: currentData.stats.tpsChange > 0 ? `${currentData.stats.tpsChange}%` : `${currentData.stats.tpsChange}%`,
      icon: Activity
    },
    {
      title: "Network Nodes",
      value: currentData.loading ? "Loading..." : (currentData.stats.nodes ? `${currentData.stats.nodes.toLocaleString()}+` : "N/A"),
      change: currentData.stats.nodesChange > 0 ? `+${currentData.stats.nodesChange}%` : `${currentData.stats.nodesChange}%`,
      icon: Network
    },
    {
      title: "Block Time",
       value: currentData.loading ? "Loading..." : (currentData.stats.blockTime ? `${currentData.stats.blockTime} seconds` : "N/A"),
      change: currentData.stats.blockTimeChange > 0 ? `${currentData.stats.blockTimeChange}%` : `${currentData.stats.blockTimeChange}%`,
      icon: Clock
    },
    {
      title: "Smart Contracts",
       value: currentData.loading ? "Loading..." : (currentData.stats.contracts ? `${(currentData.stats.contracts / 1000).toLocaleString()}K+` : "N/A"),
      change: currentData.stats.contractsChange > 0 ? `+${currentData.stats.contractsChange}%` : `${currentData.stats.contractsChange}%`,
      icon: FileCheck
    }
  ];

  // Blockchain selector configurations
  const blockchainConfigs = [
    { id: 'ethereum', name: 'Ethereum', color: '#00E6E6' },
    { id: 'binance', name: 'Binance', color: '#F0B90B' },
    { id: 'solana', name: 'Solana', color: '#9945FF' },
    { id: 'polkadot', name: 'Polkadot', color: '#E6007A' },
    { id: 'cardano', name: 'Cardano', color: '#0033AD' },
    { id: 'worldchain', name: 'WorldChain', color: '#3B82F6' }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(${
          activeBlockchain === 'ethereum' ? '#00E6E6' :
          activeBlockchain === 'binance' ? '#F0B90B' :
          activeBlockchain === 'solana' ? '#9945FF' :
          activeBlockchain === 'polkadot' ? '#E6007A' :
          activeBlockchain === 'cardano' ? '#0033AD' : '59, 130, 246'
        },0.05),transparent_70%)]`} />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(rgba(${
            activeBlockchain === 'ethereum' ? '#00E6E6' :
            activeBlockchain === 'binance' ? '#F0B90B' :
            activeBlockchain === 'solana' ? '#9945FF' :
            activeBlockchain === 'polkadot' ? '#E6007A' :
            activeBlockchain === 'cardano' ? '#0033AD' : '59, 130, 246'
          }, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Database className={`w-8 h-8 text-[${
              activeBlockchain === 'ethereum' ? '#00E6E6' :
              activeBlockchain === 'binance' ? '#F0B90B' :
              activeBlockchain === 'solana' ? '#9945FF' :
              activeBlockchain === 'polkadot' ? '#E6007A' :
              activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
            }]`} />
            <h2 className="text-4xl md:text-5xl font-bold">Blockchain Explorer</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time blockchain visualization and analytics platform
          </p>
        </motion.div>

        {/* Blockchain Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {blockchainConfigs.map((chain) => (
            <button
              key={chain.id}
              onClick={() => handleBlockchainSwitch(chain.id as BlockchainType)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeBlockchain === chain.id
                  ? `bg-[${chain.color}] text-black font-bold shadow-lg shadow-[${chain.color}]/20`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              style={{
                backgroundColor: activeBlockchain === chain.id ? chain.color : '',
                color: activeBlockchain === chain.id ? 'black' : '',
                boxShadow: activeBlockchain === chain.id ? `0 10px 15px -3px ${chain.color}20` : ''
              }}
            >
              {chain.name}
            </button>
          ))}
        </div>

        {/* Network Metrics */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`metrics-${activeBlockchain}`}
            initial={isTransitioning ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {networkMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-[${
                  activeBlockchain === 'ethereum' ? '#00E6E6' :
                  activeBlockchain === 'binance' ? '#F0B90B' :
                  activeBlockchain === 'solana' ? '#9945FF' :
                  activeBlockchain === 'polkadot' ? '#E6007A' :
                  activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                }]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                  style={{
                    backgroundImage: `linear-gradient(to right, ${
                      activeBlockchain === 'ethereum' ? '#00E6E610' :
                      activeBlockchain === 'binance' ? '#F0B90B10' :
                      activeBlockchain === 'solana' ? '#9945FF10' :
                      activeBlockchain === 'polkadot' ? '#E6007A10' :
                      activeBlockchain === 'cardano' ? '#0033AD10' : '#3B82F610'
                    }, #3B82F610)`
                  }}
                />
                <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                  style={{
                    borderColor: `${
                      activeBlockchain === 'ethereum' ? '#00E6E633' :
                      activeBlockchain === 'binance' ? '#F0B90B33' :
                      activeBlockchain === 'solana' ? '#9945FF33' :
                      activeBlockchain === 'polkadot' ? '#E6007A33' :
                      activeBlockchain === 'cardano' ? '#0033AD33' : '#3B82F633'
                    }`
                  }}
                >
                  <metric.icon className={`w-8 h-8 text-[${
                    activeBlockchain === 'ethereum' ? '#00E6E6' :
                    activeBlockchain === 'binance' ? '#F0B90B' :
                    activeBlockchain === 'solana' ? '#9945FF' :
                    activeBlockchain === 'polkadot' ? '#E6007A' :
                    activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                  }]`}
                    style={{
                      color: `${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }`
                    }}
                  />
                  <h3 className={`text-2xl font-bold text-[${
                    activeBlockchain === 'ethereum' ? '#00E6E6' :
                    activeBlockchain === 'binance' ? '#F0B90B' :
                    activeBlockchain === 'solana' ? '#9945FF' :
                    activeBlockchain === 'polkadot' ? '#E6007A' :
                    activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                  }]`}
                    style={{
                      color: `${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }`
                    }}
                  >{metric.value}</h3>
                  <p className="text-gray-400">{metric.title}</p>
                  <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Live Blockchain Data */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`blockchain-data-${activeBlockchain}`}
            initial={isTransitioning ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Latest Blocks */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-[${
                activeBlockchain === 'ethereum' ? '#00E6E6' :
                activeBlockchain === 'binance' ? '#F0B90B' :
                activeBlockchain === 'solana' ? '#9945FF' :
                activeBlockchain === 'polkadot' ? '#E6007A' :
                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
              }]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                style={{
                  backgroundImage: `linear-gradient(to right, ${
                    activeBlockchain === 'ethereum' ? '#00E6E610' :
                    activeBlockchain === 'binance' ? '#F0B90B10' :
                    activeBlockchain === 'solana' ? '#9945FF10' :
                    activeBlockchain === 'polkadot' ? '#E6007A10' :
                    activeBlockchain === 'cardano' ? '#0033AD10' : '#3B82F610'
                  }, #3B82F610)`
                }}
              />
              <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                style={{
                  borderColor: `${
                    activeBlockchain === 'ethereum' ? '#00E6E633' :
                    activeBlockchain === 'binance' ? '#F0B90B33' :
                    activeBlockchain === 'solana' ? '#9945FF33' :
                    activeBlockchain === 'polkadot' ? '#E6007A33' :
                    activeBlockchain === 'cardano' ? '#0033AD33' : '#3B82F633'
                  }`
                }}
              >
                <h3 className="text-xl font-semibold mb-6">Latest {activeBlockchain === 'solana' ? 'Slots' : 'Blocks'}</h3>
                <div className="space-y-4">
                  {!currentData.loading ? (currentData.blocks.length > 0 ? currentData.blocks.map((block) => (
                    <div
                      key={block.id}
                      className={`p-4 rounded-lg bg-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]/5 border border-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]/20`}
                      style={{
                        backgroundColor: `${
                          activeBlockchain === 'ethereum' ? '#00E6E60D' :
                          activeBlockchain === 'binance' ? '#F0B90B0D' :
                          activeBlockchain === 'solana' ? '#9945FF0D' :
                          activeBlockchain === 'polkadot' ? '#E6007A0D' :
                          activeBlockchain === 'cardano' ? '#0033AD0D' : '#3B82F60D'
                        }`,
                        borderColor: `${
                          activeBlockchain === 'ethereum' ? '#00E6E633' :
                          activeBlockchain === 'binance' ? '#F0B90B33' :
                          activeBlockchain === 'solana' ? '#9945FF33' :
                          activeBlockchain === 'polkadot' ? '#E6007A33' :
                          activeBlockchain === 'cardano' ? '#0033AD33' : '#3B82F633'
                        }`
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Cube className={`w-4 h-4 text-[${
                            activeBlockchain === 'ethereum' ? '#00E6E6' :
                            activeBlockchain === 'binance' ? '#F0B90B' :
                            activeBlockchain === 'solana' ? '#9945FF' :
                            activeBlockchain === 'polkadot' ? '#E6007A' :
                            activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                          }]`}
                            style={{
                              color: `${
                                activeBlockchain === 'ethereum' ? '#00E6E6' :
                                activeBlockchain === 'binance' ? '#F0B90B' :
                                activeBlockchain === 'solana' ? '#9945FF' :
                                activeBlockchain === 'polkadot' ? '#E6007A' :
                                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                              }`
                            }}
                          />
                          <span className="font-semibold">#{shortenAddress(block.id)}</span>
                        </div>
                        <span className="text-sm text-gray-400">{block.age}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Transactions: </span>
                          <span className={`text-[${
                            activeBlockchain === 'ethereum' ? '#00E6E6' :
                            activeBlockchain === 'binance' ? '#F0B90B' :
                            activeBlockchain === 'solana' ? '#9945FF' :
                            activeBlockchain === 'polkadot' ? '#E6007A' :
                            activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                          }]`}
                            style={{
                              color: `${
                                activeBlockchain === 'ethereum' ? '#00E6E6' :
                                activeBlockchain === 'binance' ? '#F0B90B' :
                                activeBlockchain === 'solana' ? '#9945FF' :
                                activeBlockchain === 'polkadot' ? '#E6007A' :
                                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                              }`
                            }}
                          >{block.transactions}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Size: </span>
                          <span className={`text-[${
                            activeBlockchain === 'ethereum' ? '#00E6E6' :
                            activeBlockchain === 'binance' ? '#F0B90B' :
                            activeBlockchain === 'solana' ? '#9945FF' :
                            activeBlockchain === 'polkadot' ? '#E6007A' :
                            activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                          }]`}
                            style={{
                              color: `${
                                activeBlockchain === 'ethereum' ? '#00E6E6' :
                                activeBlockchain === 'binance' ? '#F0B90B' :
                                activeBlockchain === 'solana' ? '#9945FF' :
                                activeBlockchain === 'polkadot' ? '#E6007A' :
                                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                              }`
                            }}
                          >{block.size}</span>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-4 text-gray-400">No block data available</div>
                  )): <div className="text-center py-4 text-gray-400">Loading...</div>}
                </div>
              </div>
            </motion.div>

            {/* Latest Transactions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-[${
                activeBlockchain === 'ethereum' ? '#00E6E6' :
                activeBlockchain === 'binance' ? '#F0B90B' :
                activeBlockchain === 'solana' ? '#9945FF' :
                activeBlockchain === 'polkadot' ? '#E6007A' :
                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
              }]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                style={{
                  backgroundImage: `linear-gradient(to right, ${
                    activeBlockchain === 'ethereum' ? '#00E6E610' :
                    activeBlockchain === 'binance' ? '#F0B90B10' :
                    activeBlockchain === 'solana' ? '#9945FF10' :
                    activeBlockchain === 'polkadot' ? '#E6007A10' :
                    activeBlockchain === 'cardano' ? '#0033AD10' : '#3B82F610'
                  }, #3B82F610)`
                }}
              />
              <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                style={{
                  borderColor: `${
                    activeBlockchain === 'ethereum' ? '#00E6E633' :
                    activeBlockchain === 'binance' ? '#F0B90B33' :
                    activeBlockchain === 'solana' ? '#9945FF33' :
                    activeBlockchain === 'polkadot' ? '#E6007A33' :
                    activeBlockchain === 'cardano' ? '#0033AD33' : '#3B82F633'
                  }`
                }}
              >
                <h3 className="text-xl font-semibold mb-6">Latest Transactions</h3>
                <div className="space-y-4">
                  {!currentData.loading ? (currentData.transactions.length > 0 ? currentData.transactions.slice(0, 5).map((tx, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg bg-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]/5 border border-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]/20`}
                      style={{
                        backgroundColor: `${
                          activeBlockchain === 'ethereum' ? '#00E6E60D' :
                          activeBlockchain === 'binance' ? '#F0B90B0D' :
                          activeBlockchain === 'solana' ? '#9945FF0D' :
                          activeBlockchain === 'polkadot' ? '#E6007A0D' :
                          activeBlockchain === 'cardano' ? '#0033AD0D' : '#3B82F60D'
                        }`,
                        borderColor: `${
                          activeBlockchain === 'ethereum' ? '#00E6E633' :
                          activeBlockchain === 'binance' ? '#F0B90B33' :
                          activeBlockchain === 'solana' ? '#9945FF33' :
                          activeBlockchain === 'polkadot' ? '#E6007A33' :
                          activeBlockchain === 'cardano' ? '#0033AD33' : '#3B82F633'
                        }`
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm text-[#00EE6E6]"
                          style={{
                            color: `${
                              activeBlockchain === 'ethereum' ? '#00E6E6' :
                              activeBlockchain === 'binance' ? '#F0B90B' :
                              activeBlockchain === 'solana' ? '#9945FF' :
                              activeBlockchain === 'polkadot' ? '#E6007A' :
                              activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                            }`
                          }}
                        >{tx.hash}</span> {/* Display full hash */}
                        <span className="text-sm text-gray-400">{formatAge(transactionAges[tx.hash] || 0)}</span>
                      </div>
                      <div className="                      grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">From: </span>
                          <span className="font-mono text-sm text-[#00E6E6]"
                            style={{
                              color: `${
                                activeBlockchain === 'ethereum' ? '#00E6E6' :
                                activeBlockchain === 'binance' ? '#F0B90B' :
                                activeBlockchain === 'solana' ? '#9945FF' :
                                activeBlockchain === 'polkadot' ? '#E6007A' :
                                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                              }`
                            }}
                          >{shortenAddress(tx.from)}</span> {/* Shorten from address */}
                        </div>
                        <div>
                          <span className="text-gray-400">To: </span>
                          <span className="font-mono text-sm text-[#00E6E6]"
                            style={{
                              color: `${
                                activeBlockchain === 'ethereum' ? '#00E6E6' :
                                activeBlockchain === 'binance' ? '#F0B90B' :
                                activeBlockchain === 'solana' ? '#9945FF' :
                                activeBlockchain === 'polkadot' ? '#E6007A' :
                                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                              }`
                            }}
                          >{shortenAddress(tx.to)}</span> {/* Shorten to address */}
                        </div>
                      </div>
                      <div className="mt-2 text-right">
                        <span className="text-[#00E6E6] font-semibold"
                          style={{
                            color: `${
                              activeBlockchain === 'ethereum' ? '#00E6E6' :
                              activeBlockchain === 'binance' ? '#F0B90B' :
                              activeBlockchain === 'solana' ? '#9945FF' :
                              activeBlockchain === 'polkadot' ? '#E6007A' :
                              activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                            }`
                          }}
                        >{tx.amount}</span>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-4 text-gray-400">No transaction data available</div>
                  )) :  <div className="text-center py-4 text-gray-400">Loading...</div>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
  {/* Smart Contracts */}
  <AnimatePresence mode="wait">
          <motion.div
            key={`smart-contracts-${activeBlockchain}`}
            initial={isTransitioning ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8">
              {activeBlockchain === 'cardano' ? 'Native Token Examples' :
               activeBlockchain === 'solana' ? 'Program Examples' :
               'Smart Contract Examples'}
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {currentData.smartContracts?.map((contract) => (
                <motion.div
                  key={contract.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                  onClick={() => setSelectedContract(contract)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-[${
                    activeBlockchain === 'ethereum' ? '#00E6E6' :
                    activeBlockchain === 'binance' ? '#F0B90B' :
                    activeBlockchain === 'solana' ? '#9945FF' :
                    activeBlockchain === 'polkadot' ? '#E6007A' :
                    activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                  }]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${
                        activeBlockchain === 'ethereum' ? '#00E6E610' :
                        activeBlockchain === 'binance' ? '#F0B90B10' :
                        activeBlockchain === 'solana' ? '#9945FF10' :
                        activeBlockchain === 'polkadot' ? '#E6007A10' :
                        activeBlockchain === 'cardano' ? '#0033AD10' : '#3B82F610'
                      }, #3B82F610)`
                    }}
                  />
                  <div className={`relative p-6 rounded-xl border ${
                    selectedContract?.name === contract.name
                      ? `border-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }] bg-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]/10`
                      : `border-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]/20 hover:border-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]/60`
                  } bg-black/40 backdrop-blur-sm cursor-pointer transition-all`}
                    style={{
                      borderColor: selectedContract?.name === contract.name ?
                        `${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }` :
                        `${
                        activeBlockchain === 'ethereum' ? '#00E6E633' :
                        activeBlockchain === 'binance' ? '#F0B90B33' :
                        activeBlockchain === 'solana' ? '#9945FF33' :
                        activeBlockchain === 'polkadot' ? '#E6007A33' :
                        activeBlockchain === 'cardano' ? '#0033AD33' : '#3B82F633'
                      }`,
                      backgroundColor: selectedContract?.name === contract.name ?
                        `${
                        activeBlockchain === 'ethereum' ? '#00E6E61A' :
                        activeBlockchain === 'binance' ? '#F0B90B1A' :
                        activeBlockchain === 'solana' ? '#9945FF1A' :
                        activeBlockchain === 'polkadot' ? '#E6007A1A' :
                        activeBlockchain === 'cardano' ? '#0033AD1A' : '#3B82F61A'
                      }` : ''
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Code2 className={`w-6 h-6 text-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]`}
                        style={{
                          color: `${
                            activeBlockchain === 'ethereum' ? '#00E6E6' :
                            activeBlockchain === 'binance' ? '#F0B90B' :
                            activeBlockchain === 'solana' ? '#9945FF' :
                            activeBlockchain === 'polkadot' ? '#E6007A' :
                            activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                          }`
                        }}
                      />
                      <h4 className="text-lg font-semibold">{contract.name}</h4>
                    </div>
                    <p className="text-gray-400 mb-4">{contract.description}</p>
                    <div className="space-y-4">
                      <div>
                        <span className={`text-sm text-[${
                          activeBlockchain === 'ethereum' ? '#00E6E6' :
                          activeBlockchain === 'binance' ? '#F0B90B' :
                          activeBlockchain === 'solana' ? '#9945FF' :
                          activeBlockchain === 'polkadot' ? '#E6007A' :
                          activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                        }]`}
                          style={{
                            color: `${
                              activeBlockchain === 'ethereum' ? '#00E6E6' :
                              activeBlockchain === 'binance' ? '#F0B90B' :
                              activeBlockchain === 'solana' ? '#9945FF' :
                              activeBlockchain === 'polkadot' ? '#E6007A' :
                              activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                            }`
                          }}
                        >Features:</span>
                        <ul className="mt-2 space-y-2">
                          {contract.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                              <span className={`w-1.5 h-1.5 rounded-full bg-[${
                                activeBlockchain === 'ethereum' ? '#00E6E6' :
                                activeBlockchain === 'binance' ? '#F0B90B' :
                                activeBlockchain === 'solana' ? '#9945FF' :
                                activeBlockchain === 'polkadot' ? '#E6007A' :
                                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                              }]`}
                                style={{
                                  backgroundColor: `${
                                    activeBlockchain === 'ethereum' ? '#00E6E6' :
                                    activeBlockchain === 'binance' ? '#F0B90B' :
                                    activeBlockchain === 'solana' ? '#9945FF' :
                                    activeBlockchain === 'polkadot' ? '#E6007A' :
                                    activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                                  }`
                                }}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`pt-4 border-t border-[${
                        activeBlockchain === 'ethereum' ? '#00E6E6' :
                        activeBlockchain === 'binance' ? '#F0B90B' :
                        activeBlockchain === 'solana' ? '#9945FF' :
                        activeBlockchain === 'polkadot' ? '#E6007A' :
                        activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                      }]/10`}
                        style={{
                          borderColor: `${
                            activeBlockchain === 'ethereum' ? '#00E6E61A' :
                            activeBlockchain === 'binance' ? '#F0B90B1A' :
                            activeBlockchain === 'solana' ? '#9945FF1A' :
                            activeBlockchain === 'polkadot' ? '#E6007A1A' :
                            activeBlockchain === 'cardano' ? '#0033AD1A' : '#3B82F61A'
                          }`
                        }}
                      >
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <span className="text-gray-400">
                              {activeBlockchain === 'solana' ? 'Instances' : 'Deployments'}
                            </span>
                            <div className={`text-[${
                              activeBlockchain === 'ethereum' ? '#00E6E6' :
                              activeBlockchain === 'binance' ? '#F0B90B' :
                              activeBlockchain === 'solana' ? '#9945FF' :
                              activeBlockchain === 'polkadot' ? '#E6007A' :
                              activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                            }] font-semibold`}
                              style={{
                                color: `${
                                  activeBlockchain === 'ethereum' ? '#00E6E6' :
                                  activeBlockchain === 'binance' ? '#F0B90B' :
                                  activeBlockchain === 'solana' ? '#9945FF' :
                                  activeBlockchain === 'polkadot' ? '#E6007A' :
                                  activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                                }`
                              }}
                            >{contract.metrics.deployments}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Transactions</span>
                            <div className={`text-[${
                              activeBlockchain === 'ethereum' ? '#00E6E6' :
                              activeBlockchain === 'binance' ? '#F0B90B' :
                              activeBlockchain === 'solana' ? '#9945FF' :
                              activeBlockchain === 'polkadot' ? '#E6007A' :
                              activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                            }] font-semibold`}
                              style={{
                                color: `${
                                  activeBlockchain === 'ethereum' ? '#00E6E6' :
                                  activeBlockchain === 'binance' ? '#F0B90B' :
                                  activeBlockchain === 'solana' ? '#9945FF' :
                                  activeBlockchain === 'polkadot' ? '#E6007A' :
                                  activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                                }`
                              }}
                            >{contract.metrics.transactions}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Status</span>
                            <div className="text-green-400">Verified</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Network Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex justify-center space-x-4" // Add flex container
        >
          <Link href={`/${activeBlockchain}-explorer`}>
            <Button
              className={`bg-[${
                activeBlockchain === 'ethereum' ? '#00E6E6' :
                activeBlockchain === 'binance' ? '#F0B90B' :
                activeBlockchain === 'solana' ? '#9945FF' :
                activeBlockchain === 'polkadot' ? '#E6007A' :
                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
              }] hover:bg-[${
                activeBlockchain === 'ethereum' ? '#00E6E6' :
                activeBlockchain === 'binance' ? '#F0B90B' :
                activeBlockchain === 'solana' ? '#9945FF' :
                activeBlockchain === 'polkadot' ? '#E6007A' :
                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
              }]/90 text-black group`}
              style={{
                backgroundColor: `${
                  activeBlockchain === 'ethereum' ? '#00E6E6' :
                  activeBlockchain === 'binance' ? '#F0B90B' :
                  activeBlockchain === 'solana' ? '#9945FF' :
                  activeBlockchain === 'polkadot' ? '#E6007A' :
                  activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                }`
              }}
            >
              Build Blockchain like {activeBlockchain.charAt(0).toUpperCase() + activeBlockchain.slice(1)}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

          </Link>

          <Link href={`/${activeBlockchain}-explorer`}>
            <Button
              className={`bg-[${
                activeBlockchain === 'ethereum' ? '#00E6E6' :
                activeBlockchain === 'binance' ? '#F0B90B' :
                activeBlockchain === 'solana' ? '#9945FF' :
                activeBlockchain === 'polkadot' ? '#E6007A' :
                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
              }] hover:bg-[${
                activeBlockchain === 'ethereum' ? '#00E6E6' :
                activeBlockchain === 'binance' ? '#F0B90B' :
                activeBlockchain === 'solana' ? '#9945FF' :
                activeBlockchain === 'polkadot' ? '#E6007A' :
                activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
              }]/90 text-black group`}
              style={{
                backgroundColor: `${
                  activeBlockchain === 'ethereum' ? '#00E6E6' :
                  activeBlockchain === 'binance' ? '#F0B90B' :
                  activeBlockchain === 'solana' ? '#9945FF' :
                  activeBlockchain === 'polkadot' ? '#E6007A' :
                  activeBlockchain === 'cardano' ? '#0033AD' : '#3B82F6'
                }`
              }}
            >
              Build Dapp on {activeBlockchain.charAt(0).toUpperCase() + activeBlockchain.slice(1)}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

          {/* Selected Contract Details (Conditionally Rendered) */}
         
      </div>
    </section>
  );
}