"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, Book, Code, FileText, GraduationCap, Video, Calendar, Clock, Users, ExternalLink, Download, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const resources = [
  {
    category: "Documentation",
    icon: FileText,
    items: [
      {
        title: "Getting Started Guide",
        description: "Complete guide to start with AI and blockchain development",
        type: "PDF",
        link: "/docs/getting-started.pdf"
      },
      {
        title: "API Documentation",
        description: "Detailed API references and integration guides",
        type: "Web",
        link: "/docs/api"
      },
      {
        title: "Best Practices",
        description: "Industry standards and recommended practices",
        type: "PDF",
        link: "/docs/best-practices.pdf"
      }
    ]
  },
  {
    category: "Tutorials",
    icon: Book,
    items: [
      {
        title: "AI Model Training",
        description: "Step-by-step guide to training custom AI models",
        duration: "2 hours",
        level: "Intermediate"
      },
      {
        title: "Blockchain Development",
        description: "Building and deploying smart contracts",
        duration: "3 hours",
        level: "Advanced"
      },
      {
        title: "System Integration",
        description: "Integrating AI and blockchain solutions",
        duration: "2.5 hours",
        level: "Advanced"
      }
    ]
  },
  {
    category: "Code Samples",
    icon: Code,
    items: [
      {
        title: "AI Implementation Examples",
        description: "Sample code for common AI implementations",
        language: "Python",
        github: "https://github.com/nexthomelabs/ai-examples"
      },
      {
        title: "Smart Contract Templates",
        description: "Ready-to-use smart contract templates",
        language: "Solidity",
        github: "https://github.com/nexthomelabs/smart-contracts"
      },
      {
        title: "Integration Boilerplates",
        description: "Starter templates for system integration",
        language: "TypeScript",
        github: "https://github.com/nexthomelabs/integration-examples"
      }
    ]
  }
];

const upcomingWebinars = [
  {
    id: 1,
    title: "Introduction to AI Development",
    date: "Next Tuesday",
    time: "9:30 PM - 10:30 PM",
    instructor: "Yusuf M. Abdulhakim",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    topics: [
      "Understanding AI fundamentals",
      "Setting up development environment",
      "Building your first AI model"
    ],
    meetLink: "https://meet.google.com/abc-defg-hij"
  },
  {
    id: 2,
    title: "Blockchain Development Fundamentals",
    date: "Following Tuesday",
    time: "9:30 PM - 10:30 PM",
    instructor: "Ohood Richard",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    topics: [
      "Blockchain basics and architecture",
      "Smart contract development",
      "Testing and deployment"
    ],
    meetLink: "https://meet.google.com/xyz-uvwx-yz"
  }
];

const pastWebinars = [
  {
    title: "Advanced AI Model Training",
    instructor: "Yusuf M. Abdulhakim",
    duration: "1 hour",
    views: "1.2k",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    recordingLink: "https://youtube.com/recording1"
  },
  {
    title: "Enterprise Blockchain Solutions",
    instructor: "Ohood Richard",
    duration: "1 hour",
    views: "956",
    thumbnail: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80",
    recordingLink: "https://youtube.com/recording2"
  }
];

export function LearningHubSection() {
  const [activeCategory, setActiveCategory] = useState(resources[0]);

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
            <GraduationCap className="w-8 h-8 text-[#00E6E6]" />
            <h2 className="text-4xl md:text-5xl font-bold">Learning Hub</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive resources to master AI and blockchain development
          </p>
        </motion.div>

        {/* Resources Section */}
        <div className="mb-24">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {resources.map((category) => (
              <motion.button
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeCategory.category === category.category
                    ? 'bg-[#00E6E6] text-black'
                    : 'bg-[#00E6E6]/10 text-white hover:bg-[#00E6E6]/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.category}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {activeCategory.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  
                  <div className="space-y-3">
                    {'type' in item && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <FileText className="w-4 h-4 text-[#00E6E6]" />
                        {item.type} Document
                      </div>
                    )}
                    {'duration' in item && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4 text-[#00E6E6]" />
                        {item.duration}
                      </div>
                    )}
                    {'level' in item && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Users className="w-4 h-4 text-[#00E6E6]" />
                        {item.level}
                      </div>
                    )}
                    {'language' in item && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Code className="w-4 h-4 text-[#00E6E6]" />
                        {item.language}
                      </div>
                    )}
                  </div>

                  {'link' in item && (
                    <Button 
                      variant="ghost"
                      className="w-full mt-4 text-[#00E6E6] hover:bg-[#00E6E6]/10 group"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                  {'github' in item && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="ghost"
                        className="w-full mt-4 text-[#00E6E6] hover:bg-[#00E6E6]/10 group"
                      >
                        View on GitHub
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Webinars Section */}
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Upcoming Webinars</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingWebinars.map((webinar) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={webinar.image}
                        alt={webinar.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-2 text-sm text-[#00E6E6] mb-2">
                          <Calendar className="w-4 h-4" />
                          {webinar.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#00E6E6]">
                          <Clock className="w-4 h-4" />
                          {webinar.time}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">{webinar.title}</h4>
                      <p className="text-[#00E6E6] mb-4">with {webinar.instructor}</p>
                      <div className="space-y-2 mb-6">
                        {webinar.topics.map((topic, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                            {topic}
                          </div>
                        ))}
                      </div>
                      <a href={webinar.meetLink} target="_blank" rel="noopener noreferrer">
                        <Button 
                          className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                        >
                          Join Google Meet
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Webinars */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Past Webinars</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={webinar.thumbnail}
                        alt={webinar.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-[#00E6E6]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">{webinar.title}</h4>
                      <p className="text-[#00E6E6] mb-4">with {webinar.instructor}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {webinar.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {webinar.views} views
                        </div>
                      </div>
                      <a href={webinar.recordingLink} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline"
                          className="w-full border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                        >
                          Watch Recording
                          <Video className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}