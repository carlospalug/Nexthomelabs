"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ChevronRight, 
  TrendingUp, 
  BarChart2, 
  Users, 
  LineChart, 
  DollarSign,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowUpRight,
  DownloadCloud
} from "lucide-react";
import Link from "next/link";

// Comprehensive case study data with detailed metrics, testimonials, and solution steps
const detailedCaseStudies = [
  {
    id: 1,
    title: "AI-Powered Financial Analytics Platform",
    client: "EastAfrica Banking Group",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    duration: "6 months",
    year: "2024",
    challenge: {
      summary: "Needed real-time fraud detection and risk assessment capabilities to handle growing transaction volumes",
      details: [
        "Manual risk assessment processes were causing delays in transaction approval",
        "Rising fraud incidents cost the bank $1.8M in the previous year",
        "Regulatory compliance required improved monitoring and reporting",
        "Disparate legacy systems made data integration difficult",
        "Staff spent 65% of their time on routine monitoring tasks"
      ]
    },
    solution: {
      summary: "Implemented advanced AI models for transaction monitoring, risk analysis, and anomaly detection",
      approach: [
        {
          title: "Data Integration & Cleaning",
          description: "Connected 7 disparate systems into a unified data lake with automated ETL pipelines",
          duration: "4 weeks",
          impact: "Created a single source of truth with 99.8% data accuracy"
        },
        {
          title: "Model Development",
          description: "Developed custom ML models for fraud detection using supervised learning on historical transaction data",
          duration: "8 weeks",
          impact: "Achieved 99.2% detection rate with only 0.3% false positives"
        },
        {
          title: "Real-time Processing System",
          description: "Built scalable real-time processing infrastructure using event streaming and serverless architecture",
          duration: "6 weeks",
          impact: "Reduced processing latency from minutes to milliseconds"
        },
        {
          title: "UI/UX & Visualization",
          description: "Created intuitive dashboards and alert systems for risk assessment teams",
          duration: "6 weeks",
          impact: "Reduced decision-making time by 82%"
        },
        {
          title: "Staff Training & Deployment",
          description: "Comprehensive training program for 120+ staff across 5 departments",
          duration: "4 weeks",
          impact: "95% staff adoption within first month"
        }
      ],
      technologies: [
        "TensorFlow for neural network models",
        "Apache Kafka for real-time event processing",
        "AWS Lambda for serverless computing",
        "Amazon SageMaker for model deployment",
        "React & D3.js for interactive dashboards",
        "MongoDB for flexible data storage"
      ]
    },
    results: {
      summary: "The AI platform dramatically improved fraud detection while reducing operational costs and enhancing regulatory compliance",
      keyMetrics: [
        { label: "Fraud Detection Rate", value: "99.8%", increase: "45%", icon: Shield },
        { label: "Processing Time", value: "0.3s", improvement: "85%", icon: Clock },
        { label: "False Positives", value: "0.3%", improvement: "76%", icon: CheckCircle2 },
        { label: "Annual Cost Savings", value: "$2.5M", icon: DollarSign },
        { label: "Staff Efficiency", value: "82%", increase: "48%", icon: Users },
        { label: "Transaction Volume Capacity", value: "150M+/day", increase: "300%", icon: TrendingUp }
      ],
      businessImpact: [
        "Prevented an estimated $4.2M in fraud losses in first year",
        "Reduced manual review time by 78%, allowing staff to focus on high-value activities",
        "Improved customer experience through faster transaction approvals (95% within 0.5 seconds)",
        "Enhanced regulatory compliance with comprehensive audit trails and reporting",
        "Increased customer satisfaction scores by 28% due to reduced false declines"
      ],
      roi: {
        investment: "$1.2M",
        annualSavings: "$2.5M",
        paybackPeriod: "5.8 months",
        fiveYearReturn: "1040%"
      }
    },
    testimonials: [
      {
        quote: "The AI solution has transformed our risk management capabilities. We're detecting fraud patterns we never could before, while dramatically reducing false positives that previously frustrated our customers.",
        author: "Sarah Ochieng",
        role: "Chief Risk Officer, EastAfrica Banking Group",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
      },
      {
        quote: "Implementation was seamless despite our complex infrastructure. The NextHomeLabs team demonstrated exceptional technical expertise and deep understanding of financial services requirements.",
        author: "James Mwangi",
        role: "CTO, EastAfrica Banking Group",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  {
    id: 2,
    title: "Blockchain-Based Supply Chain Traceability System",
    client: "African Harvest Distributors",
    industry: "Agriculture & Logistics",
    image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=1200&q=80",
    duration: "8 months",
    year: "2023",
    challenge: {
      summary: "Lack of transparency and traceability in agricultural supply chain leading to inefficiencies and trust issues",
      details: [
        "Complex network of 5,000+ smallholder farmers across 3 countries",
        "Product authenticity concerns affecting premium pricing and export opportunities",
        "22% of perishable products lost due to inefficient logistics",
        "Manual paperwork creating delays and errors in cross-border shipping",
        "Difficulty proving sustainability and fair-trade practices to international buyers"
      ]
    },
    solution: {
      summary: "Developed comprehensive blockchain-based tracking system with IoT integration for end-to-end supply chain visibility",
      approach: [
        {
          title: "Infrastructure Development",
          description: "Created a private Hyperledger Fabric blockchain network with permissioned access for different stakeholders",
          duration: "6 weeks",
          impact: "Established immutable, transparent record-keeping system"
        },
        {
          title: "IoT Integration",
          description: "Deployed 1,200+ IoT sensors for temperature, humidity, and location tracking across the supply chain",
          duration: "8 weeks",
          impact: "Automated real-time condition monitoring for quality control"
        },
        {
          title: "Mobile Applications",
          description: "Developed user-friendly mobile apps for farmers, distributors, and retailers in multiple languages",
          duration: "10 weeks",
          impact: "98% adoption among smallholder farmers within 3 months"
        },
        {
          title: "Smart Contracts",
          description: "Implemented automated smart contracts for payment processing and compliance verification",
          duration: "6 weeks",
          impact: "Reduced payment cycles from 45 days to 3 days"
        },
        {
          title: "Customer-Facing Verification",
          description: "Created QR code scanning system for end-consumers to verify product origin and journey",
          duration: "4 weeks",
          impact: "Enhanced brand trust and product premium value"
        }
      ],
      technologies: [
        "Hyperledger Fabric for permissioned blockchain",
        "LoRaWAN IoT sensors for remote monitoring",
        "React Native for cross-platform mobile apps",
        "Solidity for smart contract development",
        "Node.js for backend services",
        "IPFS for decentralized storage"
      ]
    },
    results: {
      summary: "The blockchain solution transformed supply chain operations, improving efficiency, reducing waste, and enhancing trust and transparency",
      keyMetrics: [
        { label: "Supply Chain Visibility", value: "100%", increase: "65%", icon: LineChart },
        { label: "Product Loss Reduction", value: "82%", improvement: "18.1M USD", icon: TrendingUp },
        { label: "Payment Cycle Reduction", value: "93%", improvement: "42 days faster", icon: Calendar },
        { label: "Premium Price Increase", value: "28%", icon: DollarSign },
        { label: "Farmer Onboarding", value: "5,242", improvement: "98% adoption", icon: Users },
        { label: "Carbon Footprint Reduction", value: "32%", icon: CheckCircle2 }
      ],
      businessImpact: [
        "Secured 3 new premium export contracts worth $8.2M annually due to provable sustainability practices",
        "Reduced product loss from 22% to 4%, saving $18.1M annually",
        "Improved farmer incomes by 32% through premium pricing and reduced middleman costs",
        "Enhanced compliance documentation for international certifications and audits",
        "Consumer trust improvements led to 28% higher retail pricing for tracked products"
      ],
      roi: {
        investment: "$2.4M",
        annualSavings: "$26.3M",
        paybackPeriod: "1.2 months",
        fiveYearReturn: "5480%"
      }
    },
    testimonials: [
      {
        quote: "This technology has revolutionized our entire agricultural supply chain. We now have complete visibility from farm to shelf, which has dramatically reduced waste and improved our relationships with both farmers and retailers.",
        author: "Grace Otieno",
        role: "Operations Director, African Harvest Distributors",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      },
      {
        quote: "As a farmer, I can now prove the quality of my produce and receive fair payments quickly. The mobile app is simple to use, even for those with limited technical experience.",
        author: "Thomas Mukasa",
        role: "Lead Farmer, Cooperative Representative",
        image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  {
    id: 3,
    title: "Intelligent Agriculture Management Platform",
    client: "East African Agricultural Cooperative",
    industry: "Agriculture",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    duration: "9 months",
    year: "2023",
    challenge: {
      summary: "Inefficient crop management and yield prediction leading to poor resource allocation and reduced farmer income",
      details: [
        "12,000+ smallholder farmers struggling with unpredictable weather patterns",
        "Limited access to agricultural expertise and best practices",
        "Inefficient water usage in drought-prone regions",
        "Difficulty accessing fair markets and price information",
        "Crop diseases reducing yields by up to 40% annually"
      ]
    },
    solution: {
      summary: "Developed AI-driven crop monitoring and prediction system with integrated market access platform",
      approach: [
        {
          title: "Satellite & Drone Imaging",
          description: "Implemented satellite monitoring and drone surveys for 200,000 hectares of farmland",
          duration: "8 weeks",
          impact: "Created comprehensive field mapping with 95% accuracy"
        },
        {
          title: "AI Prediction Models",
          description: "Developed ML models for crop yield prediction, disease identification, and resource optimization",
          duration: "12 weeks",
          impact: "Achieved 92% accuracy in yield forecasting"
        },
        {
          title: "IoT Sensor Network",
          description: "Deployed 8,500 solar-powered soil sensors for moisture, nutrient, and pH monitoring",
          duration: "10 weeks",
          impact: "Reduced water usage by 38% through precision irrigation"
        },
        {
          title: "Mobile Knowledge Platform",
          description: "Created mobile app with offline capabilities for farming advice, weather alerts, and market information",
          duration: "6 weeks",
          impact: "Delivered 15,000+ personalized recommendations daily"
        },
        {
          title: "Digital Marketplace",
          description: "Built blockchain-based marketplace connecting farmers directly with buyers",
          duration: "8 weeks",
          impact: "Eliminated middlemen, increasing farmer earnings by 42%"
        }
      ],
      technologies: [
        "TensorFlow for machine learning models",
        "Google Earth Engine for satellite imagery analysis",
        "Custom low-power IoT sensors with LoRaWAN connectivity",
        "React Native for cross-platform mobile app",
        "PostgreSQL and TimescaleDB for time-series data",
        "Ethereum for marketplace transactions"
      ]
    },
    results: {
      summary: "The platform transformed agricultural practices across the cooperative, dramatically improving yields, resource efficiency, and farmer livelihoods",
      keyMetrics: [
        { label: "Crop Yield Increase", value: "+35%", increase: "Year-over-Year", icon: TrendingUp },
        { label: "Water Usage Reduction", value: "-40%", improvement: "1.2B liters saved", icon: BarChart2 },
        { label: "Disease Prediction", value: "94%", improvement: "Accuracy", icon: CheckCircle2 },
        { label: "Farmer Income Increase", value: "42%", icon: DollarSign },
        { label: "Resource Efficiency", value: "68%", improvement: "Fertilizer optimization", icon: LineChart },
        { label: "Market Access", value: "+250", improvement: "New buyer relationships", icon: Users }
      ],
      businessImpact: [
        "Increased cooperative's annual production by 35%, representing $14.2M in additional income",
        "Reduced crop losses from disease by 65% through early detection and intervention",
        "Created direct market access that increased average farmer earnings by 42%",
        "Improved sustainability metrics leading to premium certification and pricing",
        "Cooperative membership grew by 3,200 farmers attracted by improved outcomes"
      ],
      roi: {
        investment: "$3.5M",
        annualSavings: "$18.7M",
        paybackPeriod: "2.3 months",
        fiveYearReturn: "2675%"
      }
    },
    testimonials: [
      {
        quote: "The AI system has dramatically improved our agricultural productivity. I've increased my yield by 40% while using less water and fertilizer. The early disease warnings have saved my crops twice this season.",
        author: "Emmanuel Nkusi",
        role: "Smallholder Farmer, Rwanda",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=300&q=80"
      },
      {
        quote: "The data insights and forecasting capabilities have transformed how we plan and operate. We can now make informed decisions about planting times, resource allocation, and market timing.",
        author: "Dr. Amina Mohammed",
        role: "Agricultural Director, East African Agricultural Cooperative",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
      }
    ]
  }
];

// Component for displaying case study metrics
interface MetricCardProps {
  label: string;
  value: string;
  increase?: string;
  improvement?: string;
  icon?: any;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  increase, 
  improvement,
  icon: Icon 
}) => (
  <div className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/20 flex items-start">
    {Icon && <Icon className="w-8 h-8 text-[#00E6E6] mr-4 mt-1 flex-shrink-0" />}
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400 mb-1">{label}</div>
      {(increase || improvement) && (
        <div className="text-xs font-medium text-green-400">
          {increase && <span>↑ {increase}</span>}
          {improvement && <span>{improvement}</span>}
        </div>
      )}
    </div>
  </div>
);

// Implementation timeline component
interface TimelineStepProps {
  title: string;
  description: string;
  duration: string;
  impact: string;
  isLast?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ 
  title, 
  description, 
  duration, 
  impact,
  isLast = false
}) => (
  <div className="relative">
    {!isLast && (
      <div className="absolute left-5 top-6 w-0.5 h-full bg-[#00E6E6]/20" />
    )}
    <div className="flex gap-4">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-[#00E6E6]/10 border border-[#00E6E6]/30 flex items-center justify-center z-10 relative">
          <div className="w-3 h-3 rounded-full bg-[#00E6E6]" />
        </div>
      </div>
      <div className="flex-1 pb-8">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-gray-300 mt-1 mb-2">{description}</p>
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="px-3 py-1 rounded-full bg-[#00E6E6]/10 text-xs text-[#00E6E6] flex items-center">
            <Clock className="w-3 h-3 mr-1" /> {duration}
          </div>
          <div className="px-3 py-1 rounded-full bg-green-500/10 text-xs text-green-400 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> {impact}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export function DetailedCaseStudiesSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(detailedCaseStudies[0]);
  const [activeTab, setActiveTab] = useState<'challenge'|'solution'|'results'|'testimonials'>('challenge');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCaseStudyChange = (caseStudy: typeof detailedCaseStudies[0]) => {
    setActiveCaseStudy(caseStudy);
    setActiveTab('challenge');
    
    // Scroll to top of the content area when changing case studies
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
          <h2 className="text-4xl md:text-5xl font-bold">Client Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI and blockchain solutions are delivering measurable results and transforming businesses across industries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Case Study Selection - Left Sidebar */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-semibold mb-6">Featured Case Studies</h3>
            <div className="space-y-4">
              {detailedCaseStudies.map((caseStudy) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative group cursor-pointer ${
                    activeCaseStudy.id === caseStudy.id ? 'scale-105' : ''
                  }`}
                  onClick={() => handleCaseStudyChange(caseStudy)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className={`relative p-6 rounded-xl border ${
                    activeCaseStudy.id === caseStudy.id ? 'border-[#00E6E6] bg-black/60' : 'border-[#00E6E6]/20 bg-black/40'
                  } backdrop-blur-sm transition-all duration-300 hover:border-[#00E6E6]/60`}>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 relative rounded-lg overflow-hidden">
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm text-[#00E6E6]">{caseStudy.industry}</div>
                        <h3 className="text-lg font-semibold mb-1">{caseStudy.title}</h3>
                        <p className="text-gray-400 text-sm">{caseStudy.client}</p>
                      </div>
                      <ChevronRight className={`w-6 h-6 ml-auto text-[#00E6E6] transition-transform ${
                        activeCaseStudy.id === caseStudy.id ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ROI Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold mb-4">ROI Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total Investment:</span>
                  <span className="text-white">{activeCaseStudy.results.roi.investment}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Annual Savings:</span>
                  <span className="text-green-400">{activeCaseStudy.results.roi.annualSavings}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Payback Period:</span>
                  <span className="text-white">{activeCaseStudy.results.roi.paybackPeriod}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-300">5-Year Return:</span>
                  <span className="text-[#00E6E6]">{activeCaseStudy.results.roi.fiveYearReturn}</span>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="text-[#00E6E6] text-sm font-medium flex items-center justify-center gap-1 hover:text-white transition-colors">
                  Download Full ROI Analysis
                  <DownloadCloud className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Case Study Details - Right Content */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeCaseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              {/* Case Study Header */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={activeCaseStudy.image}
                  alt={activeCaseStudy.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="px-3 py-1 rounded-full bg-[#00E6E6]/20 text-[#00E6E6] text-sm">
                      {activeCaseStudy.industry}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-white text-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {activeCaseStudy.year}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-white text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {activeCaseStudy.duration} project
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{activeCaseStudy.title}</h2>
                  <p className="text-xl text-[#00E6E6]">{activeCaseStudy.client}</p>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap mb-8 border-b border-[#00E6E6]/20">
                <button 
                  className={`px-6 py-3 text-sm font-medium relative ${activeTab === 'challenge' ? 'text-[#00E6E6]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('challenge')}
                >
                  Challenge
                  {activeTab === 'challenge' && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E6E6]" 
                    />
                  )}
                </button>
                <button 
                  className={`px-6 py-3 text-sm font-medium relative ${activeTab === 'solution' ? 'text-[#00E6E6]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('solution')}
                >
                  Solution Approach
                  {activeTab === 'solution' && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E6E6]" 
                    />
                  )}
                </button>
                <button 
                  className={`px-6 py-3 text-sm font-medium relative ${activeTab === 'results' ? 'text-[#00E6E6]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('results')}
                >
                  Results & Impact
                  {activeTab === 'results' && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E6E6]" 
                    />
                  )}
                </button>
                <button 
                  className={`px-6 py-3 text-sm font-medium relative ${activeTab === 'testimonials' ? 'text-[#00E6E6]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('testimonials')}
                >
                  Testimonials
                  {activeTab === 'testimonials' && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E6E6]" 
                    />
                  )}
                </button>
              </div>

              {/* Tab Content Area */}
              <div ref={scrollContainerRef} className="h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                {/* Challenge Content */}
                {activeTab === 'challenge' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-xl bg-[#00E6E6]/5 border border-[#00E6E6]/20">
                      <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                      <p className="text-gray-300 mb-6">{activeCaseStudy.challenge.summary}</p>
                      
                      <h4 className="text-lg font-medium mb-3">Key Pain Points</h4>
                      <div className="space-y-3">
                        {activeCaseStudy.challenge.details.map((detail, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#00E6E6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]"></div>
                            </div>
                            <p className="text-gray-300">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Before/After Comparison Visualization would go here */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                        <h4 className="text-lg font-medium mb-3 text-red-400">Before Implementation</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">✖</span>
                            <span className="text-gray-300">Manual processes causing significant delays</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">✖</span>
                            <span className="text-gray-300">High rate of undetected fraud incidents</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">✖</span>
                            <span className="text-gray-300">Excessive false positives frustrating customers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">✖</span>
                            <span className="text-gray-300">Limited data integration and visibility</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">✖</span>
                            <span className="text-gray-300">Staff overwhelmed with routine monitoring</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                        <h4 className="text-lg font-medium mb-3 text-green-400">After Implementation</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span className="text-gray-300">Real-time automated processing (0.3s)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span className="text-gray-300">99.8% fraud detection rate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span className="text-gray-300">Only 0.3% false positive rate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span className="text-gray-300">Unified data view with predictive insights</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span className="text-gray-300">Staff focused on strategic risk management</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Solution Content */}
                {activeTab === 'solution' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="p-6 rounded-xl bg-[#00E6E6]/5 border border-[#00E6E6]/20">
                      <h3 className="text-xl font-semibold mb-4">Our Solution Approach</h3>
                      <p className="text-gray-300 mb-4">{activeCaseStudy.solution.summary}</p>
                    </div>

                    {/* Implementation Timeline */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Implementation Timeline</h3>
                      <div className="space-y-2">
                        {activeCaseStudy.solution.approach.map((step, index) => (
                          <TimelineStep 
                            key={index}
                            title={step.title}
                            description={step.description}
                            duration={step.duration}
                            impact={step.impact}
                            isLast={index === activeCaseStudy.solution.approach.length - 1}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="p-6 rounded-xl bg-black/40 border border-[#00E6E6]/20">
                      <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {activeCaseStudy.solution.technologies.map((tech, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#00E6E6]/5">
                            <div className="w-2 h-2 rounded-full bg-[#00E6E6]" />
                            <span className="text-gray-300">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solution Diagram/Visual would go here */}
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                        alt="Solution architecture diagram"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm">
                          Comprehensive solution architecture diagram showing system components and data flow
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Results Content */}
                {activeTab === 'results' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="p-6 rounded-xl bg-[#00E6E6]/5 border border-[#00E6E6]/20">
                      <h3 className="text-xl font-semibold mb-4">Results & Business Impact</h3>
                      <p className="text-gray-300">{activeCaseStudy.results.summary}</p>
                    </div>

                    {/* Key Metrics Grid */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Key Performance Metrics</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {activeCaseStudy.results.keyMetrics.map((metric, index) => (
                          <MetricCard 
                            key={index}
                            label={metric.label}
                            value={metric.value}
                            increase={metric.increase}
                            improvement={metric.improvement}
                            icon={metric.icon}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Business Impact */}
                    <div className="p-6 rounded-xl bg-black/40 border border-[#00E6E6]/20">
                      <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
                      <div className="space-y-3">
                        {activeCaseStudy.results.businessImpact.map((impact, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-300">{impact}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results Visualization/Charts would go here */}
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                        alt="Performance dashboard"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm">
                          Visual dashboard showing key performance improvements after implementation
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Testimonials Content */}
                {activeTab === 'testimonials' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <h3 className="text-xl font-semibold mb-6">Client Testimonials</h3>
                    
                    {activeCaseStudy.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-6 rounded-xl bg-black/40 border border-[#00E6E6]/20 relative"
                      >
                        {/* Quote mark */}
                        <div className="absolute -top-6 -left-2 text-8xl text-[#00E6E6]/20 font-serif">"</div>
                        
                        <div className="flex gap-6">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                            <Image 
                              src={testimonial.image} 
                              alt={testimonial.author} 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-300 italic mb-4 relative">
                              {testimonial.quote}
                            </p>
                            <div>
                              <p className="font-semibold text-white">{testimonial.author}</p>
                              <p className="text-sm text-gray-400">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Case Study Video */}
                    <div className="pt-4">
                      <h3 className="text-lg font-semibold mb-4">Case Study Video</h3>
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40 border border-[#00E6E6]/20 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 rounded-full bg-[#00E6E6]/20 flex items-center justify-center mx-auto mb-4">
                            <div className="w-14 h-14 rounded-full bg-[#00E6E6] flex items-center justify-center">
                              <ArrowRight className="w-6 h-6 text-black ml-1" />
                            </div>
                          </div>
                          <p className="text-gray-300">Watch the full case study video</p>
                          <div className="mt-4">
                            <button className="text-[#00E6E6] hover:text-white transition-colors font-medium flex items-center gap-1 mx-auto">
                              Play Video <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="p-8 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
            <p className="text-gray-300 mb-8">
              Let us help you transform your business with our AI and blockchain solutions. Our team of experts will work with you to understand your unique challenges and create a customized solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                onClick={() => window.open('/case-studies/all', '_blank')}
              >
                View All Case Studies
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Shield(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}