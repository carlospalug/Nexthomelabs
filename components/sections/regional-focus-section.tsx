"use client";

import { motion } from "framer-motion";
import { Globe2, Users, Building2, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const regions = [
  {
    name: "East Africa",
    countries: ["Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi"],
    focus: [
      "AI-driven Agricultural Solutions",
      "FinTech Innovation",
      "Healthcare Technology",
      "Education Technology"
    ],
    metrics: {
      projects: 25,
      partners: 12,
      impact: "2.5M+ users"
    }
  },
  {
    name: "West Africa",
    countries: ["Nigeria", "Ghana", "Senegal", "Ivory Coast"],
    focus: [
      "Financial Services",
      "Supply Chain Solutions",
      "Energy Technology",
      "Digital Commerce"
    ],
    metrics: {
      projects: 18,
      partners: 8,
      impact: "1.8M+ users"
    }
  },
  {
    name: "Southern Africa",
    countries: ["South Africa", "Botswana", "Zimbabwe", "Zambia"],
    focus: [
      "Mining Technology",
      "Smart Manufacturing",
      "Renewable Energy",
      "Digital Infrastructure"
    ],
    metrics: {
      projects: 15,
      partners: 6,
      impact: "1.2M+ users"
    }
  }
];

const partnerships = {
  current: [
    {
      name: "Tech Innovation Hub - Uganda",
      type: "Research & Development",
      focus: "AI & Blockchain Innovation"
    },
    {
      name: "Digital Africa Initiative",
      type: "Technology Education",
      focus: "Capacity Building"
    }
  ],
  opportunities: [
    "Research Institutions",
    "Technology Companies",
    "Government Agencies",
    "Educational Institutions",
    "Innovation Hubs"
  ]
};

const marketInsights = [
  {
    region: "East Africa",
    metrics: {
      "AI Adoption Rate": "35%",
      "Market Growth": "45% YoY",
      "Digital Transformation": "52% businesses"
    }
  },
  {
    region: "West Africa",
    metrics: {
      "AI Adoption Rate": "32%",
      "Market Growth": "40% YoY",
      "Digital Transformation": "48% businesses"
    }
  },
  {
    region: "Southern Africa",
    metrics: {
      "AI Adoption Rate": "38%",
      "Market Growth": "42% YoY",
      "Digital Transformation": "55% businesses"
    }
  }
];

export function RegionalFocusSection() {
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe2 className="w-8 h-8 text-[#00E6E6]" />
            <h2 className="text-4xl md:text-5xl font-bold">Regional Focus</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While our solutions serve clients globally, we maintain a strong focus on African markets, understanding their unique challenges and opportunities
          </p>
        </motion.div>

        {/* Regional Coverage */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">{region.name}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-[#00E6E6] mb-2">Countries</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country) => (
                      <span
                        key={country}
                        className="px-2 py-1 rounded-full bg-[#00E6E6]/10 text-sm"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-[#00E6E6] mb-2">Focus Areas</h4>
                  <ul className="space-y-2">
                    {region.focus.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#00E6E6]/10">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#00E6E6]">{region.metrics.projects}</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#00E6E6]">{region.metrics.partners}</div>
                    <div className="text-xs text-gray-400">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#00E6E6]">{region.metrics.impact}</div>
                    <div className="text-xs text-gray-400">Impact</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Insights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Market Insights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40"
              >
                <h4 className="text-lg font-semibold mb-4">{insight.region}</h4>
                <div className="space-y-4">
                  {Object.entries(insight.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-400">{key}</span>
                      <span className="text-[#00E6E6] font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Partnerships */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Current Partnerships</h3>
              <div className="space-y-4">
                {partnerships.current.map((partner) => (
                  <div
                    key={partner.name}
                    className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/20"
                  >
                    <h4 className="font-semibold mb-2">{partner.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{partner.type}</span>
                      <span>•</span>
                      <span>{partner.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Partnership Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Partnership Opportunities</h3>
              <div className="space-y-4">
                {partnerships.opportunities.map((opportunity) => (
                  <div
                    key={opportunity}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/20"
                  >
                    <Building2 className="w-5 h-5 text-[#00E6E6]" />
                    <span>{opportunity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button 
                    className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                  >
                    Become a Partner
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}