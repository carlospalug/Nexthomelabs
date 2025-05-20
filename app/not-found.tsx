"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center space-y-6"
        >
          <h1 className="text-6xl font-bold text-[#00E6E6]">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className="text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center">
            <Link href="/">
              <Button 
                className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
