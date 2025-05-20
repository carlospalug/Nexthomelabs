"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { team } from "@/lib/team-data";

export function TeamSection() {
  // Filter for only Ohood Richard and Yusuf M Abdulhakim
  const featuredMembers = team.filter(member => member.slug === "ohoodrichard" || member.slug === "yusufabdulhakim");

  return (
    <section className="py-24 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bringing together world-class expertise in AI, machine learning, and blockchain technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-4 md:p-6 rounded-lg border border-[#374151] bg-[#1F2937]/40 backdrop-blur-sm hover:border-[#00E6E6]/40 transition-all duration-300">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2">
                  {/* Removed name and role */}
                  <p className="text-gray-400 text-sm italic text-center">
                    {member.slug === "ohoodrichard"
                      ? '"Architecting the future of AI and blockchain solutions."'
                      : '"Optimizing AI systems for peak performance and precision."'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/team">
            <Button variant="outline" className="text-white hover:bg-[#00E6E6]/10 hover:text-[#00E6E6]">
              Explore Our Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
