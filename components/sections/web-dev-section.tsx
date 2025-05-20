"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Building2, Server, Lock, Database, Cloud, Sparkles, Shield } from "lucide-react";
import Link from "next/link";

const clients = [
  {
    name: "Axor Investments",
    logo: "https://i.ibb.co/b5q3k8r/logo.jpg",
    description: "Investment and financial services platform",
    link: "https://axorinvestments.com",
    achievements: ["Automated investment tracking", "Real-time portfolio analytics"]
  },
  {
    name: "KARENA BEAUTY",
    logo: "https://i.ibb.co/x8dCJ1H2/beauty-shop-logo.jpg",
    description: "Luxury Beauty And Wellness Spa In Kampala",
    link: "https://karenabeauty.com",
    achievements: ["Beauty reached to Masses", "Real-time portfolio analytics"]
  },
  {
    name: "Fique Game Solutions",
    logo: "https://i.ibb.co/1Gb6SwvB/Whats-App-Image-2025-02-07-at-10-31-47-4202e5b7.jpg",
    description: "Your Ultimate Playstation Store In Uganda",
    link: "https://fiquegamesolutions.com",
    achievements: ["Sold A Playstation To Almost Every Ugandan", "Real-time portfolio analytics"]
  },
];

const services = [
  {
    title: "Enterprise Systems",
    icon: Building2,
    description: "Custom enterprise solutions tailored to your business needs",
    features: [
      "ERP Systems",
      "CRM Solutions",
      "Business Process Automation",
      "Data Management Systems"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"]
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Modern, responsive websites and web applications",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "Content Management Systems"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"]
  },
  {
    title: "Backend Systems",
    icon: Server,
    description: "Robust and scalable backend infrastructure",
    features: [
      "API Development",
      "Database Design",
      "Cloud Integration",
      "System Architecture"
    ],
    technologies: ["Node.js", "Python", "MongoDB", "Docker"]
  },
  {
    title: "Blockchain Backend Systems",
    icon: Server,
    description: "Secure, scalable, and decentralized backend infrastructure for blockchain applications",
    features: [
    "Smart Contract Development",
    "Blockchain Network Integration",
    "Decentralized Data Storage",
    "Consensus Mechanism Implementation"
    ],
    technologies: [
    "Solidity", "Web3.js", "Rust", "Scrypt", "IPFS"]
  },
  {
    title: "Custom Software",
    icon: Code,
    description: "Bespoke software solutions for unique challenges",
    features: [
      "Custom Applications",
      "Integration Solutions",
      "Legacy System Modernization",
      "Software Maintenance"
    ],
    technologies: ["React Native", "Flutter", "Electron", "AWS"]
  },
  {
    title: "AI & ML Solutions",
    icon: Server,
    description: "Intelligent systems that learn and adapt to drive business value",
    features: [
    "Predictive Modeling",
    "Natural Language Processing",
    "Computer Vision",
    "Chatbot Development"
    ],
    technologies: ["TensorFlow", "PyTorch", "Keras", "NLTK"]
    },
    {
      title: "Cybersecurity Solutions",
      icon: Shield,
      description: "Protecting your business from cyber threats and vulnerabilities",
      features: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Incident Response",
      "Security Consulting"
      ],
      technologies: [
      "OWASP",
      "Burp Suite",
      "Nmap",
      "Metasploit"
      ]
      },
      {
        title: "IoT Solutions",
        icon: Database,
        description: "Connecting devices and sensors to drive business innovation",
        features: [
        "Device Integration",
        "Data Analytics",
        "Real-time Monitoring",
        "Automation"
        ],
        technologies: [
        "Arduino",
        "Raspberry Pi",
        "MQTT",
        "AWS IoT"
        ]
        }
        
      
    
];

const additionalServices = [
  {
    title: "Cloud Solutions",
    icon: Cloud,
    description: "Scalable cloud infrastructure and deployment",
    features: ["AWS", "Google Cloud", "Azure", "Cloud Migration"]
  },
  {
    title: "Database Design",
    icon: Database,
    description: "Optimized database architecture and management",
    features: ["Schema Design", "Performance Tuning", "Data Migration", "Backup Solutions"]
  },
  {
    title: "Security Implementation",
    icon: Shield,
    description: "Enterprise-grade security measures",
    features: ["SSL/TLS", "OAuth", "2FA", "Security Audits"]
  },
  {
    title: "AI Integration",
    icon: Sparkles,
    description: "Smart features powered by artificial intelligence",
    features: ["ML Models", "Chatbots", "Predictive Analytics", "Data Processing"]
  }
];

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your needs and objectives",
    details: "In-depth analysis of requirements and business goals"
  },
  {
    title: "Planning",
    description: "Detailed project roadmap and architecture",
    details: "Technical specifications and timeline development"
  },
  {
    title: "Development",
    description: "Agile development with regular updates",
    details: "Iterative development with continuous feedback"
  },
  {
    title: "Testing",
    description: "Comprehensive quality assurance",
    details: "Thorough testing and bug fixing"
  },
  {
    title: "Deployment",
    description: "Smooth launch and implementation",
    details: "Production deployment and monitoring"
  },
  {
    title: "Support",
    description: "Ongoing maintenance and updates",
    details: "Regular updates and technical support"
  }
];

export function WebDevSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
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
          className="text-center mb-10 space-y-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Web Development & Enterprise Solutions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From custom enterprise systems to modern web applications, we deliver scalable solutions that drive business growth
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-4 rounded-lg border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <service.icon className="w-5 h-5 text-[#00E6E6]" />
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-300 mb-3">{service.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#00E6E6] mb-2">Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                          <span className="w-1 h-1 rounded-full bg-[#00E6E6]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#00E6E6] mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-[#00E6E6]/10 border border-[#00E6E6]/20 text-[#00E6E6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <service.icon className="w-5 h-5 text-[#00E6E6]" />
                  <h4 className="font-semibold">{service.title}</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#00E6E6]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Development Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#00E6E6]/10 flex items-center justify-center text-[#00E6E6] font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold">{step.title}</h4>
                </div>
                <p className="text-gray-300 mb-2">{step.description}</p>
                <p className="text-sm text-gray-400">{step.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-2xl font-bold">Featured Clients</h3>
            <Lock className="w-4 h-4 text-[#00E6E6]" />
          </div>
          <p className="text-sm text-gray-400 mb-6 max-w-2xl mx-auto">
            A selection of our public portfolio. Many of our enterprise clients and projects remain confidential under strict NDAs, reflecting our commitment to client privacy and trust.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-4 rounded-lg border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                  <div className="h-20 relative mb-3">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{client.name}</h4>
                  <p className="text-sm text-gray-400 mb-3">{client.description}</p>
                  <div className="space-y-2 mb-4">
                    {client.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                  <Link href={client.link} target="_blank">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10 group"
                    >
                      Visit Website
                      <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="mailto:usf@nexthomelabs.com?subject=Project%20Inquiry%20-%20NextHomeLabs&body=Hello%20NextHomeLabs%20Team%2C%0A%0AI'm%20interested%20in%20starting%20a%20project%20with%20your%20team.%0A%0AProject%20Details%3A%0A-%20Project%20Type%3A%0A-%20Timeline%3A%0A-%20Key%20Requirements%3A%0A%0ABusiness%20Information%3A%0A-%20Company%20Name%3A%0A-%20Industry%3A%0A-%20Contact%20Person%3A%0A%0AAdditional%20Notes%3A%0A%0A%0ABest%20regards">
            <Button 
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
