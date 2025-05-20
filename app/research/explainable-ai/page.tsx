"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Link as LinkIcon, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    alt: "AI Visualization",
    caption: "Making AI decisions transparent and interpretable"
  },
  {
    url: "https://images.unsplash.com/photo-1502951682449-e5b93545d46e?auto=format&fit=crop&w=1200&q=80",
    alt: "Data Interpretation",
    caption: "Understanding complex AI patterns and relationships"
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Trust in Technology",
    caption: "Building trust through transparent AI systems"
  }
];

const keyBenefits = [
  {
    title: "Promoting Trust",
    description: "Users are more likely to trust AI systems when they understand how decisions are made."
  },
  {
    title: "Ensuring Accountability",
    description: "Transparent systems allow developers and organizations to take responsibility for AI outcomes."
  },
  {
    title: "Enhancing Decision-Making",
    description: "Clear explanations enable users to make informed decisions based on AI recommendations."
  },
  {
    title: "Meeting Ethical Standards",
    description: "Explainability helps AI systems adhere to ethical guidelines and regulatory requirements."
  }
];

const applications = [
  {
    title: "Healthcare",
    description: "Explainable AI helps medical professionals understand how diagnostic tools arrive at predictions, improving patient outcomes and fostering trust.",
    examples: [
      "Diagnostic explanations",
      "Treatment recommendations",
      "Patient risk assessment"
    ]
  },
  {
    title: "Finance",
    description: "Transparent algorithms allow financial institutions to explain credit decisions, fraud detection, and investment strategies to regulators and customers.",
    examples: [
      "Credit scoring",
      "Fraud detection",
      "Investment analysis"
    ]
  },
  {
    title: "Education",
    description: "AI systems used in education provide insights into student performance and personalized learning paths, ensuring educators understand the recommendations.",
    examples: [
      "Learning analytics",
      "Performance assessment",
      "Curriculum planning"
    ]
  },
  {
    title: "Law Enforcement",
    description: "Explainable AI aids in identifying biases and ensuring fairness in AI-powered surveillance and predictive policing systems.",
    examples: [
      "Decision transparency",
      "Bias detection",
      "Policy compliance"
    ]
  }
];

const centGPTFeatures = [
  {
    title: "Interactive Explanations",
    description: "Users can query CentGPT for detailed explanations of its responses, including the data and reasoning behind them."
  },
  {
    title: "Feature Attribution",
    description: "CentGPT highlights which inputs had the most significant impact on its decisions, helping users understand key drivers."
  },
  {
    title: "Scenario Analysis",
    description: "Users can explore 'what-if' scenarios to see how different inputs would influence outcomes."
  },
  {
    title: "Bias Detection",
    description: "CentGPT identifies potential biases in its responses, promoting fairness and inclusivity."
  },
  {
    title: "Customizable Insights",
    description: "CentGPT allows users to set priorities for specific types of transparency, catering explanations to individual needs."
  }
];

const challenges = [
  {
    title: "Balancing Complexity",
    description: "Simplifying explanations without oversimplifying the underlying logic is a delicate task."
  },
  {
    title: "Ensuring Scalability",
    description: "As AI systems grow more complex, maintaining transparency across large-scale models becomes more difficult."
  },
  {
    title: "Addressing Bias",
    description: "Transparency alone isn't enough; it must be paired with efforts to identify and mitigate biases in AI systems."
  },
  {
    title: "User Interpretation",
    description: "Even the most transparent systems require users to have basic knowledge of AI to fully grasp explanations."
  }
];

const futureVision = [
  {
    title: "Real-Time Explanations",
    description: "Developing systems that provide instant, detailed explanations alongside predictions."
  },
  {
    title: "Personalized Transparency",
    description: "Tailoring explanations to individual users based on their expertise and needs."
  },
  {
    title: "Universal Standards",
    description: "Collaborating with global organizations to establish guidelines for explainable AI across industries."
  },
  {
    title: "AI-Assisted Explanations",
    description: "Leveraging AI to generate clear, context-aware explanations for complex models."
  }
];

export default function ExplainableAIPage() {
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
              <LinkIcon className="w-8 h-8" />
              <div className="flex items-center text-sm">
                Research
                <ChevronRight className="w-4 h-4 mx-1" />
                Explainable AI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Explainable AI: Bringing Clarity to Artificial Intelligence
            </h1>
            <p className="text-xl text-gray-400">
              Making AI systems more transparent, accountable, and trustworthy through innovative explanation techniques
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

          {/* Introduction */}
          <section className="space-y-6 prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              As artificial intelligence becomes more integrated into our lives, the need for transparency in its decision-making processes grows increasingly important. Explainable AI (XAI), a field dedicated to making AI systems more interpretable, is at the heart of this movement.
            </p>
          </section>

          {/* Key Benefits Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Need for Explainable AI</h2>
            <p className="text-gray-300">
              AI systems, especially those powered by deep learning, are often described as "black boxes" because their internal workings are difficult to interpret. While these systems excel at making predictions and decisions, the lack of clarity around how they arrive at these outcomes can lead to mistrust and unintended consequences.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#00E6E6] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Applications of Explainable AI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {app.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CentGPT Integration */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Explainable AI in CentGPT</h2>
            <p className="text-gray-300">
              At the core of CentGPT lies a commitment to transparency. By integrating explainable AI, CentGPT goes beyond providing answers—it explains the "why" behind every response.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {centGPTFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Challenges Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Challenges and Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-400">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Future Vision */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Future of Explainable AI</h2>
            <p className="text-gray-300">
              As AI continues to evolve, explainability will become a defining feature of trustworthy systems. Our vision for the future encompasses revolutionary changes in how AI systems communicate and justify their decisions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {futureVision.map((vision, index) => (
                <motion.div
                  key={vision.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {vision.title}
                  </h3>
                  <p className="text-gray-400">
                    {vision.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Experience Transparent AI</h2>
            <p className="text-gray-300">
              At NextHomeLabs, we're committed to making AI more transparent and trustworthy. Through our innovative approaches to explainable AI, we're creating systems that not only perform well but also help users understand and trust their decisions.
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
