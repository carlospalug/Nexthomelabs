"use client";

    import { motion } from "framer-motion";
    import { FullTeamDisplay } from "@/components/FullTeamDisplay"; // Import the new component
    import { team } from "@/lib/team-data";
    import Link from "next/link";
    import { ArrowLeft } from "lucide-react";

    export default function TeamPage() {
      return (
        <div className="min-h-screen bg-black pt-20">
          <div className="container mx-auto px-4 py-12">
            <Link
              href="/"
              className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Our Full Team
              </h1>
              <FullTeamDisplay teamMembers={team} />
            </motion.div>
          </div>
        </div>
      );
    }
