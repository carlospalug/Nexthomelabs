"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Building2,
  GraduationCap,
  Leaf,
  ShoppingCart,
  Truck,
  Zap,
  PlusCircle,
  Factory,
  ScrollText
} from "lucide-react";
import { SignupModal } from "./signup-modal";
import Link from "next/link";

interface Industry {
  name: string;
  description: string;
  icon: any; // Using any for Lucide icons type
}

const industries: Industry[] = [
  {
    name: "Healthcare",
    description: "AI-powered diagnostics and patient care solutions",
    icon: PlusCircle
  },
  {
    name: "Manufacturing",
    description: "Smart automation and predictive maintenance",
    icon: Factory
  },
  {
    name: "Agriculture",
    description: "Precision farming and crop optimization",
    icon: Leaf
  },
  {
    name: "Retail",
    description: "Personalized shopping experiences and inventory management",
    icon: ShoppingCart
  },
  {
    name: "Transportation",
    description: "Fleet management and route optimization",
    icon: Truck
  },
  {
    name: "Energy",
    description: "Smart grid solutions and consumption optimization",
    icon: Zap
  },
  {
    name: "Education",
    description: "Personalized learning and administrative automation",
    icon: GraduationCap
  },
  {
    name: "Finance",
    description: "Risk assessment and automated trading systems",
    icon: ScrollText
  }
];

interface IndustryNodeProps {
  industry: Industry;
  index: number;
}

const IndustryNode = ({ industry, index }: IndustryNodeProps) => {
  const radius = 200;
  const angle = (index * 360) / industries.length;
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="absolute"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-20 h-20 rounded-full bg-[#00E6E6]/10 backdrop-blur-sm border border-[#00E6E6]/30 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-[#00E6E6]/20">
          <industry.icon className="w-8 h-8 text-[#00E6E6]" />
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 text-white p-3 rounded-lg w-48 text-center -translate-x-1/2 left-1/2 mt-2 pointer-events-none">
            <p className="font-semibold mb-1">{industry.name}</p>
            <p className="text-sm text-gray-300">{industry.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProcessVisualization = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full h-full"
      >
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0px 0px 10px rgba(0, 230, 230, 0.3))" }}
        >
          {/* Central Circle */}
          <motion.circle
            cx="400"
            cy="300"
            r="80"
            fill="none"
            stroke="#00E6E6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Outer Ring */}
          <motion.circle
            cx="400"
            cy="300"
            r="200"
            fill="none"
            stroke="#00E6E6"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Connection Lines */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
            <motion.line
              key={angle}
              x1={400 + 80 * Math.cos((angle * Math.PI) / 180)}
              y1={300 + 80 * Math.sin((angle * Math.PI) / 180)}
              x2={400 + 200 * Math.cos((angle * Math.PI) / 180)}
              y2={300 + 200 * Math.sin((angle * Math.PI) / 180)}
              stroke="#00E6E6"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ 
                duration: 1.5,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          ))}

          {/* Animated Particles */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
            <motion.circle
              key={`particle-${angle}`}
              cx={400 + 140 * Math.cos((angle * Math.PI) / 180)}
              cy={300 + 140 * Math.sin((angle * Math.PI) / 180)}
              r="4"
              fill="#00E6E6"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          ))}

          {/* Center Pulse */}
          <motion.circle
            cx="400"
            cy="300"
            r="40"
            fill="#00E6E6"
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </AnimatePresence>
  );
};

export function EmpoweringSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,230,0.05),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Empowering{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E6E6] to-white">
                  Innovations
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Revolutionize your business with the transformative power of AI. Our cutting-edge solutions are
                designed to significantly boost your team's productivity and operational efficiency, paving the
                way for unprecedented growth and success in the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                  onClick={() => setIsSignupModalOpen(true)}
                >
                  Sign Up
                </Button>
                <Link href="/research">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                  >
                    Discover More
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Interactive Visualizations */}
            <div className="relative h-[600px]">
              {/* Process Visualization */}
              {isMounted && (
                <div className="absolute inset-0">
                  <ProcessVisualization />
                </div>
              )}

              {/* Industry Wheel */}
              {isMounted && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Center Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-32 h-32 rounded-full bg-[#00E6E6]/20 border border-[#00E6E6]/30 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <Building2 className="w-12 h-12 text-[#00E6E6] mx-auto" />
                      <p className="text-sm font-semibold mt-1">NextHome Labs</p>
                    </div>
                  </motion.div>

                  {/* Industry Nodes */}
                  {industries.map((industry, index) => (
                    <IndustryNode
                      key={industry.name}
                      industry={industry}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </section>
  );
}
