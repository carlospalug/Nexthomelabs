"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function TermsPage() {
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
                  <span>Last Updated: January 27, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>

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
                  Welcome to NextHomeLabs and CentGPT! We are thrilled to have you explore our innovative technologies that leverage artificial intelligence (AI), machine learning, and blockchain solutions. These Terms of Use ("Terms") are designed to govern your access to and use of our platforms, including our website, applications, and related services. By accessing or using any of our services, you agree to be bound by these Terms. If you do not agree, please refrain from using our platforms.
                </p>
              </div>

              <p>
                These Terms of Use apply to all products and services offered by NextHomeLabs and its flagship product, CentGPT. This document is comprehensive and legally binding, so we encourage you to read it carefully.
              </p>

              <div id="introduction" className="scroll-mt-24">
                <h2>1. Introduction</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">1.1 About NextHomeLabs and CentGPT</h3>
                  <p className="!mb-0">
                    NextHomeLabs stands as a beacon of innovation in the rapidly evolving landscape of technology. We are a company deeply committed to pioneering advancements in artificial intelligence, blockchain technology, and machine learning. Our mission is to develop and deploy cutting-edge solutions that not only address the complexities of the modern world but also anticipate the challenges of tomorrow. At the heart of our innovation lies CentGPT, our flagship AI-driven product. CentGPT is meticulously engineered to be more than just a tool; it is a comprehensive platform designed to empower individuals and businesses alike. It is crafted to provide advanced solutions that span a wide array of everyday challenges, significantly enhancing productivity, offering insightful data analysis, and much more. We believe in the power of technology to transform lives and businesses, and CentGPT is a testament to this belief, embodying our dedication to creating impactful and intelligent solutions.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">1.2 Purpose of These Terms</h3>
                  <p className="!mb-0">
                    The primary purpose of these Terms of Use is to establish a clear and mutual understanding regarding the usage of the services provided by NextHomeLabs. This document serves as a vital agreement that meticulously outlines the rights, responsibilities, and obligations that exist between you, the user, and NextHomeLabs. By setting forth these terms, we aim to create a transparent and predictable environment for all users, ensuring fair and responsible use of our platforms and services. These Terms are designed to be a comprehensive guide, clarifying not only what is permitted when using our services but also delineating the boundaries of acceptable use and any prohibited activities. They are in place to protect both our users and NextHomeLabs, fostering a safe, secure, and positive experience for everyone involved within our digital ecosystem. We believe in open access to innovation, but also in responsible usage that respects the rights and expectations of all parties.
                  </p>
                </div>

                <div className="border-l-4 border-[#00E6E6] pl-6 my-8">
                  <h3 className="!mt-0">1.3 Definitions</h3>
                  <div className="space-y-2">
                    <p>To ensure absolute clarity and prevent any ambiguity, it is essential to define certain terms that are frequently used throughout these Terms of Use. These definitions are provided below to establish a common understanding and to facilitate easier interpretation of this document:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        <strong>"NextHomeLabs"</strong> refers to the corporate entity, NextHomeLabs Inc., which is the organization responsible for the operation, maintenance, and provision of the website, CentGPT platform, and all associated services offered under this brand. It encompasses the company, its affiliates, employees, directors, and all related entities.
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        <strong>"CentGPT"</strong> specifically denotes the artificial intelligence-driven tool and platform that is developed, owned, and provided by NextHomeLabs. This includes all aspects of the AI, its algorithms, user interfaces, functionalities, and any related software or applications that constitute the CentGPT service offering.
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        <strong>"Services"</strong> is a broad term that comprehensively includes all products, websites, applications (whether web-based, mobile, or desktop), features, technologies, and functionalities offered by NextHomeLabs, including but not limited to CentGPT. This definition covers everything accessible or provided through our platforms, whether currently available or developed in the future.
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        <strong>"User"</strong> pertains to any individual, corporation, partnership, or other legal entity that accesses, browses, interacts with, or in any way utilizes the Services provided by NextHomeLabs. This term encompasses all visitors and users of our platforms, regardless of whether they have registered an account or are simply browsing.
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        <strong>"Content"</strong> is defined as all forms of text, data, graphics, images, audio, video, software, or any other type of material or information that is made available on the platform, either by NextHomeLabs or by users. This includes, but is not limited to, articles, blog posts, AI-generated outputs, user-generated content, visual elements, and any downloadable materials.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="acceptance" className="scroll-mt-24">
                <h2>2. Acceptance of Terms</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">2.1 Agreement to Comply</h3>
                  <p className="!mb-0">
                    Your journey into the NextHomeLabs and CentGPT ecosystem begins with a fundamental step: acknowledging and agreeing to these Terms of Use. By choosing to access, browse, or in any way utilize our Services, you are unequivocally indicating that you have thoroughly read, fully understood, and willingly agree to be legally bound by each and every provision outlined in these Terms. This agreement is not merely a formality; it is a critical prerequisite for using our Services. Should you find yourself in disagreement with any part of these Terms, or if you are unable to fully comply with them, you are respectfully requested to refrain from using our Services. Your continued use of our platform after these Terms have been made available signifies your ongoing acceptance of these conditions.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">2.2 Binding Agreement</h3>
                  <p className="!mb-0">
                    These Terms of Use are not just guidelines or suggestions; they constitute a legally binding agreement. This agreement is formed between you, whether as an individual or on behalf of an organization, and NextHomeLabs. It is crucial to understand that this is a formal contract that governs your relationship with our Services. If you are acting on behalf of a company, institution, or any other organization, you are affirming that you possess the necessary legal authority to bind that organization to these Terms. This confirmation is essential because it establishes that the organization, as well as you personally, are obligated to adhere to the stipulations and conditions detailed within this document. This binding agreement is designed to ensure clarity, protect the interests of all parties, and provide a solid foundation for a trustworthy and reliable service environment.
                  </p>
                </div>
              </div>

              <div id="eligibility" className="scroll-mt-24">
                <h2>3. Eligibility</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">3.1 Age Restrictions</h3>
                  <p className="!mb-0">
                    Access to and utilization of our Services are subject to certain age-related eligibility criteria to ensure compliance with legal standards and protect younger audiences. To be eligible to use NextHomeLabs and CentGPT, you must be at least 18 years of age. This age threshold is set to align with international norms regarding digital service usage and legal competence to enter into agreements online. If, in your jurisdiction, the legal age of majority is older than 18, then you must meet that older age requirement to qualify for using our Services. We strictly prohibit access to our Services for anyone under the age of 18, or the applicable legal age of majority, and we do not knowingly collect personal information from individuals below this age. By using our Services, you are representing and warranting that you meet these age requirements.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">3.2 Geographic Restrictions</h3>
                  <p className="!mb-0">
                    While NextHomeLabs and CentGPT are designed to be globally accessible, the availability of our Services and specific features within them may be subject to geographic limitations. This is primarily due to the varying legal and regulatory landscapes across different countries and regions. Local laws, regulations, and compliance requirements can sometimes restrict or modify the features we can offer in certain areas. As such, while we strive to provide our full suite of Services to users worldwide, we cannot guarantee that all features will be accessible in every location. We continuously monitor international regulations and strive to expand our service availability while remaining fully compliant with all applicable laws. Users are responsible for ensuring that their use of our Services complies with local laws and regulations in their jurisdiction.
                  </p>
                </div>

                <div className="border-l-4 border-[#00E6E6] pl-6 my-8">
                  <h3 className="!mt-0">3.3 Prohibited Users</h3>
                  <p>To maintain a safe and legally compliant environment, certain categories of individuals and entities are prohibited from using our Services. This prohibition extends to:</p>
                  <ul>
                    <li>**Individuals or entities barred from receiving services under the laws of their jurisdiction:** This includes anyone who is legally restricted from using online services or platforms in their country, state, or local area. Such restrictions could be due to various legal reasons, and users are responsible for ensuring they are not subject to any such prohibitions.</li>
                    <li>**Individuals or entities on government-issued sanctions lists:** To comply with international and national regulations aimed at preventing illegal activities and maintaining global security, we are obligated to restrict access to our Services for individuals and entities that appear on sanctions lists provided by governmental bodies. These lists typically identify parties involved in, or associated with, illegal activities, terrorism, or other serious offenses. We regularly check against these lists to ensure our platform is not used by prohibited parties.</li>
                  </ul>
                </div>
              </div>

              <div id="scope" className="scroll-mt-24">
                <h2>4. Scope of Services</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">4.1 Description of Services</h3>
                  <p className="!mb-0">
                    NextHomeLabs is dedicated to providing a comprehensive suite of technological tools and solutions aimed at enhancing productivity, streamlining operational processes, and delivering innovative capabilities across various sectors. At the forefront of our offerings is CentGPT, a sophisticated platform that embodies our commitment to leveraging advanced technologies. Our Services broadly include, but are not limited to, the following key areas:
                    <ul>
                      <li>**AI-driven content generation:** We offer advanced AI tools capable of generating a wide range of content, from text-based articles and marketing copy to creative content and summaries. These tools are designed to assist users in content creation processes, enhance communication, and automate content-related tasks, thereby boosting efficiency and creativity.</li>
                      <li>**Blockchain integration solutions:** Recognizing the transformative potential of blockchain technology, we provide solutions that integrate blockchain into various applications. This includes developing secure, transparent, and decentralized systems for data management, transaction processing, and digital asset management. Our blockchain services aim to enhance security, trust, and efficiency in digital interactions and operations.</li>
                      <li>**Machine learning-based data analysis:** Our Services feature powerful machine learning algorithms designed for in-depth data analysis. These tools enable users to extract valuable insights from complex datasets, identify trends, make data-driven decisions, and automate analytical processes. We focus on providing user-friendly interfaces that make advanced data analysis accessible to users across different skill levels, empowering them to leverage data for strategic advantages.</li>
                    </ul>
                    Our overarching goal is to continually expand and improve our Services, ensuring they remain at the cutting edge of technological innovation and effectively meet the evolving needs of our users.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">4.2 Limitations of Service</h3>
                  <p className="!mb-0">
                    It is important for users to understand the inherent limitations associated with our Services. NextHomeLabs provides its Services on an "as is" and "as available" basis. This means that while we strive to offer a seamless, high-quality experience, we cannot guarantee uninterrupted access to our Services at all times, nor can we ensure absolutely error-free performance. The digital and technological environments are dynamic and complex, and various factors can influence service availability and functionality. These factors may include, but are not limited to, network issues, server maintenance, technological failures, and unforeseen circumstances. Furthermore, certain features within our Services may be subject to availability constraints and technical limitations, which could vary over time. We are committed to minimizing disruptions and resolving any issues promptly, but users should acknowledge these inherent limitations and understand that occasional interruptions or imperfections may occur. We encourage users to plan for such eventualities and recognize that our Services are provided with the understanding of these potential limitations.
                  </p>
                </div>
              </div>

              <div id="responsibilities" className="scroll-mt-24">
                <h2>5. User Responsibilities</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">5.1 Account Creation and Management</h3>
                  <p>To fully engage with certain advanced features of our Services, you may be required to create a user account. This account serves as your personal gateway to our platform and allows you to access and utilize a broader range of functionalities. When you proceed with account creation, you formally agree to adhere to the following responsibilities:</p>
                  <ul className="!mb-0">
                    <li>**Provide accurate and up-to-date information:** During the registration process and throughout your account maintenance, it is imperative that you provide information that is truthful, accurate, current, and complete. This includes your personal details and any other information requested by our platform. Maintaining accurate information ensures effective communication, personalized service, and helps us in providing a secure environment for all users. Should your information change, it is your responsibility to promptly update your account details to reflect these changes.</li>
                    <li>**Keep your login credentials secure:** The security of your account is paramount, and a significant part of this security depends on you. You are solely responsible for maintaining the confidentiality of your login credentials, including your username and password. It is crucial that you take all necessary steps to prevent unauthorized access to your account. This includes choosing a strong, unique password that you do not use for other online services, and keeping your password strictly confidential. Avoid sharing your login details with anyone, and be cautious about where you enter your credentials online, ensuring it is always on legitimate and secure platforms.</li>
                    <li>**Notify us immediately of any unauthorized access:** In the unfortunate event that you suspect or become aware of any unauthorized access to your account, or any other breach of security, it is your immediate responsibility to notify our support team. Prompt notification allows us to take swift action to help secure your account, investigate the incident, and prevent potential misuse. Timely reporting of any security concerns is crucial for protecting both your data and the integrity of our platform.</li>
                  </ul>
                  By diligently managing your account and adhering to these responsibilities, you contribute significantly to the security and reliability of our Services for yourself and the entire user community.
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">5.2 Prohibited Activities</h3>
                  <p>To ensure a positive, safe, and legally compliant environment for all users, certain activities are strictly prohibited when using our Services. By agreeing to these Terms of Use, you explicitly commit not to engage in any of the following activities:</p>
                  <ul className="!mb-0">
                    <li>**Violate any applicable laws or regulations:** You are obligated to use our Services in a manner that fully complies with all relevant local, national, and international laws, statutes, ordinances, and regulations. This includes, but is not limited to, laws related to intellectual property, data protection, privacy, online conduct, and content creation and distribution. Engaging in any activity that contravenes these legal frameworks is strictly forbidden.</li>
                    <li>**Exploit or harm minors:** The protection of children is of utmost importance. You are expressly prohibited from using our Services in any way that could exploit, abuse, or endanger children. This includes creating, accessing, or distributing content that is harmful to minors, or engaging in any form of interaction that could be construed as predatory or exploitative towards children. We have a zero-tolerance policy towards any activity that could potentially harm or endanger minors.</li>
                    <li>**Attempt to reverse-engineer or tamper with our systems:** Any attempts to undermine the security or integrity of our Services are strictly prohibited. This includes any actions aimed at reverse-engineering, decompiling, disassembling, or otherwise attempting to derive the source code of our software or any part of our technology. Tampering with our systems, circumventing security measures, or probing for vulnerabilities without explicit permission is also forbidden. Such activities can compromise the security of our platform and the data of all users.</li>
                    <li>**Introduce viruses or malicious software:** You are strictly prohibited from using our Services to transmit or distribute any form of viruses, worms, malware, Trojan horses, spyware, adware, or any other type of malicious or harmful software code. Introducing such harmful elements can severely disrupt our Services, damage user devices, and compromise data security. Users must ensure that their use of our platform does not, in any way, facilitate the spread of malicious software.</li>
                  </ul>
                  Engaging in any of these prohibited activities constitutes a serious breach of these Terms of Use and may result in immediate termination of your account and potential legal consequences. We are committed to maintaining a safe and respectful environment and will take appropriate measures to enforce these prohibitions.
                </div>

                <div className="border-l-4 border-[#00E6E6] pl-6 my-8">
                  <h3 className="!mt-0">5.3 Accuracy of Information</h3>
                  <p className="!mb-0">
                    You bear the sole responsibility for ensuring the accuracy, reliability, and appropriateness of all information you provide, input, or generate while using our Services. This responsibility extends to all forms of content and data you interact with on our platform, including but not limited to text, data sets, prompts for AI interactions, and any other information you submit or utilize. It is crucial that you verify the information you provide and ensure that it is correct and suitable for the intended purpose. Misinformation, inaccuracies, or inappropriate content can lead to ineffective outcomes, misunderstandings, or even legal and ethical issues. Therefore, it is incumbent upon you to exercise diligence in verifying the information you use within our Services and to ensure that it aligns with ethical standards and legal requirements. NextHomeLabs relies on the information provided by users to deliver effective and relevant services, and the accuracy of this information is vital for the overall quality and integrity of the user experience.
                  </p>
                </div>
              </div>

              <div id="intellectual-property" className="scroll-mt-24">
                <h2>6. Intellectual Property</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">6.1 Ownership</h3>
                  <p className="!mb-0">
                    NextHomeLabs rigorously protects its intellectual property rights, which are fundamental to our business and innovation. All intellectual property rights pertaining to our Services, including, but not limited to, the CentGPT platform, its underlying technology, algorithms, software, designs, trademarks, logos, and content, are exclusively owned by NextHomeLabs or its licensors. These rights are protected under applicable copyright laws, trademark laws, patent laws, and other intellectual property legislations worldwide. As a user, you acknowledge and respect these ownership rights. You are expressly prohibited from copying, reproducing, modifying, distributing, publicly displaying, or creating derivative works from any content or aspect of our Services without obtaining explicit, prior written permission from NextHomeLabs. Unauthorized use of our intellectual property is a violation of these Terms and may lead to legal action. We are committed to safeguarding our intellectual assets and ensuring that our innovations are protected, while also respecting the intellectual property rights of others.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">6.2 License to Use</h3>
                  <p className="!mb-0">
                    While NextHomeLabs retains full ownership of all intellectual property rights in our Services, we grant you, as a user, a limited, non-exclusive, non-transferable, and revocable license to access and use our Services. This license is specifically granted for your personal or internal business purposes, strictly in accordance with these Terms of Use. This license permits you to utilize the functionalities of our Services as intended and made available by NextHomeLabs. However, it is crucial to understand that this license does not confer any ownership rights or intellectual property rights to you in our Services or any of its components. The license is personal to you and cannot be sublicensed, assigned, or transferred to any third party. Furthermore, this license is conditional upon your continued compliance with all terms and conditions outlined in these Terms of Use. NextHomeLabs reserves the right to revoke this license at any time, particularly in cases of breach of these Terms or misuse of our Services. We aim to provide you with the necessary permissions to effectively use our platform while ensuring the protection of our intellectual property.
                  </p>
                </div>
              </div>

              <div id="usage" className="scroll-mt-24">
                <h2>7. Usage Restrictions</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">7.1 Prohibited Uses</h3>
                  <p>To maintain the integrity, legality, and ethical standards of our platform, certain uses of our Services are strictly prohibited. You are explicitly restricted from using NextHomeLabs and CentGPT for any of the following purposes:</p>
                  <ul className="!mb-0">
                    <li>**Engage in illegal activities:** You must not use our Services to conduct, facilitate, or promote any activities that are illegal, unlawful, or violate any applicable laws or regulations. This encompasses a wide range of illicit behaviors, including but not limited to, fraud, money laundering, illegal gambling, trafficking in illegal goods or substances, and any form of cybercrime. Our platform is intended for legitimate and lawful purposes only, and any misuse for illegal activities is strictly forbidden.</li>
                    <li>**Distribute unauthorized advertisements or spam:** The distribution of unsolicited advertising, promotional materials, spam, chain letters, pyramid schemes, or any other form of unauthorized or mass solicitation through our Services is strictly prohibited. This includes using our platform to send unsolicited commercial messages, engage in bulk emailing, or any other form of spamming. Such activities can disrupt the user experience and are not in line with the intended use of our platform.</li>
                    <li>**Collect or harvest personal data from other users:** You are expressly prohibited from using our Services to collect, harvest, or gather personal data or information from other users without their explicit consent and in violation of applicable privacy laws and regulations. This includes using automated means, such as bots or scrapers, to extract user data, or engaging in any form of surveillance or data mining activities aimed at collecting personal information from our user base. Respecting user privacy and data protection is paramount, and any violation of this principle is strictly prohibited.</li>
                  </ul>
                  Violation of these usage restrictions will be considered a serious breach of these Terms of Use and may result in immediate termination of your account and potential legal consequences. We are committed to upholding the law and maintaining a platform that is used responsibly and ethically.
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">7.2 Ethical Use</h3>
                  <p className="!mb-0">
                    NextHomeLabs places a strong emphasis on the ethical use of artificial intelligence and all technologies provided through our Services, especially CentGPT. Users are expected to adhere to high ethical guidelines in their utilization of our platform. This means ensuring that AI outputs generated by CentGPT, or any other tools within our Services, are not used for purposes that could cause harm, spread misinformation, or promote discriminatory practices. Ethical use includes, but is not limited to, avoiding the generation or dissemination of content that is defamatory, libelous, obscene, harassing, threatening, or that infringes upon the rights of others. It also involves being responsible and transparent about the use of AI-generated content, particularly in contexts where it could impact public opinion, decision-making, or personal beliefs. We encourage users to consider the broader societal implications of their use of AI and to strive for applications that are beneficial, respectful, and aligned with principles of fairness, justice, and integrity. NextHomeLabs is committed to promoting responsible AI practices and expects our users to share in this commitment.
                  </p>
                </div>
              </div>

              <div id="privacy" className="scroll-mt-24">
                <h2>8. Privacy and Data Collection</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">8.1 Connection to Privacy Policy</h3>
                  <p className="!mb-0">
                    Your privacy is of utmost importance to NextHomeLabs. To provide you with a clear and comprehensive understanding of how we handle your personal data, we have established a detailed Privacy Policy. This Privacy Policy is a separate document that is integral to these Terms of Use and provides in-depth information about our practices regarding the collection, use, processing, storage, and protection of your personal data. By using our Services, you explicitly consent to our data practices as thoroughly described in the Privacy Policy. We strongly encourage you to carefully review our Privacy Policy to fully understand how we manage your information, the types of data we collect, the purposes for which we use it, how we protect it, and your rights regarding your personal data. The Privacy Policy is readily accessible on our website and is designed to be transparent and user-friendly, ensuring you are well-informed about our data handling procedures. Your continued use of our Services implies your acknowledgment and agreement to the terms outlined in our Privacy Policy.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">8.2 User Data Protection</h3>
                  <p className="!mb-0">
                    NextHomeLabs is deeply committed to safeguarding the data entrusted to us by our users. We implement a range of robust security measures and protocols designed to protect your personal data from unauthorized access, use, alteration, disclosure, or destruction. These measures include advanced technical safeguards, encryption technologies, stringent access controls, and continuous monitoring of our systems to detect and prevent security breaches. While we are dedicated to maintaining the highest standards of data security and employ industry-best practices, it is important to acknowledge that no system is entirely impenetrable, and absolute security cannot be guaranteed in the ever-evolving landscape of cyber threats. Therefore, while we strive to protect your data to the best of our ability, you acknowledge that using our Services inherently involves a degree of risk, and you are using our Services at your own risk. We continuously work to enhance our security measures and adapt to new challenges to ensure the ongoing protection of your information.
                  </p>
                </div>
              </div>

              <div id="security" className="scroll-mt-24">
                <h2>9. Security</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">9.1 User Responsibilities for Securing Accounts</h3>
                  <p className="!mb-0">
                    Maintaining the security of your user account on NextHomeLabs and CentGPT is a shared responsibility, and users play a crucial role in protecting their own accounts and personal information. You are primarily responsible for taking proactive steps to secure your account credentials. This includes, but is not limited to, the following essential practices:
                    <ul>
                      <li>**Choosing a strong password:** Select a password that is robust and difficult to guess. A strong password typically includes a combination of uppercase and lowercase letters, numbers, and special symbols. Avoid using easily guessable information such as dictionary words, personal names, birthdates, or common sequences. Regularly update your password, especially if you suspect any compromise.</li>
                      <li>**Enabling two-factor authentication (2FA) where available:** If NextHomeLabs offers two-factor authentication, it is highly recommended that you enable this feature for your account. 2FA adds an extra layer of security by requiring a second verification step, typically a code sent to your mobile device or email, in addition to your password, whenever you log in from a new or unrecognized device. This significantly reduces the risk of unauthorized access, even if your password is compromised.</li>
                      <li>**Monitoring account activity:** Regularly review your account activity for any signs of unauthorized access or suspicious behavior. Be vigilant for login attempts from unfamiliar locations, unexpected changes to your account settings, or any activity that you do not recognize. If you notice anything unusual, take immediate action to change your password and notify our support team.</li>
                    </ul>
                    In the event you suspect any unauthorized access to your account, it is imperative that you notify us immediately. Promptly reporting any security concerns allows us to take timely action to investigate the issue, secure your account, and mitigate potential damages. Your vigilance and proactive security practices are essential in maintaining a safe and secure environment for your account and for the overall integrity of our platform.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">9.2 Disclaimer of Liability for Breaches</h3>
                  <p className="!mb-0">
                    While NextHomeLabs employs advanced and comprehensive security measures to protect user data and maintain the integrity of our platform, it is essential to understand the limitations of even the most sophisticated security systems. Despite our best efforts and continuous investment in security technologies and protocols, we cannot provide an absolute guarantee against all potential security breaches. The landscape of cyber threats is constantly evolving, and no online platform can be entirely immune to sophisticated cyberattacks, unauthorized access attempts, or other forms of security breaches. Therefore, while we are committed to taking all reasonable and industry-standard precautions to protect your data, NextHomeLabs explicitly disclaims any liability for unauthorized access to your account or data that is caused by your failure to adequately secure your login credentials, or due to factors beyond our direct control, such as highly sophisticated cyberattacks that bypass our security measures despite our diligent efforts. In such unforeseen circumstances, while we will take all necessary steps to mitigate the impact and assist affected users, ultimate liability for breaches that are beyond our reasonable control cannot be assumed by NextHomeLabs. By using our Services, you acknowledge and accept this inherent limitation and agree to take personal responsibility for securing your account as outlined in these Terms.
                  </p>
                </div>
              </div>

              <div id="payment" className="scroll-mt-24">
                <h2>10. Payment and Subscriptions</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">10.1 Terms for Paid Services</h3>
                  <p>Certain advanced features, premium functionalities, or enhanced levels of access to our Services may require payment of fees. These paid services are offered to provide users with additional capabilities and value. When you choose to purchase and utilize these paid services, you enter into a financial agreement with NextHomeLabs and agree to the following terms:</p>
                  <ul className="!mb-0">
                    <li>**Provide accurate billing information:** To process payments for paid Services, you are required to provide accurate, complete, and current billing information. This includes your full legal name, billing address, credit card details or other payment method information, and any other details necessary for payment processing. It is your responsibility to ensure that this billing information is kept up-to-date and accurate throughout your subscription period. Inaccurate or outdated billing information may lead to service disruptions or termination.</li>
                    <li>**Authorize us to charge your payment method for applicable fees:** By subscribing to a paid Service, you explicitly authorize NextHomeLabs to charge your chosen payment method for all applicable fees associated with the Service. This includes the initial subscription fee, any recurring subscription fees for renewals, and any other charges that you may incur in connection with your use of the paid Services, such as usage-based fees or overage charges, if applicable. You agree to ensure that your designated payment method is valid and has sufficient funds or credit available to cover these charges. You also agree to promptly update your payment information if there are any changes, such as expiration date or account details, to ensure uninterrupted service.</li>
                  </ul>
                  Details regarding specific fees, billing cycles, payment methods, and any other payment-related terms will be clearly communicated at the point of purchase and within your account settings. It is important to review these details carefully before subscribing to any paid Services.
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">10.2 Refunds and Billing</h3>
                  <p className="!mb-0">
                    NextHomeLabs aims to maintain fairness and transparency in our billing and refund processes. However, our general policy is that subscription fees for paid Services are non-refundable once they have been paid. This policy is in place due to the nature of digital services, where access is typically granted immediately upon payment, and resources are allocated accordingly. Nevertheless, we understand that exceptional circumstances may arise, and therefore, refund requests are evaluated and handled on a case-by-case basis. If you believe you have a legitimate reason for requesting a refund, you may submit a detailed request to our customer support team. Each request will be carefully reviewed, taking into consideration the specific circumstances, the nature of the issue, and our service usage logs. Decisions regarding refunds are made at the sole discretion of NextHomeLabs, and while we strive to be fair and reasonable, refunds are not guaranteed. It is important to note that this refund policy is subject to applicable laws and regulations, which may provide consumers with certain rights to refunds in specific situations. In such cases, NextHomeLabs will comply with all mandatory legal requirements regarding refunds.
                  </p>
                </div>

                <div className="border-l-4 border-[#00E6E6] pl-6 my-8">
                  <h3 className="!mt-0">10.3 Automatic Renewals</h3>
                  <p className="!mb-0">
                    To ensure uninterrupted access to our subscription-based Services, many of our subscriptions are set to automatically renew at the end of each billing cycle. This automatic renewal feature is designed for your convenience, ensuring continuous service without manual intervention each period. Unless you actively cancel your subscription prior to the renewal date, your subscription will automatically renew for the same period, and your chosen payment method will be charged the applicable subscription fee for the next billing cycle. You have full control over your subscriptions and can manage your subscription settings at any time through your account dashboard. Within your account settings, you can typically view your current subscriptions, manage payment methods, and, most importantly, cancel the automatic renewal of your subscription if you choose not to continue with the service for the subsequent period. It is your responsibility to manage your subscription settings and ensure that you cancel automatic renewal in advance if you do not wish to be charged for the next billing cycle. Please note that cancellations should be initiated before the renewal date to avoid being charged for the upcoming period.
                  </p>
                </div>
              </div>

              <div id="third-party" className="scroll-mt-24">
                <h2>11. Third-Party Links and Services</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">11.1 Disclaimer for Third-Party Integrations</h3>
                  <p className="!mb-0">
                    Our Services, provided by NextHomeLabs and CentGPT, may, from time to time, include links to or integrations with third-party websites, applications, services, or resources that are not owned or controlled by NextHomeLabs. These third-party links and integrations are provided solely for your convenience and may offer additional functionalities, information, or services that could be beneficial to you. However, it is crucial to understand that NextHomeLabs does not have control over, and assumes no responsibility for, the content, privacy policies, functionality, practices, or reliability of these third-party entities. When you choose to access or interact with these third-party links or services, you are doing so entirely at your own risk. We strongly recommend that you exercise caution and carefully review the terms of use and privacy policies of any third-party websites or services that you visit or interact with through our platform. NextHomeLabs explicitly disclaims any liability for any damages, losses, or issues that may arise from your use of or reliance on any third-party content, goods, or services accessed through links or integrations provided within our Services. Your interactions with third parties are solely between you and the respective third party, and NextHomeLabs is not a party to such interactions.
                  </p>
                </div>
              </div>

              <div id="disclaimer" className="scroll-mt-24">
                <h2>12. Disclaimer of Warranties</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">12.1 No Guarantees</h3>
                  <p className="!mb-0">
                    NextHomeLabs provides its Services, including CentGPT, on an "as is" and "as available" basis. This means that we offer our Services in their current state, and as they are currently accessible, without any warranties or guarantees of any kind, whether express or implied. To the fullest extent permitted by applicable law, NextHomeLabs explicitly disclaims all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising from course of dealing or usage of trade. We do not warrant or guarantee that our Services will be uninterrupted, error-free, secure, or that they will meet your specific requirements or expectations. We make no representations or warranties regarding the accuracy, reliability, completeness, or timeliness of any content, information, or results obtained through the use of our Services. Your use of our Services is entirely at your own discretion and risk. We provide the platform and tools, but we do not make any promises about specific outcomes or performance levels. We encourage you to evaluate the suitability of our Services for your needs and to use them with the understanding that they are provided without warranties of any kind.
                  </p>
                </div>
              </div>

              <div id="liability" className="scroll-mt-24">
                <h2>13. Limitation of Liability</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">13.1 Cap on Legal Responsibility</h3>
                  <p className="!mb-0">
                    To the maximum extent permitted by applicable law, NextHomeLabs seeks to limit its legal responsibility in connection with your use of our Services. In no event shall NextHomeLabs, its affiliates, directors, employees, agents, suppliers, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use our Services; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from our Services; (d) any bugs, viruses, Trojan horses, or the like that may be transmitted to or through our Services by any third party; (e) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the services; and/or (f) user content or the defamatory, offensive, or illegal conduct of any third party. This limitation of liability applies regardless of the legal theory under which such liability is asserted, whether based on contract, tort (including negligence), strict liability, or any other legal basis, even if NextHomeLabs has been advised of the possibility of such damages. In jurisdictions that do not allow the exclusion or limitation of incidental or consequential damages, our liability shall be limited to the maximum extent permitted by law. In no event shall NextHomeLabs's total liability to you for all damages exceed the amount you have paid to NextHomeLabs in the twelve (12) months preceding the event giving rise to the liability, or one hundred US dollars (USD $100), if no payments have been made, as applicable.
                  </p>
                </div>
              </div>

              <div id="indemnification" className="scroll-mt-24">
                <h2>14. Indemnification</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">14.1 User Responsibility for Legal Claims</h3>
                  <p className="!mb-0">
                    You agree to indemnify, defend, and hold harmless NextHomeLabs and its affiliates, officers, directors, employees, consultants, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, fees (including reasonable attorneys' fees and court costs) arising from or relating to your misuse of our Services or any violation of these Terms of Use by you. This indemnification obligation specifically includes, but is not limited to, claims arising from your breach of any term or condition of these Terms, your violation of any applicable law or regulation, your infringement of any intellectual property or other rights of any person or entity, or any content you submit, post, transmit, or otherwise make available through our Services. You are responsible for your conduct while using our Services and agree to ensure that your use is in compliance with these Terms and all applicable laws. NextHomeLabs reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with NextHomeLabs in asserting any available defenses. This indemnification provision ensures that you will be responsible for any legal repercussions that NextHomeLabs may face as a direct or indirect result of your actions that are in breach of these Terms or are otherwise unlawful or harmful.
                  </p>
                </div>
              </div>

              <div id="termination" className="scroll-mt-24">
                <h2>15. Termination</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">15.1 Grounds for Termination</h3>
                  <p className="!mb-0">
                    NextHomeLabs reserves the right, under certain circumstances, to suspend or terminate your access to our Services, or to terminate your account, at our sole discretion, and without prior notice or liability to you. While we strive to provide consistent and reliable service, termination may become necessary in situations where users violate these Terms of Use. Grounds for termination may include, but are not limited to: breach of these Terms of Use, engaging in prohibited activities as outlined in these Terms, violation of applicable laws or regulations, infringement of intellectual property rights, engaging in fraudulent, abusive, or unethical behavior, providing false or misleading information, or any other conduct that NextHomeLabs, in its reasonable judgment, deems harmful to our Services, other users, or our business interests. Upon termination, your right to use our Services will immediately cease, and we may delete or deactivate your account and any related information or files. Termination may result in the loss of access to all or part of our Services and any content associated with your account. While we endeavor to act fairly and reasonably, the decision to terminate an account is at our discretion, and we are not obligated to provide detailed reasons for termination in every instance, although we may choose to do so.
                  </p>
                </div>
              </div>

              <div id="dispute" className="scroll-mt-24">
                <h2>16. Dispute Resolution</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">16.1 Arbitration Clause</h3>
                  <p className="!mb-0">
                    To ensure efficient and cost-effective dispute resolution, and to expedite the resolution process for any disagreements that may arise between you and NextHomeLabs, you agree that any disputes, claims, or controversies arising out of or relating to these Terms of Use, or the use of our Services, will be resolved through binding arbitration, rather than in court. By agreeing to arbitration, you are waiving your right to have disputes resolved in a court of law by a judge or jury. Arbitration will be conducted in accordance with the rules of the [Specify the Arbitration Association, e.g., American Arbitration Association] then in effect, and the decision of the arbitrator(s) will be final and binding on both parties, and may be entered as a judgment in any court of competent jurisdiction. The arbitration proceedings will be conducted in [Specify Location, e.g., Kampala, Uganda] unless otherwise mutually agreed upon by the parties. Each party will be responsible for its own attorneys' fees and costs associated with the arbitration, unless the arbitrator determines that the claim was frivolous or brought in bad faith, in which case the arbitrator may award reasonable attorneys' fees to the prevailing party. This arbitration clause is intended to be broadly interpreted and to encompass all disputes that may arise out of or relate to your relationship with NextHomeLabs and your use of our Services.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">16.2 Jurisdiction</h3>
                  <p className="!mb-0">
                    These Terms of Use, and your relationship with NextHomeLabs, are governed by and construed in accordance with the laws of Uganda, without regard to its conflict of law provisions. You agree that any legal actions, suits, or proceedings arising out of or relating to these Terms or the Services that are not subject to arbitration as per Section 16.1, shall be exclusively brought in the courts located in Kampala, Uganda, and you hereby consent to the personal jurisdiction of such courts for the purpose of litigating all such disputes. By agreeing to these Terms, you are submitting to the jurisdiction of the courts in Uganda for the resolution of any legal matters arising from your use of our Services or these Terms of Use. This choice of jurisdiction is intended to provide a clear and predictable legal framework for resolving any disputes and ensures consistency in the interpretation and application of these Terms.
                  </p>
                </div>
              </div>

              <div id="changes" className="scroll-mt-24">
                <h2>17. Changes to Terms</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">17.1 Updates to Terms</h3>
                  <p className="!mb-0">
                    NextHomeLabs reserves the right, at its sole discretion, to modify, revise, update, or change these Terms of Use at any time. As our Services evolve and legal and regulatory environments change, it may become necessary to update these Terms to reflect these developments accurately. When we make changes to these Terms, we will take reasonable steps to notify you of such updates. This may include posting the updated Terms on our website, sending an email notification to registered users, or providing notice through our Services platform. The date of the latest revision will be indicated at the top of these Terms. Changes to these Terms will become effective immediately upon posting on our website, unless otherwise specified in the updated Terms. By continuing to access or use our Services after the updated Terms have been posted, you are deemed to have accepted and agreed to be bound by the revised Terms. It is your responsibility to periodically review these Terms to stay informed of any updates or changes. If you do not agree with the modified Terms, you must discontinue your use of our Services.
                  </p>
                </div>
              </div>

              <div id="contact" className="scroll-mt-24">
                <h2>18. Contact Information</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <div className="space-y-4">
                    <p>If you have any questions, concerns, inquiries, or feedback regarding these Terms of Use, our Services, or any other matter related to NextHomeLabs or CentGPT, we encourage you to reach out to us. We are committed to providing clear communication and addressing your concerns promptly. Please use the following contact information to get in touch with us:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        Email: <a href="mailto:info@nexthomelabs.com" className="hover:text-white transition-colors">info@nexthomelabs.com</a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        Address: Kampala, Uganda
                      </div>
                    </div>
                  </div>
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
                <a href="#introduction" className="block text-sm text-gray-400 hover:text-white transition-colors">1. Introduction</a>
                <a href="#acceptance" className="block text-sm text-gray-400 hover:text-white transition-colors">2. Acceptance of Terms</a>
                <a href="#eligibility" className="block text-sm text-gray-400 hover:text-white transition-colors">3. Eligibility</a>
                <a href="#scope" className="block text-sm text-gray-400 hover:text-white transition-colors">4. Scope of Services</a>
                <a href="#responsibilities" className="block text-sm text-gray-400 hover:text-white transition-colors">5. User Responsibilities</a>
                <a href="#intellectual-property" className="block text-sm text-gray-400 hover:text-white transition-colors">6. Intellectual Property</a>
                <a href="#usage" className="block text-sm text-gray-400 hover:text-white transition-colors">7. Usage Restrictions</a>
                <a href="#privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">8. Privacy and Data Collection</a>
                <a href="#security" className="block text-sm text-gray-400 hover:text-white transition-colors">9. Security</a>
                <a href="#payment" className="block text-sm text-gray-400 hover:text-white transition-colors">10. Payment and Subscriptions</a>
                <a href="#third-party" className="block text-sm text-gray-400 hover:text-white transition-colors">11. Third-Party Links</a>
                <a href="#disclaimer" className="block text-sm text-gray-400 hover:text-white transition-colors">12. Disclaimer of Warranties</a>
                <a href="#liability" className="block text-sm text-gray-400 hover:text-white transition-colors">13. Limitation of Liability</a>
                <a href="#indemnification" className="block text-sm text-gray-400 hover:text-white transition-colors">14. Indemnification</a>
                <a href="#termination" className="block text-sm text-gray-400 hover:text-white transition-colors">15. Termination</a>
                <a href="#dispute" className="block text-sm text-gray-400 hover:text-white transition-colors">16. Dispute Resolution</a>
                <a href="#changes" className="block text-sm text-gray-400 hover:text-white transition-colors">17. Changes to Terms</a>
                <a href="#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">18. Contact Information</a>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
