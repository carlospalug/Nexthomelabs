"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, Mail, MapPin, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslation } from 'react-i18next';

const researchTopics = [
  {
    title: "Advanced Machine Learning",
    description: "Exploring cutting-edge machine learning algorithms and techniques",
    href: "/research/machine-learning",
    shortcut: "#machine-learning"
  },
  {
    title: "Decentralization",
    description: "Exploring real-world implications of decentralization",
    href: "/research/decentralization",
    shortcut: "#decentralization"
  },
  {
    title: "AI Agents",
    description: "Design and implementation of autonomous agents",
    href: "/research/ai-agents",
    shortcut: "#ai-agents"
  },
  {
    title: "Explainable AI",
    description: "Making AI decision-making processes transparent",
    href: "/research/explainable-ai",
    shortcut: "#explainable-ai"
  },
  {
    title: "AI Ethics",
    description: "Ensuring fair and unbiased AI systems",
    href: "/research/ai-ethics",
    shortcut: "#ai-ethics"
  },
  {
    title: "Blockchain Technology",
    description: "Core concepts and principles of blockchain",
    href: "/research/blockchain-basics",
    shortcut: "#blockchain"
  },
  {
    title: "Quantum Computing and AI",
    description: "Intersection of quantum computing and artificial intelligence",
    href: "/research/quantum-computing",
    shortcut: "#quantum-ai"
  },
  {
    title: "AI Automation",
    description: "Intelligent automation solutions for industries",
    href: "/research/automation",
    shortcut: "#automation"
  },
  {
    title: "AI for Cybersecurity",
    description: "AI-powered threat detection and prevention",
    href: "/research/cybersecurity",
    shortcut: "#cybersecurity"
  }
];

const productsMenu = [
  {
    title: "CentGPT",
    description: "Our flagship conversational AI model",
    href: "https://centgpt.com",
    external: true
  },
  {
    title: "AI Solutions",
    description: "Enterprise AI integration services",
    href: "/solutions/ai"
  }
];

const companyMenu = [
  {
    title: "About Us",
    description: "Our mission and vision",
    href: "/about"
  },
  {
    title: "Team",
    description: "Meet our experts",
    href: "/team"
  },
  {
    title: "Contact",
    description: "Get in touch",
    href: "/contact"
  }
];

const contactInfo = {
  email: {
    general: "info@nexthomelabs.com",
    business: "business@nexthomelabs.com",
    support: "support@nexthomelabs.com"
  },
  whatsappGroup: "https://chat.whatsapp.com/EcaYoVLg2gV4wKAliMYhsU",
  address: "Kampala, Uganda"
};

export function SiteHeader() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [siteLocation, setSiteLocation] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  const { t } = useTranslation('common');

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.3)"]
  );
  
  // Add blur effect based on scroll
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  );

  useEffect(() => {
    // Get the current hostname
    const hostname = window.location.hostname;
    if (hostname === 'nexthomelabs.ug') {
      setSiteLocation('Ugandan');
    } else {
      setSiteLocation('African');
    }
    
    // Parse Accept-Language header
    if (typeof window !== 'undefined' && navigator.language) {
      const userLang = navigator.language.split('-')[0];
      // You could use this language to set initial state or send to API
    }
    
    // Get language from headers set by middleware
    const detectedLanguage = document.documentElement.lang || 'en';
    if (detectedLanguage) {
      // You could use this information for analytics or to enhance user experience
    }
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShouldShow(false);
          setActiveMenu(null);
        } else {
          setShouldShow(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        const activeButton = buttonRefs.current[activeMenu];
        if (!activeButton?.contains(event.target as Node)) {
          setActiveMenu(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  const handleNavigation = (href: string, external: boolean = false) => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const scrollPosition = window.scrollY;
      sessionStorage.setItem(`scrollPosition-${currentPath}`, scrollPosition.toString());
    }

    setActiveMenu(null);
    setMobileMenuOpen(false);

    if (external) {
      window.open(href, '_blank');
    } else {
      router.push(href);
    }
  };

  const handleMenuHover = (menuName: string | null) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const MenuOverlay = ({ items, title }: { items: any[]; title: string }) => (
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40"
        onMouseEnter={() => handleMenuHover(activeMenu)}
        onMouseLeave={handleMenuLeave}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        <div className="relative z-50 container mx-auto px-4 pt-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-medium text-gray-400 mb-8">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => handleNavigation(item.href, item.external)}
                >
                  <div className="p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <h3 className="text-lg font-medium text-white group-hover:text-[#00E6E6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  const ContactOverlay = () => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40"
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setShowContactInfo(false)}
        />
        
        <div className="relative z-50 container mx-auto px-4 pt-32">
          <div className="max-w-lg mx-auto bg-black/90 border border-[#00E6E6]/20 rounded-xl p-8">
            {/* Close button */}
            <button
              onClick={() => setShowContactInfo(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="Close contact information"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            
            <div className="space-y-6">
              {/* Email Contacts */}
              <div className="space-y-4">
                <div className="transition-transform hover:translate-x-1 duration-200">
                  <h3 className="text-[#00E6E6] font-medium mb-2">General Inquiries</h3>
                  <a 
                    href={`mailto:${contactInfo.email.general}`}
                    className="text-white hover:text-[#00E6E6] transition-colors"
                  >
                    {contactInfo.email.general}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    For general questions and information
                  </p>
                </div>

                <div className="transition-transform hover:translate-x-1 duration-200">
                  <h3 className="text-[#00E6E6] font-medium mb-2">Business Development</h3>
                  <a 
                    href={`mailto:${contactInfo.email.business}`}
                    className="text-white hover:text-[#00E6E6] transition-colors"
                  >
                    {contactInfo.email.business}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    For partnership and business opportunities
                  </p>
                </div>

                <div className="transition-transform hover:translate-x-1 duration-200">
                  <h3 className="text-[#00E6E6] font-medium mb-2">Technical Support</h3>
                  <a 
                    href={`mailto:${contactInfo.email.support}`}
                    className="text-white hover:text-[#00E6E6] transition-colors"
                  >
                    {contactInfo.email.support}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    For technical assistance and support
                  </p>
                </div>
              </div>

              {/* Community */}
              <div className="transition-transform hover:translate-x-1 duration-200">
                <h3 className="text-[#00E6E6] font-medium mb-2">Join Our Community</h3>
                <a 
                  href={contactInfo.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-[#00E6E6] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Join WhatsApp Community
                </a>
                <p className="text-sm text-gray-400 mt-1">
                  Connect with our team and community
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 transition-transform hover:translate-x-1 duration-200">
                <div className="p-2 bg-[#00E6E6]/10 rounded-full">
                  <MapPin className="w-6 h-6 text-[#00E6E6]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-6">
                Our team typically responds within 24 hours during business days.
              </p>
              <Button
                onClick={() => setShowContactInfo(false)}
                className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black relative overflow-hidden group"
              >
                <span className="relative z-10">Close</span>
                <span className="absolute inset-0 w-0 bg-black/10 group-hover:w-full transition-all duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: shouldShow ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        style={{ 
          backgroundColor,
          backdropFilter: backdropBlur
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <nav className="flex items-center justify-between h-20 px-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-4 relative z-50 group">
            <div className="relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] overflow-hidden">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="https://i.ibb.co/HNHDVZS/nhl934-e559d97359102662b413-1.png"
                  alt="NextHomeLabs Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold group-hover:text-[#00E6E6] transition-colors">NextHomeLabs</span>
              <span className="text-sm text-[#00E6E6]">
                {siteLocation} Innovation Hub
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-8">
              <button
                ref={(el) => buttonRefs.current['research'] = el}
                className={`text-sm font-medium transition-colors relative z-50 ${
                  activeMenu === 'research' ? 'text-white' : 'text-gray-300 hover:text-white'
                } hover:scale-105 transition-transform duration-200`}
                onMouseEnter={() => handleMenuHover('research')}
                onMouseLeave={handleMenuLeave}
                aria-label="Research menu"
              >
                Research
              </button>
              <button
                ref={(el) => buttonRefs.current['products'] = el}
                className={`text-sm font-medium transition-colors relative z-50 ${
                  activeMenu === 'products' ? 'text-white' : 'text-gray-300 hover:text-white'
                } hover:scale-105 transition-transform duration-200`}
                onMouseEnter={() => handleMenuHover('products')}
                onMouseLeave={handleMenuLeave}
                aria-label="Products menu"
              >
                Products
              </button>
              <button
                ref={(el) => buttonRefs.current['company'] = el}
                className={`text-sm font-medium transition-colors relative z-50 ${
                  activeMenu === 'company' ? 'text-white' : 'text-gray-300 hover:text-white'
                } hover:scale-105 transition-transform duration-200`}
                onMouseEnter={() => handleMenuHover('company')}
                onMouseLeave={handleMenuLeave}
                aria-label="Company menu"
              >
                Company
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 relative z-50">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white relative overflow-hidden"
              onClick={() => setShowContactInfo(true)}
              aria-label="Contact information"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 w-0 bg-[#00E6E6]/10 group-hover:w-full transition-all duration-300"></span>
            </Button>
            <Link href="https://centgpt.com" target="_blank">
              <Button 
                className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black relative overflow-hidden group"
                aria-label="Try CentGPT"
              >
                <span className="relative z-10">Try CentGPT</span>
                <span className="absolute inset-0 w-0 bg-black/10 group-hover:w-full transition-all duration-300"></span>
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2 relative z-50">
            <LanguageSwitcher />
            <button
              className="relative z-50 p-2 rounded-md hover:bg-[#00E6E6]/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40"
            >
              <div className="px-6 py-20 space-y-4 max-h-screen overflow-y-auto">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-400">Research</p>
                    {researchTopics.map((topic, i) => (
                      <motion.button
                        key={topic.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        onClick={() => handleNavigation(topic.href)}
                        className="block w-full text-left pl-4 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {topic.title}
                      </motion.button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-400">Products</p>
                    {productsMenu.map((item, i) => (
                      <motion.button
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.03) }}
                        onClick={() => handleNavigation(item.href, item.external)}
                        className="block w-full text-left pl-4 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.title}
                      </motion.button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-400">Company</p>
                    {companyMenu.map((item, i) => (
                      <motion.button
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.03) }}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left pl-4 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.title}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 space-y-4"
                >
                  <Button 
                    variant="ghost" 
                    className="w-full text-gray-300 hover:text-white"
                    onClick={() => setShowContactInfo(true)}
                  >
                    Contact
                  </Button>
                  <Link href="https://centgpt.com" target="_blank">
                    <Button 
                      className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                    >
                      Try CentGPT
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {activeMenu === 'research' && (
        <MenuOverlay items={researchTopics} title="Our Research" />
      )}
      {activeMenu === 'products' && (
        <MenuOverlay items={productsMenu} title="Our Products" />
      )}
      {activeMenu === 'company' && (
        <MenuOverlay items={companyMenu} title="Our Company" />
      )}

      {showContactInfo && <ContactOverlay />}
    </>
  );
}