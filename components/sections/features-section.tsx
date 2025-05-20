"use client";

import { motion } from "framer-motion";
import { Brain, Database, Globe2 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Artificial Intelligence",
    description: "Advanced AI solutions powering the next generation of applications",
    icon: Brain,
    link: "https://centgpt.com",
    external: true
  },
  {
    title: "Blockchain Technology",
    description: "Secure, transparent, and decentralized systems for the future",
    icon: Database,
    link: "/research/blockchain-basics",
    external: false
  },
  {
    title: "Global Impact",
    description: "Creating solutions that reach across borders and transform lives",
    icon: Globe2,
    link: "/impact",
    external: false
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Transforming Tomorrow
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {feature.external ? (
                <a 
                  href={feature.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-8 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
                >
                  <feature.icon className="w-12 h-12 mb-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </a>
              ) : (
                <Link 
                  href={feature.link}
                  className="block p-8 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
                >
                  <feature.icon className="w-12 h-12 mb-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
