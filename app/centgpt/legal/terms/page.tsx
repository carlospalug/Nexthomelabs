"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function CentGPTTermsPage() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/centgpt" className="hover:text-white transition-colors">CentGPT</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/centgpt/legal" className="hover:text-white transition-colors">Legal</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Terms of Use</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: Feb 22, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold">CentGPT Terms of Use</h1>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="p-6 border border-[#00E6E6]/20 rounded-xl bg-[#00E6E6]/5 mb-8">
                <p className="!mt-0 !mb-0">
                  Welcome to CentGPT! These Terms of Use govern your access to and use of our AI-powered platform. By using CentGPT, you agree to be bound by these terms and our Privacy Policy. Please read them carefully to understand your rights and obligations when utilizing our services. If you do not agree to these terms, you should not access or use CentGPT. Your continued use of CentGPT signifies your acceptance of these Terms of Use.
                </p>
              </div>

              <div id="definitions" className="scroll-mt-24">
                <h2>1. Definitions</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">1.1 Key Terms</h3>
                  <ul className="!mb-4">
                    <li>"CentGPT"
                      <ul>
                        <li>
                          <p>
                            When we refer to "CentGPT," we are encompassing our proprietary AI language model and the entire platform that delivers its capabilities. This term includes not only the core artificial intelligence itself but also all associated services, features, functionalities, tools, and applications that we provide to enable users to interact with and benefit from the AI model. It also extends to related APIs (Application Programming Interfaces) and any integrations that allow external systems to connect with and utilize CentGPT's functionalities. In essence, "CentGPT" is the complete offering, from the underlying AI technology to the user-facing services and developer resources.
                          </p>
                        </li>
                        <li>
                          <p>
                            This definition also covers any updates, upgrades, modifications, or new versions of the AI model and platform that we may release in the future. By using CentGPT, you are agreeing to these terms as they apply to the current version and any subsequent iterations of the service. We encourage you to regularly review these terms to stay informed of any changes.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>"Service"
                      <ul>
                        <li>
                          <p>
                            The "Service" broadly refers to all the features, functionalities, and capabilities that are made available to users through the CentGPT platform. This includes the user interface that you interact with directly, the underlying systems that process your requests and generate responses, and all forms of interaction facilitated by CentGPT. It encompasses the entire user experience, from submitting your initial query to receiving and utilizing the AI-generated output.
                          </p>
                        </li>
                        <li>
                           <p>
                            Furthermore, "Service" includes any API access and capabilities that we may offer, allowing developers to integrate CentGPT into their own applications and workflows. This definition is intended to be comprehensive, covering every aspect of the CentGPT offering that users can access and utilize, whether directly or through programmatic interfaces.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>"User"
                      <ul>
                        <li>
                          <p>
                            "User" refers to any individual or entity that accesses or utilizes the CentGPT Service. This includes individual account holders who directly interact with the CentGPT platform through a user interface. It also extends to representatives of organizations or businesses who are using CentGPT on behalf of their entity.
                          </p>
                        </li>
                        <li>
                          <p>
                            Additionally, "User" encompasses API integrators, which are developers or organizations that are utilizing CentGPT's APIs to incorporate its functionalities into their own products or services. Essentially, anyone who interacts with CentGPT, regardless of the method of access or the purpose of use, falls under the definition of "User" within these Terms of Use.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>"Content"
                      <ul>
                        <li>
                          <p>
                            "Content" is defined as all forms of information, data, and material that are involved in the use of CentGPT. This includes "User inputs and queries," which are the text, prompts, or data that users provide to CentGPT to initiate a request or interaction. It also encompasses "AI-generated responses," which are the outputs, answers, or information produced by CentGPT in response to user inputs.
                          </p>
                        </li>
                        <li>
                          <p>
                            Furthermore, "Content" includes "Processed data and results," which refers to any data that CentGPT processes, analyzes, or transforms as part of its operations, as well as the resulting outputs and insights derived from this processing. This broad definition of "Content" ensures that all forms of data and information exchanged within the CentGPT ecosystem are covered under these Terms of Use, regardless of their origin or format.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="acceptable-use" className="scroll-mt-24">
                <h2>2. Acceptable Use</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">2.1 Permitted Uses</h3>
                  <p>Users are encouraged to utilize CentGPT for a wide range of constructive and beneficial purposes. We believe in the power of AI to enhance productivity, foster creativity, and facilitate learning.  Therefore, the following are examples of permitted uses, intended to illustrate the breadth of applications we support:</p>
                  <ul className="!mb-4">
                    <li>Business Applications
                      <ul>
                        <li>
                          <p>
                            CentGPT is a powerful tool for enhancing various business operations.  This includes "Content creation and editing," where CentGPT can assist in drafting marketing materials, generating reports, or refining written communications. It can also be used for "Data analysis and insights," helping businesses to extract meaningful patterns and information from complex datasets.  Furthermore, CentGPT can contribute to "Process automation" by streamlining workflows, automating repetitive tasks, and improving overall efficiency. Finally, it can significantly enhance "Customer service" by providing intelligent and responsive support, answering customer inquiries, and improving customer engagement. These business applications are intended to empower organizations to achieve greater efficiency and innovation through the responsible use of AI.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>Personal Use
                      <ul>
                        <li>
                          <p>
                            Beyond business, CentGPT offers significant value for personal enrichment and development.  It is a valuable resource for "Learning and research," providing access to information, assisting in understanding complex topics, and supporting educational pursuits.  For creative endeavors, CentGPT can be used for "Creative writing," helping users to overcome writer's block, explore new ideas, and enhance their storytelling abilities.  It can also aid in "Problem-solving," offering different perspectives, suggesting potential solutions, and assisting in logical reasoning.  Finally, CentGPT can contribute to "Personal productivity" by helping with task management, scheduling, and organizing information, allowing users to better manage their time and personal projects.  These personal uses are designed to empower individuals to learn, create, and achieve their personal goals with the assistance of AI.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>Development
                      <ul>
                        <li>
                          <p>
                            CentGPT is designed to be a versatile platform that supports developers in building innovative applications and solutions. "API integration" is a core permitted use, allowing developers to seamlessly incorporate CentGPT's AI capabilities into their own software, websites, and services.  This enables the creation of "Custom solutions" tailored to specific needs and industries, leveraging the power of AI in diverse contexts.  Furthermore, CentGPT can be used for "Testing and prototyping," providing a powerful environment for experimenting with AI functionalities, validating ideas, and rapidly developing proof-of-concepts.  These development-oriented uses are intended to foster innovation and enable the creation of new and exciting applications powered by CentGPT's AI technology.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">2.2 Prohibited Uses</h3>
                  <p>To ensure a safe, ethical, and functional environment for all users, certain uses of CentGPT are strictly prohibited. These prohibited uses are in place to protect the integrity of the service, the well-being of our users, and to comply with legal and ethical standards. Engaging in prohibited uses may result in suspension or termination of your access to CentGPT.  The following categories outline the activities that are not permitted:</p>
                  <ul className="!mb-4">
                    <li>Harmful Content
                      <ul>
                        <li>
                          <p>
                            The generation or distribution of "Harmful content" is strictly forbidden. This includes the use of CentGPT to create or spread "Malware and viruses" that could damage computer systems or compromise user data.  "Phishing attempts," which aim to deceive users into revealing sensitive information, are also prohibited.  Generating "Spam," including unsolicited bulk messages or unwanted advertisements, is not allowed.  Furthermore, any content that constitutes "Harassment or abuse," including threats, insults, or discriminatory language targeting individuals or groups, is strictly prohibited.  Our commitment is to maintain a safe and respectful environment, and the creation or dissemination of harmful content undermines this goal.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>Illegal Activities
                      <ul>
                        <li>
                          <p>
                            CentGPT must not be used for any "Illegal activities" or to facilitate unlawful conduct. This includes activities such as "Fraud and scams," where CentGPT is used to deceive or defraud individuals or entities for financial or other gain.  "Copyright infringement," which involves the unauthorized reproduction or distribution of copyrighted materials, is also prohibited.  Furthermore, using CentGPT to gain "Unauthorized access" to computer systems, networks, or data without proper permission is strictly forbidden.  We are committed to upholding the law and expect our users to utilize CentGPT in a manner that is fully compliant with all applicable legal regulations.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>Misuse of Service
                      <ul>
                        <li>
                          <p>
                            "Misuse of service" refers to any activities that negatively impact the performance, security, or availability of CentGPT, or that unfairly exploit its resources. This includes making "Excessive API calls" that could overload our systems and degrade the service for other users.  Any actions that aim to cause "Service disruption," such as denial-of-service attacks or attempts to intentionally impair functionality, are strictly prohibited.  Furthermore, "Unauthorized scraping" of data from CentGPT, which violates our terms of service and may compromise our systems, is not permitted.  We expect users to utilize CentGPT responsibly and respectfully, ensuring that their usage does not negatively affect the service for themselves or others.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="ai-specific" className="scroll-mt-24">
                <h2>3. AI-Specific Terms</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">3.1 Model Behavior</h3>
                  <p>As an AI-powered service, it is crucial for users to understand the inherent limitations and characteristics of our AI models. We are committed to transparency and want to ensure that users have realistic expectations when interacting with CentGPT.  Understanding these AI-specific aspects is key to responsible and effective utilization of the service:</p>
                  <ul className="!mb-4">
                    <li>Accuracy and Reliability
                      <ul>
                        <li>
                          <p>
                            It is important to acknowledge that "AI responses may contain errors."  While we strive for accuracy and continually improve our models, AI is not infallible.  The information provided by CentGPT should not be considered as definitive or always correct.  Therefore, for critical decisions or information, it is essential that "Critical information requires verification" from reliable, independent sources.  Users should not solely rely on AI-generated content for crucial matters without cross-referencing and confirming the information through established and trusted channels. Furthermore, "Results may vary based on context." The same prompt or query might yield different responses depending on various factors, including the specific wording, the model's current state, and the evolving nature of AI learning.  Users should be aware of this variability and interpret AI outputs with critical thinking and contextual awareness.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>Learning Process
                      <ul>
                        <li>
                          <p>
                            Our AI model is designed to be dynamic and adaptive.  The "Model learns from interactions," meaning that as users interact with CentGPT, the AI continuously processes and learns from these interactions.  This ongoing learning process is a fundamental aspect of how the AI improves and evolves over time.  It is part of a "Continuous improvement process" where we are constantly refining the model, updating its knowledge base, and enhancing its capabilities based on user feedback, data analysis, and ongoing research.  This iterative development allows for "Adaptation to user needs," as the model becomes better at understanding user requests, providing relevant responses, and tailoring its behavior to better serve the user community as a whole.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">3.2 Content Rights</h3>
                  <p>Understanding the ownership and usage rights related to content within CentGPT is important for both users and for clarifying our operational framework.  We aim to provide clear guidelines regarding content ownership to ensure transparency and protect the rights of all parties involved:</p>
                  <ul className="!mb-4">
                    <li>User-Provided Content
                      <ul>
                        <li>
                          <p>
                            When you provide input to CentGPT, such as prompts or queries, "Users retain ownership" of this original content.  We recognize and respect your intellectual property rights in the information you provide to the service.  However, by using CentGPT, you grant us a "Limited license for processing" your content. This license is necessary for us to operate the service, process your requests, and generate responses.  This license is strictly limited to the purpose of providing the CentGPT service to you and improving its functionality.  Furthermore, "Privacy protections apply" to your user-provided content. We are committed to protecting your privacy and handling your data in accordance with our Privacy Policy.  We implement measures to ensure the confidentiality and security of your inputs and personal information.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>AI-Generated Content
                      <ul>
                        <li>
                          <p>
                            Regarding the content generated by CentGPT in response to your prompts, "Usage rights granted to users" are provided.  Generally, users are granted broad rights to utilize the AI-generated content for their intended purposes, which may include personal, commercial, or non-commercial use, within the bounds of these Terms of Use and applicable laws.  However, for certain specific uses, especially "Commercial licensing requirements" may apply. If you intend to use AI-generated content for commercial purposes, particularly in ways that could generate revenue or have significant business implications, it is important to review our licensing terms or contact us for clarification to ensure compliance.  Finally, "Attribution guidelines" may be applicable in certain contexts.  While not always required, attribution to CentGPT as the source of AI-generated content is appreciated and may be necessary depending on the specific usage and licensing terms.  We will provide clear guidance on attribution requirements where they are applicable.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="service-terms" className="scroll-mt-24">
                <h2>4. Service Terms</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 my-8 rounded-xl">
                  <h3 className="!mt-0">4.1 Service Availability</h3>
                  <p>We are committed to providing a reliable and accessible service.  However, it is important to understand the realities of service operation and potential interruptions.  The following points outline our approach to service availability:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "Uptime commitment": While we strive to maintain a high level of uptime for CentGPT, we cannot guarantee uninterrupted service at all times.  Various factors, including technical issues, maintenance requirements, and unforeseen circumstances, can impact service availability.  We will make commercially reasonable efforts to minimize downtime and restore service as quickly as possible in case of interruptions.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Maintenance windows":  To ensure the ongoing performance, security, and improvement of CentGPT, we may need to schedule "Maintenance windows" for system updates and maintenance.  We will typically aim to perform maintenance during off-peak hours and provide reasonable advance notice whenever possible to minimize disruption to users.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Service interruptions":  Despite our best efforts, "Service interruptions" may occur.  These interruptions can be due to a variety of reasons, including but not limited to server outages, network issues, software bugs, or security incidents.  We will work diligently to resolve any service interruptions promptly and keep users informed of the situation and expected resolution time.
                      </p>
                    </li>
                    <li>
                      <p>
                        "System updates":  CentGPT is a constantly evolving service.  To enhance its functionality, improve performance, and address security vulnerabilities, we will regularly implement "System updates."  These updates may sometimes require brief periods of service unavailability. We will strive to make these updates as seamless as possible and minimize any disruption to user access.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">4.2 API Usage</h3>
                  <p>For users accessing CentGPT through our API, specific terms and guidelines apply to ensure fair usage, system stability, and security.  These API usage terms are designed to promote a healthy and sustainable ecosystem for all developers and users:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "Rate limits": To prevent abuse and ensure fair access for all API users, we implement "Rate limits."  These limits restrict the number of API requests that a user can make within a specific timeframe.  Rate limits are in place to protect our infrastructure from overload and to maintain consistent service performance.  Users are expected to adhere to these rate limits and design their applications accordingly.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Authentication requirements":  Access to the CentGPT API requires proper "Authentication."  Users must authenticate their API requests using valid API keys or credentials to verify their identity and authorization to access the service.  This is a crucial security measure to protect against unauthorized access and misuse of the API.  Users are responsible for maintaining the confidentiality of their API keys and ensuring they are used securely.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Usage quotas":  Depending on your subscription plan or API access level, "Usage quotas" may apply.  These quotas define the maximum amount of API usage allowed within a given period, such as monthly request limits or data processing limits.  Users are responsible for monitoring their API usage and ensuring they remain within their allocated quotas.  Exceeding usage quotas may result in service limitations or additional charges, as outlined in your subscription agreement.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Integration guidelines":  When integrating CentGPT API into your applications, you are expected to follow our "Integration guidelines." These guidelines provide best practices for API usage, including recommendations for efficient request handling, error management, and data processing.  Adhering to these guidelines helps ensure optimal performance and stability for both your application and the CentGPT service.  We may update these guidelines from time to time, and users are encouraged to review the latest documentation to stay informed.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="privacy" className="scroll-mt-24">
                <h2>5. Privacy and Data Usage</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 my-8 rounded-xl">
                  <h3 className="!mt-0">5.1 Data Processing</h3>
                  <p>We are committed to protecting your privacy and handling your data responsibly.  Our data processing practices are designed to be transparent, secure, and compliant with applicable privacy regulations.  The following points outline key aspects of how we handle your data:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "Collection purposes":  We collect data for specific and legitimate "Collection purposes," primarily to provide and improve the CentGPT service.  This includes collecting data to process your requests, personalize your experience, enhance our AI models, and ensure the security and functionality of the platform.  We will only collect data that is necessary for these specified purposes and will not collect data indiscriminately.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Processing methods":  Our "Processing methods" are designed to be efficient, secure, and respectful of your privacy.  We utilize various technologies and procedures to process data, including data anonymization, encryption, and secure storage protocols.  We strive to minimize the amount of personal data processed and implement measures to protect data integrity and confidentiality throughout the processing lifecycle.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Storage duration":  We retain data only for as long as necessary to fulfill the "Storage duration" required for the specified collection purposes, or as required by applicable legal or regulatory obligations.  Once data is no longer needed, we have established data retention policies and procedures to ensure secure and appropriate data disposal or anonymization.  We are committed to minimizing data retention periods and avoiding unnecessary storage of personal information.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Security measures":  We implement robust "Security measures" to protect your data from unauthorized access, use, disclosure, alteration, or destruction.  These measures include physical, technical, and administrative safeguards, such as access controls, encryption, firewalls, intrusion detection systems, and regular security audits.  We continuously evaluate and update our security measures to address evolving security threats and ensure the ongoing protection of your data.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="liability" className="scroll-mt-24">
                <h2>6. Limitation of Liability</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 my-8 rounded-xl">
                  <h3 className="!mt-0">6.1 Warranty Disclaimer</h3>
                  <p>CentGPT is provided to you on an "as is" basis, and we make no warranties or representations regarding its performance, reliability, or suitability for your specific purposes.  This section outlines the extent to which we disclaim warranties in relation to the service:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "No warranties of accuracy":  We do not provide "No warranties of accuracy" regarding the AI-generated content or information provided by CentGPT.  While we strive for accuracy, AI models are inherently probabilistic and may produce outputs that are incomplete, inaccurate, or contain errors.  Users should not rely solely on CentGPT for critical decisions without independent verification.
                      </p>
                    </li>
                    <li>
                      <p>
                        "No guarantees of availability":  We offer "No guarantees of availability" of the CentGPT service.  While we aim for high uptime, service interruptions, downtime, or periods of unavailability may occur due to various factors, including technical issues, maintenance, or unforeseen circumstances.  We are not liable for any losses or damages arising from service unavailability.
                      </p>
                    </li>
                    <li>
                      <p>
                        "No fitness for particular purpose":  We disclaim "No fitness for particular purpose" warranties.  CentGPT is a general-purpose AI platform, and we do not warrant that it will be suitable or effective for your specific needs, applications, or intended use cases.  It is your responsibility to evaluate the suitability of CentGPT for your particular purposes and to use it at your own risk.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">6.2 Limitation of Damages</h3>
                  <p>To the maximum extent permitted by applicable law, our liability for any damages arising from your use of CentGPT is limited.  This section clarifies the types of damages for which we will not be liable:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "Direct damages":  Under certain circumstances, and where liability is legally mandated, our liability for "Direct damages" will be limited to the extent permissible by law.  Direct damages are typically those that are a direct and foreseeable result of our breach of these terms or negligence, up to a maximum amount as may be specified in applicable law or agreements.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Indirect damages":  We are not liable for "Indirect damages," which are damages that arise as a consequence of, but are not directly caused by, your use of CentGPT.  This includes, but is not limited to, loss of profits, loss of data, business interruption, or reputational damage, even if we have been advised of the possibility of such damages.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Consequential damages":  We are not liable for "Consequential damages," which are damages that are a remote or indirect consequence of your use of CentGPT.  These damages are often not foreseeable at the time of use and may include things like lost opportunities, missed deadlines, or impacts on third-party relationships.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Special damages":  We are not liable for "Special damages," which are damages that are unique or specific to your particular circumstances and are not typically incurred by other users in similar situations.  This could include damages related to specific business contracts, unique project requirements, or pre-existing vulnerabilities in your systems.  We are not responsible for these types of damages as they are often beyond our control and not reasonably foreseeable.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="intellectual-property" className="scroll-mt-24">
                <h2>7. Intellectual Property</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 my-8 rounded-xl">
                  <h3 className="!mt-0">7.1 Ownership Rights</h3>
                  <p>Intellectual property rights are important, and we want to clearly define the ownership of different components of CentGPT and the content generated through it.  This section clarifies the ownership structure:</p>
                  <ul className="!mb-4">
                    <li>CentGPT Technology
                      <ul>
                        <li>
                          <p>
                            "AI models and algorithms":  We retain full ownership of the "AI models and algorithms" that power CentGPT.  These are our proprietary creations and are protected by intellectual property laws.  Your use of CentGPT does not grant you any ownership or intellectual property rights in these underlying AI technologies.
                          </p>
                        </li>
                        <li>
                          <p>
                            "Platform infrastructure":  We own and retain all intellectual property rights in the "Platform infrastructure" of CentGPT.  This includes the servers, networks, databases, software, and other technical systems that enable the operation of the service.  Your access to and use of CentGPT does not transfer any ownership rights in this infrastructure to you.
                          </p>
                        </li>
                        <li>
                          <p>
                            "User interface elements":  We own the intellectual property rights in the "User interface elements" of CentGPT, including the design, graphics, layout, and visual presentation of the platform.  These elements are protected by copyright and other intellectual property laws.  You are granted a limited license to use the user interface as part of your authorized use of CentGPT, but you do not acquire any ownership rights in these elements.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>User Content
                      <ul>
                        <li>
                          <p>
                            "Input ownership":  As previously stated, you retain "Input ownership" of the prompts, queries, and data that you provide to CentGPT.  You own the intellectual property rights in your original inputs.  We only process this input to provide the service and do not claim ownership of your user-provided content.
                          </p>
                        </li>
                        <li>
                          <p>
                            "Output licensing":  While you own your inputs, the "Output licensing" for AI-generated content is generally granted to you for broad usage, as described in Section 3.2.  We grant you a license to use the AI-generated outputs for your intended purposes, subject to these Terms of Use and any specific licensing terms that may apply.  The exact scope of this license may vary depending on the context and your subscription plan.
                          </p>
                        </li>
                        <li>
                          <p>
                            "Usage rights":  Your "Usage rights" for both user-provided content and AI-generated content are governed by these Terms of Use and applicable laws.  You are expected to use CentGPT and its outputs responsibly and ethically, respecting intellectual property rights and complying with all relevant regulations.  We reserve the right to take action against misuse or infringement of intellectual property rights in connection with CentGPT.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="termination" className="scroll-mt-24">
                <h2>8. Account Termination</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 my-8 rounded-xl">
                  <h3 className="!mt-0">8.1 Termination Conditions</h3>
                  <p>We reserve the right to terminate or suspend your access to CentGPT under certain circumstances.  These "Termination conditions" are necessary to protect the integrity of the service, ensure compliance with our terms, and maintain a safe environment for all users.  The following are examples of conditions that may lead to account termination:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "Terms violation":  Violation of these Terms of Use is a primary reason for potential account termination.  If you breach any provision of these terms, including the Acceptable Use Policy, we may, at our discretion, suspend or terminate your access to CentGPT.  We encourage you to review these terms carefully and adhere to them at all times.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Abuse of service":  "Abuse of service," including misuse of the API, excessive usage that disrupts the service for others, or any activity that negatively impacts the performance or security of CentGPT, may result in account termination.  We expect users to utilize the service responsibly and respectfully, and any form of abuse is taken seriously.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Security concerns":  If we identify "Security concerns" related to your account or usage patterns, such as suspected unauthorized access, hacking attempts, or activities that pose a security risk to CentGPT or other users, we may terminate your account to protect the service and our community.  We prioritize the security of our platform and take proactive measures to mitigate security risks.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Non-payment":  For subscription-based services, "Non-payment" of fees may result in account termination.  If you fail to pay subscription fees when due, we may suspend or terminate your access to paid features or the entire CentGPT service, depending on the terms of your subscription agreement.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">8.2 Effect of Termination</h3>
                  <p>Understanding the consequences of account termination is important.  This section outlines the "Effect of Termination" and what happens when your access to CentGPT is terminated:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "Data retention period":  Upon account termination, we may have a "Data retention period" during which we retain your user data.  The duration of this retention period may vary depending on our data retention policies, legal requirements, and the reason for termination.  After the retention period expires, we may securely delete or anonymize your data.  Please refer to our Privacy Policy for more details on data retention.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Access revocation":  Upon termination, your "Access revocation" to CentGPT will be immediate.  You will no longer be able to log in to your account, access the service, or utilize any of its features.  API access will also be revoked for API users.  Termination means a complete cessation of your ability to use CentGPT.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Content preservation":  We may, at our discretion, take steps for "Content preservation" in certain situations, particularly if termination is due to terms violations or abuse.  This could involve preserving user-generated content for legal or compliance reasons, or to investigate potential misuse of the service.  However, we are not obligated to preserve user content in all cases, and data deletion may occur as per our data retention policies.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Refund policy":  Our "Refund policy" in case of account termination depends on the reason for termination and your subscription agreement.  Generally, if termination is due to your breach of these terms, you may not be entitled to a refund of any prepaid fees.  However, if we terminate your account for reasons other than your breach, we may, at our discretion, offer a pro-rata refund of unused subscription fees.  Please refer to your subscription agreement or contact us for specific details on our refund policy in termination scenarios.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="modifications" className="scroll-mt-24">
                <h2>9. Modifications to Terms</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 my-8 rounded-xl">
                  <h3 className="!mt-0">9.1 Change Process</h3>
                  <p>These Terms of Use may be updated or modified from time to time to reflect changes in our services, legal requirements, or business practices.  We are committed to transparency and will follow a clear "Change process" when making modifications to these terms:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "Prior notification":  We will provide "Prior notification" of any material changes to these Terms of Use.  This notification may be through email, a prominent notice within the CentGPT platform, or other reasonable means.  We will aim to provide sufficient advance notice to allow you to review the changes before they become effective.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Change documentation":  We will maintain "Change documentation" of all modifications to these Terms of Use.  This documentation will typically include version history, dates of changes, and a summary of the modifications made.  This allows you to easily track changes over time and understand the evolution of these terms.
                      </p>
                    </li>
                    <li>
                      <p>
                        "User acceptance":  Continued use of CentGPT after the effective date of any modifications to these terms will constitute "User acceptance" of the updated terms.  In some cases, we may require explicit acceptance of the updated terms, such as through a click-through agreement or by requiring you to acknowledge and agree to the new terms upon your next login.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Grace periods":  For significant changes that may impact your use of CentGPT, we may provide "Grace periods" before the updated terms become fully effective.  This grace period allows you time to review the changes, adjust your usage if necessary, or decide whether to continue using the service under the new terms.  The duration of any grace period will be determined on a case-by-case basis and will be communicated in our change notifications.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="governing-law" className="scroll-mt-24">
                <h2>10. Governing Law</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 my-8 rounded-xl">
                  <h3 className="!mt-0">10.1 Jurisdiction</h3>
                  <p>These Terms of Use are governed by and construed in accordance with specific legal frameworks.  This section clarifies the "Jurisdiction" that applies to these terms:</p>
                  <ul className="!mb-4">
                    <li>
                      <p>
                        "Ugandan law":  These Terms of Use are primarily governed by "Ugandan law."  The laws of Uganda will be the primary legal framework used to interpret and enforce these terms, as NextHomeLabs Limited, the provider of CentGPT, is based in Uganda.  Any disputes arising from or related to these terms will be subject to the jurisdiction of the courts of Uganda, unless otherwise specified in a separate agreement.
                      </p>
                    </li>
                    <li>
                      <p>
                        "International regulations":  In addition to Ugandan law, "International regulations" may also be relevant to these Terms of Use, particularly concerning data privacy, intellectual property, and cross-border data transfers.  We strive to comply with applicable international regulations and standards in our operation of CentGPT.
                      </p>
                    </li>
                    <li>
                      <p>
                        "Applicable treaties":  "Applicable treaties" between Uganda and other nations, or international treaties to which Uganda is a signatory, may also have relevance to these Terms of Use, particularly in areas such as intellectual property rights, data protection, or cross-border legal matters.  We will consider and comply with applicable treaties in our interpretation and enforcement of these terms.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="contact" className="scroll-mt-24">
                <h2>11. Contact Information</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 my-8 rounded-xl">
                  <p className="!mb-4">For any questions, concerns, or inquiries regarding these Terms of Use, please do not hesitate to contact our Legal Department. We are here to assist you and clarify any aspects of these terms that may be unclear.</p>
                  <p className="!mb-0">
                    Legal Department<br />
                    NextHomeLabs Limited<br />
                    Email: legal@nexthomelabs.com<br />
                    Address: Kampala, Uganda
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="sticky top-24 border border-[#00E6E6]/20 rounded-xl p-6 bg-black/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
              <nav className="space-y-2 max-h-[70vh] overflow-y-auto pr-4">
                <a href="#definitions" className="block text-sm text-gray-400 hover:text-white transition-colors">1. Definitions</a>
                <a href="#acceptable-use" className="block text-sm text-gray-400 hover:text-white transition-colors">2. Acceptable Use</a>
                <a href="#ai-specific" className="block text-sm text-gray-400 hover:text-white transition-colors">3. AI-Specific Terms</a>
                <a href="#service-terms" className="block text-sm text-gray-400 hover:text-white transition-colors">4. Service Terms</a>
                <a href="#privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">5. Privacy and Data</a>
                <a href="#liability" className="block text-sm text-gray-400 hover:text-white transition-colors">6. Liability</a>
                <a href="#intellectual-property" className="block text-sm text-gray-400 hover:text-white transition-colors">7. Intellectual Property</a>
                <a href="#termination" className="block text-sm text-gray-400 hover:text-white transition-colors">8. Termination</a>
                <a href="#modifications" className="block text-sm text-gray-400 hover:text-white transition-colors">9. Modifications</a>
                <a href="#governing-law" className="block text-sm text-gray-400 hover:text-white transition-colors">10. Governing Law</a>
                <a href="#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">11. Contact</a>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
