"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Users, Brain, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "recruitment",
    title: "Revolutionizing Recruitment and Talent Acquisition",
    content: `AI is redefining the traditional recruitment process by automating time-consuming tasks such as resume screening and candidate shortlisting. With machine learning algorithms, organizations can analyze vast pools of applications and identify top candidates based on predefined criteria, thereby reducing human bias and ensuring a more objective selection process. AI-powered tools also enable companies to assess candidates' skills through automated tests and virtual interviews, providing a comprehensive evaluation of their suitability for specific roles. This not only speeds up the hiring process but also enhances its accuracy, allowing HR teams to focus on strategic decision-making.`,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "60%",
      label: "Reduction in Time-to-Hire"
    }
  },
  {
    id: "performance",
    title: "Enhancing Employee Engagement and Performance Management",
    content: `AI plays a pivotal role in fostering employee engagement and monitoring workplace performance. By utilizing AI-driven analytics, HR departments can track key performance indicators (KPIs) in real-time, identifying areas where employees excel and where additional support or training might be required. AI-powered chatbots facilitate seamless communication, answering employee queries, and providing instant support for HR-related concerns, thus improving overall satisfaction. Furthermore, AI assists in predicting employee turnover, enabling proactive measures to retain top talent and maintain a healthy workplace environment.`,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "45%",
      label: "Improved Employee Engagement"
    }
  },
  {
    id: "supply-chain",
    title: "Optimizing Supply Chain and Operational Efficiency",
    content: `In the realm of operations, AI has become indispensable for supply chain optimization. Advanced predictive analytics help businesses forecast demand, manage inventory levels, and anticipate potential disruptions, thereby ensuring smooth and cost-effective operations. Machine learning models analyze historical data to identify patterns and trends, enabling organizations to make data-driven decisions that minimize risks and maximize profitability. By integrating AI into logistics and warehouse management, companies can automate inventory tracking, optimize delivery routes, and ensure timely order fulfillment, significantly enhancing customer satisfaction.`,
    image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "80%",
      label: "Supply Chain Efficiency Increase"
    }
  },
  {
    id: "marketing",
    title: "AI-Driven Marketing Strategies",
    content: `Marketing has also witnessed a paradigm shift with the integration of AI. By analyzing consumer behavior and preferences, AI enables businesses to craft personalized marketing campaigns that resonate with their target audience. Predictive analytics tools help marketers identify emerging trends, optimize ad placements, and allocate budgets more effectively, thereby maximizing return on investment (ROI). AI-powered customer relationship management (CRM) systems further enhance customer interactions by delivering tailored recommendations and addressing queries in real-time, fostering brand loyalty and trust.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "35%",
      label: "Increase in Marketing ROI"
    }
  }
];

export default function AIinHRPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/news"
          className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#00E6E6]">
              <Users className="w-8 h-8" />
              <div className="flex items-center text-sm">
                News
                <ChevronRight className="w-4 h-4 mx-1" />
                AI Applications
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI in Human Resources and Operations
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>By Yusuf M. Abdulhakim</span>
              </div>
              <span>•</span>
              <span>March 20, 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              In today's dynamic business environment, Artificial Intelligence (AI) has emerged as a transformative force in streamlining operational workflows and enhancing human resource management. Many organizations are now leveraging AI to optimize critical areas such as employee recruitment, performance monitoring, supply chain management, and marketing, enabling greater efficiency and precision in decision-making processes.
            </p>
          </div>

          {/* Main Content */}
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-[#00E6E6]">{section.title}</h2>
              
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-[#00E6E6] text-black px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">{section.stats.value}</div>
                  <div className="text-sm">{section.stats.label}</div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}

          {/* Future Outlook */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Future of AI in Business Operations</h2>
            <p className="text-gray-300 leading-relaxed">
              As AI continues to evolve, its applications in human resources and operations are expected to grow exponentially. From automating routine administrative tasks to providing actionable insights for strategic planning, AI is set to become an indispensable tool for businesses striving to stay competitive in a rapidly changing market.
            </p>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Transform Your Business with AI</h3>
              <p className="text-gray-300 mb-6">
                Discover how AI can transform your HR and operational processes with CentGPT. Our advanced solutions help you streamline operations, enhance decision-making, and drive sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://centgpt.com" target="_blank">
                  <Button 
                    className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                  >
                    Try CentGPT
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline"
                    className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
