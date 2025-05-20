"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Stethoscope, ChevronRight, ArrowRight, Brain, Activity, HeartPulse, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "diagnostics",
    title: "AI-Powered Diagnostics and Early Detection",
    content: `Artificial Intelligence is revolutionizing medical diagnostics through advanced image analysis and pattern recognition. Machine learning algorithms can now analyze medical imaging data, including X-rays, MRIs, and CT scans, with remarkable accuracy. These AI systems assist healthcare professionals in detecting diseases earlier and more accurately than ever before.

    The impact is particularly significant in radiology and pathology, where AI can identify subtle patterns that might be missed by the human eye. Early detection of conditions like cancer, cardiovascular diseases, and neurological disorders has improved significantly, leading to better patient outcomes through timely intervention.`,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "95%",
      label: "Diagnostic Accuracy"
    }
  },
  {
    id: "treatment",
    title: "Personalized Treatment Plans and Drug Development",
    content: `AI is transforming treatment planning by analyzing vast amounts of patient data to develop personalized therapeutic approaches. By considering factors such as genetic makeup, lifestyle, and medical history, AI systems can recommend tailored treatment strategies that maximize effectiveness while minimizing side effects.

    In drug development, AI accelerates the process of discovering new medications by analyzing molecular structures and predicting their potential effectiveness. This has led to significant reductions in both the time and cost associated with bringing new treatments to market.`,
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b3e?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "60%",
      label: "Faster Drug Development"
    }
  },
  {
    id: "monitoring",
    title: "Remote Patient Monitoring and Predictive Care",
    content: `The integration of AI with IoT devices has enabled sophisticated remote patient monitoring systems. These systems continuously track vital signs and health metrics, using AI to analyze data in real-time and alert healthcare providers to potential issues before they become critical.

    Predictive analytics powered by AI can forecast patient deterioration, helping healthcare teams intervene proactively rather than reactively. This approach has shown particular promise in managing chronic conditions and reducing hospital readmission rates.`,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "40%",
      label: "Reduced Readmissions"
    }
  },
  {
    id: "operations",
    title: "Healthcare Operations and Resource Optimization",
    content: `AI is streamlining healthcare operations through intelligent scheduling, resource allocation, and workflow optimization. Machine learning algorithms can predict patient flow patterns, helping hospitals optimize staffing levels and resource distribution.

    Administrative tasks such as appointment scheduling, documentation, and billing are being automated, allowing healthcare professionals to focus more time on patient care. This operational efficiency translates to reduced costs and improved patient satisfaction.`,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    stats: {
      value: "30%",
      label: "Operational Cost Reduction"
    }
  }
];

const keyFeatures = [
  {
    title: "Advanced Analytics",
    icon: Brain,
    description: "AI-powered analysis of medical data for improved decision-making",
    capabilities: [
      "Pattern recognition in medical imaging",
      "Predictive health analytics",
      "Clinical decision support"
    ]
  },
  {
    title: "Real-time Monitoring",
    icon: Activity,
    description: "Continuous patient monitoring and early warning systems",
    capabilities: [
      "Vital signs tracking",
      "Anomaly detection",
      "Automated alerts"
    ]
  },
  {
    title: "Clinical Efficiency",
    icon: HeartPulse,
    description: "Streamlined workflows and resource optimization",
    capabilities: [
      "Automated scheduling",
      "Resource allocation",
      "Documentation assistance"
    ]
  },
  {
    title: "Research Support",
    icon: Microscope,
    description: "Accelerated medical research and drug discovery",
    capabilities: [
      "Clinical trial matching",
      "Drug development",
      "Research data analysis"
    ]
  }
];

export default function AIHealthcarePage() {
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
              <Stethoscope className="w-8 h-8" />
              <div className="flex items-center text-sm">
                News
                <ChevronRight className="w-4 h-4 mx-1" />
                Healthcare Innovation
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI in Healthcare: Revolutionizing Patient Care
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>By NextHomeLabs Team</span>
              </div>
              <span>•</span>
              <span>March 25, 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              In the rapidly evolving landscape of modern medicine, Artificial Intelligence (AI) is emerging as a transformative force, revolutionizing how healthcare is delivered and advancing medical innovation. By harnessing the power of AI, healthcare providers can enhance diagnostic accuracy, streamline operations, and offer personalized treatment plans, ultimately improving patient outcomes and making care more accessible.
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
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Future of AI in Healthcare</h2>
            <p className="text-gray-300 leading-relaxed">
              As AI technology continues to evolve, we can expect even more groundbreaking applications in healthcare. From advanced robotic surgery to AI-powered mental health support, the possibilities are endless. The key will be ensuring these innovations remain accessible and beneficial to all communities while maintaining the highest standards of patient care and privacy.
            </p>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Transform Healthcare with AI</h3>
              <p className="text-gray-300 mb-6">
                Discover how NextHomeLabs' AI solutions can revolutionize your healthcare organization. From advanced diagnostics to operational efficiency, we're here to help you embrace the future of medicine.
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
