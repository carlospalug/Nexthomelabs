"use client";

import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Legal Documents</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Link 
            href="/legal/terms"
            className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 hover:bg-black/60 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Terms of Use</h2>
            <p className="text-gray-400">Our terms and conditions for using NextHomeLabs services.</p>
          </Link>
          
          <Link 
            href="/legal/privacy"
            className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 hover:bg-black/60 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
            <p className="text-gray-400">How we collect, use, and protect your data.</p>
          </Link>
          
          <Link 
            href="/legal/security"
            className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 hover:bg-black/60 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Security</h2>
            <p className="text-gray-400">Our commitment to protecting your information.</p>
          </Link>
          
          <Link 
            href="/legal/responsible-ai"
            className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 hover:bg-black/60 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Responsible AI</h2>
            <p className="text-gray-400">Our ethical principles and guidelines for AI development.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
