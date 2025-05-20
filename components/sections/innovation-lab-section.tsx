"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Bot, Sparkles, Code2, MessageSquare, Zap, Lock, Network } from "lucide-react";
import Link from "next/link";

const demoCategories = [
  {
    id: "natural-language",
    title: "Natural Language Understanding",
    icon: MessageSquare,
    description: "Experience CentGPT's advanced language processing capabilities",
    demos: [
      {
        title: "Context-Aware Conversations",
        description: "Watch CentGPT maintain context across complex dialogues",
        example: {
          conversation: [
            { role: "user", content: "Tell me about machine learning." },
            { role: "assistant", content: "Machine learning is a subset of AI that enables systems to learn and improve from experience. It uses algorithms to identify patterns in data and make predictions or decisions without explicit programming." },
            { role: "user", content: "What are its main applications?" },
            { role: "assistant", content: "Machine learning has numerous applications including predictive analytics for business forecasting, natural language processing for chatbots and translation, computer vision for image recognition and autonomous vehicles, recommendation systems for personalized content, and fraud detection in financial services." }
          ]
        }
      },
      {
        title: "Multi-Language Support",
        description: "Seamless communication across multiple languages",
        example: {
          languages: ["English", "French", "Spanish", "Arabic", "Swahili", "Luganda", "Kiswahili"],
          capabilities: [
            "Real-time Translation",
            "Language Detection",
            "Cultural Context Awareness",
            "Dialect Understanding",
            "Idiomatic Expression Translation"
          ]
        }
      }
    ]
  },
  {
    id: "code-generation",
    title: "Intelligent Code Generation",
    icon: Code2,
    description: "See how CentGPT assists in software development",
    demos: [
      {
        title: "Smart Code Completion",
        description: "Real-time code suggestions and completions",
        example: {
          languages: [
            "Python",
            "JavaScript",
            "TypeScript",
            "Solidity",
            "Rust",
            "Go",
            "Java",
            "C#"
          ],
          features: [
            "Context-Aware Syntax Suggestions",
            "Intelligent Variable Naming",
            "Design Pattern Implementation",
            "Automated Documentation",
            "Security Best Practices",
            "Performance Optimization Hints",
            "Type Inference and Checking",
            "Framework-Specific Suggestions"
          ],
          codeExamples: [
            {
              language: "Python",
              code: `# AI-suggested implementation of a data processor
class DataProcessor:
    def __init__(self, config: Dict[str, Any]):
        self.validate_config(config)
        self.config = config
        self.logger = self._setup_logging()

    def process_batch(self, data: List[Dict]) -> List[Dict]:
        """
        Process a batch of data with validation and error handling
        """
        try:
            validated_data = self._validate_input(data)
            transformed_data = self._transform_data(validated_data)
            return self._post_process(transformed_data)
        except Exception as e:
            self.logger.error(f"Batch processing failed: {str(e)}")
            raise ProcessingError("Failed to process batch")`
            },
            {
              language: "TypeScript",
              code: `// AI-generated React component with best practices
interface DataVisualizerProps {
  data: DataPoint[];
  config: VisualizationConfig;
  onUpdate?: (updatedData: DataPoint[]) => void;
}

export const DataVisualizer: React.FC<DataVisualizerProps> = ({
  data,
  config,
  onUpdate
}) => {
  const [processedData, setProcessedData] = useState<ProcessedData | null>(null);
  
  useEffect(() => {
    const processData = async () => {
      try {
        const result = await dataProcessor.transform(data, config);
        setProcessedData(result);
        onUpdate?.(result.points);
      } catch (error) {
        console.error('Data processing failed:', error);
      }
    };
    
    processData();
  }, [data, config]);

  return (
    <div className="data-visualizer">
      {processedData ? (
        <VisualizationComponent data={processedData} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}`
            }
          ]
        }
      },
      {
        title: "Code Refactoring",
        description: "Automated code optimization and improvement",
        example: {
          capabilities: [
            "Performance Optimization",
            "Clean Code Principles",
            "Security Vulnerability Detection",
            "Memory Leak Detection",
            "Code Smell Identification",
            "Architectural Improvements",
            "Test Coverage Analysis",
            "Dead Code Elimination"
          ]
        }
      }
    ]
  },
  {
    id: "ai-agents",
    title: "Autonomous AI Agents",
    icon: Bot,
    description: "Discover CentGPT's autonomous capabilities",
    demos: [
      {
        title: "Task Automation",
        description: "Watch AI agents handle complex workflows",
        example: {
          tasks: [
            "Data Analysis & Reporting",
            "Customer Support Automation",
            "Content Generation & Curation",
            "Process Optimization",
            "Resource Scheduling"
          ]
        }
      },
      {
        title: "Multi-Agent Collaboration",
        description: "See how multiple AI agents work together",
        example: {
          scenario: "Supply Chain Optimization",
          agents: [
            "Inventory Manager",
            "Logistics Coordinator",
            "Demand Predictor",
            "Price Optimizer",
            "Quality Controller"
          ]
        }
      }
    ]
  },
  {
    id: "neural-processing",
    title: "Advanced Neural Processing",
    icon: Brain,
    description: "Explore CentGPT's neural network capabilities",
    demos: [
      {
        title: "Pattern Recognition",
        description: "Advanced pattern detection in complex datasets",
        example: {
          applications: [
            "Anomaly Detection in Financial Transactions",
            "Predictive Maintenance in Manufacturing",
            "Customer Behavior Analysis",
            "Market Trend Prediction",
            "Healthcare Diagnosis Support"
          ],
          technologies: [
            "Deep Neural Networks",
            "Convolutional Neural Networks (CNN)",
            "Recurrent Neural Networks (RNN)",
            "Transformer Architecture",
            "Attention Mechanisms"
          ],
          metrics: {
            accuracy: "99.7%",
            latency: "50ms",
            scalability: "1M+ operations/second"
          },
          features: [
            "Real-time Processing",
            "Adaptive Learning",
            "Transfer Learning",
            "Unsupervised Pattern Discovery",
            "Multi-modal Analysis"
          ]
        }
      },
      {
        title: "Deep Learning Models",
        description: "Specialized neural networks for specific tasks",
        example: {
          models: [
            {
              name: "Transformer",
              applications: [
                "Natural Language Processing",
                "Text Generation",
                "Translation",
                "Document Analysis"
              ],
              architecture: "Multi-head Attention Mechanism"
            },
            {
              name: "CNN",
              applications: [
                "Image Recognition",
                "Video Analysis",
                "Medical Imaging",
                "Object Detection"
              ],
              architecture: "Hierarchical Feature Extraction"
            },
            {
              name: "RNN",
              applications: [
                "Time Series Analysis",
                "Speech Recognition",
                "Sequence Prediction",
                "Language Modeling"
              ],
              architecture: "Sequential Data Processing"
            },
            {
              name: "GAN",
              applications: [
                "Image Generation",
                "Data Augmentation",
                "Style Transfer",
                "Synthetic Data Creation"
              ],
              architecture: "Adversarial Training"
            }
          ],
          performanceMetrics: {
            trainingSpeed: "2x faster than industry standard",
            inferenceTime: "Under 100ms",
            modelAccuracy: "95-99% depending on task",
            resourceEfficiency: "30% lower compute requirements"
          }
        }
      }
    ]
  }
];

const features = [
  {
    title: "Real-time Processing",
    icon: Zap,
    metrics: {
      speed: "150ms",
      throughput: "1000 req/s",
      accuracy: "99.9%"
    }
  },
  {
    title: "Enterprise Security",
    icon: Lock,
    metrics: {
      encryption: "256-bit",
      compliance: "ISO 27001",
      protection: "99.99%"
    }
  },
  {
    title: "Scalable Architecture",
    icon: Network,
    metrics: {
      capacity: "1M+ users",
      availability: "99.99%",
      distribution: "Global"
    }
  }
];

export function InnovationLabSection() {
  const [activeCategory, setActiveCategory] = useState(demoCategories[0]);
  const [activeDemo, setActiveDemo] = useState(demoCategories[0].demos[0]);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
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
            <h2 className="text-4xl md:text-5xl font-bold">Innovation Lab</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of CentGPT through interactive demonstrations and live examples
          </p>
        </motion.div>

        {/* Demo Categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {demoCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveDemo(category.demos[0]);
                  }}
                  className={`p-6 rounded-xl border cursor-pointer transition-all ${
                    activeCategory.id === category.id
                      ? 'border-[#00E6E6] bg-[#00E6E6]/10'
                      : 'border-[#00E6E6]/20 hover:border-[#00E6E6]/60'
                  }`}
                >
                  <category.icon className="w-8 h-8 text-[#00E6E6] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              ))}
            </div>

            {/* Demo Selection */}
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40">
              <h3 className="text-xl font-semibold mb-4">Available Demos</h3>
              <div className="space-y-4">
                {activeCategory.demos.map((demo) => (
                  <div
                    key={demo.title}
                    onClick={() => setActiveDemo(demo)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      activeDemo.title === demo.title
                        ? 'bg-[#00E6E6]/10 border border-[#00E6E6]'
                        : 'bg-black/20 border border-transparent hover:border-[#00E6E6]/60'
                    }`}
                  >
                    <h4 className="font-semibold mb-2">{demo.title}</h4>
                    <p className="text-sm text-gray-400">{demo.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Demo Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Interactive Demo Area */}
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 min-h-[400px]">
              <h3 className="text-xl font-semibold mb-6">{activeDemo.title}</h3>
              
              {'conversation' in activeDemo.example && (
                <div className="space-y-4">
                  {activeDemo.example.conversation.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 ${
                        message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <div className={`p-4 rounded-lg max-w-[80%] ${
                        message.role === 'assistant'
                          ? 'bg-[#00E6E6]/10 text-white'
                          : 'bg-[#00E6E6] text-black'
                      }`}>
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {'languages' in activeDemo.example && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {activeDemo.example.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 rounded-full bg-[#00E6E6]/10 text-[#00E6E6] text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  {activeDemo.example.capabilities && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {activeDemo.example.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="p-3 rounded-lg bg-[#00E6E6]/5 text-gray-300"
                        >
                          {capability}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {'tasks' in activeDemo.example && (
                <div className="space-y-4">
                  {activeDemo.example.tasks.map((task) => (
                    <div
                      key={task}
                      className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/20"
                    >
                      <h4 className="font-semibold text-[#00E6E6] mb-2">{task}</h4>
                      <div className="h-2 bg-[#00E6E6]/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '75%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-[#00E6E6]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {'scenario' in activeDemo.example && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/20">
                    <h4 className="font-semibold text-[#00E6E6] mb-4">
                      {activeDemo.example.scenario}
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {activeDemo.example.agents.map((agent) => (
                        <div
                          key={agent}
                          className="p-3 rounded-lg bg-black/40 text-center"
                        >
                          <Bot className="w-6 h-6 text-[#00E6E6] mx-auto mb-2" />
                          <span className="text-sm">{agent}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 rounded-xl border border-[#00E6E6]/20 bg-black/40"
                >
                  <feature.icon className="w-6 h-6 text-[#00E6E6] mb-3" />
                  <h4 className="font-semibold mb-3">{feature.title}</h4>
                  <div className="space-y-2">
                    {Object.entries(feature.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-400 capitalize">{key}</span>
                        <span className="text-[#00E6E6]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="https://centgpt.com" target="_blank">
                <Button 
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                >
                  Try CentGPT Now
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}