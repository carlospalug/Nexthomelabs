"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

// Import header normally since it doesn't have animations
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from '@/components/ui/button';
import { team } from '@/lib/team-data';

// Import all section components in logical order
import { ChatInterfaceSection } from "@/components/sections/chat-interface-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OffersSection } from "@/components/sections/offers-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WhyAISection } from "@/components/sections/why-ai-section";
import { MarketGraphSection } from "@/components/sections/market-graph-section";
import { AIServicesSection } from "@/components/sections/ai-services-section";
import { WebDevSection } from "@/components/sections/web-dev-section";
import { CentGPTSection } from "@/components/sections/cent-gpt-section";
import { DetailedCaseStudiesSection } from "@/components/sections/detailed-case-studies-section";
import { ResearchSection } from "@/components/sections/research-section";
import { BlockchainExplorerSection } from "@/components/sections/blockchain-explorer-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TechnologyDeepDiveSection } from "@/components/sections/technology-deep-dive-section";
import { InnovationLabSection } from "@/components/sections/innovation-lab-section";
import { LearningHubSection } from "@/components/sections/learning-hub-section";
import { NewsSection } from "@/components/sections/news-section";
import { RegionalFocusSection } from "@/components/sections/regional-focus-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { AISafetyEthicsSection } from "@/components/sections/ai-safety-ethics-section";
import { EmpoweringSection } from "@/components/sections/empowering-section";
import { PartnershipsEcosystemSection } from "@/components/sections/partnerships-ecosystem-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { TrustBuildingSection } from "@/components/sections/trust-building-section";
import { TeamVisionariesSection } from "@/components/sections/team-visionaries-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="flex min-h-screen flex-col">
        {/* Main user interaction section */}
        <ChatInterfaceSection />
        
        {/* Core introduction */}
        <HeroSection />
        
        {/* Key business offerings */}
        <OffersSection />
        <FeaturesSection />
        <WhyAISection />
        
        {/* Trust building and value proposition section */}
        <TrustBuildingSection />
        
        {/* Market and services sections */}
        <MarketGraphSection />
        <AIServicesSection />
        <WebDevSection />
        
        {/* Product showcase */}
        <CentGPTSection />
        <DetailedCaseStudiesSection />
        
        {/* Knowledge and expertise sections */}
        <ResearchSection />
        <BlockchainExplorerSection />
        <TechStackSection />
        <TechnologyDeepDiveSection />
        <InnovationLabSection />
        <LearningHubSection />
        
        {/* News and regional information */}
        <NewsSection />
        <RegionalFocusSection />
        
        {/* Additional value sections */}
        <SustainabilitySection />
        <AISafetyEthicsSection />
        <EmpoweringSection />
        <PartnershipsEcosystemSection />
        <PartnersSection />
        
        {/* Team Section - Redesigned */}
        <TeamVisionariesSection />
      </main>
      <SiteFooter />
    </div>
  );
}