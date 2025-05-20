"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Brain, Shield, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "AI Solutions",
    icon: Brain,
    description: "Advanced artificial intelligence solutions for your business",
    link: "/research/machine-learning"
  },
  {
    title: "AI Agents",
    icon: Bot,
    description: "Intelligent autonomous agents for process automation",
    link: "/research/ai-agents"
  },
  {
    title: "Blockchain",
    icon: Shield,
    description: "Secure and transparent blockchain solutions",
    link: "/research/blockchain-basics"
  }
];

export function HeroSection() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGetStartedOpen(false);
        setIsDiscoverOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-20">
      {/* Binary Animation Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute text-[#00E6E6] text-opacity-20 text-sm whitespace-nowrap"
          style={{
            top: '10%',
            right: '5%',
            transform: 'rotate(-15deg)',
          }}
        >
          {Array(10).fill('01101001011010001011010010110100').join('')}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 text-left relative z-10"
        >
          <motion.div variants={item} className="space-y-2">
            <h1 className="text-6xl lg:text-7xl font-bold">
              NextHome{" "}
              <span className="text-[#00E6E6]">Labs</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold mt-4">
              Leading Innovation in{" "}
              <span className="text-[#00E6E6]">African Technology</span>
            </h2>
          </motion.div>

          <motion.p 
            variants={item}
            className="text-lg text-gray-300 max-w-xl"
          >
            Transform your business with our cutting-edge AI, blockchain, and enterprise solutions. We're pioneering technological advancement across Africa, delivering innovative solutions that drive growth and efficiency.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-4"
            ref={dropdownRef}
          >
            <div className="relative">
              <Button 
                size="lg" 
                className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                onClick={() => {
                  setIsGetStartedOpen(!isGetStartedOpen);
                  setIsDiscoverOpen(false);
                }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              {isGetStartedOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-black/95 border border-[#00E6E6]/20 rounded-xl shadow-xl backdrop-blur-sm z-50"
                >
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold mb-3">Quick Start Options</h3>
                    <Link href="https://centgpt.com" target="_blank">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-left hover:bg-[#00E6E6]/10"
                      >
                        Try CentGPT
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button 
                        variant="ghost"
                        className="w-full justify-start text-left hover:bg-[#00E6E6]/10"
                      >
                        Contact Sales
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="relative">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10 group"
                onClick={() => {
                  setIsDiscoverOpen(!isDiscoverOpen);
                  setIsGetStartedOpen(false);
                }}
              >
                Discover More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              {isDiscoverOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-black/95 border border-[#00E6E6]/20 rounded-xl shadow-xl backdrop-blur-sm z-50"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-3">Explore Our Solutions</h3>
                    <div className="space-y-2">
                      {features.map((feature) => (
                        <Link
                          key={feature.title}
                          href={feature.link}
                          className="block p-3 rounded-lg hover:bg-[#00E6E6]/10 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <feature.icon className="w-5 h-5 text-[#00E6E6]" />
                            <div>
                              <h4 className="font-medium">{feature.title}</h4>
                              <p className="text-sm text-gray-400">{feature.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex gap-6 pt-8"
          >
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-[#00E6E6]">50+</h3>
              <p className="text-sm text-gray-400">AI Models</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-[#00E6E6]">100+</h3>
              <p className="text-sm text-gray-400">Global Partners</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-[#00E6E6]">24/7</h3>
              <p className="text-sm text-gray-400">Support</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Interactive Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative lg:block"
        >
          <div className="relative w-full h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[400px] h-[400px]">
                {/* Outer Circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-[#00E6E6]/30 rounded-full"
                />
                
                {/* Inner Circle */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-[#00E6E6]/20 rounded-full"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative w-24 h-24"
                    >
                      <Image
                        src="https://i.ibb.co/HNHDVZS/nhl934-e559d97359102662b413-1.png"
                        alt="NextHomeLabs Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Points */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div
                    key={angle}
                    className="absolute w-3 h-3 bg-[#00E6E6] rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg) translate(180px) rotate(-${angle}deg)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
