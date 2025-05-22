"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Linkedin, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { team } from "@/lib/team-data";

export function TeamVisionariesSection() {
  // Get team members
  const ohood = team.find(member => member.slug === "ohoodrichard");
  const yusuf = team.find(member => member.slug === "yusufabdulhakim");
  const farooq = team.find(member => member.slug === "sseruwufarooq");
  const nicholas = team.find(member => member.slug === "tumwesigyenicholas");
  const antoniy = team.find(member => member.slug === "antoniykanu");

  const featuredMembers = [ohood, yusuf, farooq, nicholas, antoniy].filter(Boolean);

  // State for currently active member
  const [activeMember, setActiveMember] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Create refs for animation
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  // Auto-rotate featured member (unless user is hovering)
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveMember((prev) => (prev + 1) % featuredMembers.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredMembers.length, isHovering]);

  // Generate a gradient based on team member
  const getMemberGradient = (index: number) => {
    const gradients = [
      "from-cyan-500 to-blue-600", // Ohood
      "from-emerald-500 to-teal-600", // Yusuf
      "from-violet-500 to-purple-600", // Farooq
      "from-amber-500 to-orange-600", // Nicholas
      "from-rose-500 to-pink-600" // Antoniy
    ];
    
    return gradients[index % gradients.length];
  };

  // Generate a quote color based on team member
  const getMemberAccentColor = (index: number) => {
    const colors = [
      "text-cyan-400", // Ohood
      "text-emerald-400", // Yusuf
      "text-violet-400", // Farooq
      "text-amber-400", // Nicholas
      "text-rose-400" // Antoniy
    ];
    
    return colors[index % colors.length];
  };

  // Generate a background based on team member
  const getMemberBackground = (index: number) => {
    const backgrounds = [
      "from-cyan-950/20 to-transparent", // Ohood
      "from-emerald-950/20 to-transparent", // Yusuf
      "from-violet-950/20 to-transparent", // Farooq
      "from-amber-950/20 to-transparent", // Nicholas
      "from-rose-950/20 to-transparent" // Antoniy
    ];
    
    return backgrounds[index % backgrounds.length];
  };

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${getMemberBackground(activeMember)} opacity-80 transition-all duration-1000`} />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,230,0.05),transparent_50%)]" 
          style={{ opacity: isInView ? 1 : 0, transition: 'opacity 1.5s ease-out' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E6E6] to-white mb-6">
            Meet Our Visionaries
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The innovative minds behind NextHomeLabs building the future of technology in Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Featured Member Showcase - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {featuredMembers.map((member, index) => member && (
              <div 
                key={member.id}
                className={`${activeMember === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} absolute inset-0 transition-all duration-700 ease-in-out`}
                style={{ position: activeMember === index ? 'relative' : 'absolute' }}
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className={`absolute -left-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br ${getMemberGradient(index)} opacity-20 blur-2xl`}></div>
                  <div className={`absolute -right-5 -bottom-5 w-32 h-32 rounded-full bg-gradient-to-br ${getMemberGradient(index)} opacity-20 blur-2xl`}></div>
                  
                  {/* Profile Image */}
                  <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20`}></div>
                  
                  {/* Member info */}
                  <div className="absolute left-0 right-0 bottom-0 p-6 z-30">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm mb-3 ${getMemberAccentColor(index)}`}>
                      {member.role}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    
                    {/* Social links */}
                    <div className="flex gap-3 mt-4">
                      {member.twitterlink && (
                        <a 
                          href={member.twitterlink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Twitter className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.linkedInLink && (
                        <a 
                          href={member.linkedInLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      )}
                      <Link 
                        href={`/team/${member.slug}`}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Team Bio and Selection - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-7"
          >
            {/* Featured quote from active team member */}
            <div className="mb-10">
              {featuredMembers.map((member, index) => member && (
                <div 
                  key={`quote-${member.id}`}
                  className={`${activeMember === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-in-out absolute`}
                  style={{ position: activeMember === index ? 'relative' : 'absolute' }}
                >
                  <div className="relative">
                    <div className={`absolute -left-8 -top-6 text-8xl ${getMemberAccentColor(index)} opacity-20 font-serif`}>"</div>
                    <blockquote className={`text-2xl md:text-3xl font-light italic leading-relaxed mb-6 pl-2 ${getMemberAccentColor(index)}`}>
                      {member.slug === "ohoodrichard" ? 
                        "Innovation in technology isn't just about creating solutions; it's about crafting a better future for generations to come." :
                      member.slug === "yusufabdulhakim" ?
                        "The true power of AI lies not in replacing human intelligence, but in amplifying our capacity to solve complex challenges." :
                      member.slug === "sseruwufarooq" ?
                        "Building robust and scalable systems is an art that combines technical excellence with deep understanding of user needs." :
                      member.slug === "antoniykanu" ?
                        "At the intersection of AI and security lies the future of digital resilience, where intelligent systems protect as much as they empower." :
                        "Technology advocacy is about bridging the gap between innovation and understanding, making advanced solutions accessible to all."
                      }
                    </blockquote>
                    <div className="flex items-center justify-end">
                      <div className="h-px bg-gradient-to-r from-transparent to-gray-600 w-32 mr-3"></div>
                      <p className="text-gray-400 text-sm">{member.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Team selector */}
            <div 
              className="mt-12 grid grid-cols-5 gap-4"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {featuredMembers.map((member, index) => member && (
                <button 
                  key={`selector-${member.id}`}
                  className="relative group"
                  onClick={() => setActiveMember(index)}
                >
                  <div className={`
                    w-full aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300
                    ${activeMember === index 
                      ? `border-[#00E6E6] shadow-lg shadow-[#00E6E6]/20` 
                      : `border-gray-800 opacity-60 group-hover:opacity-100 group-hover:border-gray-600`
                    }
                  `}>
                    <Image 
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeMember === index ? 'bg-[#00E6E6] text-black' : 'bg-white/20 text-white'}`}>
                        {activeMember === index ? '✓' : ''}
                      </div>
                    </div>
                  </div>
                  <div className={`mt-2 text-center transition-colors ${activeMember === index ? 'text-[#00E6E6]' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    <p className="text-xs font-medium truncate">{member.name.split(' ')[0]}</p>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Short description of active team member */}
            <div className="mt-8">
              {featuredMembers.map((member, index) => member && (
                <div 
                  key={`bio-${member.id}`}
                  className={`${activeMember === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-500`}
                  style={{ display: activeMember === index ? 'block' : 'none' }}
                >
                  <div className="p-6 rounded-xl border border-[#00E6E6]/10 bg-black/40 backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed mb-4">{member.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise?.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-2 py-1 rounded-full bg-[#00E6E6]/10 text-[#00E6E6] text-xs">
                          {skill}
                        </span>
                      ))}
                      {member.expertise && member.expertise.length > 3 && (
                        <span className="px-2 py-1 rounded-full bg-[#00E6E6]/10 text-[#00E6E6] text-xs">
                          +{member.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                    <Link href={`/team/${member.slug}`} className="block">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10 w-full"
                      >
                        View Full Profile
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/team">
            <Button
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black px-8"
              size="lg"
            >
              Meet Our Full Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}