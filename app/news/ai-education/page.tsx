"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, GraduationCap, ChevronRight, ArrowRight, Brain, BookOpen, Users, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "personalized-learning",
    title: "Personalized Learning Experiences",
    content: `AI tailors educational content to meet the unique needs of each student, enabling a more personalized learning experience. Through data analysis, AI identifies individual learning styles, strengths, and areas for improvement, adapting instructional methods accordingly. For example, AI-driven platforms can recommend specific learning materials, set customized goals, and track progress in real-time. This approach not only accelerates learning but also boosts student confidence and motivation.

    In addition, AI enables adaptive learning, where the difficulty level of exercises dynamically adjusts based on a student's performance. This ensures that students are neither overwhelmed nor under-challenged, creating an optimal learning environment. Such innovations make education more inclusive, accommodating diverse learning abilities and paces.`,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "45%",
      label: "Learning Improvement"
    }
  },
  {
    id: "intelligent-tutoring",
    title: "Intelligent Tutoring Systems",
    content: `AI-powered intelligent tutoring systems (ITS) serve as virtual instructors, providing students with instant feedback and support. These systems simulate one-on-one interactions, offering detailed explanations, answering questions, and guiding learners through complex concepts. Unlike traditional tutoring, ITS are available 24/7, making high-quality educational assistance accessible to students worldwide.

    For instance, AI tutors in subjects like mathematics, science, and language learning use natural language processing (NLP) to understand student queries and deliver clear, concise explanations. They also track student progress, identifying recurring mistakes and tailoring future lessons to address specific challenges.`,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "24/7",
      label: "Learning Support"
    }
  },
  {
    id: "teacher-productivity",
    title: "Enhancing Teacher Productivity",
    content: `AI significantly reduces the administrative workload for teachers, allowing them to focus on instruction and student engagement. Automated grading systems evaluate assignments and exams quickly and accurately, providing detailed performance analytics. These systems can assess objective tests and even written essays using advanced algorithms that analyze grammar, coherence, and argument structure.

    Moreover, AI-powered tools assist in lesson planning by suggesting relevant teaching materials, activities, and assessments based on curriculum requirements. Teachers can also leverage AI to monitor classroom dynamics, identifying students who may need additional support or those excelling and ready for advanced challenges.`,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "60%",
      label: "Time Saved"
    }
  },
  {
    id: "analytics",
    title: "Predictive Analytics for Student Success",
    content: `AI uses predictive analytics to identify at-risk students and recommend interventions to improve their academic outcomes. By analyzing attendance records, grades, and behavioral data, AI systems can forecast potential challenges and alert educators early. This proactive approach enables timely support, helping students stay on track and achieve their goals.

    Furthermore, AI-driven insights help educators identify patterns in student performance, enabling them to refine their teaching strategies and improve overall classroom effectiveness. Schools and universities can leverage these analytics to make data-informed decisions that enhance the quality of education.`,
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "35%",
      label: "Risk Reduction"
    }
  }
];

const keyFeatures = [
  {
    title: "Adaptive Learning",
    icon: Brain,
    description: "Personalized learning paths that adapt to student progress",
    capabilities: [
      "Dynamic content adjustment",
      "Individual pace setting",
      "Skill gap identification"
    ]
  },
  {
    title: "Smart Content",
    icon: BookOpen,
    description: "AI-generated and curated educational materials",
    capabilities: [
      "Interactive textbooks",
      "Customized exercises",
      "Multimedia resources"
    ]
  },
  {
    title: "Automated Assessment",
    icon: LineChart,
    description: "Intelligent grading and performance tracking",
    capabilities: [
      "Real-time feedback",
      "Progress monitoring",
      "Performance analytics"
    ]
  },
  {
    title: "Collaborative Learning",
    icon: Users,
    description: "AI-facilitated group learning experiences",
    capabilities: [
      "Peer matching",
      "Group project tools",
      "Discussion facilitation"
    ]
  }
];

export default function AIEducationPage() {
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
              <GraduationCap className="w-8 h-8" />
              <div className="flex items-center text-sm">
                News
                <ChevronRight className="w-4 h-4 mx-1" />
                Education Innovation
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI in Education: Revolutionizing Learning and Teaching
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>By NextHomeLabs Team</span>
              </div>
              <span>•</span>
              <span>March 28, 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Artificial Intelligence (AI) is transforming education by introducing innovative solutions that enhance both learning and teaching experiences. From personalized learning paths to intelligent tutoring systems, AI has become a cornerstone in modernizing education systems worldwide.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <feature.icon className="w-6 h-6 text-[#00E6E6]" />
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </motion.section>
          ))}

          {/* Future Outlook */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Future of AI in Education</h2>
            <p className="text-gray-300 leading-relaxed">
              As AI technology continues to evolve, we can expect even more innovative applications in education. From advanced virtual reality learning environments to sophisticated emotional intelligence recognition systems, the future of education will be increasingly personalized, engaging, and effective.
            </p>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Transform Education with AI</h3>
              <p className="text-gray-300 mb-6">
                Discover how NextHomeLabs' AI solutions can revolutionize your educational institution. From personalized learning to advanced analytics, we're here to help you embrace the future of education.
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
