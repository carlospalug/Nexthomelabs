"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Brain, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    alt: "Neural Network Visualization",
    caption: "Advanced neural networks powering our machine learning systems"
  },
  {
    url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    alt: "Data Analysis",
    caption: "Real-time data processing and pattern recognition"
  },
  {
    url: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80",
    alt: "AI Integration",
    caption: "Seamless integration of ML with CentGPT"
  }
];

const coreFeatures = [
  {
    title: "Deep Learning Algorithms",
    description: "These mimic how the human brain processes information, enabling CentGPT to handle complex tasks like creating human-like conversations or generating meaningful insights."
  },
  {
    title: "Predictive Models",
    description: "Using data to forecast trends, CentGPT empowers businesses, educators, and individuals to make smarter decisions based on reliable predictions."
  },
  {
    title: "Continuous Optimization",
    description: "Our systems don't just learn—they evolve. Every user interaction feeds back into the system, making CentGPT smarter with every use."
  }
];

const centGPTCapabilities = [
  {
    title: "Understand Language Like Never Before",
    description: "With cutting-edge natural language processing (NLP) built on ML, CentGPT can break down the nuances of human communication, respond accurately, and even adapt to different tones."
  },
  {
    title: "Analyze and Predict Outcomes",
    description: "Businesses use CentGPT to forecast sales trends, improve customer experiences, and automate processes, thanks to its predictive analytics capabilities."
  },
  {
    title: "Customize Interactions",
    description: "CentGPT personalizes experiences by learning about user preferences over time. It's like having a bespoke assistant tailored just for you."
  }
];

const applications = [
  {
    title: "Education",
    description: "Students and educators rely on CentGPT for research assistance, curriculum planning, and even automating tasks like grading."
  },
  {
    title: "Healthcare",
    description: "Advanced ML models help CentGPT provide personalized insights, track patient trends, and optimize hospital workflows."
  },
  {
    title: "Business Intelligence",
    description: "From predictive models to trend analysis, businesses use CentGPT to make critical decisions with precision and confidence."
  }
];

const visionPoints = [
  {
    title: "More Intuitive",
    description: "So that anyone, regardless of background, can harness its power."
  },
  {
    title: "More Efficient",
    description: "To ensure faster, real-time results without compromising accuracy."
  },
  {
    title: "More Impactful",
    description: "By solving bigger challenges in education, healthcare, and beyond."
  }
];

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
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
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#00E6E6]">
              <Brain className="w-8 h-8" />
              <div className="flex items-center text-sm">
                Research
                <ChevronRight className="w-4 h-4 mx-1" />
                Advanced Machine Learning
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Advanced Machine Learning: Driving Innovation at NextHomeLabs
            </h1>
            <p className="text-xl text-gray-400">
              Artificial Intelligence may be the future, but machine learning is the engine that makes it all possible.
            </p>
          </div>

          {/* Illustrations Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {illustrations.map((img, index) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm text-white">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Core of Advanced Machine Learning</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                What exactly is advanced machine learning? Simply put, it's a sophisticated approach to teaching machines how to learn and improve autonomously. Imagine a system capable of analyzing billions of pieces of data, identifying patterns humans might miss, and then using that knowledge to solve problems in real-time. That's what advanced machine learning does—and we've mastered it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#00E6E6] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CentGPT Integration Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Where Machine Learning Meets CentGPT</h2>
            <p className="text-gray-300">
              At the core of CentGPT lies our most advanced ML framework. This combination makes CentGPT far more than just a chatbot or assistant; it's a platform with limitless possibilities.
            </p>

            <div className="space-y-4">
              {centGPTCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Real-World Applications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {app.title}
                  </h3>
                  <p className="text-gray-400">
                    {app.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vision Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">NextHomeLabs' Vision for Machine Learning</h2>
            <p className="text-gray-300">
              At NextHomeLabs, we believe machine learning should empower—not intimidate. That's why our focus has always been on creating tools that are both powerful and accessible.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {point.title}
                  </h3>
                  <p className="text-gray-400">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Future is Here</h2>
            <p className="text-gray-300">
              Advanced Machine Learning isn't just a technology—it's a movement. At NextHomeLabs, it's the foundation for a brighter, smarter future. Through CentGPT, we've proven that innovation isn't just about building tools; it's about creating opportunities, unlocking potential, and driving change.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="https://nexthomelabs.com" target="_blank">
                <Button 
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                >
                  Visit NextHomeLabs
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://centgpt.com" target="_blank">
                <Button 
                  variant="outline"
                  className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                >
                  Try CentGPT
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
