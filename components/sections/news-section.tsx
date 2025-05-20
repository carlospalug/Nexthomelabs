"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: "Integrating AI into Your Business in Uganda/Africa",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive guide to integrating AI into your business operations in Uganda and across Africa. Learn how NextHomeLabs and CentGPT are transforming African enterprises through innovative AI solutions.",
    link: "/news/ai-business"
  },
  {
    title: "AI in Human Resources and Operations",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    description: "Many businesses are leveraging AI to streamline HR processes, supply chain management, and marketing. You can emphasize how your AI solutions can help companies reduce costs and increase efficiency in these areas, reflecting the growing trend of AI adoption in operational management.",
    link: "/news/ai-in-hr"
  },
  {
    title: "CentGPT: Uganda's Breakthrough in Local AI Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    description: "NextHomeLabs introduces CentGPT, marking a significant milestone in Uganda's AI landscape. This innovation showcases local technological prowess, offering tailored solutions that address regional needs.",
    link: "/news/centgpt-uganda"
  },
  {
    title: "AI in Environmental Sustainability",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
    description: "Discover how AI is being used to combat climate change by optimizing energy use, improving waste management, and predicting environmental trends. AI-driven insights help businesses adopt sustainable practices.",
    link: "/news/ai-sustainability",
    comingSoon: true
  },
  {
    title: "AI in Creative Industries",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    description: "Explore how AI is revolutionizing creative fields such as art, music, and content creation. Learn about AI tools that can generate artwork, compose music, and write stories.",
    link: "/news/ai-creative-industries",
    comingSoon: true
  }
];

export function NewsSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
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
            <Newspaper className="w-8 h-8 text-[#00E6E6]" />
            <h2 className="text-4xl md:text-5xl font-bold">News And Updates</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about the latest developments in AI technology and our innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative h-full p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm hover:border-[#00E6E6]/40 transition-all duration-300">
                <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {item.comingSoon && (
                    <div className="absolute top-4 left-4 bg-black/80 text-[#00E6E6] px-3 py-1 rounded-full text-sm font-medium border border-[#00E6E6]/20">
                      Coming Soon
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00E6E6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {item.description}
                </p>
                <Link href={item.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/news">
            <Button 
              size="lg"
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
            >
              View All News
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
