"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Server, Rocket } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from 'react';

const offers = [
  {
    title: "Free Website Development",
    description: "Get your professional website built for free! Only pay for hosting and domain.",
    price: "Starting from $180",
    icon: Globe,
    features: [
      "Custom Website Development",
      "Mobile Responsive Design",
      "SEO Optimization",
      "Contact Forms",
      "Social Media Integration",
      "Basic Analytics"
    ],
    includes: [
      "Domain Registration",
      "1 Year Hosting",
      "SSL Certificate",
      "CDN Integration",
      "24/7 Support"
    ],
    excludes: [
      "Development Fees",
      "Custom Features",
      "Content Creation",
      "Logo Design",
      "Maintenance",
      "Our website packages start from just $180, and the initial website build is free! You'll only be responsible for things like optional add-ons, database charges, plus domain and hosting costs. Terms and conditions apply."
    ],
    isFreeOffer: true
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise-grade solutions for businesses.",
    price: "Custom Pricing",
    icon: Server,
    features: [
      "Custom Enterprise Software",
      "AI Integration",
      "Blockchain Solutions",
      "Data Analytics",
      "Security Implementation",
      "API Development"
    ],
    includes: [
      "Technical Consultation",
      "System Architecture",
      "Development",
      "Testing",
      "Deployment"
    ],
    excludes: []
  },
  {
    title: "Startup Package",
    description: "Complete digital presence setup for startups.",
    price: "Starting at $500",
    icon: Rocket,
    features: [
      "Website Development",
      "Brand Identity",
      "Social Media Setup",
      "Email Marketing",
      "Basic CRM Integration",
      "Analytics Dashboard"
    ],
    includes: [
      "Domain & Hosting",
      "SSL Certificate",
      "Email Setup",
      "Basic SEO",
      "Support"
    ],
    excludes: []
  }
];

const OFFER_END_DATE_LOCAL_STORAGE_KEY = 'free_offer_end_date';

export function OffersSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
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
            <Sparkles className="w-8 h-8 text-[#00E6E6]" />
            <h2 className="text-4xl md:text-5xl font-bold">Special Offers</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your professional website built for free! Only pay for hosting and domain fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const [countdownValue, setCountdownValue] = useState({days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0});
            const [offerExpired, setOfferExpired] = useState(false);
            const [endDateDisplay, setEndDateDisplay] = useState("");
            const [offerEndDate, setOfferEndDate] = useState(null);

            useEffect(() => {
              if (offer.isFreeOffer) {
                let storedEndDateTimestamp;
                let calculatedEndDate;

                if (typeof window !== 'undefined') {
                  storedEndDateTimestamp = localStorage.getItem(OFFER_END_DATE_LOCAL_STORAGE_KEY);
                }

                if (storedEndDateTimestamp) {
                  calculatedEndDate = new Date(parseInt(storedEndDateTimestamp, 10));
                } else {
                  calculatedEndDate = new Date('2025-02-19T17:25:00');
                  const offerDurationDays = 35;
                  calculatedEndDate.setDate(calculatedEndDate.getDate() + offerDurationDays);
                  if (typeof window !== 'undefined') {
                    localStorage.setItem(OFFER_END_DATE_LOCAL_STORAGE_KEY, calculatedEndDate.getTime().toString());
                  }
                }
                setOfferEndDate(calculatedEndDate);
              }
            }, [offer.isFreeOffer]);


            useEffect(() => {
              if (offer.isFreeOffer && offerEndDate) {
                const intervalId = setInterval(() => {
                  const timeLeft = calculateTimeLeft(offerEndDate);
                  setCountdownValue(timeLeft);
                  if (timeLeft.totalSeconds <= 0) {
                    setOfferExpired(true);
                    clearInterval(intervalId);
                    if (typeof window !== 'undefined') {
                      localStorage.removeItem(OFFER_END_DATE_LOCAL_STORAGE_KEY);
                    }
                  }
                }, 1000);
                return () => clearInterval(intervalId);
              }
            }, [offer.isFreeOffer, offerEndDate]);


            useEffect(() => {
              if (offer.isFreeOffer && offerEndDate) {
                const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
                setEndDateDisplay(offerEndDate?.toLocaleDateString(undefined, options) || "");
              }
            }, [offer.isFreeOffer, offerEndDate]);


            function calculateTimeLeft(endDate) {
              if (!endDate) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
              }
              const now = new Date();
              const timeLeft = endDate - now;
              const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));

              if (timeLeft <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
              }

              const days = Math.floor(totalSeconds / (24 * 60 * 60));
              const remainingSecondsAfterDays = totalSeconds % (24 * 60 * 60);
              const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));
              const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);
              const minutes = Math.floor(remainingSecondsAfterHours / 60);
              const seconds = remainingSecondsAfterHours % 60;

              return { days, hours, minutes, seconds, totalSeconds };
            }


            const countdownFormatted = countdownValue;


            return (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <offer.icon className="w-6 h-6 text-[#00E6E6]" />
                    <h3 className="text-xl font-semibold">{offer.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{offer.description}</p>
                  <div className="text-2xl font-bold text-[#00E6E6] mb-6">{offer.price}</div>

                  {offer.isFreeOffer && !offerExpired && offerEndDate && (
                    <>
                      <div className="mb-2 text-sm text-gray-300">
                        Offer runs till {endDateDisplay}
                      </div>
                      <div className="mb-4 text-sm text-gray-300">
                        Offer ends in: <span className="font-semibold text-[#00E6E6]">
                          {countdownFormatted.days}d {countdownFormatted.hours}h {countdownFormatted.minutes}m {countdownFormatted.seconds}s
                        </span>
                      </div>
                    </>
                  )}
                  {offer.isFreeOffer && offerExpired && (
                    <div className="mb-4 text-sm font-semibold text-red-500">
                      Offer Expired!
                    </div>
                  )}

                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[#00E6E6] mb-2">Features</h4>
                      <ul className="space-y-2">
                        {offer.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {offer.includes.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">Includes</h4>
                        <ul className="space-y-2">
                          {offer.includes.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {offer.excludes.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2">Not Included</h4>
                        <ul className="space-y-2">
                          {offer.excludes.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Link href="/contact">
                    <Button
                      className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            * Hosting and domain fees are paid annually. Development is completely free.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
            >
              Contact Us Now
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
