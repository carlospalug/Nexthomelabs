export interface TeamMember {
  id: number;
  name: string;
  slug: string;
  role: string;
  image: string;
  email: string;
  shortDescription: string;
  longDescription: string;
  expertise: string[];
  achievements: Achievement[];
  publications?: Publication[];
  certifications?: string[];
  twitterlink?: string;
  linkedInLink?: string;
}

interface Achievement {
  title: string;
  description: string;
  year: number;
}

interface Publication {
  title: string;
  publisher: string;
  year: number;
  link?: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Ohood Richard",
    slug: "ohoodrichard",
    role: "BlockChain Strategy Officer and CAA",
    image: "https://i.ibb.co/PZXd3jVV/Richard.jpg",
    email: "ohood.richard@nexthomelabs.com",
    shortDescription: "Visionary architect of AI and blockchain strategies.",
    longDescription: "Ohood spearheads the conceptualization, design, and deployment of cutting-edge AI and blockchain frameworks at NextHomeLabs. With over a decade of multifaceted experience, he plays a pivotal role in driving the company's technological advancements and ensuring its impact resonates globally within the innovation ecosystem.",
    expertise: [
      "AI Systems Architecture",
      "Blockchain Strategy",
      "Enterprise Solution Design",
      "Technical Leadership",
      "Innovation Management",
      "Distributed Systems"
    ],
    achievements: [
      {
        title: "Innovation Leadership Award",
        description: "Recognized for pioneering AI solutions in East Africa",
        year: 2023
      },
      {
        title: "Blockchain Initiative Success",
        description: "Led the successful implementation of blockchain solutions for major financial institutions",
        year: 2022
      },
      {
        title: "AI Framework Development",
        description: "Developed proprietary AI framework adopted by multiple enterprises",
        year: 2021
      }
    ],
    publications: [
      {
        title: "The Future of AI in African Innovation",
        publisher: "African Technology Review",
        year: 2023,
        link: "https://example.com/future-ai-africa"
      },
      {
        title: "Blockchain Integration in Emerging Markets",
        publisher: "International Journal of Blockchain Innovation",
        year: 2022,
        link: "https://example.com/blockchain-emerging-markets"
      }
    ],
    certifications: [
      "AWS Certified Solutions Architect - Professional",
      "Google Cloud Professional Cloud Architect",
      "Certified Blockchain Professional (CBP)"
    ],
    twitterlink: "https://x.com/ohoodrichard1",
    linkedInLink: "https://www.linkedin.com/in/ohood-richard-b9b947155"
  },
  {
    id: 2,
    name: "Yusuf M. Abdulhakim",
    slug: "yusufabdulhakim",
    role: "Senior Technical Strategist and AI Prompt Engineering Specialist",
    image: "https://i.ibb.co/yTp6RPx/Persona-20250216-041108.jpg",
    email: "usf@nexthomelabs.com",
    shortDescription: "Expert in AI system optimization and technical leadership.",
    longDescription: "Yusuf orchestrates the strategic direction of NextHomeLabs' technical operations, focusing on the refinement and deployment of sophisticated AI-driven systems. His meticulous approach to prompt engineering and model fine-tuning ensures that the company's solutions are both highly efficient and precisely tailored to meet evolving technological demands.",
    expertise: [
      "AI Prompt Engineering",
      "Technical Strategy",
      "System Optimization",
      "Machine Learning Operations",
      "AI Model Fine-tuning",
      "Technical Team Leadership"
    ],
    achievements: [
      {
        title: "AI Optimization Achievement",
        description: "Improved AI model efficiency by 300% through advanced prompt engineering",
        year: 2023
      },
      {
        title: "Technical Excellence Award",
        description: "Recognized for outstanding contributions to AI system development",
        year: 2022
      },
      {
        title: "Innovation Impact",
        description: "Led the development of custom AI solutions for major enterprises",
        year: 2021
      }
    ],
    certifications: [
      "Advanced AI Prompt Engineering Certification",
      "Machine Learning Engineering Professional",
      "Technical Leadership Excellence Certificate"
    ],
    twitterlink: "https://x.com/usfkim",
    linkedInLink: "https://www.linkedin.com/in/abdulhakim-m-yusuf-991259279"
  },
  {
    id: 3,
    name: "Nabatanzi Rayan",
    slug: "nabatanzirayan",
    role: "AI EDUCATOR",
    image: "https://i.ibb.co/sdXzVYP5/Blank-Profile-Picture.webp",
    email: "nabatanzi.Rayan@nexthomelabs.com",
    shortDescription: "Ai Educator.",
    longDescription: "Rayan is an emerging AI and blockchain educator, dedicated to crafting innovative learning programs. As she continues to grow in her expertise, she will inspire and guide others in unlocking the potential of these revolutionary technologies.",
    expertise: [
      
    ],
    achievements: [
    ],
    publications: [
      {
        title: "Effective AI Education in Emerging Markets",
        publisher: "International Journal of Technology Education",
        year: 2025,
        link: "https://nexthomelabs.com/research/machine-learning/"
      }
    ],
    certifications: [
    ],
    twitterlink: "https://x.com/Nabatanzirayan"
  },
  {
    id: 4,
    name: "Bill Arthur",
    slug: "billarthur",
    role: "Ethical AI Governance Specialist",
    image: "https://i.ibb.co/y0q2Z8F/Billwhizz.jpg",
    email: "bill.arthur@nexthomelabs.com",
    shortDescription: "Authority on ethical AI implementation and governance.",
    longDescription: "Bill leads the charge in establishing and maintaining rigorous ethical standards for AI and blockchain innovation at NextHomeLabs. His in-depth understanding of governance frameworks ensures that the company's technological advancements prioritize transparency, equity, and accountability, fostering trust among stakeholders and end-users alike.",
    expertise: [
      "AI Ethics",
      "Governance Frameworks",
      "Regulatory Compliance",
      "Risk Assessment",
      "Policy Development",
      "Stakeholder Management"
    ],
    achievements: [
      {
        title: "Ethics Framework Development",
        description: "Created comprehensive AI ethics framework adopted industry-wide",
        year: 2023
      },
      {
        title: "Governance Leadership",
        description: "Established ethical AI guidelines for major technology initiatives",
        year: 2022
      },
      {
        title: "Policy Impact",
        description: "Contributed to national AI policy development",
        year: 2021
      }
    ],
    publications: [
      {
        title: "Ethical AI Implementation in Practice",
        publisher: "Journal of AI Ethics",
        year: 2023,
        link: "https://example.com/ethical-ai-implementation"
      }
    ],
    certifications: [
      "Certified AI Ethics Professional",
      "Governance Risk and Compliance Professional",
      "Data Ethics Specialist"
    ],
    twitterlink: "https://x.com/BillWiz"
  },
  {
    id: 5,
    name: "Sseruwu Farooq",
    slug: "sseruwufarooq",
    role: "Software Engineering Specialist for Scalable Solutions",
    image: "https://i.ibb.co/c1wZpVS/Farouq.jpg",
    email: "sseruwu.farooq@nexthomelabs.com",
    shortDescription: "Developer of scalable and secure software solutions.",
    longDescription: "Farooq is instrumental in designing and implementing robust software architectures that underpin NextHomeLabs' AI and blockchain innovations. His commitment to crafting scalable, secure, and user-centric solutions ensures that the company delivers high-quality products tailored to modern technological needs.",
    expertise: [
      "Software Architecture",
      "Scalable Systems Design",
      "Cloud Infrastructure",
      "Security Implementation",
      "DevOps Practices",
      "Performance Optimization"
    ],
    achievements: [
      {
        title: "Technical Architecture Award",
        description: "Designed highly scalable system supporting millions of users",
        year: 2023
      },
      {
        title: "Innovation Excellence",
        description: "Developed revolutionary blockchain-based solution",
        year: 2022
      },
      {
        title: "Security Achievement",
        description: "Implemented enterprise-grade security framework",
        year: 2021
      }
    ],
    certifications: [
      "AWS Solutions Architect Professional",
      "Certified Kubernetes Administrator",
      "Certified Information Systems Security Professional (CISSP)"
    ],
    linkedInLink: "https://www.linkedin.com/in/farooq-sseruwu-0b605b71"
  },
  {
    id: 6,
    name: "Tumwesigye Nicholas",
    slug: "tumwesigyenicholas",
    role: "Advocate for AI and Blockchain Technological Advancements",
    image: "https://i.ibb.co/nqLGSPDw/Nicholas.jpg",
    email: "tumwesigye.nicholas@nexthomelabs.com",
    shortDescription: "Ambassador for AI and blockchain innovation.",
    longDescription: "Nicholas champions the widespread adoption of AI and blockchain technologies through strategic advocacy and outreach. His efforts focus on educating diverse audiences and fostering collaborations that highlight the transformative potential of these technologies in driving societal and economic progress.",
    expertise: [
      "Technology Advocacy",
      "Strategic Communications",
      "Partnership Development",
      "Community Engagement",
      "Public Speaking",
      "Technology Education"
    ],
    achievements: [
      {
        title: "Advocacy Impact Award",
        description: "Successfully led major technology adoption initiatives",
        year: 2023
      },
      {
        title: "Partnership Success",
        description: "Established key strategic partnerships with global tech leaders",
        year: 2022
      },
      {
        title: "Community Building",
        description: "Built thriving tech community with over 10,000 members",
        year: 2021
      }
    ],
    publications: [
      {
        title: "The Future of Technology in Africa",
        publisher: "African Tech Review",
        year: 2023,
        link: "https://example.com/future-tech-africa"
      }
    ],
    certifications: [
      "Certified Technology Advocate",
      "Public Speaking Professional",
      "Community Management Expert"
    ],
    twitterlink: "https://x.com/TumwesigyeNicholas"
  },
  {
    id: 7,
    name: "Antoniy Kanu",
    slug: "antoniykanu",
    role: "AI & Cybersecurity Specialist",
    image: "https://i.imgur.com/DCTv0I3.png",
    email: "antoniy.kanu@nexthomelabs.com",
    shortDescription: "Tech professional blending expertise in AI and cybersecurity, driven to design intelligent solutions that protect and empower the digital world.",
    longDescription: "Antoniy brings a unique blend of expertise in artificial intelligence and cybersecurity to NextHomeLabs. His innovative approach to developing secure AI systems has positioned him as a valuable asset to the team. With a focus on creating robust solutions that can withstand evolving digital threats, Antoniy works at the critical intersection of advanced AI capabilities and comprehensive security frameworks.",
    expertise: [
      "AI Security Integration",
      "Threat Intelligence",
      "Machine Learning for Cybersecurity",
      "Penetration Testing",
      "Security Automation",
      "Vulnerability Assessment"
    ],
    achievements: [
      {
        title: "Cybersecurity Excellence",
        description: "Developed AI-powered threat detection system with 99.8% accuracy",
        year: 2024
      },
      {
        title: "Innovation Award",
        description: "Created novel machine learning approach for zero-day vulnerability detection",
        year: 2023
      },
      {
        title: "Research Recognition",
        description: "Published groundbreaking research on AI/ML approaches to network security",
        year: 2022
      }
    ],
    publications: [
      {
        title: "Artificial Intelligence in Modern Cybersecurity Frameworks",
        publisher: "Journal of Cybersecurity Innovation",
        year: 2024,
        link: "https://example.com/ai-cybersecurity-frameworks"
      },
      {
        title: "Machine Learning Approaches to Vulnerability Detection",
        publisher: "International Conference on AI Security",
        year: 2023,
        link: "https://example.com/ml-vulnerability-detection"
      }
    ],
    certifications: [
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Ethical Hacker (CEH)",
      "Offensive Security Certified Professional (OSCP)",
      "TensorFlow Certified Developer"
    ],
    twitterlink: "https://x.com/antoniykanu",
    linkedInLink: "https://www.linkedin.com/in/antoniykanu"
  }
];