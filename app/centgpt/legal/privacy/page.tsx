"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function CentGPTPrivacyPage() {
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
          <span className="text-white">Privacy Policy</span>
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

              <h1 className="text-4xl md:text-5xl font-bold">CentGPT Privacy Policy</h1>

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
                  This Privacy Policy is designed to clearly articulate how CentGPT, your advanced AI service provided by NextHomeLabs Limited ("we," "us," or "our"), handles your information.  We deeply value your privacy and are fully committed to protecting your personal data. This policy aims to provide a comprehensive understanding of our data collection, usage, and security practices. We encourage you to read it carefully to make informed decisions about your use of CentGPT and to understand the measures we take to safeguard your information while delivering a powerful and personalized AI experience.
                </p>
              </div>

              <div id="data-collection" className="scroll-mt-24">
                <h2>1. Data Collection: Understanding What We Gather</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">1.1 Information You Provide Directly</h3>
                  <p>In order to deliver our services and personalize your experience, CentGPT collects certain information that you directly provide to us. This information is crucial for account management, service personalization, and effective communication. We believe in transparency, and it’s important for you to understand what types of data we collect directly from you and why.</p>
                  <h4 className="!mt-4">Account Information</h4>
                  <p>When you register or manage your CentGPT account, we collect necessary details to establish and maintain your profile. This includes your email address, which serves as your unique identifier and primary communication channel.  Additionally, you may choose to provide your name and profile information to personalize your account and interactions.  For users utilizing CentGPT in a professional context, we may collect professional or business details to better understand your needs and tailor the service appropriately.  Finally, we record your account preferences and settings to ensure CentGPT operates according to your specific requirements, such as notification settings or interface customizations.</p>
                  <h4 className="!mt-4">User Content</h4>
                  <p>A core aspect of CentGPT is your interaction with the AI.  Therefore, we collect and process the queries and prompts you submit to CentGPT, as this input is fundamental to providing you with AI-driven responses and services. We also maintain a record of your conversation history and context to enable coherent and continuous interactions, allowing the AI to remember past turns in a conversation and provide more relevant and contextual replies. Your feedback and ratings are invaluable to us. We collect this data to understand your satisfaction with the service, identify areas for improvement, and ensure we are meeting your expectations.  For users who opt to utilize custom training features, we collect and process the custom training data you provide, which helps to personalize and fine-tune the AI models specifically for your use cases.</p>
                  <h4 className="!mt-4">Communication Data</h4>
                  <p>To support you effectively and improve our service based on user input, we collect communication data.  This includes support requests and correspondence you initiate with our support team, allowing us to address your inquiries and resolve issues efficiently.  We may also collect survey responses to gather your opinions on CentGPT and specific features, helping us to understand user satisfaction and areas for enhancement.  Feature requests and feedback that you provide are also collected to inform our product development roadmap and ensure we are building features that are valuable and relevant to our user base.</p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">1.2 Automatically Collected Data: Insights into Service Usage</h3>
                  <p>As you interact with CentGPT, our systems automatically collect certain technical and usage-related information. This automatic data collection is essential for ensuring the functionality, security, and optimization of our services.  It provides us with insights into how CentGPT is being used, helps us to diagnose technical issues, and allows us to improve the overall performance and user experience. This collection happens in the background as you use the service.</p>
                  <h4 className="!mt-4">Technical Information</h4>
                  <p>To ensure optimal performance and security, we automatically gather technical details about your access and usage of CentGPT.  This includes your IP address and location data, which helps us understand geographic usage patterns and assists in security measures like detecting and preventing fraud and abuse.  Device identifiers and characteristics are collected to optimize the service for different types of devices and ensure compatibility.  Information about your browser type and version is collected to optimize the web interface and ensure seamless functionality across different browsers. Finally, we collect operating system information to further refine device-specific optimizations and troubleshoot any platform-specific issues.</p>
                  <h4 className="!mt-4">Usage Data</h4>
                  <p>Understanding how you use CentGPT is crucial for improving the service and tailoring it to user needs. Therefore, we automatically collect usage data which includes session duration and timing, helping us understand typical user session lengths and peak usage times, which is vital for capacity planning and system optimization. Feature usage patterns are monitored to see which features are popular and how users interact with different functionalities, allowing us to focus development efforts on the most valued aspects of CentGPT. Error logs and performance data are automatically captured to identify bugs, performance bottlenecks, and areas of instability, which is crucial for maintaining a reliable and stable service. API call frequency and patterns are tracked, especially for users utilizing CentGPT's API, to monitor usage, ensure fair access, and prevent abuse.</p>
                  <h4 className="!mt-4">Analytics Data</h4>
                  <p>To gain a broader understanding of service performance and user engagement, we automatically collect analytics data.  Interaction patterns, such as navigation paths within the service, are analyzed to improve the user interface and overall user experience design. Response metrics are collected to evaluate the quality and relevance of AI responses, helping us refine our models to be more accurate and helpful.  Performance benchmarks, such as processing speed and system efficiency, are continually monitored to ensure we are delivering a high-performance service.  Finally, usage statistics, encompassing aggregated data on feature usage, user demographics (anonymized), and overall service load, provide valuable insights into service trends and areas for strategic development.</p>
                </div>

                <div className="border-l-4 border-[#00E6E6] pl-6 my-8">
                  <h3 className="!mt-0">1.3 AI Training Data: Fueling Continuous Improvement</h3>
                  <p>CentGPT is designed to continuously learn and improve. To facilitate this ongoing enhancement, we utilize aggregated and anonymized data for AI model training. This process is crucial for ensuring that CentGPT remains at the cutting edge of AI technology and continues to provide increasingly accurate, relevant, and helpful responses. It’s important to note that all data used for training is carefully processed to remove any personal identifiers, ensuring your privacy is maintained even in this improvement process.</p>
                  <h4 className="!mt-4">Anonymized Conversation Patterns</h4>
                  <p>We analyze anonymized conversation patterns to understand typical user interactions, common requests, and effective dialogue structures. This analysis helps us to improve the conversational flow and responsiveness of CentGPT, making interactions more natural and intuitive. By identifying patterns in successful conversations, we can refine the AI’s ability to engage in effective and helpful dialogues.</p>
                  <h4 className="!mt-4">Query-Response Pairs</h4>
                  <p>To enhance the accuracy and relevance of CentGPT's responses, we collect and analyze anonymized query-response pairs.  This involves studying the types of queries users make and evaluating the quality of the AI’s responses. By continually analyzing these pairs, we can identify areas where the model excels and areas where it can be improved, leading to more precise and contextually appropriate answers.</p>
                  <h4 className="!mt-4">Error Cases and Edge Scenarios</h4>
                  <p>Learning from mistakes and less common scenarios is essential for robust AI development. We collect data on error cases and edge scenarios, which are instances where the AI model may not have performed optimally.  By studying these situations, we can identify weaknesses in the model and refine its algorithms to better handle a wider range of inputs and situations, ultimately making CentGPT more reliable and versatile.</p>
                  <h4 className="!mt-4">Performance Optimization Data</h4>
                  <p>To ensure CentGPT operates efficiently and provides responses quickly, we collect performance optimization data. This includes information about processing times, resource utilization, and system efficiency. Analyzing this data allows us to identify areas where we can streamline processes, reduce latency, and optimize resource allocation, leading to a faster and more responsive user experience. Our goal is to make CentGPT not only intelligent but also efficient in its operations.</p>
                  <p className="!mb-0">It is important to reiterate that all training data is rigorously anonymized and stripped of personal identifiers before being used for AI model improvement. We are committed to using data in a privacy-preserving manner to continuously enhance CentGPT's capabilities without compromising user privacy.</p>
                </div>
              </div>

              <div id="data-usage" className="scroll-mt-24">
                <h2>2. How We Use Your Data: Purpose and Transparency</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">2.1 Service Improvement: Elevating CentGPT's Capabilities</h3>
                  <p>At NextHomeLabs Limited, we are committed to continually improving CentGPT to ensure it provides you with the most effective and valuable AI experience possible. The data we collect is instrumental in this process, allowing us to refine our models, enhance performance, and innovate new features.  Our focus is on utilizing data in a manner that directly benefits you by making CentGPT more intelligent, efficient, and tailored to your needs.</p>
                  <h4 className="!mt-4">Model Training and Optimization</h4>
                  <p>A primary use of your data, particularly anonymized and aggregated conversation and interaction data, is to train and optimize our AI models.  Fine-tuning response accuracy is an ongoing process. We use input data to identify areas where the AI's responses can be more accurate, relevant, and contextually appropriate, leading to more reliable and helpful interactions.  Improving natural language understanding is also critical. Data analysis helps us to enhance the AI’s ability to comprehend the nuances of human language, including slang, idioms, and complex sentence structures, ensuring better interpretation of user inputs. Enhancing context awareness is vital for more meaningful conversations. By training on conversation data, we improve CentGPT's ability to remember previous parts of a dialogue and maintain context throughout interactions, resulting in more coherent and relevant responses.  Furthermore, data analysis guides us in developing new capabilities for CentGPT. By understanding user needs and interaction patterns, we can identify opportunities to expand the AI's functionalities and introduce new features that provide added value and address user requirements effectively.</p>
                  <h4 className="!mt-4">Performance Enhancement</h4>
                  <p>Beyond model improvement, data also plays a key role in enhancing the overall performance of CentGPT's infrastructure.  System optimization is continuously pursued using data insights. We analyze system performance data to identify bottlenecks and inefficiencies, allowing us to optimize our infrastructure for faster response times and better stability.  Response time improvement is a direct beneficiary of this optimization. By understanding system loads and processing patterns, we can fine-tune our servers and algorithms to ensure quick and efficient responses to user queries, enhancing the real-time interaction experience.  Effective resource allocation is also data-driven. We analyze usage patterns to intelligently allocate computing resources, ensuring that CentGPT operates smoothly even during peak usage times, maximizing efficiency and minimizing latency. Scalability planning is crucial for future growth. Usage data informs our capacity planning, helping us to anticipate future demands and scale our infrastructure proactively to maintain performance as our user base and service usage expand.</p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">2.2 Personalization: Tailoring CentGPT to Your Needs</h3>
                  <p>While our core AI models are designed for broad applicability, we also recognize the value of personalization to enhance your individual experience with CentGPT. Data is used thoughtfully to tailor certain aspects of the service to your preferences and needs, without compromising privacy. Personalization is aimed at making CentGPT more relevant and effective for you specifically.</p>
                  <h4 className="!mt-4">User-Specific Adaptations</h4>
                  <p>To provide a more customized interaction, we implement user-specific adaptations. Response style customization involves learning your preferred style of interaction based on your feedback and settings, allowing CentGPT to adjust its tone and format of responses to better suit your preferences.  Context retention is enhanced through personalization. While the model has a general context awareness, user-specific context retention ensures that your preferences and past interactions within your sessions are particularly well-remembered, leading to more consistent and personalized dialogues. Preference learning is also a component of personalization. Over time, CentGPT can learn from your explicit settings and implicit interaction patterns to better understand your needs and preferences, proactively adjusting certain features and responses accordingly.  Custom vocabulary adaptation, for users who require it, allows the AI to adapt to specific terminologies or jargons that are frequently used by you, particularly in professional contexts, improving accuracy and relevance within your specific domain of use.</p>
                  <h4 className="!mt-4">Industry-Specific Optimization</h4>
                  <p>For users operating in specialized fields, we aim to offer industry-specific optimizations. Domain-specific knowledge enhancement involves training the AI models on data pertinent to specific industries, improving their understanding and accuracy within those domains, making CentGPT more valuable for professionals in specialized sectors.  Terminology adaptation is extended to industry specifics. CentGPT can be optimized to recognize and correctly use industry-specific terminology, enhancing the relevance and precision of its responses in professional contexts.  Use case optimization involves analyzing common use cases within different industries to tailor the AI’s capabilities and features to best meet the typical requirements and workflows of various professional sectors.</p>
                </div>

                <div className="border-l-4 border-[#00E6E6] pl-6 my-8">
                  <h3 className="!mt-0">2.3 Security and Compliance: Ensuring a Safe and Trustworthy Service</h3>
                  <p>Protecting your data and ensuring the security and integrity of CentGPT is paramount. Data usage in this domain is primarily focused on maintaining a secure environment, preventing misuse, and adhering to legal and regulatory requirements. Security and compliance measures are essential for providing a trustworthy AI service.</p>
                  <h4 className="!mt-4">Threat Detection and Prevention</h4>
                  <p>Data analysis is crucial for proactively detecting and preventing security threats. We utilize usage patterns and system data to identify anomalous activities that might indicate security breaches, unauthorized access attempts, or other malicious actions, allowing us to respond swiftly and mitigate potential threats.  Abuse prevention is another key area. Data helps us monitor for and prevent misuse of CentGPT, such as spamming, inappropriate content generation, or any activity that violates our terms of service.  Compliance monitoring ensures we adhere to relevant legal and regulatory obligations. We use data to monitor our compliance with data protection laws, privacy regulations, and other legal requirements, ensuring we operate within a lawful and ethical framework.  Access control verification is enhanced using data insights. We employ data analysis to refine and verify access control mechanisms, ensuring that only authorized users have access to specific data and functionalities, protecting sensitive information and maintaining data integrity.</p>
                </div>
              </div>

              <div id="data-protection" className="scroll-mt-24">
                <h2>3. Data Protection: Our Commitment to Security</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">3.1 Security Infrastructure: Robust Measures for Data Safety</h3>
                  <p>At NextHomeLabs Limited, we implement a comprehensive security infrastructure to protect your data from unauthorized access, breaches, and misuse. Our security measures are designed with industry best practices in mind and are regularly updated to counter evolving threats. We employ a layered approach to security, ensuring multiple levels of protection for your information. Encryption is a cornerstone of our data protection strategy.</p>
                  <h4 className="!mt-4">Encryption</h4>
                  <p>We utilize strong encryption methods to safeguard your data both during transit and when stored. End-to-end encryption for all data transmission ensures that information is protected from interception as it travels between your device and our servers. This prevents unauthorized parties from accessing your data while it is being transmitted. AES-256 encryption is used for stored data, which is an industry-standard, highly secure encryption algorithm. This encryption level ensures that even in the unlikely event of a security breach, your stored data remains encrypted and unreadable to unauthorized individuals.  Secure key management practices are in place to manage and protect the cryptographic keys used for encryption and decryption. This includes secure generation, storage, and rotation of keys to minimize the risk of key compromise.</p>
                  <h4 className="!mt-4">Access Controls</h4>
                  <p>Stringent access controls are implemented to limit data access to only authorized personnel.  Role-based access control (RBAC) is used to assign specific access permissions based on job roles and responsibilities. This ensures that employees only have access to the data and systems necessary for their tasks, minimizing the risk of unauthorized data access. Multi-factor authentication adds an extra layer of security by requiring users to provide multiple forms of verification before granting access to systems or data. This makes it significantly more difficult for unauthorized users to gain access, even if they have compromised a password. Secure session management practices are enforced to manage user sessions securely. This includes setting session timeouts, invalidating sessions upon user logout, and monitoring session activity for any signs of unauthorized access, helping to maintain session integrity and security.</p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">3.2 Monitoring and Auditing: Vigilance and Accountability</h3>
                  <p>Beyond infrastructure security, continuous monitoring and regular audits are critical components of our data protection framework. These proactive measures allow us to detect and respond to security incidents promptly and ensure ongoing compliance with security protocols. Continuous vigilance is key to maintaining a secure environment.</p>
                  <h4 className="!mt-4">24/7 System Monitoring</h4>
                  <p>Our systems are under 24/7 monitoring to detect any unusual activity or security incidents in real-time. Automated monitoring tools and alerts are used to identify and flag potential security threats as they arise, enabling immediate response actions by our security team. Regular security audits are conducted to systematically assess the effectiveness of our security measures. These audits include reviews of security policies, procedures, and implementations, identifying areas for improvement and ensuring alignment with best practices. Penetration testing is performed periodically by external security experts to simulate cyberattacks and identify vulnerabilities in our systems. The results of these tests help us to understand our security strengths and weaknesses and prioritize remediation efforts to close any identified gaps.  Vulnerability assessments are regularly conducted to identify and catalog known security vulnerabilities in our software and infrastructure components. This allows us to proactively apply security patches and updates, reducing the attack surface and preventing exploitation of known vulnerabilities.</p>
                </div>
              </div>

              <div id="data-sharing" className="scroll-mt-24">
                <h2>4. Data Sharing: Principles of Limited and Secure Sharing</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">4.1 Third-Party Service Providers: Partnerships for Enhanced Service Delivery</h3>
                  <p>In order to operate CentGPT effectively and provide you with a high-quality service, we rely on certain trusted third-party service providers. These providers offer specialized services and infrastructure components that are essential for our operations. However, we are committed to ensuring that any data sharing with these providers is conducted with strict privacy and security safeguards in place.  We choose our partners carefully and ensure they adhere to high standards of data protection.</p>
                  <h4 className="!mt-4">Categories of Service Providers</h4>
                  <p>We partner with service providers in several key categories to support CentGPT. Cloud infrastructure and hosting providers are used to host our services and data in a secure and scalable cloud environment. These providers offer robust security measures and certifications to protect the infrastructure.  Analytics and monitoring service providers assist us in analyzing usage data and system performance, helping us to improve CentGPT and ensure smooth operations. They process anonymized and aggregated data and are bound by confidentiality agreements. Customer support service providers may be used to help manage and respond to user inquiries and support requests more efficiently.  These providers are given access only to necessary communication data and are trained on our privacy protocols. Security and compliance service providers help us to enhance our security posture, conduct audits, and ensure compliance with data protection regulations. They may have access to system logs and security-related data under strict confidentiality and data processing agreements. It is critical to note that all third-party providers are bound by strict confidentiality agreements and comprehensive data protection requirements. We ensure through contractual agreements and regular reviews that these providers handle data with the same level of care and security as NextHomeLabs Limited.</p>
                </div>
              </div>

              <div id="user-rights" className="scroll-mt-24">
                <h2>5. Your Rights: Control Over Your Information</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">5.1 Data Access Rights: Empowering Your Choices</h3>
                  <p>We recognize and respect your rights regarding your personal data. You have several rights designed to give you control over your information and how it is processed. We are committed to facilitating the exercise of these rights and providing transparent mechanisms for you to manage your data.</p>
                  <h4 className="!mt-4">Overview of Your Rights</h4>
                  <p>You have the right to access your personal data. You can request confirmation as to whether your personal data is being processed and request access to the data we hold about you. You also have the right to request data correction. If you believe that any personal data we hold about you is inaccurate or incomplete, you have the right to request that we correct or complete such data.  The right to request data deletion allows you to ask us to delete your personal data under certain circumstances, such as when the data is no longer necessary for the purpose for which it was collected, or if you withdraw your consent (where applicable).  You have the right to export your data. You can request to receive your personal data in a structured, commonly used, and machine-readable format, and have the right to transmit that data to another controller.  The right to restrict processing allows you to request the restriction of processing of your personal data under certain circumstances, such as if you contest the accuracy of the data, or if the processing is unlawful but you oppose erasure and request restriction instead.  Finally, you have the right to object to processing of your personal data where we are relying on legitimate interests as the legal basis for processing. In such cases, we will cease processing unless we have compelling legitimate grounds to continue the processing which override your interests, rights, and freedoms.</p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">5.2 Exercising Your Rights: How to Take Action</h3>
                  <p>We have put in place several mechanisms to make it easy for you to exercise your data rights.  We aim to respond to your requests promptly and efficiently. For many common data management tasks, you can use the privacy settings within your account. Many data access and management options, such as viewing and correcting your profile information, may be directly accessible through your account settings in CentGPT, providing you with immediate control over certain aspects of your data. You can always contact our dedicated privacy team.  For complex requests or if you require assistance, you can reach out to our privacy team via email at privacy@nexthomelabs.com. Our team is trained to handle data privacy inquiries and will guide you through the process. You can formally submit a request to exercise your rights by contacting our privacy team.  To help us process your request efficiently, we may require you to provide sufficient information to verify your identity.  We are committed to responding to your requests within a reasonable timeframe, typically within 30 days, as required by data protection regulations. Complex or extensive requests may occasionally require a bit more time, but we will keep you informed of the progress.</p>
                </div>
              </div>

              <div id="ai-specific" className="scroll-mt-24">
                <h2>6. AI-Specific Considerations: Ethics and Responsibility</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">6.1 AI Training and Learning: Balancing Innovation with Privacy</h3>
                  <p>Given the nature of CentGPT as an AI service, it’s important to highlight specific considerations related to AI training and learning processes.  We are deeply committed to ethical AI development and responsible data handling practices. Our AI models are designed to learn in a manner that minimizes privacy risks while maximizing service quality and innovation. We focus on learning from data patterns rather than individual data points.</p>
                  <h4 className="!mt-4">Data Anonymization in Training</h4>
                  <p>Data anonymization is a critical component of our AI training methodology.  Removal of personal identifiers is rigorously performed on all data used for training AI models. This involves removing or masking any information that could potentially identify an individual. Aggregation of training data further enhances privacy. Training is primarily performed on aggregated datasets, which means patterns and insights are learned from large groups of data rather than individual user data, significantly reducing privacy risks.  Pattern-based learning is at the heart of our AI training approach. Our models are designed to identify and learn from general patterns, trends, and structures in the data, rather than memorizing or relying on specific personal details. This focus on pattern recognition is inherently privacy-preserving.</p>
                  <h4 className="!mt-4">Continuous Model Improvements</h4>
                  <p>AI training data drives ongoing model improvements in various dimensions. Performance optimization is a key outcome of training. By learning from data, the models are continually refined to deliver faster and more efficient responses, enhancing the user experience.  Accuracy enhancement is a primary goal. Training data helps improve the accuracy and relevance of AI responses, making CentGPT more reliable and useful. Bias reduction in AI models is another crucial focus.  We actively use training data and ethical AI practices to identify and mitigate potential biases in the models, aiming for fairer and more equitable outcomes for all users.</p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">6.2 AI Ethics and Bias: Our Ethical Commitments</h3>
                  <p>NextHomeLabs Limited is deeply committed to ethical AI practices. We understand the potential for AI systems to reflect or amplify societal biases, and we take proactive measures to address these challenges and ensure our AI operates ethically and responsibly. Fairness, transparency, and accountability are guiding principles in our AI development.</p>
                  <h4 className="!mt-4">Commitment to Ethical AI</h4>
                  <p>Regular bias audits are conducted to systematically assess our AI models for potential biases. These audits involve analyzing model outputs and performance across different demographic groups and use cases to identify and quantify any unfair or discriminatory outcomes.  Fairness monitoring is an ongoing process. We continuously monitor the performance of our AI models in real-world scenarios to detect any emerging biases or unfair results, enabling us to take corrective actions promptly.  Transparency in AI decisions is prioritized.  We aim to provide users with reasonable insights into how our AI models arrive at their decisions, where feasible and without compromising our proprietary information. This promotes understanding and trust in the AI’s processes.  Ethical use guidelines are established and enforced internally. We have formulated ethical guidelines for the development and deployment of our AI technologies, ensuring that our teams adhere to these principles in all aspects of our AI operations, fostering a culture of ethical responsibility.</p>
                </div>
              </div>

              <div id="data-retention" className="scroll-mt-24">
                <h2>7. Data Retention: Managing Data Lifecycles Responsibly</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">7.1 Retention Periods: Defining Data Longevity</h3>
                  <p>We adhere to data retention policies that are designed to balance operational needs with your privacy rights. We retain different categories of data for varying periods, based on the purpose of collection, legal requirements, and business necessity.  Our retention periods are defined to ensure that data is not kept longer than necessary. Once data reaches the end of its retention period, it is securely deleted or anonymized according to our data handling protocols.</p>
                  <h4 className="!mt-4">Specific Data Retention Periods</h4>
                  <p>Account data, which includes your registration information and account settings, is retained until account deletion. We maintain this data as long as your account is active to provide you with continuous service and account management capabilities.  Usage data, such as service logs and feature usage patterns, is typically retained for 12 months. This period allows us to analyze trends, optimize performance, and address any technical issues effectively, while also limiting long-term storage of individual usage details.  Conversation history, which includes your interactions with CentGPT, is generally retained for 6 months.  This shorter retention period for conversation data reflects our focus on improving service quality without indefinitely storing individual conversational details, aligning with privacy considerations. Analytics data, used for service-wide trend analysis and aggregated insights, is retained for 24 months.  This longer period for analytics data is to facilitate long-term trend analysis, strategic planning, and model development, leveraging aggregated historical data to guide future service enhancements. </p>
                </div>
              </div>

              <div id="international" className="scroll-mt-24">
                <h2>8. International Data Transfers: Ensuring Global Data Protection Standards</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">8.1 Data Transfer Mechanisms: Compliance and Safeguards for Cross-Border Data Flows</h3>
                  <p>As a global service, CentGPT may involve the transfer of data internationally. We are committed to ensuring that any international data transfers are conducted in compliance with applicable data protection laws and that appropriate safeguards are in place to protect your data regardless of where it is processed. We utilize recognized legal mechanisms to legitimize international data transfers.</p>
                  <h4 className="!mt-4">Mechanisms for International Data Transfer</h4>
                  <p>Standard contractual clauses (SCCs) are employed as a primary mechanism. We use SCCs, which are pre-approved contract templates by regulatory authorities, to ensure that data transfers to countries outside of regions with equivalent data protection laws are subject to contractual obligations that mirror the protections within those regions.  Privacy Shield compliance was a mechanism previously used, particularly for transfers to the United States. While the Privacy Shield framework has evolved, we maintain commitments to data protection principles that aligned with Privacy Shield, and we are vigilant about any successor frameworks or equivalent compliance standards for US data transfers. Adequacy decisions made by data protection authorities are also relied upon. For transfers to countries recognized by relevant authorities (e.g., the European Commission) as providing an adequate level of data protection, we rely on these adequacy decisions as a basis for lawful data transfer. Data protection agreements are in place with all our service providers who may process data internationally. These agreements include robust data protection clauses, ensuring that providers adhere to our data protection standards and implement appropriate technical and organizational measures to safeguard data, irrespective of geographic location.</p>
                </div>
              </div>

              <div id="children" className="scroll-mt-24">
                <h2>9. Children's Privacy: Protecting the Youngest Users</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">9.1 Age Restrictions: Service Usage by Minors</h3>
                  <p>CentGPT is intended for use by adults and is not directed towards children under the age of 13. We are particularly sensitive to the privacy of children and take measures to ensure we do not knowingly collect or process personal information from children below the age of 13 without appropriate consent. Protecting children’s privacy is a high priority for us.</p>
                  <h4 className="!mt-4">Compliance with Children's Online Privacy Protection Act (COPPA)</h4>
                  <p>CentGPT is not intended for children under 13 years of age. Our service is designed for a general audience and not specifically targeted at children.  We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take immediate steps to delete such information from our records.  If you are a parent or guardian and believe that your child under 13 has provided personal information to us, please contact us immediately at privacy@nexthomelabs.com, and we will take steps to remove that information and terminate the child’s account.</p>
                </div>
              </div>

              <div id="updates" className="scroll-mt-24">
                <h2>10. Policy Updates: Keeping You Informed of Changes</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">10.1 Change Process: Communicating Policy Modifications</h3>
                  <p>Our Privacy Policy may be updated periodically to reflect changes in our data practices, legal requirements, or service functionalities.  We are committed to keeping you informed about any changes and providing you with adequate notice before any significant updates take effect. Transparency about policy updates is important to us.</p>
                  <h4 className="!mt-4">Notification of Policy Changes</h4>
                  <p>Email notifications will be used for significant changes. For major updates to our Privacy Policy, we will send direct email notifications to registered users, providing a summary of the changes and a link to the updated policy. In-app notifications may also be utilized for policy updates, especially for more minor changes or reminders about policy reviews. These notifications will be displayed within the CentGPT interface when you log in or use the service.  Website announcements on our official CentGPT website will be posted whenever the Privacy Policy is updated. These announcements will clearly highlight the changes and provide access to the revised policy document. Service updates documentation, including release notes and change logs, will also reflect any updates to the Privacy Policy. We ensure that users can easily track changes to legal and policy documentation as part of service version updates. We encourage you to review our Privacy Policy periodically to stay informed about how we are protecting and managing your information. Continued use of CentGPT after policy updates will indicate your acceptance of the revised Privacy Policy. The "Last Updated" date at the beginning of the policy will always indicate the most recent revision date, serving as a quick reference for you to check if there have been any changes since your last review.</p>
                </div>
              </div>

              <div id="contact" className="scroll-mt-24">
                <h2>11. Contact Information: Getting in Touch with Our Privacy Team</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">11.1 Privacy Team Contact: Dedicated Support for Your Inquiries</h3>
                  <p className="!mb-4">For any questions, concerns, or requests related to this Privacy Policy or our data privacy practices, please do not hesitate to contact our dedicated Privacy Team. We are here to assist you and ensure your privacy concerns are addressed effectively.</p>
                  <h4 className="!mt-4">Contact Details</h4>
                  <p className="!mb-0">
                    Privacy Officer<br />
                    NextHomeLabs Limited<br />
                    Email: <a href="mailto:privacy@nexthomelabs.com">privacy@nexthomelabs.com</a><br />
                    Address: Kampala, Uganda
                  </p>
                  <p className="!mb-0 !mt-4">We are committed to addressing your inquiries in a timely and respectful manner. Please allow up to 30 days for us to respond to your privacy-related requests, although we strive to respond much sooner whenever possible. We value your feedback and are dedicated to upholding the highest standards of data privacy and protection.</p>
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
                <a href="#data-collection" className="block text-sm text-gray-400 hover:text-white transition-colors">1. Data Collection</a>
                <a href="#data-usage" className="block text-sm text-gray-400 hover:text-white transition-colors">2. Data Usage</a>
                <a href="#data-protection" className="block text-sm text-gray-400 hover:text-white transition-colors">3. Data Protection</a>
                <a href="#data-sharing" className="block text-sm text-gray-400 hover:text-white transition-colors">4. Data Sharing</a>
                <a href="#user-rights" className="block text-sm text-gray-400 hover:text-white transition-colors">5. User Rights</a>
                <a href="#ai-specific" className="block text-sm text-gray-400 hover:text-white transition-colors">6. AI Considerations</a>
                <a href="#data-retention" className="block text-sm text-gray-400 hover:text-white transition-colors">7. Data Retention</a>
                <a href="#international" className="block text-sm text-gray-400 hover:text-white transition-colors">8. International Transfers</a>
                <a href="#children" className="block text-sm text-gray-400 hover:text-white transition-colors">9. Children's Privacy</a>
                <a href="#updates" className="block text-sm text-gray-400 hover:text-white transition-colors">10. Policy Updates</a>
                <a href="#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">11. Contact</a>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
