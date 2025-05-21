"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Award, CheckCircle, Users, Star } from "lucide-react";
import Link from "next/link";

export function TrustBuildingSection() {
  // Testimonials from satisfied clients
  const testimonials = [
    {
      quote: "NextHomeLabs transformed our business with their AI solutions. We've seen a 40% increase in efficiency and significant cost reductions.",
      author: "Sarah Johnson",
      position: "CTO, EastAfrica Finance",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Their blockchain implementation was seamless and completely secure. The team's expertise is unmatched in the African tech space.",
      author: "David Mwangi",
      position: "Head of Innovation, KenyaTech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The custom AI solution developed by NextHomeLabs helped us reduce decision-making time by 65% while improving accuracy.",
      author: "Grace Ochieng",
      position: "Operations Director, Uganda Health Systems",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Trust indicators and certifications
  const trustIndicators = [
    {
      icon: Shield,
      title: "ISO 27001 Certified",
      description: "Internationally recognized information security standard"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your data is always protected with military-grade security"
    },
    {
      icon: Award,
      title: "Award-Winning Solutions",
      description: "Recognized for excellence in AI and blockchain innovation"
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime Guarantee",
      description: "Reliable services you can count on 24/7/365"
    }
  ];

  // Key value propositions
  const valuePropositions = [
    {
      title: "Reduce Operational Costs",
      description: "Cut expenses by up to 40% through intelligent automation and process optimization",
      metric: "40% Cost Reduction"
    },
    {
      title: "Accelerate Decision Making",
      description: "Make data-driven decisions faster with AI-powered analytics and insights",
      metric: "65% Faster Decisions"
    },
    {
      title: "Enhance Security & Compliance",
      description: "Protect your business with advanced security solutions and regulatory compliance",
      metric: "99.9% Security Rating"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold">Trusted by Leading Organizations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of businesses that rely on NextHomeLabs for secure, innovative technology solutions
          </p>
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {valuePropositions.map((value, index) => (
            <div 
              key={value.title}
              className="relative group overflow-hidden border border-[#00E6E6]/20 rounded-xl bg-black/40 backdrop-blur-sm p-6 hover:border-[#00E6E6]/40 transition-colors duration-300"
            >
              {/* Background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E6E6]/0 via-[#00E6E6]/10 to-[#00E6E6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

              <div className="relative">
                <div className="bg-[#00E6E6]/10 rounded-full p-3 w-fit mb-4">
                  <Star className="w-6 h-6 text-[#00E6E6]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 mb-4">{value.description}</p>
                <div className="text-[#00E6E6] text-xl font-bold">{value.metric}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Client Testimonials */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our Clients Say
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-[#00E6E6]/10 rounded-xl p-6 relative"
              >
                {/* Quotation mark */}
                <div className="absolute -top-6 -left-1 text-[80px] text-[#00E6E6]/20 font-serif">"</div>
                
                <p className="text-gray-300 relative z-10 mb-6 italic">{testimonial.quote}</p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicators & Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Security & Compliance
          </motion.h3>

          <div className="grid md:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 border border-[#00E6E6]/10 rounded-xl p-6 text-center hover:border-[#00E6E6]/30 transition-colors duration-300"
              >
                <div className="bg-[#00E6E6]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="w-8 h-8 text-[#00E6E6]" />
                </div>
                <h4 className="font-bold mb-2">{indicator.title}</h4>
                <p className="text-sm text-gray-400">{indicator.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clients Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 mt-24"
        >
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center mb-2">
              <Users className="w-5 h-5 text-[#00E6E6]" />
              <h3 className="text-3xl font-bold">100+</h3>
            </div>
            <p className="text-gray-400">Satisfied Clients</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center mb-2">
              <CheckCircle className="w-5 h-5 text-[#00E6E6]" />
              <h3 className="text-3xl font-bold">250+</h3>
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center mb-2">
              <Award className="w-5 h-5 text-[#00E6E6]" />
              <h3 className="text-3xl font-bold">15+</h3>
            </div>
            <p className="text-gray-400">Industry Awards</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with secure and innovative technology solutions?
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
            >
              Start Your Journey
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}