"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HandshakeIcon, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const partners = [
  {
    name: "TensorFlow",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    description: "Advanced machine learning framework",
    hidden: true
  },
  {
    name: "NVIDIA",
    logo: "https://pnghq.com/wp-content/uploads/2023/02/nvidia-logo-hi-res-png-6796-1536x1159.png",
    description: "AI computing technology",
    hidden: false
  },
  {
    name: "Ethereum",
    logo: "https://logosmarcas.net/wp-content/uploads/2020/12/Ethereum-Simbolo.png",
    description: "Blockchain infrastructure",
    hidden: false
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
    description: "AI model repository and tools",
    hidden: false
  }
];

export function PartnersSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
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
            <HandshakeIcon className="w-8 h-8 text-[#00E6E6]" />
            <h2 className="text-4xl md:text-5xl font-bold">Our Partners</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with industry leaders to drive innovation and create cutting-edge AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${partner.hidden ? 'opacity-0 pointer-events-none' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative h-full p-4 rounded-lg border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm hover:border-[#00E6E6]/40 transition-all duration-300">
                <div className="h-16 relative mb-3 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-center group-hover:text-[#00E6E6] transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Link href="mailto:partners@nexthomelabs.com">
            <Button 
              size="lg"
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
            >
              Become a Partner
              <Mail className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <p className="text-sm text-gray-400">
            Contact us at partners@nexthomelabs.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
