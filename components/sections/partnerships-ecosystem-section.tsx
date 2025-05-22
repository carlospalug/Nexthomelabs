"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Handshake, Globe, Users, Building, AlignCenterVertical as Certificate, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

// Define partnership categories and partners
const partnerCategories = [
  {
    id: "technology",
    name: "Technology Partners",
    description: "Strategic integrations with leading technology providers",
    partners: [
      {
        name: "NVIDIA",
        logo: "https://pnghq.com/wp-content/uploads/2023/02/nvidia-logo-hi-res-png-6796-1536x1159.png",
        description: "AI computing technology partner",
        collaboration: "NVIDIA provides GPU infrastructure for our AI and machine learning workloads, enabling faster training and inference for our CentGPT models."
      },
      {
        name: "Ethereum Foundation",
        logo: "https://logosmarcas.net/wp-content/uploads/2020/12/Ethereum-Simbolo.png",
        description: "Blockchain infrastructure collaboration",
        collaboration: "We work with the Ethereum Foundation to develop scalable blockchain solutions and contribute to the ecosystem through open-source development."
      },
      {
        name: "Hugging Face",
        logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
        description: "AI model repository partnership",
        collaboration: "Our partnership with Hugging Face enables efficient model sharing, fine-tuning, and deployment, accelerating our AI development pipeline."
      }
    ]
  },
  {
    id: "academic",
    name: "Academic Collaborations",
    description: "Research partnerships with leading institutions",
    partners: [
      {
        name: "Makerere University",
        logo: "https://i.ibb.co/GPnxS9c/makerere.png",
        description: "Academic research collaboration",
        collaboration: "Joint research initiatives in AI for healthcare and agriculture, including student mentorship programs and curriculum development."
      },
      {
        name: "MIT Media Lab",
        logo: "https://i.ibb.co/PMdJ0s7/MIT-Media-Lab.png",
        description: "Innovation research partner",
        collaboration: "Collaborative projects exploring next-generation AI applications and human-computer interaction paradigms."
      },
      {
        name: "African Institute for Mathematical Sciences",
        logo: "https://i.ibb.co/R7SQpH8/AIMS-logo.png",
        description: "AI talent development",
        collaboration: "Talent development programs focused on nurturing African AI researchers and practitioners."
      }
    ]
  },
  {
    id: "industry",
    name: "Industry Alliances",
    description: "Strategic industry partnerships and memberships",
    partners: [
      {
        name: "Africa Blockchain Alliance",
        logo: "https://i.ibb.co/Vt5pML3/Africa-Blockchain-Alliance.png",
        description: "Blockchain industry consortium",
        collaboration: "Founding member focused on advancing blockchain adoption across African industries and regulatory frameworks."
      },
      {
        name: "East African AI Alliance",
        logo: "https://i.ibb.co/MNhsBt0/East-African-AI-Alliance.png",
        description: "Regional AI industry group",
        collaboration: "Leadership role in establishing AI standards and best practices for East African businesses and governments."
      },
      {
        name: "Global AI Ethics Consortium",
        logo: "https://i.ibb.co/sbcT06S/Ethics-Consortium.png",
        description: "Ethics and responsible AI development",
        collaboration: "Contributing to global AI ethics standards with a focus on ensuring African perspectives are represented."
      }
    ]
  }
];

// Ecosystem involvement details
const ecosystemInvolvement = [
  {
    title: "Open Source Contributions",
    icon: Globe,
    description: "Active contributions to key open source projects",
    metrics: "20+ projects supported",
    highlights: [
      "Core contributor to African language NLP libraries",
      "Developed blockchain interoperability standards",
      "Created educational AI resources for developing nations"
    ]
  },
  {
    title: "Community Building",
    icon: Users,
    description: "Fostering tech communities across Africa",
    metrics: "10,000+ community members",
    highlights: [
      "Monthly AI & blockchain meetups across 5 countries",
      "Youth coding bootcamps and hackathons",
      "Women in Tech mentorship programs"
    ]
  },
  {
    title: "Industry Standards",
    icon: Certificate,
    description: "Shaping technology standards for Africa",
    metrics: "8 industry standards developed",
    highlights: [
      "Co-authored AI ethics framework for African contexts",
      "Developed blockchain implementation guidelines for financial institutions",
      "Created AI model evaluation criteria for public sector use"
    ]
  }
];

// Testimonials from partners
const partnerTestimonials = [
  {
    quote: "NextHomeLabs has been an invaluable partner in our mission to democratize AI across Africa. Their technical expertise and understanding of local contexts create solutions that truly address African challenges.",
    author: "Dr. Sarah Mwangi",
    role: "Director of Innovation, East African Technology Council"
  },
  {
    quote: "Our collaboration with NextHomeLabs has accelerated our blockchain implementation timelines dramatically. Their team bridges the gap between cutting-edge technology and practical business applications.",
    author: "John Okafor",
    role: "Chief Technology Officer, Pan-African Financial Services"
  }
];

export function PartnershipsEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState("technology");
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const currentCategory = partnerCategories.find(cat => cat.id === activeCategory);

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
            <Handshake className="w-8 h-8 text-[#00E6E6]" />
            <h2 className="text-4xl md:text-5xl font-bold">Partnerships & Ecosystem</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with industry leaders and academic institutions to drive innovation and create impactful technology solutions
          </p>
        </motion.div>

        {/* Partnership Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partnerCategories.map((category) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeCategory === category.id
                  ? 'bg-[#00E6E6] text-black'
                  : 'bg-[#00E6E6]/10 text-white hover:bg-[#00E6E6]/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Partners Grid */}
        {currentCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-4">{currentCategory.name}</h3>
            <p className="text-gray-400 mb-8">{currentCategory.description}</p>

            <div className="grid md:grid-cols-3 gap-6">
              {currentCategory.partners.map((partner) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative group cursor-pointer ${
                    selectedPartner === partner.name ? 'ring-2 ring-[#00E6E6]' : ''
                  }`}
                  onClick={() => setSelectedPartner(selectedPartner === partner.name ? null : partner.name)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm hover:border-[#00E6E6]/40 transition-all duration-300">
                    {/* Partner Logo */}
                    <div className="h-16 bg-white rounded-lg p-2 flex items-center justify-center mb-4">
                      <div className="relative h-full w-full">
                        <Image 
                          src={partner.logo} 
                          alt={partner.name} 
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Partner Details */}
                    <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
                    <p className="text-gray-400 mb-4">{partner.description}</p>
                    
                    {/* Collaboration Details (expandable) */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      selectedPartner === partner.name ? 'max-h-40' : 'max-h-0'
                    }`}>
                      <div className="pt-4 border-t border-[#00E6E6]/10">
                        <h5 className="text-sm font-medium text-[#00E6E6] mb-2">Collaboration Details</h5>
                        <p className="text-gray-300 text-sm">{partner.collaboration}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <button
                        className="text-[#00E6E6] text-sm font-medium flex items-center gap-1 hover:text-white transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPartner(selectedPartner === partner.name ? null : partner.name);
                        }}
                      >
                        {selectedPartner === partner.name ? 'Show Less' : 'Learn More'}
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Ecosystem Involvement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8">Ecosystem Involvement</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ecosystemInvolvement.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="w-6 h-6 text-[#00E6E6]" />
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                  </div>
                  
                  <p className="text-gray-400 mb-3">{item.description}</p>
                  <div className="text-[#00E6E6] font-semibold mb-4">{item.metrics}</div>
                  
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6] mt-1.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8">Partner Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm relative"
              >
                {/* Quotation mark */}
                <div className="absolute -top-6 -left-1 text-[80px] text-[#00E6E6]/20 font-serif">"</div>
                
                <p className="text-gray-300 relative z-10 mb-6 italic">
                  {testimonial.quote}
                </p>
                
                <div className="flex flex-col">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm max-w-3xl mx-auto">
            <Building className="w-12 h-12 text-[#00E6E6] mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Interested in Partnering With Us?</h3>
            <p className="text-gray-300 mb-8">
              Join our growing ecosystem of partners and collaborators. Together, we can create innovative solutions that drive technological advancement and social impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                >
                  Become a Partner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/research">
                <Button 
                  variant="outline"
                  className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                >
                  Explore Research Collaborations
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}