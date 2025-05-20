"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function PrivacyPage() {
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
          <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
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

              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>

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
                  At NextHomeLabs, operating under the brands NextHomeLabs and CentGPT, we deeply value your privacy and are steadfastly committed to protecting your personal data.  This Privacy Policy is designed to provide you with a clear and comprehensive understanding of how we handle your information. It outlines the types of data we collect, how we utilize it, the circumstances under which we may share it, and the measures we take to safeguard your personal data. This policy applies to all of our products, services, and platforms, ensuring transparency and building trust with our users. We encourage you to read this policy carefully to understand your rights and our practices regarding your personal information.
                </p>
              </div>

              <div id="information-we-collect" className="scroll-mt-24">
                <h2>1. Information We Collect</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">1.1 Information You Provide Directly</h3>
                  <p className="!mb-0">
                    When you engage with our services, you may proactively provide us with various types of information. This is data you consciously and willingly share with us to utilize our offerings effectively.  The categories of information you might directly provide include:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Account Information: To create and manage your account, we collect essential details such as your name, which helps us personalize your experience and communicate with you effectively. Your email address is crucial for account verification, sending important service updates, and facilitating communication regarding your account.  We may also collect your phone number, which can be used for account recovery, enhanced security measures like two-factor authentication, and optional direct support if you choose to provide it.
                    </li>
                    <li>
                      Business Information: If you are using our services in a professional capacity or for business purposes, we may collect information related to your business. This could include your company name, industry, business address, and other details relevant to your business operations and how you utilize our services for your professional needs. This information helps us understand our user base better and tailor our services to various business contexts.
                    </li>
                    <li>
                      Payment Details: For services that require payment, we collect necessary financial information to process transactions securely. This typically includes credit card details, bank account information, or other payment method details depending on the payment options we offer.  It is important to note that we utilize secure, reputable payment processors, and we take measures to protect your financial information during transactions.  We strive to comply with industry standards and regulations for payment processing security.
                    </li>
                    <li>
                      Communication Preferences: To ensure we communicate with you in a way that is convenient and relevant, we collect information about your communication preferences. This includes your choices regarding receiving marketing communications, service updates, and notification settings. You have control over these preferences and can adjust them at any time to manage the types and frequency of communications you receive from us.
                    </li>
                    <li>
                      Service Usage Information: As you interact with our services, you may provide information related to your specific usage. This includes details about your projects, content you create or upload, feedback you provide, and any other data you input while using our platform. This information is essential for delivering the services you request and for personalizing your experience. For example, if you are using our AI services, the prompts and queries you input are considered service usage information.
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">1.2 Information Collected Automatically</h3>
                  <p className="!mb-0">
                    In addition to the information you directly provide, we also automatically collect certain data as you navigate and use our services. This automatic data collection helps us understand how our services are being used, improve their functionality, and personalize your experience. The types of information collected automatically include:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Device Information: When you access our services, we collect information about the device you are using. This includes your IP address, which can provide general location data and is used for security and analytics purposes. We also collect browser type and version, operating system information, device model, and other technical specifications. This data helps us optimize our services for different devices and troubleshoot any compatibility issues.
                    </li>
                    <li>
                      Usage Data: We monitor and collect data about your interactions with our services. This includes tracking the features you access, the pages you visit, the time spent on different sections, and the actions you take within our platform. This usage data is crucial for understanding user behavior, identifying popular features, and areas for improvement. It also helps us personalize your experience and recommend relevant content or features.
                    </li>
                    <li>
                      Performance Data: To ensure our services are running smoothly and efficiently, we collect performance data. This includes information about page load times, response times, error rates, and other metrics that indicate the technical performance of our platform. Analyzing performance data helps us identify and resolve technical issues, optimize our infrastructure, and ensure a seamless user experience.
                    </li>
                    <li>
                      Cookies and Similar Technologies: We utilize cookies, web beacons, and similar tracking technologies to enhance your browsing experience and collect information about your activity. Cookies are small text files stored on your device that allow us to remember your preferences, track your sessions, and personalize content. We use cookies for various purposes, including authentication, session management, analytics, and advertising (where applicable and with consent).  You can manage your cookie preferences through your browser settings and our cookie preference center, as described in Section 6.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#00E6E6] pl-6 my-8">
                  <h3 className="!mt-0">1.3 AI Service Data (If Applicable to your service)</h3>
                  <p className="!mb-0">
                    If you are using AI-powered features within our services (like CentGPT), we collect specific data related to your interactions with these AI functionalities. This data is essential for providing and improving our AI services, ensuring their effectiveness, and maintaining quality. The types of AI service data we collect include:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Input Prompts and Queries: When you interact with our AI, the text prompts, questions, or commands you input are collected. This input data is used to understand your requests, generate relevant responses, and improve the AI's ability to interpret and process user input effectively.  We may analyze these inputs in aggregate and anonymized form to refine our AI models.
                    </li>
                    <li>
                      Generated Content: The content generated by our AI in response to your prompts is also collected. This includes the text, images, or other outputs produced by the AI.  Collecting generated content allows us to assess the quality and relevance of the AI's responses, identify areas for improvement in our models, and ensure that the AI is providing helpful and accurate information.
                    </li>
                    <li>
                      Usage Patterns: We track how you interact with the AI service, including the frequency of use, the types of prompts you use, and the features you utilize within the AI interface.  Analyzing these usage patterns helps us understand how users are leveraging our AI tools, identify popular use cases, and optimize the AI service to better meet user needs.
                    </li>
                    <li>
                      Feedback and Interactions: If you provide feedback on AI-generated content (e.g., thumbs up/down, ratings, written comments), or engage in interactions to refine AI responses, this feedback data is collected.  User feedback is invaluable for improving the accuracy, relevance, and overall quality of our AI models. It helps us identify areas where the AI performs well and areas where it needs further refinement.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="how-we-use" className="scroll-mt-24">
                <h2>2. How We Use Your Information</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">2.1 Service Provision and Operation</h3>
                  <p className="!mb-0">
                    The primary way we use your information is to effectively provide and operate the services you request. This encompasses a range of essential functions that ensure our platform runs smoothly and delivers the intended experience.  Specifically, we use your information to:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Provide and Maintain Our Services: Your data is fundamental to the core functionality of our services. We use it to deliver the features you expect, ensure the platform is accessible and functional, and perform necessary maintenance and updates.  This includes using your account information to allow you to log in and access your personalized dashboard, using usage data to tailor the service to your needs, and leveraging performance data to keep the platform running optimally.
                    </li>
                    <li>
                      Process Transactions: If you make purchases or use paid features, we use your payment details to process transactions securely and efficiently. This includes verifying your payment information, charging you for services, issuing invoices, and managing subscriptions.  We work with trusted payment processors to ensure the security of your financial data during these transactions.
                    </li>
                    <li>
                      Authenticate Users:  Security is paramount, and we use your information to verify your identity and authenticate your access to our services. This includes using your login credentials to confirm you are authorized to access your account and using device information to detect and prevent unauthorized access. Authentication processes help protect your account and data from unauthorized users.
                    </li>
                    <li>
                      Respond to Inquiries and Support Requests:  We use your contact information and service usage details to effectively respond to your inquiries, address your support requests, and provide customer service.  This includes answering your questions about our services, troubleshooting technical issues you may encounter, and providing guidance on how to best utilize our platform.  Efficient customer support is a key aspect of providing a positive user experience.
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">2.2 Service Improvement and Development</h3>
                  <p className="!mb-0">
                    We are committed to continuously improving our services and developing new features that enhance user experience and meet evolving needs.  To achieve this, we utilize collected information in various ways to drive service improvement and innovation:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Enhance User Experience:  By analyzing usage data and performance data, we gain insights into how users interact with our platform. This allows us to identify areas where the user experience can be improved, streamline workflows, optimize navigation, and make our services more intuitive and user-friendly.  Our goal is to create a seamless and enjoyable experience for all users.
                    </li>
                    <li>
                      Develop New Features and Functionality: Understanding user needs and preferences is crucial for developing valuable new features. We analyze usage patterns, user feedback, and market trends to identify opportunities for innovation and expansion of our service offerings.  This data-driven approach ensures that new features are relevant, useful, and address real user needs, ultimately enhancing the overall value of our platform.
                    </li>
                    <li>
                      Train and Improve AI Models (If Applicable):  For our AI-powered services, the data we collect is essential for training and refining our AI models.  We use input prompts, generated content, and user feedback to continuously improve the accuracy, relevance, and overall performance of our AI algorithms.  This iterative training process ensures that our AI services become more intelligent, helpful, and effective over time.  This is often done with anonymized and aggregated data to protect individual privacy.
                    </li>
                    <li>
                      Analyze Performance and Trends:  We regularly analyze performance data, usage data, and other metrics to monitor the health and effectiveness of our services. This analysis helps us identify performance bottlenecks, technical issues, usage trends, and areas for optimization. By understanding these trends, we can proactively address potential problems, improve resource allocation, and ensure our services remain reliable and performant as user demand evolves.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#00E6E6] pl-6 my-8">
                  <h3 className="!mt-0">2.3 Communication and Engagement</h3>
                  <p className="!mb-0">
                    Effective communication is vital for keeping you informed about our services and ensuring you have the necessary information and support.  We use your information to facilitate various types of communication:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Service Updates and Announcements: We may use your email address or other contact methods to send you important service updates, new feature announcements, and general information about our platform.  These communications are designed to keep you informed about changes and improvements that may affect your usage of our services.
                    </li>
                    <li>
                      Technical Notifications:  For critical technical matters, such as service outages, security alerts, or urgent updates, we may send you technical notifications. These communications are essential for ensuring the security and reliability of our services and keeping you informed about any issues that may impact your access or usage.
                    </li>
                    <li>
                      Marketing Communications (with Consent):  With your explicit consent, we may send you marketing communications about our services, special offers, or other promotional content that we believe may be of interest to you.  You have the right to opt-out of receiving marketing communications at any time, and we will always respect your preferences.
                    </li>
                    <li>
                      Support Responses and Personalized Communication: When you reach out to our support team, we use your contact information and the details of your inquiry to provide personalized and effective support.  We may also use your service usage data to understand the context of your issue and provide more relevant assistance.  Personalized communication ensures that your specific needs are addressed efficiently and effectively.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="sharing" className="scroll-mt-24">
                <h2>3. Sharing Your Information</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">3.1 Sharing with Trusted Service Providers</h3>
                  <p className="!mb-0">
                    To operate efficiently and deliver our services effectively, we rely on the assistance of trusted third-party service providers.  These providers perform essential functions on our behalf, and in some cases, this requires sharing your information with them.  We carefully select these providers and ensure they have robust data protection measures in place.  The categories of service providers we may share data with include:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Payment Processors:  For processing payments and managing financial transactions, we utilize secure payment processors.  When you make a payment, your payment details are securely transmitted to these processors to complete the transaction.  We do not directly store your full payment information on our systems.
                    </li>
                    <li>
                      Cloud Hosting Providers: Our services are hosted on cloud infrastructure provided by reputable cloud hosting providers. These providers store our data, including user information, on their secure servers.  Using cloud hosting allows us to ensure scalability, reliability, and accessibility of our services.
                    </li>
                    <li>
                      Analytics Services:  To understand user behavior, track usage patterns, and improve our services, we use analytics services. These services collect and analyze data about how users interact with our platform.  This information is typically aggregated and anonymized, and it helps us make data-driven decisions to enhance user experience and optimize our services.
                    </li>
                    <li>
                      Other Service Providers:  We may engage other types of service providers to assist with various aspects of our operations, such as email delivery services, customer relationship management (CRM) systems, security services, and marketing automation platforms.  When we share data with these providers, we ensure they are contractually obligated to protect your information and use it only for the purposes we have specified.
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">3.2 Disclosure for Legal Requirements and Protection</h3>
                  <p className="!mb-0">
                    In certain limited circumstances, we may be legally obligated or have a legitimate need to disclose your information to external parties.  These situations primarily involve complying with legal requirements, protecting rights and safety, and responding to valid legal requests:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      To Comply with Legal Obligations: We may disclose your information when required to comply with applicable laws, regulations, legal processes, or governmental requests.  This may include responding to subpoenas, court orders, or other legal demands.  We will only disclose information when we have a good-faith belief that it is necessary to comply with the law.
                    </li>
                    <li>
                      To Protect Rights and Safety: We may disclose information if we believe it is necessary to protect the rights, property, or safety of NextHomeLabs, our users, or others. This includes situations involving potential fraud, illegal activities, violations of our terms of service, or threats to the safety of individuals.  We take measures to protect our community and may share information to prevent harm.
                    </li>
                    <li>
                      In Response to Valid Legal Requests:  We may disclose information in response to valid legal requests from law enforcement agencies, government authorities, or other authorized entities.  We carefully scrutinize these requests to ensure they are legitimate and comply with applicable legal procedures before disclosing any information. We strive to balance legal compliance with the protection of user privacy.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="data-retention" className="scroll-mt-24">
                <h2>4. Data Protection</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">4.1 Security Measures</h3>
                  <p className="!mb-0">
                    Protecting your data is a top priority for us, and we implement a range of robust security measures to safeguard your personal information from unauthorized access, use, or disclosure. These measures are designed to provide a multi-layered security approach:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Encryption in Transit and at Rest: We utilize encryption technologies to protect your data both when it is transmitted between your device and our servers (in transit) and when it is stored on our systems (at rest).  This includes using HTTPS for secure website communication and encrypting sensitive data stored in our databases. Encryption helps ensure that your data remains confidential and protected from interception or unauthorized access.
                    </li>
                    <li>
                      Access Controls and Authentication: We implement strict access controls to limit access to your personal information to only authorized personnel who require it for legitimate business purposes.  We also use strong authentication mechanisms, such as passwords and two-factor authentication, to verify user identities and prevent unauthorized account access.  These measures help ensure that only authorized individuals can access and process your data.
                    </li>
                    <li>
                      Regular Security Audits and Vulnerability Assessments: We conduct regular security audits and vulnerability assessments to identify and address potential security weaknesses in our systems and infrastructure.  These assessments help us proactively identify and mitigate security risks, ensuring that our security measures remain effective and up-to-date.
                    </li>
                    <li>
                      Employee Training on Data Security and Privacy:  We provide comprehensive training to our employees on data security and privacy best practices.  This training ensures that our staff understands their responsibilities in protecting user data, is aware of potential security threats, and follows established security protocols.  Employee training is a crucial component of our overall data protection strategy.
                    </li>
                    <li>
                      Physical Security Measures:  For physical infrastructure that houses our data, we implement physical security measures to prevent unauthorized physical access. This may include secure data centers, access control systems, surveillance, and other measures to protect the physical security of our data storage facilities.
                    </li>
                  </ul>
                  <p className="!mb-0">
                    While we strive to implement comprehensive security measures, it is important to acknowledge that no system is completely impenetrable, and absolute security cannot be guaranteed. In the event of a data breach, we are committed to taking prompt and appropriate action in accordance with applicable laws and regulations, including notifying affected users as required.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">4.2 Data Retention</h3>
                  <p className="!mb-0">
                    We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.  Our data retention practices are guided by the following principles:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Account Data Retained While Account is Active:  We typically retain your account data (e.g., name, email, account settings) for as long as your account remains active.  This allows you to continue using our services and access your account information.  If you choose to close your account, we will initiate the process of deleting your account data, subject to any legal or regulatory obligations.
                    </li>
                    <li>
                      Usage Data Retained for Analysis and Improvement:  We may retain usage data (e.g., feature usage, interactions, performance data) for a longer period to analyze trends, improve our services, and develop new features.  This usage data is often aggregated and anonymized to protect individual privacy and is used for statistical and analytical purposes.
                    </li>
                    <li>
                      Backup Retention Policies:  We maintain data backups for disaster recovery and business continuity purposes. These backups may contain your personal data and are typically retained for a defined period as part of our backup retention policies.  Backups are securely stored and accessed only for recovery purposes in the event of data loss or system failure.
                    </li>
                    <li>
                      Data Deletion Upon Request (Subject to Limitations):  You have the right to request deletion of your personal data (see Section 5 for details).  Upon receiving a valid deletion request, we will take steps to delete your personal data from our active systems.  However, we may be required to retain certain data for legal compliance, fraud prevention, dispute resolution, or other legitimate business purposes.  We will inform you if we are unable to fulfill a deletion request due to such limitations.
                    </li>
                  </ul>
                  <p className="!mb-0">
                    The specific data retention periods may vary depending on the type of data, the purpose of collection, and applicable legal and regulatory requirements.  We regularly review our data retention policies to ensure they are aligned with best practices and legal obligations.
                  </p>
                </div>
              </div>

              <div id="your-rights" className="scroll-mt-24">
                <h2>5. Your Rights Regarding Your Personal Data</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">5.1 Access and Control Over Your Data</h3>
                  <p className="!mb-4">
                    We are committed to empowering you with control over your personal data.  Depending on your location and applicable data protection laws, you may have certain rights regarding your personal data that we collect and process. These rights are designed to give you transparency and control over your information:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Right to Access Your Personal Data: You have the right to request access to the personal data we hold about you.  This includes the right to receive confirmation as to whether we are processing your personal data, and if so, to obtain a copy of your personal data and information about the purposes of processing, the categories of data, the recipients, and the retention period.
                    </li>
                    <li>
                      Right to Rectify Inaccurate Data:  If you believe that the personal data we hold about you is inaccurate or incomplete, you have the right to request correction or rectification of this data.  We will take reasonable steps to ensure that your personal data is accurate and up-to-date.
                    </li>
                    <li>
                      Right to Request Data Deletion (Right to be Forgotten):  In certain circumstances, you have the right to request the deletion of your personal data.  This right may apply when the data is no longer necessary for the purposes for which it was collected, when you withdraw your consent (if processing is based on consent), when you object to processing, or when the processing is unlawful.  We will assess your request and comply with it unless there are legal or legitimate reasons to retain the data.
                    </li>
                    <li>
                      Right to Object to Processing:  You have the right to object to the processing of your personal data in certain situations, such as processing for direct marketing purposes or processing based on legitimate interests.  If you object, we will stop processing your data unless we have compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or for the establishment, exercise, or defense of legal claims.
                    </li>
                    <li>
                      Right to Data Portability:  In certain circumstances, you have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit this data to another controller. This right applies to data you have provided to us based on consent or contract and which is processed by automated means.
                    </li>
                    <li>
                      Right to Withdraw Consent:  If we are processing your personal data based on your consent, you have the right to withdraw your consent at any time.  Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.  Upon receiving your withdrawal of consent, we will stop processing your data for the purposes for which you consented, unless we have another legal basis for processing.
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">5.2 How to Exercise Your Rights</h3>
                  <p className="!mb-4">
                    We are committed to facilitating your exercise of these rights.  You can exercise your rights through the following mechanisms:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Contact Our Data Protection Officer (DPO):  The most direct way to exercise your rights is to contact our Data Protection Officer (contact details provided in Section 14).  You can send an email to the DPO with your request, clearly specifying the right you wish to exercise and providing any necessary details to help us process your request efficiently.
                    </li>
                    <li>
                      Use Account Settings Where Available:  For certain rights, such as accessing and correcting your account information or managing communication preferences, you may be able to exercise these rights directly through your account settings within our platform.  Check your account settings to see if the right you wish to exercise can be managed there.
                    </li>
                    <li>
                      Submit a Formal Request Via Email:  You can also submit a formal request via email to our general privacy email address (privacy@nexthomelabs.com).  In your email, please clearly state the right you wish to exercise and provide sufficient information to allow us to identify you and process your request.
                    </li>
                    <li>
                      Response Time:  We are committed to responding to your requests in a timely manner.  We aim to acknowledge your request within 48 hours and provide a full response within 30 days of receipt of your request.  In some complex cases, it may take longer to fully respond, but we will keep you informed of any delays and the reasons for the extension.
                    </li>
                  </ul>
                  <p className="!mb-0">
                    Please note that we may need to verify your identity before processing your request to ensure the security of your personal data and prevent unauthorized access.  We may also request additional information from you to clarify your request or to assist us in processing it effectively.
                  </p>
                </div>
              </div>

              <div id="cookies" className="scroll-mt-24">
                <h2>6. Cookies and Tracking Technologies</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">6.1 Types of Cookies We Use</h3>
                  <p className="!mb-0">
                    We utilize cookies and similar tracking technologies to enhance your experience on our platform, personalize content, analyze usage patterns, and improve our services. Cookies are small text files that are placed on your device by websites you visit. We use various types of cookies for different purposes:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Essential Cookies (Strictly Necessary Cookies): These cookies are essential for the basic functionality of our website and services. They enable core features such as account login, navigation, accessing secure areas, and shopping cart functionality (if applicable). Without these cookies, our website would not function properly, and you would not be able to use essential features.  These cookies are typically session-based and are deleted when you close your browser.
                    </li>
                    <li>
                      Performance Cookies (Analytics Cookies):  These cookies collect information about how you use our website, such as which pages you visit most often, which features you use, and if you encounter any errors.  This data is used to analyze website traffic, understand user behavior, improve website performance, and optimize user experience. Performance cookies are often provided by third-party analytics services and are typically aggregated and anonymized. Examples include Google Analytics cookies.
                    </li>
                    <li>
                      Advertising Cookies (Marketing Cookies):  These cookies are used to track your browsing habits and online activity to deliver personalized advertisements that are relevant to your interests.  They may also be used to limit the number of times you see an advertisement and to measure the effectiveness of advertising campaigns.  Advertising cookies are often placed by third-party advertising networks and may be used to build a profile of your interests for targeted advertising across multiple websites.  We will only use advertising cookies with your explicit consent, where required by applicable law.
                    </li>
                    <li>
                      Third-Party Cookies:  In addition to our own cookies, we may also use third-party cookies provided by external service providers.  These cookies may be used for various purposes, such as integrating social media features, embedding content from other websites, providing analytics services, or delivering targeted advertising.  The use of third-party cookies is governed by the privacy policies of the respective third-party providers. We encourage you to review their policies to understand their data practices.
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">6.2 Managing Your Cookie Preferences</h3>
                  <p className="!mb-4">
                    You have various options to manage your cookie preferences and control the use of cookies on our website. You can customize your cookie settings through the following mechanisms:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Browser Settings:  Most web browsers allow you to control cookies through your browser settings.  You can typically block or delete cookies, disable cookies for specific websites, or configure your browser to notify you when a cookie is being set.  The specific options and settings vary depending on your browser.  Refer to your browser's help documentation for instructions on managing cookie settings.  Please note that blocking essential cookies may impact the functionality of our website and services.
                    </li>
                    <li>
                      Our Cookie Preference Center (If Implemented):  We may provide a dedicated "cookie preference center" or "cookie settings" interface on our website.  This interface allows you to customize your cookie preferences at a granular level, choosing which categories of cookies (e.g., performance, advertising) you want to enable or disable.  If we offer a cookie preference center, you can typically access it through a link in our website footer or privacy policy.
                    </li>
                    <li>
                      Third-Party Opt-Out Tools:  For certain types of cookies, particularly advertising cookies, you may be able to opt-out directly through third-party provider tools.  For example, many advertising networks offer opt-out mechanisms that allow you to control the use of cookies for targeted advertising.  You can often find information about these opt-out tools on the websites of advertising industry organizations or specific third-party providers.
                    </li>
                  </ul>
                  <p className="!mb-0">
                    Please be aware that disabling certain categories of cookies may affect your experience on our website and may limit the functionality of some features.  However, you have the right to control your cookie preferences and choose the level of cookie usage that you are comfortable with.
                  </p>
                </div>
              </div>

              <div id="international" className="scroll-mt-24">
                <h2>7. International Data Transfers</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">7.1 Mechanisms for International Data Transfers</h3>
                  <p className="!mb-4">
                    As a global organization, we may transfer your personal data to countries outside of your country of residence, including to countries that may not have data protection laws that are as comprehensive as those in your country.  When we transfer your data internationally, we implement appropriate safeguards to ensure that your personal data remains protected in accordance with applicable data protection laws.  These safeguards may include:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Standard Contractual Clauses (SCCs): We may utilize Standard Contractual Clauses approved by the European Commission or other relevant authorities.  SCCs are contractual clauses that provide a framework for lawful data transfers and ensure that data recipients outside of the EU (or other regions with similar data protection regimes) provide an adequate level of data protection.  We may enter into SCCs with our service providers and affiliates who process data internationally.
                    </li>
                    <li>
                      Privacy Shield Compliance (If Applicable and Still Valid):  If transferring data to the United States, we may rely on Privacy Shield certifications (to the extent that Privacy Shield remains a valid transfer mechanism under applicable law).  Privacy Shield is a framework agreed upon between the EU and the US (and Switzerland and the US) to provide a mechanism for companies to comply with data protection requirements when transferring personal data from the EU (and Switzerland) to the US.  We will ensure compliance with Privacy Shield principles for relevant data transfers.
                    </li>
                    <li>
                      Data Protection Agreements:  We enter into data protection agreements with our service providers and affiliates who process personal data on our behalf.  These agreements include provisions that ensure data processors comply with data protection obligations, implement appropriate security measures, and process data only in accordance with our instructions and applicable laws.
                    </li>
                    <li>
                      Regional Data Storage Options (Where Feasible):  Where feasible and appropriate, we may offer regional data storage options to allow users to have their data stored and processed within their region or country.  This can help address data localization requirements and user preferences regarding data storage location.  We will provide information about regional data storage options where available.
                    </li>
                  </ul>
                  <p className="!mb-0">
                    We are committed to ensuring that all international data transfers are conducted in compliance with applicable data protection laws and regulations.  We regularly review and update our data transfer mechanisms to ensure ongoing compliance and to adapt to evolving legal requirements.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">7.2 Maintaining High Data Protection Standards Internationally</h3>
                  <p className="!mb-4">
                    Regardless of where your personal data is processed, we are committed to maintaining high data protection standards and ensuring that your information is protected in accordance with this Privacy Policy and applicable data protection laws.  Our commitment to high standards is reflected in the following practices:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Regular Compliance Audits:  We conduct regular compliance audits to assess our adherence to data protection laws and regulations, including those related to international data transfers.  These audits help us identify areas for improvement and ensure that our data protection practices remain effective and compliant.
                    </li>
                    <li>
                      Data Protection Impact Assessments (DPIAs):  For processing activities that are likely to present a high risk to individuals' privacy, such as certain international data transfers, we conduct Data Protection Impact Assessments.  DPIAs help us assess the risks associated with processing activities and implement appropriate measures to mitigate those risks.
                    </li>
                    <li>
                      Vendor Security Reviews and Due Diligence:  Before engaging with any third-party vendor or service provider who may process personal data internationally, we conduct thorough security reviews and due diligence.  This includes assessing their data protection practices, security measures, and compliance with applicable laws.  We only work with vendors who demonstrate a commitment to data protection and can meet our security standards.
                    </li>
                  </ul>
                  <p className="!mb-0">
                    We are dedicated to maintaining a consistent and high level of data protection across all of our operations, regardless of geographic location.  We will continue to monitor and adapt our data protection practices to reflect evolving legal requirements and best practices in international data transfers.
                  </p>
                </div>
              </div>

              <div id="children" className="scroll-mt-24">
                <h2>8. Children's Privacy</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">8.1 Age Restrictions and Data Collection from Children</h3>
                  <p className="!mb-0">
                    Protecting the privacy of children is of utmost importance to us.  Our services are not intended for children under the age of 13, and we do not knowingly collect personal data from children under this age without verifiable parental consent.  We are committed to complying with applicable laws and regulations regarding children's online privacy, such as the Children's Online Privacy Protection Act (COPPA) in the United States and similar regulations in other jurisdictions.
                  </p>
                  <p className="!mb-0">
                    If you are a parent or guardian and believe that your child under 13 has provided us with personal information without your consent, we urge you to contact us immediately using the contact information provided in Section 11.  We will take prompt steps to investigate and, if necessary, delete the child's personal information from our systems.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">8.2 Protection Measures for Children's Data</h3>
                  <p className="!mb-0">
                    To reinforce our commitment to children's privacy, we have implemented the following protection measures:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Age Verification Processes:  When users create an account or use certain features of our services, we may implement age verification processes to help ensure that users are not under the age of 13.  These processes may involve asking users to provide their date of birth or other age-related information.  However, age verification methods are not foolproof, and we rely on users to provide accurate information.
                    </li>
                    <li>
                      Immediate Data Deletion Upon Discovery:  If we become aware that we have inadvertently collected personal information from a child under 13 without verifiable parental consent, we will take immediate steps to delete that data from our systems.  We have procedures in place to identify and remove such data promptly.
                    </li>
                    <li>
                      Parental Consent Requirements (Where Applicable):  If we intend to collect personal information from children under 13 in the future, we will implement parental consent mechanisms in compliance with COPPA and other applicable laws.  This will involve obtaining verifiable parental consent before collecting, using, or disclosing personal information from children.  We will provide clear information to parents about our data collection practices and obtain their consent in a legally compliant manner.
                    </li>
                  </ul>
                  <p className="!mb-0">
                    We are committed to creating a safe and responsible online environment for all users, including children.  We will continue to monitor and adapt our practices to ensure the protection of children's privacy and compliance with relevant laws and regulations.
                  </p>
                </div>
              </div>

              <div id="third-party" className="scroll-mt-24">
                <h2>9. Third-Party Services</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">9.1 Third-Party Links</h3>
                  <p className="!mb-0">
                    Our platforms and services may contain links to third-party websites, applications, or services that are not owned or controlled by NextHomeLabs.  These links are provided for your convenience and information.  However, it is important to understand that this Privacy Policy does not apply to third-party services.  When you click on links to third-party services and interact with them, you are subject to their own privacy policies and terms of service.
                  </p>
                  <p className="!mb-0">
                    We strongly encourage you to review the privacy policies of any third-party services you access through our platform before providing them with any personal information or engaging with their services.  We are not responsible for the privacy practices or content of third-party services, and your interactions with them are solely at your own risk.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">9.2 Third-Party Integrations</h3>
                  <p className="!mb-0">
                    In addition to links to external services, we may also integrate third-party services directly into our platform to enhance functionality, provide additional features, or improve user experience.  These integrations may involve sharing certain data with the third-party providers to enable the integrated services to function properly.  Examples of third-party integrations we may use include:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Analytics Providers:  We integrate with analytics providers to track website and service usage, analyze user behavior, and generate reports.  These providers may collect data about your interactions with our platform for analytics purposes.
                    </li>
                    <li>
                      Payment Processors:  As mentioned earlier, we integrate with payment processors to facilitate secure payment transactions.  When you make a payment, your payment details are transmitted to these processors to complete the transaction.
                    </li>
                    <li>
                      Authentication Services:  We may use third-party authentication services (e.g., social login providers) to simplify account creation and login processes.  If you choose to use these services, they may share certain information with us, such as your name and email address, to facilitate account setup.
                    </li>
                    <li>
                      Cloud Service Providers:  Our infrastructure relies on cloud service providers for hosting, storage, and other essential services.  These providers may process and store your data as part of their service delivery to us.
                    </li>
                  </ul>
                  <p className="!mb-0">
                    When we integrate with third-party services, we carefully select providers who have reputable privacy practices and implement appropriate data protection measures.  We strive to ensure that data sharing with third-party providers is limited to what is necessary for the integrated services to function and is conducted in accordance with applicable data protection laws.  We encourage you to review the privacy policies of these third-party providers to understand their data practices as well.
                  </p>
                </div>
              </div>

              <div id="changes" className="scroll-mt-24">
                <h2>10. Changes to Privacy Policy</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">10.1 Update Process</h3>
                  <p className="!mb-0">
                    We may update this Privacy Policy from time to time to reflect changes in our data processing practices, legal requirements, or industry standards.  We reserve the right to modify this Privacy Policy at any time, and any changes will be effective upon posting the revised policy on our website or within our services.  We are committed to transparency and will take reasonable steps to notify you of significant changes to this Privacy Policy.  These notification methods may include:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Email notifications
                    </li>
                    <li>
                      Website announcements
                    </li>
                    <li>
                      App notifications
                    </li>
                  </ul>
                </div>
              </div>

              <div id="contact" className="scroll-mt-24">
                <h2>11. Contact Information</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">11.1 Contact Details</h3>
                  <p className="!mb-4">
                    For privacy inquiries, contact:
                  </p>
                  <p className="!mb-0">
                    Privacy Officer<br />
                    NextHomeLabs Limited<br />
                    Email: privacy@nexthomelabs.com<br />
                    Address: Kampala, Uganda
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">11.2 Response Time</h3>
                  <p className="!mb-0">
                    We aim to respond to all privacy-related inquiries within 48 hours and resolve any concerns within 30 days.
                  </p>
                </div>
              </div>

              <div id="consent" className="scroll-mt-24">
                <h2>12. Consent and Agreement</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">12.1 Consent Methods</h3>
                  <p className="!mb-0">
                    We obtain consent through:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Account creation
                    </li>
                    <li>
                      Service usage
                    </li>
                    <li>
                      Explicit opt-ins
                    </li>
                    <li>
                      Cookie acceptance
                    </li>
                  </ul>
                </div>
              </div>

              <div id="automated" className="scroll-mt-24">
                <h2>13. Automated Decision-Making</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">13.1 AI Processing</h3>
                  <p className="!mb-4">
                    Our AI systems may make automated decisions for:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Content personalization
                    </li>
                    <li>
                      Security monitoring
                    </li>
                    <li>
                      Service optimization
                    </li>
                    <li>
                      Risk assessment
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">13.2 User Rights</h3>
                  <p className="!mb-0">
                    You can opt out of automated processing by contacting our support team. Alternative processing methods will be provided where possible.
                  </p>
                </div>
              </div>

              <div id="dpo" className="scroll-mt-24">
                <h2>14. Data Protection Officer</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">14.1 DPO Role</h3>
                  <p className="!mb-4">
                    Our DPO is responsible for:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Privacy compliance oversight
                    </li>
                    <li>
                      Data protection strategy
                    </li>
                    <li>
                      Privacy impact assessments
                    </li>
                    <li>
                      Stakeholder communication
                    </li>
                  </ul>
                </div>
              </div>

              <div id="law" className="scroll-mt-24">
                <h2>15. Governing Law</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">15.1 Legal Framework</h3>
                  <p className="!mb-4">
                    This Privacy Policy is governed by:
                  </p>
                  <ul className="!mb-0">
                    <li>
                      Laws of Uganda
                    </li>
                    <li>
                      Applicable international regulations
                    </li>
                    <li>
                      Data protection directives
                    </li>
                    <li>
                      Industry standards
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">15.2 Dispute Resolution</h3>
                  <p className="!mb-0">
                    Any disputes shall be resolved through Ugandan courts, with options for alternative dispute resolution where appropriate.
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
                <a href="#information-we-collect" className="block text-sm text-gray-400 hover:text-white transition-colors">1. Information We Collect</a>
                <a href="#how-we-use" className="block text-sm text-gray-400 hover:text-white transition-colors">2. How We Use Information</a>
                <a href="#sharing" className="block text-sm text-gray-400 hover:text-white transition-colors">3. Sharing Information</a>
                <a href="#data-retention" className="block text-sm text-gray-400 hover:text-white transition-colors">4. Data Retention</a>
                <a href="#your-rights" className="block text-sm text-gray-400 hover:text-white transition-colors">5. Your Rights</a>
                <a href="#cookies" className="block text-sm text-gray-400 hover:text-white transition-colors">6. Cookies</a>
                <a href="#international" className="block text-sm text-gray-400 hover:text-white transition-colors">7. International Transfers</a>
                <a href="#children" className="block text-sm text-gray-400 hover:text-white transition-colors">8. Children's Privacy</a>
                <a href="#third-party" className="block text-sm text-gray-400 hover:text-white transition-colors">9. Third-Party Services</a>
                <a href="#changes" className="block text-sm text-gray-400 hover:text-white transition-colors">10. Changes</a>
                <a href="#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">11. Contact</a>
                <a href="#consent" className="block text-sm text-gray-400 hover:text-white transition-colors">12. Consent</a>
                <a href="#automated" className="block text-sm text-gray-400 hover:text-white transition-colors">13. Automated Decisions</a>
                <a href="#dpo" className="block text-sm text-gray-400 hover:text-white transition-colors">14. DPO</a>
                <a href="#law" className="block text-sm text-gray-400 hover:text-white transition-colors">15. Governing Law</a>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
