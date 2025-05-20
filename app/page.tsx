"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

// Import header normally since it doesn't have animations
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from '@/components/ui/button';
import { team } from '@/lib/team-data';

// Import all section components
import { ChatInterfaceSection } from "@/components/sections/chat-interface-section";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WhyAISection } from "@/components/sections/why-ai-section";
import { MarketGraphSection } from "@/components/sections/market-graph-section";
import { AIServicesSection } from "@/components/sections/ai-services-section";
import { WebDevSection } from "@/components/sections/web-dev-section";
import { EmpoweringSection } from "@/components/sections/empowering-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { ResearchSection } from "@/components/sections/research-section";
import { CentGPTSection } from "@/components/sections/cent-gpt-section";
import { NewsSection } from "@/components/sections/news-section";
import { OffersSection } from "@/components/sections/offers-section";
import { RegionalFocusSection } from "@/components/sections/regional-focus-section";
import { BlockchainExplorerSection } from "@/components/sections/blockchain-explorer-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { LearningHubSection } from "@/components/sections/learning-hub-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { InnovationLabSection } from "@/components/sections/innovation-lab-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";

export default function Home() {
  const ohood = team.find(member => member.slug === "ohoodrichard");
  const yusuf = team.find(member => member.slug === "yusufabdulhakim");
  const farooq = team.find(member => member.slug === "sseruwufarooq");
  const nicholas = team.find(member => member.slug === "tumwesigyenicholas");

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="flex min-h-screen flex-col">
        <ChatInterfaceSection />
        <HeroSection />
        <OffersSection />
        <FeaturesSection />
        <WhyAISection />
        <MarketGraphSection />
        <AIServicesSection />
        <WebDevSection />
        <EmpoweringSection />
        <PartnersSection />
        <ResearchSection />
        <CentGPTSection />
        <NewsSection />
        <RegionalFocusSection />
        <BlockchainExplorerSection />
        <CaseStudiesSection />
        <LearningHubSection />
        <TechStackSection />
        <InnovationLabSection />
        <SustainabilitySection />
        
        {/* Team Section */}
        <section className="bg-black py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Meet Our Visionaries
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[ohood, yusuf, farooq, nicholas].map((member) => member && (
                <div key={member.id} className="flex flex-col items-center">
                  <div className="relative aspect-square w-full max-w-[300px] rounded-xl overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
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
                        `"Technology advocacy is about bridging the gap between innovation and understanding, making advanced solutions accessible to all."`
                      }
                    </p>
                    <p className="text-xs text-gray-400">
                      {member.name} <br /> {member.role}
                    </p>
                  </div>
                </div>
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