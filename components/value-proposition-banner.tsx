"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Lock, Clock } from "lucide-react";

export function ValuePropositionBanner() {
  const keyValues = [
    {
      icon: CheckCircle2,
      title: "Problem Solvers",
      description: "We identify and solve your most complex technical challenges"
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability guaranteed"
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick deployment that minimizes business disruption"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock expert support when you need it most"
    }
  ];

  return (
    <div className="w-full py-6 bg-gradient-to-r from-[#00E6E6]/10 via-[#00E6E6]/5 to-[#00E6E6]/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {keyValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-start gap-3"
            >
              <div className="rounded-full bg-[#00E6E6]/10 p-2 mt-1">
                <value.icon className="w-5 h-5 text-[#00E6E6]" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">{value.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}