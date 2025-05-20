"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const data = [
  {
    year: 2018,
    blockchainMarket: 5,
    aiMarket: 10,
    aiAgentsMarket: 2,
    mlMarket: 8,
    blockchainAdoption: 2,
    aiAdoption: 5,
    aiAgentsAdoption: 1,
    mlAdoption: 4
  },
  {
    year: 2019,
    blockchainMarket: 8,
    aiMarket: 18,
    aiAgentsMarket: 3,
    mlMarket: 15,
    blockchainAdoption: 5,
    aiAdoption: 10,
    aiAgentsAdoption: 3,
    mlAdoption: 8
  },
  {
    year: 2020,
    blockchainMarket: 12,
    aiMarket: 25,
    aiAgentsMarket: 5,
    mlMarket: 22,
    blockchainAdoption: 8,
    aiAdoption: 15,
    aiAgentsAdoption: 6,
    mlAdoption: 12
  },
  {
    year: 2021,
    blockchainMarket: 20,
    aiMarket: 35,
    aiAgentsMarket: 8,
    mlMarket: 30,
    blockchainAdoption: 15,
    aiAdoption: 25,
    aiAgentsAdoption: 12,
    mlAdoption: 20
  },
  {
    year: 2022,
    blockchainMarket: 30,
    aiMarket: 55,
    aiAgentsMarket: 12,
    mlMarket: 40,
    blockchainAdoption: 20,
    aiAdoption: 35,
    aiAgentsAdoption: 18,
    mlAdoption: 28
  },
  {
    year: 2023,
    blockchainMarket: 40,
    aiMarket: 80,
    aiAgentsMarket: 18,
    mlMarket: 50,
    blockchainAdoption: 25,
    aiAdoption: 45,
    aiAgentsAdoption: 25,
    mlAdoption: 35
  },
  {
    year: 2024,
    blockchainMarket: 60,
    aiMarket: 110,
    aiAgentsMarket: 25,
    mlMarket: 65,
    blockchainAdoption: 30,
    aiAdoption: 55,
    aiAgentsAdoption: 35,
    mlAdoption: 42
  }
];

export function MarketGraphSection() {
  const [dimensions, setDimensions] = useState({ 
    isMobile: false,
    width: 0,
    height: 500,
    isReady: false 
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const updateDimensions = useCallback(() => {
    if (typeof window !== 'undefined') {
      const mobile = window.innerWidth < 768;
      const minWidth = 800;
      const containerWidth = mobile ? Math.max(window.innerWidth - 32, minWidth) : window.innerWidth - 40;
      const isLandscape = window.innerWidth > window.innerHeight;
      const height = mobile && !isLandscape ? 400 : 500;

      setDimensions({
        isMobile: mobile,
        width: containerWidth,
        height,
        isReady: true
      });

      // Handle mobile scroll position
      if (mobile && containerRef.current) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.scrollLeft = containerRef.current.scrollWidth;
          }
        });
      }
    }
  }, []);

  useEffect(() => {
    updateDimensions();

    const handleResize = () => {
      requestAnimationFrame(updateDimensions);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateDimensions, 100);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [updateDimensions]);

  if (!dimensions.isReady) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#00E6E6] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const xAxisProps = {
    dataKey: "year",
    stroke: "#ffffff60",
    tick: { fill: '#ffffff60' },
    axisLine: { stroke: '#ffffff30' },
    tickLine: { stroke: '#ffffff30' },
    angle: dimensions.isMobile ? -45 : 0,
    textAnchor: dimensions.isMobile ? "end" : "middle",
    height: dimensions.isMobile ? 60 : 30,
    allowDuplicatedCategory: false,
    scale: "auto",
    xAxisId: "0"
  };

  const yAxisProps = {
    stroke: "#ffffff60",
    tick: { fill: '#ffffff60' },
    axisLine: { stroke: '#ffffff30' },
    tickLine: { stroke: '#ffffff30' },
    scale: "auto",
    yAxisId: "left",
    orientation: "left"
  };

  const yAxisRightProps = {
    ...yAxisProps,
    yAxisId: "right",
    orientation: "right"
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,230,0.05),transparent_70%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0, 230, 230, 0.1) 1px, transparent 1px)',
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
          <h2 className="text-4xl md:text-5xl font-bold">Technology Market Size & Adoption Rate</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive analysis of market growth and adoption rates across key technology sectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div 
            ref={containerRef}
            className="market-graph-container"
          >
            <div style={{ 
              width: dimensions.isMobile ? `${dimensions.width}px` : '100%',
              height: `${dimensions.height}px`,
              minWidth: dimensions.isMobile ? '800px' : 'auto',
              paddingBottom: dimensions.isMobile ? '20px' : '0'
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={data}
                  margin={{ 
                    top: 20, 
                    right: dimensions.isMobile ? 40 : 30, 
                    left: dimensions.isMobile ? 20 : 20, 
                    bottom: dimensions.isMobile ? 60 : 20 
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis {...xAxisProps} />
                  <YAxis 
                    {...yAxisProps}
                    label={{ 
                      value: 'Market Size (Billion USD)',
                      angle: -90,
                      position: 'insideLeft',
                      style: { fill: '#ffffff60' }
                    }}
                  />
                  <YAxis 
                    {...yAxisRightProps}
                    label={{ 
                      value: 'Adoption Rate (%)',
                      angle: 90,
                      position: 'insideRight',
                      style: { fill: '#ffffff60' }
                    }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.9)',
                      border: '1px solid #00E6E6',
                      borderRadius: '8px',
                      boxShadow: '0 0 20px rgba(0,230,230,0.1)'
                    }}
                    labelStyle={{ color: '#ffffff' }}
                    itemStyle={{ color: '#ffffff' }}
                  />
                  <Legend 
                    verticalAlign={dimensions.isMobile ? "bottom" : "top"}
                    height={dimensions.isMobile ? 72 : 36}
                    wrapperStyle={{ 
                      paddingBottom: dimensions.isMobile ? '40px' : '20px',
                      color: '#ffffff60'
                    }}
                  />
                  
                  {/* Market Size Lines */}
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="blockchainMarket" 
                    name="Blockchain Market Size"
                    stroke="#00E6E6" 
                    strokeWidth={2}
                    dot={{ fill: '#00E6E6', r: 4 }}
                    activeDot={{ r: 6, stroke: '#00E6E6', strokeWidth: 2 }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="aiMarket" 
                    name="AI Market Size"
                    stroke="#FF00FF" 
                    strokeWidth={2}
                    dot={{ fill: '#FF00FF', r: 4 }}
                    activeDot={{ r: 6, stroke: '#FF00FF', strokeWidth: 2 }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="aiAgentsMarket" 
                    name="AI Agents Market Size"
                    stroke="#FFA500" 
                    strokeWidth={2}
                    dot={{ fill: '#FFA500', r: 4 }}
                    activeDot={{ r: 6, stroke: '#FFA500', strokeWidth: 2 }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="mlMarket" 
                    name="Machine Learning Market Size"
                    stroke="#00FF00" 
                    strokeWidth={2}
                    dot={{ fill: '#00FF00', r: 4 }}
                    activeDot={{ r: 6, stroke: '#00FF00', strokeWidth: 2 }}
                  />

                  {/* Adoption Rate Lines */}
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="blockchainAdoption" 
                    name="Blockchain Adoption"
                    stroke="#00E6E6" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#00E6E6', r: 4 }}
                    activeDot={{ r: 6, stroke: '#00E6E6', strokeWidth: 2 }}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="aiAdoption" 
                    name="AI Adoption"
                    stroke="#FF00FF" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#FF00FF', r: 4 }}
                    activeDot={{ r: 6, stroke: '#FF00FF', strokeWidth: 2 }}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="aiAgentsAdoption" 
                    name="AI Agents Adoption"
                    stroke="#FFA500" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#FFA500', r: 4 }}
                    activeDot={{ r: 6, stroke: '#FFA500', strokeWidth: 2 }}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="mlAdoption" 
                    name="Machine Learning Adoption"
                    stroke="#00FF00" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#00FF00', r: 4 }}
                    activeDot={{ r: 6, stroke: '#00FF00', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {dimensions.isMobile && (
            <div className="text-center mt-4 text-sm text-gray-400">
              ← Scroll to see historical data
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link href="/markets">
            <Button 
              size="lg"
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
            >
              Explore All Markets
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
