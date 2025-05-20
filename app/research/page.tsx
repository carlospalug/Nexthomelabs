"use client";

import { motion } from "framer-motion";
import { ResearchSection } from "@/components/sections/research-section";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ResearchSection />
      </motion.div>
    </div>
  );
}
