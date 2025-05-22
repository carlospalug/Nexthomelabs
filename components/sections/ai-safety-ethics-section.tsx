"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Eye, 
  Users, 
  FileText, 
  Lock, 
  GanttChartSquare,
  ArrowRight, 
  CheckCircle2,
  Download,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the main ethical principles
const ethicalPrinciples = [
  {
    id: "transparency",
    title: "Transparency & Explainability",
    icon: Eye,
    description: "Our AI systems are designed with transparency at their core. We ensure that AI decisions can be explained, understood, and interpreted by both technical and non-technical stakeholders.",
    practices: [
      "Comprehensive documentation of model architecture, training data, and decision processes",
      "Interactive tools for visualizing AI decision pathways",
      "Regular explainability reports detailing how conclusions are reached",
      "Plain-language explanations of complex AI processes"
    ],
    implementationExample: "CentGPT features a built-in explanation mode that details its reasoning process for each response, allowing users to understand exactly how conclusions were reached."
  },
  {
    id: "fairness",
    title: "Fairness & Bias Mitigation",
    icon: Users,
    description: "We proactively identify and address biases in our AI systems to ensure fair treatment across different demographic groups and use cases.",
    practices: [
      "Regular bias audits across different demographic groups and scenarios",
      "Diverse training datasets carefully curated to minimize inherent biases",
      "Fairness metrics incorporated into model evaluation frameworks",
      "Continuous monitoring for emergent biases post-deployment"
    ],
    implementationExample: "Our AI models undergo rigorous fairness testing across 52 demographic dimensions to ensure equitable performance regardless of user background or context."
  },
  {
    id: "accountability",
    title: "Accountability & Governance",
    icon: GanttChartSquare,
    description: "We establish clear accountability structures and governance frameworks for all AI development and deployment, ensuring responsible oversight throughout the AI lifecycle.",
    practices: [
      "Designated ethics board with decision-making authority",
      "Comprehensive impact assessments before deployment",
      "Clear chains of responsibility for AI outcomes",
      "Regular independent audits of AI systems"
    ],
    implementationExample: "Every AI project at NextHomeLabs undergoes a mandatory ethics review by our cross-functional ethics committee, which has veto power over deployment decisions."
  },
  {
    id: "privacy",
    title: "Privacy & Data Protection",
    icon: Lock,
    description: "Our AI systems are designed to maximize utility while minimizing data collection and ensuring robust protection of any personal information used.",
    practices: [
      "Privacy-by-design engineering approach",
      "Data minimization principles applied throughout",
      "Advanced anonymization and encryption technologies",
      "User control over their data with transparent options"
    ],
    implementationExample: "CentGPT's architecture prioritizes on-device processing where possible, and all server-side data is fully anonymized using advanced differential privacy techniques."
  }
];

// Case studies on ethical AI implementation
const ethicsCaseStudies = [
  {
    title: "Bias Mitigation in Financial Services AI",
    client: "Pan-African Banking Consortium",
    description: "We identified and eliminated demographic biases in a loan approval system, ensuring fair access to financial services while maintaining accurate risk assessment.",
    outcomes: [
      "30% reduction in approval disparities across demographic groups",
      "15% increase in loan approvals for previously underrepresented customers",
      "Maintained 99.2% accuracy in risk prediction",
      "Created transparent explanation system for all decisions"
    ],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Privacy-Preserving Healthcare Analytics",
    client: "Regional Healthcare Network",
    description: "Developed an AI system that performs advanced health data analytics while maintaining patient privacy through federated learning and differential privacy techniques.",
    outcomes: [
      "Zero exposure of personally identifiable information",
      "93% diagnostic accuracy matching centralized systems",
      "Compliance with all regional healthcare data regulations",
      "40% reduction in data storage and transfer requirements"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  }
];

// Ethical AI oversight processes
const oversightProcesses = [
  {
    title: "Ethics Review Board",
    description: "Independent committee of diverse experts that evaluates all major AI projects for ethical considerations",
    steps: [
      "Project proposal review",
      "Risk assessment",
      "Stakeholder impact analysis",
      "Mitigation strategy development",
      "Deployment approval or rejection"
    ]
  },
  {
    title: "Continuous Monitoring System",
    description: "Automated and human oversight for deployed AI systems to detect emerging ethical issues",
    steps: [
      "Automated fairness metrics tracking",
      "Performance disparity alerts",
      "Regular scheduled reviews",
      "User feedback analysis",
      "Third-party audit integration"
    ]
  },
  {
    title: "Ethical Incident Response Protocol",
    description: "Structured response process when ethical concerns or incidents occur",
    steps: [
      "Immediate system assessment",
      "Stakeholder notification",
      "Impact analysis",
      "Remediation planning",
      "Transparent reporting",
      "System improvement"
    ]
  }
];

// Community and industry engagement initiatives
const ethicsInitiatives = [
  {
    title: "African AI Ethics Consortium",
    description: "Founding member of a pan-African initiative to establish ethical AI standards specific to African contexts and needs",
    involvement: "Leadership & Founding Member"
  },
  {
    title: "Open Ethics in AI Framework",
    description: "Contributed to open-source ethical AI assessment tools and documentation to promote industry-wide adoption",
    involvement: "Core Contributor"
  },
  {
    title: "AI Ethics Education Program",
    description: "Free training program for developers, business leaders, and policymakers on ethical AI implementation",
    involvement: "Program Creator & Facilitator"
  }
];

export function AISafetyEthicsSection() {
  const [activePrinciple, setActivePrinciple] = useState(ethicalPrinciples[0].id);
  const [expandedItem, setExpandedItem] = useState<string | null>("oversight");

  // Get the current active principle details
  const currentPrinciple = ethicalPrinciples.find(p => p.id === activePrinciple);

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
            <Shield className="w-8 h-8 text-[#00E6E6]" />
            <h2 className="text-4xl md:text-5xl font-bold">AI Safety & Ethics</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to developing ethical, transparent, and responsible AI systems that prioritize fairness, accountability, and human well-being
          </p>
        </motion.div>

        {/* Our Ethical AI Principles */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8">Our Ethical AI Principles</h3>
          
          {/* Principles Navigation Tabs */}
          <div className="flex flex-wrap mb-12 gap-4 justify-center">
            {ethicalPrinciples.map((principle) => (
              <motion.button
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActivePrinciple(principle.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activePrinciple === principle.id
                    ? 'bg-[#00E6E6] text-black'
                    : 'bg-[#00E6E6]/10 text-white hover:bg-[#00E6E6]/20'
                }`}
              >
                <principle.icon className="w-5 h-5" />
                {principle.title}
              </motion.button>
            ))}
          </div>
          
          {/* Active Principle Details */}
          {currentPrinciple && (
            <motion.div
              key={currentPrinciple.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Left Column - Principle Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-[#00E6E6]/10">
                    <currentPrinciple.icon className="w-6 h-6 text-[#00E6E6]" />
                  </div>
                  <h3 className="text-2xl font-bold">{currentPrinciple.title}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {currentPrinciple.description}
                </p>
                
                <div className="p-6 rounded-xl bg-[#00E6E6]/5 border border-[#00E6E6]/20">
                  <h4 className="font-semibold mb-4 text-[#00E6E6]">Key Practices</h4>
                  <ul className="space-y-3">
                    {currentPrinciple.practices.map((practice, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#00E6E6] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-black/60 border border-[#00E6E6]/10">
                  <h4 className="font-semibold mb-2">Implementation Example</h4>
                  <p className="text-gray-400 text-sm italic">
                    {currentPrinciple.implementationExample}
                  </p>
                </div>
              </div>
              
              {/* Right Column - Visual Representation */}
              <div className="relative">
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src={
                      currentPrinciple.id === 'transparency' 
                        ? "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=800&q=80"
                        : currentPrinciple.id === 'fairness'
                        ? "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=800&q=80"
                        : currentPrinciple.id === 'accountability'
                        ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                        : "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={currentPrinciple.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-lg font-medium text-[#00E6E6]">Visualization</div>
                    <h4 className="text-2xl font-bold mb-2">
                      {
                        currentPrinciple.id === 'transparency' 
                          ? "AI Explainability Framework"
                          : currentPrinciple.id === 'fairness'
                          ? "Bias Detection & Mitigation"
                          : currentPrinciple.id === 'accountability'
                          ? "Governance & Responsibility Structure"
                          : "Privacy-Preserving Architecture"
                      }
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {
                        currentPrinciple.id === 'transparency' 
                          ? "Our multi-layered approach to making AI decision-making transparent and interpretable."
                          : currentPrinciple.id === 'fairness'
                          ? "Continuous monitoring and mitigation systems to detect and eliminate bias in AI systems."
                          : currentPrinciple.id === 'accountability'
                          ? "Clear chains of responsibility and oversight for AI development and deployment."
                          : "Technical architecture designed to maximize privacy and data protection."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Ethics in Practice Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold mb-8">Ethics in Practice: Case Studies</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ethicsCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                
                <div className="relative rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg">{caseStudy.title}</h4>
                      <p className="text-gray-300 text-sm">{caseStudy.client}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                    
                    <h5 className="font-semibold text-[#00E6E6] mb-3">Key Outcomes</h5>
                    <ul className="space-y-2">
                      {caseStudy.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="mt-6 text-[#00E6E6] text-sm flex items-center gap-1 hover:text-white transition-colors">
                      Read Full Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ethical AI Governance Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold mb-8">Our Ethical AI Governance</h3>
          
          <Accordion
            type="single"
            collapsible
            value={expandedItem}
            onValueChange={setExpandedItem}
            className="space-y-4"
          >
            {/* Oversight Processes */}
            <AccordionItem 
              value="oversight" 
              className="border border-[#00E6E6]/20 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-[#00E6E6]/5 transition-colors hover:no-underline">
                <div className="flex items-center gap-3">
                  <GanttChartSquare className="w-6 h-6 text-[#00E6E6]" />
                  <h4 className="text-lg font-semibold text-left">Oversight Processes</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="grid md:grid-cols-3 gap-4">
                  {oversightProcesses.map((process, index) => (
                    <div key={process.title} className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/10">
                      <h5 className="font-semibold mb-3">{process.title}</h5>
                      <p className="text-gray-400 text-sm mb-4">{process.description}</p>
                      
                      <div className="space-y-2">
                        {process.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-5 h-5 rounded-full bg-black/60 border border-[#00E6E6]/30 flex items-center justify-center flex-shrink-0">
                              {i + 1}
                            </div>
                            <span className="text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* Ethics Resources */}
            <AccordionItem 
              value="resources" 
              className="border border-[#00E6E6]/20 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-[#00E6E6]/5 transition-colors hover:no-underline">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#00E6E6]" />
                  <h4 className="text-lg font-semibold text-left">Ethics Resources & Documentation</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#00E6E6]/5 flex items-start gap-3">
                      <Download className="w-5 h-5 text-[#00E6E6] mt-0.5" />
                      <div>
                        <h5 className="font-medium mb-1">AI Ethics Framework</h5>
                        <p className="text-gray-400 text-sm mb-2">Our comprehensive ethical guidelines for AI development and deployment</p>
                        <button className="text-[#00E6E6] text-xs flex items-center gap-1 hover:text-white transition-colors">
                          Download PDF <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-[#00E6E6]/5 flex items-start gap-3">
                      <Download className="w-5 h-5 text-[#00E6E6] mt-0.5" />
                      <div>
                        <h5 className="font-medium mb-1">Bias Mitigation Toolkit</h5>
                        <p className="text-gray-400 text-sm mb-2">Open-source tools for identifying and addressing AI bias</p>
                        <button className="text-[#00E6E6] text-xs flex items-center gap-1 hover:text-white transition-colors">
                          Access Repository <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#00E6E6]/5 flex items-start gap-3">
                      <Download className="w-5 h-5 text-[#00E6E6] mt-0.5" />
                      <div>
                        <h5 className="font-medium mb-1">Ethics Impact Assessment Template</h5>
                        <p className="text-gray-400 text-sm mb-2">Structured framework for evaluating ethical implications of AI projects</p>
                        <button className="text-[#00E6E6] text-xs flex items-center gap-1 hover:text-white transition-colors">
                          Download Template <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-[#00E6E6]/5 flex items-start gap-3">
                      <Download className="w-5 h-5 text-[#00E6E6] mt-0.5" />
                      <div>
                        <h5 className="font-medium mb-1">Responsible AI Certification Criteria</h5>
                        <p className="text-gray-400 text-sm mb-2">Standards and requirements for our ethical AI certification</p>
                        <button className="text-[#00E6E6] text-xs flex items-center gap-1 hover:text-white transition-colors">
                          View Criteria <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* Community Initiatives */}
            <AccordionItem 
              value="initiatives" 
              className="border border-[#00E6E6]/20 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-[#00E6E6]/5 transition-colors hover:no-underline">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#00E6E6]" />
                  <h4 className="text-lg font-semibold text-left">Community & Industry Initiatives</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="grid md:grid-cols-3 gap-4">
                  {ethicsInitiatives.map((initiative, index) => (
                    <div key={initiative.title} className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/10">
                      <h5 className="font-semibold mb-3">{initiative.title}</h5>
                      <p className="text-gray-400 text-sm mb-4">{initiative.description}</p>
                      <div className="px-3 py-1 rounded-full bg-[#00E6E6]/10 text-xs text-[#00E6E6] inline-block">
                        {initiative.involvement}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link href="/research/ai-ethics">
                    <Button variant="outline" className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10">
                      Learn More About Our Ethics Work
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto p-8 border border-[#00E6E6]/20 rounded-xl bg-black/40 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Partner with Us for Responsible AI</h3>
            <p className="text-gray-300 mb-8">
              At NextHomeLabs, ethics isn't just a checkbox—it's foundational to our approach. Join us in building AI systems that are not only powerful but also fair, transparent, and beneficial for all.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/legal/responsible-ai">
                <Button
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                >
                  Read Our Responsible AI Policy
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                >
                  Contact Our Ethics Team
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}