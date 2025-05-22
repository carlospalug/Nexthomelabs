"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Brain, 
  Lock, 
  Code, 
  ExternalLink, 
  LineChart, 
  Zap, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const technologies = [
  {
    id: "transformers",
    name: "Transformer Networks",
    icon: Brain,
    description: "Deep learning architecture revolutionizing natural language processing and beyond",
    content: [
      {
        title: "Architecture Overview",
        type: "text",
        content: "Transformer networks represent a breakthrough architecture in deep learning, first introduced in the paper 'Attention Is All You Need' by Vaswani et al. Unlike previous sequential models like RNNs and LSTMs, transformers process entire sequences simultaneously using a mechanism called self-attention, making them more parallelizable and efficient for processing sequential data."
      },
      {
        title: "Self-Attention Mechanism",
        type: "diagram",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
        caption: "The self-attention mechanism allows the model to weigh the importance of different words in a sequence when encoding each word, enabling the model to capture long-range dependencies and contextual relationships.",
        content: "The key innovation in transformer networks is the self-attention mechanism. For each element in an input sequence, attention calculates how much focus to put on other elements when encoding the current element. This is computed by calculating query (Q), key (K), and value (V) matrices, then using them to determine attention weights."
      },
      {
        title: "Implementation Example",
        type: "code",
        language: "Python",
        code: `import torch
import torch.nn as nn

class SelfAttention(nn.Module):
    def __init__(self, embed_size, heads):
        super(SelfAttention, self).__init__()
        self.embed_size = embed_size
        self.heads = heads
        self.head_dim = embed_size // heads
        
        assert (self.head_dim * heads == embed_size), "Embed size needs to be divisible by heads"
        
        # Linear transformations for Q, K, V
        self.q = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.k = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.v = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.fc_out = nn.Linear(heads * self.head_dim, embed_size)
        
    def forward(self, values, keys, queries, mask=None):
        N = queries.shape[0]  # Batch size
        value_len, key_len, query_len = values.shape[1], keys.shape[1], queries.shape[1]
        
        # Split embedding into self.heads pieces
        values = values.reshape(N, value_len, self.heads, self.head_dim)
        keys = keys.reshape(N, key_len, self.heads, self.head_dim)
        queries = queries.reshape(N, query_len, self.heads, self.head_dim)
        
        # Transformation
        queries = self.q(queries)
        keys = self.k(keys)
        values = self.v(values)
        
        # Attention calculation
        energy = torch.einsum("nqhd,nkhd->nhqk", [queries, keys])
        
        if mask is not None:
            energy = energy.masked_fill(mask == 0, float("-1e20"))
        
        attention = torch.softmax(energy / (self.embed_size ** (1/2)), dim=3)
        out = torch.einsum("nhql,nlhd->nqhd", [attention, values])
        
        # Reshape and pass through final linear layer
        out = out.reshape(N, query_len, self.heads * self.head_dim)
        out = self.fc_out(out)
        return out`
      },
      {
        title: "Applications & Impact",
        type: "bullets",
        items: [
          "Natural Language Processing: Transformers power models like BERT, GPT, and T5, revolutionizing tasks such as translation, summarization, and text generation.",
          "Computer Vision: Vision Transformers (ViT) apply the transformer architecture to image processing, achieving state-of-the-art results on image classification and object detection.",
          "Multimodal Learning: Models like DALL-E and Flamingo combine transformers with multiple data types (text, images, video) for creative generation and understanding.",
          "Scientific Applications: AlphaFold uses attention mechanisms inspired by transformers to predict protein structures with unprecedented accuracy."
        ]
      },
      {
        title: "Performance Metrics",
        type: "chart",
        data: [
          { name: "Parameter Efficiency", traditional: 65, transformer: 95 },
          { name: "Training Speed", traditional: 40, transformer: 85 },
          { name: "Long-Range Dependencies", traditional: 30, transformer: 90 },
          { name: "Parallelization", traditional: 45, transformer: 98 }
        ]
      }
    ]
  },
  {
    id: "zkp",
    name: "Zero-Knowledge Proofs",
    icon: Lock,
    description: "Cryptographic method allowing one party to prove knowledge without revealing the information itself",
    content: [
      {
        title: "Conceptual Overview",
        type: "text",
        content: "Zero-Knowledge Proofs (ZKPs) are cryptographic protocols that enable one party (the prover) to convince another party (the verifier) that a statement is true without revealing any information beyond the validity of the statement itself. This powerful concept forms the foundation for privacy-preserving computations in blockchain and beyond."
      },
      {
        title: "How ZKPs Work",
        type: "diagram",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
        caption: "Zero-knowledge proofs enable verification without revealing sensitive information, a critical component for privacy-preserving blockchain applications.",
        content: "In a ZKP system, the prover creates a mathematical proof that convinces the verifier that they know a secret value or that a statement is true. This is accomplished without revealing any information about the secret itself. The proof must be both convincing (complete) and reveal nothing about the secret (zero-knowledge)."
      },
      {
        title: "Types of ZKPs",
        type: "bullets",
        items: [
          "Interactive Zero-Knowledge Proofs: Require multiple rounds of communication between the prover and verifier.",
          "Non-Interactive Zero-Knowledge Proofs (NIZKs): Require only a single message from prover to verifier, making them more practical for blockchain applications.",
          "zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge): Compact proofs that can be verified quickly, widely used in privacy-focused cryptocurrencies.",
          "zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge): Post-quantum secure proofs that don't require a trusted setup."
        ]
      },
      {
        title: "Implementation Example",
        type: "code",
        language: "Solidity",
        code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ZKProofVerifier is Ownable {
    // Verification key components
    struct VerifyingKey {
        uint256[] alpha1;
        uint256[] beta2;
        uint256[] gamma2;
        uint256[] delta2;
        uint256[][] IC; // Input coordinates
    }
    
    // Proof components
    struct Proof {
        uint256[] a;
        uint256[] b;
        uint256[] c;
    }
    
    VerifyingKey private verifyingKey;
    
    // Set verification key (typically done by the contract owner)
    function setVerifyingKey(
        uint256[] memory _alpha1,
        uint256[] memory _beta2,
        uint256[] memory _gamma2,
        uint256[] memory _delta2,
        uint256[][] memory _IC
    ) external onlyOwner {
        verifyingKey.alpha1 = _alpha1;
        verifyingKey.beta2 = _beta2;
        verifyingKey.gamma2 = _gamma2;
        verifyingKey.delta2 = _delta2;
        verifyingKey.IC = _IC;
    }
    
    // Verify a zero-knowledge proof
    function verifyProof(
        Proof calldata proof,
        uint256[] calldata input
    ) external view returns (bool) {
        require(input.length + 1 == verifyingKey.IC.length, "Invalid input length");
        
        // This is a simplified placeholder for the actual verification logic
        // Real implementations would perform pairing checks and elliptic curve operations
        
        return performVerification(proof, input);
    }
    
    // Placeholder for complex verification logic
    function performVerification(
        Proof calldata proof,
        uint256[] calldata input
    ) internal view returns (bool) {
        // Real implementation would use elliptic curve pairings to verify the proof
        // This typically involves checking that e(A, B) = e(C, D) for some values A, B, C, D
        // derived from the proof and verification key
        
        // Simplified check for demonstration purposes
        return proof.a.length > 0 && proof.b.length > 0 && proof.c.length > 0;
    }
}`
      },
      {
        title: "Real-World Applications",
        type: "bullets",
        items: [
          "Privacy-Preserving Cryptocurrencies: Zcash and other privacy-focused cryptocurrencies use zk-SNARKs to shield transaction details while maintaining verifiability.",
          "Identity Verification: Proving identity attributes (like age verification) without revealing personal information.",
          "Private Smart Contracts: Enabling confidential transactions and computations on public blockchains.",
          "Supply Chain Compliance: Verifying regulatory compliance without revealing sensitive business information.",
          "Secure Voting Systems: Allowing verification that votes are counted correctly without revealing individual votes."
        ]
      }
    ]
  },
  {
    id: "federated-learning",
    name: "Federated Learning",
    icon: Zap,
    description: "Machine learning technique that trains algorithms across multiple devices while keeping data localized",
    content: [
      {
        title: "Core Concept",
        type: "text",
        content: "Federated Learning is a distributed machine learning approach that enables training algorithms across multiple devices or servers while keeping data localized. Instead of collecting all data in a central server, the model travels to the data, and only model updates are shared. This preserves privacy while allowing collaborative learning from diverse data sources."
      },
      {
        title: "How Federated Learning Works",
        type: "diagram",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        caption: "Federated learning allows models to be trained across multiple devices without sharing the underlying data, enabling privacy-preserving machine learning at scale.",
        content: "The federated learning process typically follows these steps: 1) A global model is initialized on a central server, 2) The model is sent to participating devices, 3) Devices train the model on their local data, 4) Only model updates (not the data) are sent back to the server, 5) The server aggregates these updates to improve the global model, and 6) The process repeats for multiple rounds until the model converges."
      },
      {
        title: "Implementation Example",
        type: "code",
        language: "Python",
        code: `import tensorflow as tf
import tensorflow_federated as tff
import numpy as np

# Create a simple model for federated learning
def create_keras_model():
    return tf.keras.models.Sequential([
        tf.keras.layers.Input(shape=(784,)),
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dense(10, activation='softmax')
    ])

# Convert the Keras model to a TFF model
def model_fn():
    keras_model = create_keras_model()
    return tff.learning.from_keras_model(
        keras_model,
        input_spec=preprocessed_example_dataset.element_spec,
        loss=tf.keras.losses.SparseCategoricalCrossentropy(),
        metrics=[tf.keras.metrics.SparseCategoricalAccuracy()]
    )

# Simulate data on multiple devices (e.g., 3 clients)
def create_client_data(client_id):
    # In a real scenario, this would access local data on the device
    # For this example, we're creating synthetic data
    num_examples = np.random.randint(20, 100)
    x = np.random.rand(num_examples, 784).astype(np.float32)
    y = np.random.randint(0, 10, size=num_examples).astype(np.int32)
    return x, y

# Prepare training data for each client
client_ids = ['device_1', 'device_2', 'device_3']
client_datasets = []

for client_id in client_ids:
    x, y = create_client_data(client_id)
    dataset = tf.data.Dataset.from_tensor_slices(({'x': x}, y))
    client_datasets.append(dataset.batch(10))

# Initialize the federated learning algorithm
preprocessed_example_dataset = client_datasets[0]
trainer = tff.learning.build_federated_averaging_process(
    model_fn,
    client_optimizer_fn=lambda: tf.keras.optimizers.SGD(0.1)
)

# Run federated training
state = trainer.initialize()
for round_num in range(5):
    state, metrics = trainer.next(state, client_datasets)
    print(f'Round {round_num}')
    print(f'Metrics: {metrics}')`
      },
      {
        title: "Key Advantages",
        type: "bullets",
        items: [
          "Enhanced Privacy: Data never leaves the user's device, addressing privacy concerns and regulatory requirements.",
          "Reduced Bandwidth: Only model updates (not raw data) are transmitted, reducing network bandwidth requirements.",
          "Diverse Data Access: Models can learn from a broader range of data that would otherwise be inaccessible due to privacy or regulatory constraints.",
          "Real-time Learning: Models can adapt to user behavior in real-time on the device.",
          "Reduced Central Storage Needs: Organizations don't need to store and manage large datasets centrally."
        ]
      },
      {
        title: "Industry Applications",
        type: "bullets",
        items: [
          "Healthcare: Training medical AI models across hospitals without sharing patient records.",
          "Mobile Devices: Improving keyboard prediction, voice recognition, and content recommendations while keeping user data on-device.",
          "IoT Networks: Enhancing predictive maintenance and anomaly detection across distributed sensor networks.",
          "Financial Services: Developing fraud detection models across banks without sharing sensitive customer financial data.",
          "Smart Cities: Training traffic prediction models across multiple data sources without centralizing citizen movement data."
        ]
      }
    ]
  }
];

export function TechnologyDeepDiveSection() {
  const [activeTab, setActiveTab] = useState("transformers");
  const [expandedAccordions, setExpandedAccordions] = useState<string[]>([]);

  const handleAccordionChange = (value: string) => {
    setExpandedAccordions(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value) 
        : [...prev, value]
    );
  };

  const selectedTechnology = technologies.find(tech => tech.id === activeTab);

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
          <h2 className="text-4xl md:text-5xl font-bold">Technology Deep Dive</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore in-depth technical explanations of cutting-edge technologies powering the next generation of innovation
          </p>
        </motion.div>

        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="mb-12">
            <TabsList className="w-full justify-center bg-black/40 border border-[#00E6E6]/20 p-1 rounded-lg">
              {technologies.map(tech => (
                <TabsTrigger 
                  key={tech.id} 
                  value={tech.id}
                  className="flex items-center gap-2 data-[state=active]:bg-[#00E6E6]/10 data-[state=active]:text-[#00E6E6] data-[state=active]:shadow-none rounded-md transition-all duration-200"
                >
                  <tech.icon className="w-4 h-4" />
                  <span>{tech.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {technologies.map(tech => (
            <TabsContent key={tech.id} value={tech.id} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="p-3 rounded-lg bg-[#00E6E6]/10">
                  <tech.icon className="w-8 h-8 text-[#00E6E6]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{tech.name}</h3>
                  <p className="text-gray-400">{tech.description}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Table of Contents - Left Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                      <h4 className="text-lg font-semibold mb-4">Contents</h4>
                      <ul className="space-y-3">
                        {tech.content.map((item, index) => (
                          <li key={index}>
                            <button
                              onClick={() => {
                                const id = `${tech.id}-${index}`;
                                document.getElementById(id)?.scrollIntoView({ 
                                  behavior: 'smooth',
                                  block: 'start'
                                });
                                handleAccordionChange(id);
                              }}
                              className="text-sm text-gray-400 hover:text-[#00E6E6] transition-colors text-left w-full"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Main Content - Right Side */}
                <div className="lg:col-span-4">
                  <Accordion 
                    type="multiple"
                    value={expandedAccordions}
                    onValueChange={setExpandedAccordions}
                    className="space-y-4"
                  >
                    {tech.content.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${tech.id}-${index}`}
                        id={`${tech.id}-${index}`}
                        className="border border-[#00E6E6]/20 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-[#00E6E6]/5 transition-colors hover:no-underline">
                          <h3 className="text-lg font-semibold text-left">{item.title}</h3>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 pt-2">
                          {/* Text Content */}
                          {item.type === "text" && (
                            <p className="text-gray-300 leading-relaxed">
                              {item.content}
                            </p>
                          )}

                          {/* Diagram/Image with Caption */}
                          {item.type === "diagram" && (
                            <div className="space-y-4">
                              <div className="relative aspect-video rounded-lg overflow-hidden">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-sm text-gray-400 italic">{item.caption}</p>
                              <p className="text-gray-300 leading-relaxed mt-4">
                                {item.content}
                              </p>
                            </div>
                          )}

                          {/* Bullet Points */}
                          {item.type === "bullets" && (
                            <ul className="space-y-3">
                              {item.items.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-[#00E6E6] mt-2 flex-shrink-0" />
                                  <p className="text-gray-300">{bullet}</p>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Code Example */}
                          {item.type === "code" && (
                            <div className="space-y-4">
                              <div className="relative">
                                <pre className="p-4 rounded-lg bg-black/60 border border-[#00E6E6]/10 overflow-x-auto text-sm text-gray-300 font-mono">
                                  <code>{item.code}</code>
                                </pre>
                                <div className="absolute top-2 right-2 text-xs text-gray-400 bg-black/60 px-2 py-1 rounded">
                                  {item.language}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Performance Chart */}
                          {item.type === "chart" && (
                            <div className="space-y-4">
                              {item.data.map((dataPoint, i) => (
                                <div key={i} className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">{dataPoint.name}</span>
                                    <div className="flex gap-4">
                                      <span className="text-gray-400">Traditional: {dataPoint.traditional}%</span>
                                      <span className="text-[#00E6E6]">Transformer: {dataPoint.transformer}%</span>
                                    </div>
                                  </div>
                                  <div className="h-6 bg-gray-800 rounded-full overflow-hidden flex">
                                    <div 
                                      className="h-full bg-gray-600"
                                      style={{ width: `${dataPoint.traditional}%` }}
                                    ></div>
                                    <div 
                                      className="h-full bg-[#00E6E6]"
                                      style={{ width: `${dataPoint.transformer - dataPoint.traditional}%` }}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                              <div className="flex gap-6 justify-end mt-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                  <span className="text-sm text-gray-400">Traditional</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 bg-[#00E6E6] rounded-full"></div>
                                  <span className="text-sm text-[#00E6E6]">Transformer</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  {/* Learn More Button */}
                  <div className="mt-8">
                    <Link 
                      href={`/research/${tech.id === "transformers" ? "machine-learning" : 
                              tech.id === "zkp" ? "blockchain-basics" : 
                              "future-of-ai"}`}
                    >
                      <Button 
                        className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                      >
                        Explore More About {tech.name}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Explore Our Research</h3>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Dive deeper into our extensive research on these and other cutting-edge technologies through our detailed research papers and articles.
          </p>
          <Link href="/research">
            <Button 
              variant="outline"
              className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
            >
              View All Research
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}