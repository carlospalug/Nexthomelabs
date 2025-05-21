"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";

// Define types for our components
type TemplateComponents = {
  technology: string[];
  field: string[];
  challenge: string[];
  context: string[];
  timeframe: string[];
  adjective: string[];
  solution: string[];
  aspect: string[];
};

// Base question templates
const baseTemplates: string[] = [
  "What are the implications of {technology} on {field}?",
  "How can {technology} help in {challenge}?",
  "Explain the concept of {technology} in {context}",
  "What will {field} look like in {timeframe}?",
  "How does {technology} work in {context}?",
  "Design a {adjective} {solution} using {technology}",
  "What are the {aspect} considerations of {technology}?",
  "How can {technology} improve {field}?",
  "What's the future of {field} with {technology}?",
  "Describe the impact of {technology} on {field}",
];

// Components to fill templates with explicit typing
const components: TemplateComponents = {
  technology: [
    "AI", "blockchain", "quantum computing", "machine learning", "neural networks",
    "edge computing", "IoT", "augmented reality", "virtual reality", "robotics",
    "5G", "6G", "cloud computing", "big data", "cybersecurity",
    "biotechnology", "nanotechnology", "renewable energy", "space technology", "autonomous systems"
  ],
  field: [
    "healthcare", "education", "finance", "transportation", "manufacturing",
    "agriculture", "retail", "energy", "space exploration", "entertainment",
    "construction", "logistics", "medicine", "research", "communication",
    "security", "governance", "commerce", "art", "sports"
  ],
  challenge: [
    "climate change", "healthcare access", "education inequality", "food security",
    "urban planning", "resource management", "data privacy", "cybersecurity",
    "energy efficiency", "waste management", "traffic congestion", "pollution",
    "natural disasters", "public health", "economic inequality", "sustainability",
    "water scarcity", "digital divide", "social inclusion", "environmental protection"
  ],
  context: [
    "simple terms", "practical applications", "real-world scenarios", "business context",
    "technical perspective", "global scale", "local context", "future perspective",
    "historical context", "social impact", "economic context", "environmental context",
    "ethical framework", "cultural context", "scientific terms", "educational setting",
    "industrial applications", "consumer perspective", "professional setting", "research context"
  ],
  timeframe: [
    "2025", "2030", "2040", "2050", "the next decade",
    "the next century", "the near future", "the long term",
    "the next generation", "the coming years", "5 years", "10 years",
    "20 years", "50 years", "100 years", "the digital age",
    "the AI era", "the space age", "the quantum era", "the post-digital era"
  ],
  adjective: [
    "sustainable", "innovative", "efficient", "scalable", "intelligent",
    "automated", "connected", "secure", "resilient", "adaptive",
    "smart", "eco-friendly", "advanced", "integrated", "optimized",
    "futuristic", "revolutionary", "transformative", "disruptive", "groundbreaking"
  ],
  solution: [
    "system", "platform", "framework", "infrastructure", "network",
    "ecosystem", "application", "protocol", "architecture", "interface",
    "solution", "model", "strategy", "approach", "methodology",
    "tool", "service", "environment", "mechanism", "process"
  ],
  aspect: [
    "ethical", "social", "economic", "environmental", "technical",
    "legal", "cultural", "political", "security", "privacy",
    "regulatory", "operational", "strategic", "practical", "theoretical",
    "organizational", "developmental", "commercial", "industrial", "research"
  ]
};

// Function to generate a massive pool of unique questions
const generateQuestionPool = (): string[] => {
  const questions = new Set<string>();
  
  // Generate questions from templates
  for (const template of baseTemplates) {
    // Find all placeholders in the template
    const placeholders = template.match(/\{(\w+)\}/g)?.map(p => p.slice(1, -1)) || [];
    
    // Generate combinations with proper typing
    const generateCombinations = (current: string, remainingPlaceholders: string[]) => {
      if (remainingPlaceholders.length === 0) {
        questions.add(current);
        return;
      }
      
      const placeholder = remainingPlaceholders[0];
      const options = components[placeholder as keyof TemplateComponents];
      
      for (const option of options) {
        const newCurrent = current.replace(`{${placeholder}}`, option);
        generateCombinations(newCurrent, remainingPlaceholders.slice(1));
      }
    };
    
    generateCombinations(template, placeholders);
  }
  
  // Add variations with prefixes and suffixes
  const prefixes = ["Can you", "Please", "I'd like to know", "Help me understand"];
  const suffixes = ["in detail", "with examples", "for beginners", "step by step"];
  
  const baseQuestions = Array.from(questions);
  baseQuestions.forEach(q => {
    prefixes.forEach(prefix => {
      if (!q.toLowerCase().startsWith("what") && !q.toLowerCase().startsWith("how")) {
        questions.add(`${prefix} ${q.toLowerCase()}`);
      }
    });
    
    suffixes.forEach(suffix => {
      if (!q.toLowerCase().includes(suffix)) {
        questions.add(`${q} ${suffix}`);
      }
    });
  });
  
  return Array.from(questions);
};

export function ChatInterfaceSection() {
  const [currentPlaceholder, setCurrentPlaceholder] = useState<string>("");
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const questionsRef = useRef<string[]>([]);
  const currentIndexRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const fadeTimeoutRef = useRef<NodeJS.Timeout>();

  // Initialize questions only once
  useEffect(() => {
    questionsRef.current = generateQuestionPool();
    // Shuffle the array
    for (let i = questionsRef.current.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionsRef.current[i], questionsRef.current[j]] = 
      [questionsRef.current[j], questionsRef.current[i]];
    }
    setCurrentPlaceholder(questionsRef.current[0]);
  }, []);

  const getNextQuestion = useCallback((): string => {
    currentIndexRef.current = (currentIndexRef.current + 1) % questionsRef.current.length;
    return questionsRef.current[currentIndexRef.current];
  }, []);

  useEffect(() => {
    // Clear any existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

    // Set up the interval to change the placeholder
    const cycleQuestion = () => {
      setFadeOut(true);
      
      fadeTimeoutRef.current = setTimeout(() => {
        const nextQuestion = getNextQuestion();
        setCurrentPlaceholder(nextQuestion);
        setFadeOut(false);
        
        // Schedule next cycle
        timeoutRef.current = setTimeout(cycleQuestion, 2500);
      }, 500);
    };

    // Start the cycle
    timeoutRef.current = setTimeout(cycleQuestion, 2500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [getNextQuestion]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const encodedQuery = encodeURIComponent(inputValue.trim());
      window.open(`https://centgpt.com/?q=${encodedQuery}`, '_blank');
      setInputValue("");
    }
  };

  return (
    <section className="min-h-screen bg-[#0D1117] flex flex-col items-center justify-center pt-20 pb-10">
      <div className="w-full max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Ask CentGPT anything
          </h1>
          <p className="text-xl text-gray-400">
            Chat with AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              placeholder={currentPlaceholder}
              className={`
                w-full p-4 pr-12 bg-[#1F2937] border border-[#374151] rounded-xl 
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                focus:ring-[#00E6E6]/50 transition-all duration-500
                ${fadeOut ? 'opacity-30' : 'opacity-100'}
              `}
              aria-label="Ask CentGPT a question"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#374151] hover:bg-[#4B5563] text-white rounded-lg"
              aria-label="Submit question"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-400 mt-4"
        >
          -CentGPT Can Make Mistakes, Always DoubleCheck-
        </motion.p>
      </div>
    </section>
  );
}