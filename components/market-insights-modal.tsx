"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, ArrowUpRight, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MarketInsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  insight: {
    title: string;
    description: string;
    stats: string;
    details?: {
      overview: string;
      keyTrends: string[];
      challenges: string[];
      opportunities: string[];
      forecast: string;
    };
  } | null;
}

export function MarketInsightModal({ isOpen, onClose, insight }: MarketInsightModalProps) {
  if (!insight) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl p-6 bg-black border border-[#00E6E6]/20 rounded-xl shadow-xl m-4"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#00E6E6]/10">
                  <TrendingUp className="w-6 h-6 text-[#00E6E6]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{insight.title}</h2>
                  <p className="text-gray-400">{insight.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3 p-4 bg-[#00E6E6]/5 rounded-lg border border-[#00E6E6]/10">
                <LineChart className="w-5 h-5 text-[#00E6E6]" />
                <span className="text-xl font-bold text-[#00E6E6]">{insight.stats}</span>
              </div>

              {/* Detailed Content */}
              {insight.details && (
                <div className="space-y-6">
                  {/* Market Overview */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Market Overview</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {insight.details.overview}
                    </p>
                  </div>

                  {/* Key Trends */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Trends</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {insight.details.keyTrends.map((trend, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-3 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/10"
                        >
                          <ArrowUpRight className="w-5 h-5 text-[#00E6E6] flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300">{trend}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges and Opportunities */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                      <ul className="space-y-2">
                        {insight.details.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Opportunities</h3>
                      <ul className="space-y-2">
                        {insight.details.opportunities.map((opportunity, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Market Forecast */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Market Forecast</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {insight.details.forecast}
                    </p>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-end pt-4">
                <Button
                  onClick={onClose}
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
