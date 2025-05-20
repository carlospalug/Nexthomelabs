"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Newspaper, Calendar, User, Tag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    title: "AI in Education: Revolutionizing Learning",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    description: "Explore how AI is transforming education through personalized learning paths, intelligent tutoring systems, and enhanced teaching capabilities. Discover the future of education.",
    date: "Jan 28, 2025",
    author: "Richard Ohood",
    category: "Education",
    link: "/news/ai-education",
    readTime: "12 min read"
  },
  {
    title: "AI in Healthcare: Revolutionizing Patient Care",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "Discover how artificial intelligence is transforming healthcare through advanced diagnostics, personalized treatments, and improved patient outcomes. From AI-powered diagnostics to remote monitoring, learn how technology is revolutionizing patient care.",
    date: "March 25, 2024",
    author: "NextHomeLabs Team",
    category: "Healthcare",
    link: "/news/ai-healthcare",
    readTime: "10 min read"
  },
  {
    title: "AI in Human Resources and Operations",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    description: "Many businesses are leveraging AI to streamline HR processes, supply chain management, and marketing. Discover how AI solutions can help companies reduce costs and increase efficiency.",
    date: "March 20, 2024",
    author: "Yusuf M. Abdulhakim",
    category: "AI Applications",
    link: "/news/ai-in-hr",
    readTime: "8 min read"
  },
  {
    title: "CentGPT: Uganda's Breakthrough in Local AI Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    description: "NextHomeLabs introduces CentGPT, marking a significant milestone in Uganda's AI landscape. This innovation showcases local technological prowess, offering tailored solutions that address regional needs.",
    date: "December 1, 2024",
    author: "NextHomeLabs Team",
    category: "Innovation",
    link: "/news/centgpt-uganda",
    readTime: "10 min read"
  },
  {
    title: "AI in Environmental Sustainability",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
    description: "Discover how AI is being used to combat climate change by optimizing energy use, improving waste management, and predicting environmental trends. AI-driven insights help businesses adopt sustainable practices.",
    date: "Coming Soon",
    author: "NextHomeLabs Team",
    category: "Sustainability",
    link: "#",
    readTime: "7 min read",
    comingSoon: true
  },
  {
    title: "AI in Creative Industries",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    description: "Explore how AI is revolutionizing creative fields such as art, music, and content creation. Learn about AI tools that can generate artwork, compose music, and write stories.",
    date: "Coming Soon",
    author: "NextHomeLabs Team",
    category: "AI & Creativity",
    link: "#",
    readTime: "6 min read",
    comingSoon: true
  }
];

const categories = [
  "All",
  "Education",
  "Healthcare",
  "AI Applications",
  "Innovation",
  "Sustainability",
  "AI & Creativity"
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Add Back to Home button */}
        <Link 
          href="/"
          className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Newspaper className="w-8 h-8 text-[#00E6E6]" />
              <h1 className="text-4xl md:text-5xl font-bold">News & Updates</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed about the latest developments in AI technology and our innovative solutions
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full border ${
                  category === "All"
                    ? "bg-[#00E6E6] text-black border-[#00E6E6]"
                    : "border-[#00E6E6]/20 text-gray-300 hover:bg-[#00E6E6]/10"
                } transition-colors`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Featured Article */}
          {newsArticles.slice(0, 1).map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Link href={article.link}>
                <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-[#00E6E6] text-black px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <span className="text-[#00E6E6] text-sm font-medium">{article.category}</span>
                        <h2 className="text-3xl font-bold mt-2 group-hover:text-[#00E6E6] transition-colors">
                          {article.title}
                        </h2>
                      </div>
                      <p className="text-gray-400 text-lg">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-[#00E6E6] hover:text-white hover:bg-[#00E6E6]/10 group"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <Link href={article.link}>
                  <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                    <div className="space-y-4">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {article.comingSoon && (
                          <div className="absolute top-4 left-4 bg-black/80 text-[#00E6E6] px-3 py-1 rounded-full text-sm font-medium border border-[#00E6E6]/20">
                            Coming Soon
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-[#00E6E6] text-sm font-medium">{article.category}</span>
                        <h2 className="text-xl font-bold mt-2 group-hover:text-[#00E6E6] transition-colors">
                          {article.title}
                        </h2>
                      </div>
                      <p className="text-gray-400">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      {!article.comingSoon && (
                        <Button 
                          variant="ghost" 
                          className="text-[#00E6E6] hover:text-white hover:bg-[#00E6E6]/10 group"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
