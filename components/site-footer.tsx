"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ],
  solutions: [
    { name: "AI Solutions", href: "/solutions/ai", description: "Custom AI integration and development" },
    { name: "Blockchain", href: "/solutions/blockchain", description: "Secure blockchain implementations" },
    { name: "Enterprise", href: "/solutions/enterprise", description: "Complete enterprise solutions" },
    { name: "CentGPT", href: "https://centgpt.com", external: true }
  ],
  research: [
    { name: "Overview", href: "/research" },
    { name: "AI Ethics", href: "/research/ai-ethics" },
    { name: "Publications", href: "/research/publications" },
    { name: "Open Source", href: "https://github.com/nexthomelabs", external: true }
  ],
  legal: [
    { name: "Terms of Use", href: "/legal/terms" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Security", href: "/legal/security" },
    { name: "Responsible AI", href: "/legal/responsible-ai" }
  ],
  contact: {
    email: {
      general: "info@nexthomelabs.com",
      business: "business@nexthomelabs.com",
      support: "support@nexthomelabs.com"
    },
    whatsappGroup: "https://chat.whatsapp.com/EcaYoVLg2gV4wKAliMYhsU",
    address: "Kampala, Uganda",
    socialLinks: {
      github: "https://github.com/nexthomelabs",
      twitter: "https://twitter.com/nexthomelabs",
      linkedin: "https://linkedin.com/company/nexthomelabs"
    }
  }
};

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const { t } = useTranslation('common');

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    updateYear();

    const timer = setInterval(() => {
      const now = new Date();
      if (now.getFullYear() !== currentYear) {
        updateYear();
      }
    }, 86400000);

    return () => clearInterval(timer);
  }, [currentYear]);

  return (
    <footer className="relative mt-32">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E6E6]/20 to-transparent" />

      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl -z-10" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="group"
                  >
                    <div className="text-sm text-gray-400 hover:text-white transition-colors">
                      <span className="inline-flex items-center gap-1">
                        {link.name}
                        {link.external && <ArrowUpRight className="w-3 h-3" />}
                      </span>
                      {link.description && (
                        <p className="text-xs text-gray-500 group-hover:text-gray-400 mt-0.5">
                          {link.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Research</h3>
            <ul className="space-y-3">
              {footerLinks.research.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    {link.external && <ArrowUpRight className="w-3 h-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${footerLinks.contact.email.general}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {footerLinks.contact.email.general}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">General Inquiries</p>
              </li>
              <li>
                <a 
                  href={`mailto:${footerLinks.contact.email.business}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {footerLinks.contact.email.business}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">Business Development</p>
              </li>
              <li>
                <a 
                  href={`mailto:${footerLinks.contact.email.support}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {footerLinks.contact.email.support}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">Technical Support</p>
              </li>
              <li>
                <a 
                  href={footerLinks.contact.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Join our Community
                </a>
              </li>
              <li className="text-sm text-gray-400">
                {footerLinks.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#00E6E6]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-sm font-semibold text-white">
                NextHomeLabs
              </Link>
              <span className="text-sm text-gray-400">
                © {currentYear} All rights reserved
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link 
                href={footerLinks.contact.socialLinks.github}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href={footerLinks.contact.socialLinks.twitter}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href={footerLinks.contact.socialLinks.linkedin}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}