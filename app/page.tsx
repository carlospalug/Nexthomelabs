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
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ResearchSection } from "@/components/sections/research-section";
import { BlockchainExplorerSection } from "@/components/sections/blockchain-explorer-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TechnologyDeepDiveSection } from "@/components/sections/technology-deep-dive-section";
import { InnovationLabSection } from "@/components/sections/innovation-lab-section";
import { LearningHubSection } from "@/components/sections/learning-hub-section";
import { NewsSection } from "@/components/sections/news-section";
import { RegionalFocusSection } from "@/components/sections/regional-focus-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { EmpoweringSection } from "@/components/sections/empowering-section";
import { PartnershipsEcosystemSection } from "@/components/sections/partnerships-ecosystem-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { TrustBuildingSection } from "@/components/sections/trust-building-section";

export default function Home() {
  const ohood = team.find(member => member.slug === "ohoodrichard");
  const yusuf = team.find(member => member.slug === "yusufabdulhakim");
  const farooq = team.find(member => member.slug === "sseruwufarooq");
  const nicholas = team.find(member => member.slug === "tumwesigyenicholas");
  const antoniy = team.find(member => member.slug === "antoniykanu");

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
        <CaseStudiesSection />
        
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
        <EmpoweringSection />
        <PartnershipsEcosystemSection />
        <PartnersSection />
        
        {/* Team Section */}
        <section className="bg-black py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Meet Our Visionaries
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[ohood, yusuf, farooq, nicholas, antoniy].map((member) => member && (
                <Link key={member.id} href={`/team/${member.slug}`}>
                  <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
                    <div className="relative aspect-square w-full max-w-[300px] rounded-xl overflow-hidden mb-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="px-4 py-3 rounded-lg bg-[#1F2937]/80 backdrop-blur-sm w-full">
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {member.slug === "ohoodrichard" ? 
                          `"Innovation in technology isn't just about creating solutions; it's about crafting a better future for generations to come."` :
                        member.slug === "yusufabdulhakim" ?
                          `"The true power of AI lies not in replacing human intelligence, but in amplifying our capacity to solve complex challenges."` :
                        member.slug === "sseruwufarooq" ?
                          `"Building robust and scalable systems is an art that combines technical excellence with deep understanding of user needs."` :
                        member.slug === "antoniykanu" ?
                          `"At the intersection of AI and security lies the future of digital resilience, where intelligent systems protect as much as they empower."` :
                          `"Technology advocacy is about bridging the gap between innovation and understanding, making advanced solutions accessible to all."`
                        }
                      </p>
                      <p className="text-xs text-gray-400">
                        {member.name} <br /> {member.role}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/team">
                <Button
                  variant="outline"
                  className="text-white border-[#00E6E6] hover:bg-[#00E6E6]/10 hover:border-[#00E6E6]/80"
                >
                  Explore Our Full Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}