"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ResponsibleAIPage() {
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
          <span className="text-white">Responsible AI</span>
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

              <h1 className="text-4xl md:text-5xl font-bold">Responsible AI Policy</h1>

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
                  At NextHomeLabs, we are committed to developing and deploying Artificial Intelligence (AI) technologies, including CentGPT, in a manner that is ethical, transparent, and beneficial to society. This Responsible AI Policy outlines our principles and practices to ensure our AI solutions align with human values and contribute positively to communities.
                </p>
              </div>

              <div id="purpose" className="scroll-mt-24">
                <h2>1. Purpose of the Policy</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <p className="!mb-0">
                    This policy establishes the framework for responsible AI development and deployment at NextHomeLabs. It serves as a guide for our teams, partners, and users to ensure that AI technologies are designed and used ethically and responsibly.
                  </p>
                </div>
              </div>

              <div id="principles" className="scroll-mt-24">
                <h2>2. Core Principles of Responsible AI</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">2.1 Transparency</h3>
                  <p className="!mb-4">
                    Transparency is a cornerstone of building trust in AI systems. At NextHomeLabs, we believe that users and stakeholders should have a clear understanding of how our AI operates, the data it utilizes, and the processes behind its decision-making. This commitment to openness is not just about disclosing information; it's about fostering a relationship of trust and accountability with those who interact with our AI technologies.
                  </p>
                  <p className="!mb-4">
                    To achieve meaningful transparency, we are dedicated to providing clear and accessible documentation detailing the operations of our AI systems. This includes explaining the functionalities, limitations, and intended use cases of CentGPT and other AI tools we develop. Furthermore, understanding the origins and nature of the data used to train our AI models is crucial. We are committed to providing insights into our data sources and training methodologies, explaining how data is collected, processed, and utilized to shape the AI's capabilities.  This includes being transparent about the types of data used, the processes for anonymization and data protection, and the potential biases that might be inherent in the data.
                  </p>
                  <p className="!mb-0">
                    In addition to ongoing documentation, we are committed to issuing regular transparency reports. These reports will serve as periodic updates on our Responsible AI practices, providing insights into our progress, challenges, and ongoing efforts to enhance the transparency of our AI systems. These reports may include metrics on data usage, model performance, ethical considerations addressed, and steps taken to improve transparency over time. By consistently sharing this information, we aim to maintain an open dialogue and demonstrate our ongoing commitment to transparent AI development and deployment.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">2.2 Fairness</h3>
                  <p className="!mb-4">
                    Fairness in AI is not simply about treating everyone the same; it is about ensuring equitable outcomes and opportunities for all individuals and groups impacted by our AI systems.  We recognize that AI systems can inadvertently perpetuate or even amplify existing societal biases if not carefully designed and monitored.  Therefore, fairness is a guiding principle in our development process, aimed at mitigating bias and promoting inclusivity.
                  </p>
                  <p className="!mb-4">
                    To proactively address potential biases, we are committed to conducting regular bias audits of our AI algorithms and systems. These audits are designed to identify and assess any discriminatory outcomes or unfair impacts that our AI might produce across different demographic groups.  This involves using a variety of techniques to evaluate model performance and output for various populations, looking for disparities and unintended consequences. Where biases are identified, we are dedicated to taking corrective actions to mitigate them, which may involve refining training data, adjusting algorithms, or implementing fairness-aware techniques.
                  </p>
                  <p className="!mb-4">
                    A crucial step in achieving fairness is the use of diverse and representative training datasets.  We understand that the data used to train AI models significantly influences their behavior and outcomes.  Therefore, we strive to utilize datasets that are as diverse and inclusive as possible, reflecting the broad spectrum of users and communities who may interact with our AI.  This includes actively seeking out and incorporating data from underrepresented groups to ensure that our AI is trained to understand and serve a wide range of perspectives and needs.
                  </p>
                  <p className="!mb-0">
                    Ultimately, our commitment to fairness extends to ensuring equal access to the benefits of AI.  We believe that the advantages offered by AI technologies should be available to all, without discrimination or disadvantage.  This means designing and deploying our AI systems in ways that promote inclusivity, accessibility, and equitable opportunities for all users. We are committed to continuously evaluating and improving our systems to ensure they uphold the principle of fairness and contribute to a more just and equitable society.
                  </p>
                </div>
              </div>

              <div id="design" className="scroll-mt-24">
                <h2>3. Ethical AI Design and Development</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">3.1 Human-Centric Approach</h3>
                  <p className="!mb-4">
                    Our design and development philosophy for AI systems at NextHomeLabs is deeply rooted in a human-centric approach.  We believe that AI should serve humanity, augmenting human capabilities and empowering individuals rather than replacing or diminishing human roles. This perspective guides every stage of our AI development process, from initial concept to deployment and ongoing maintenance.
                  </p>
                  <p className="!mb-4">
                    A core tenet of our human-centric approach is to design AI systems that augment, rather than substitute, human capabilities.  We see AI as a powerful tool to enhance human skills, creativity, and productivity.  Our focus is on creating AI that can work collaboratively with humans, taking on tasks that are repetitive, complex, or data-intensive, thereby freeing up human experts to focus on higher-level strategic thinking, creative problem-solving, and tasks requiring empathy and nuanced judgment.
                  </p>
                  <p className="!mb-4">
                    Respect for user autonomy is paramount.  We are committed to designing AI systems that respect the agency and decision-making power of individuals.  This means ensuring that users have control over how they interact with AI, that they are informed about AI-driven processes, and that they retain the ability to make final decisions, especially in critical contexts.  We aim to avoid creating systems that are overly prescriptive or that undermine human judgment.
                  </p>
                  <p className="!mb-4">
                    Incorporating human oversight is essential for responsible AI. While we strive for sophisticated and autonomous AI systems, we also recognize the importance of human-in-the-loop mechanisms, particularly in sensitive or high-stakes applications.  This may involve human review of AI outputs, opportunities for human intervention in AI processes, and clear lines of accountability for AI-driven decisions.  Human oversight provides a crucial layer of ethical and practical control, helping to ensure that AI systems operate safely and in accordance with human values.
                  </p>
                  <p className="!mb-0">
                    Finally, our AI systems are designed to support and enhance human decision-making.  We aim to create AI tools that provide valuable insights, analyze complex information, and offer informed recommendations to assist humans in making better decisions.  However, we emphasize that AI should be seen as a decision support system, not a decision-making authority. The ultimate responsibility for decisions, particularly those with significant human impact, should remain with humans, informed and empowered by AI, but not dictated by it.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">3.2 Avoidance of Harm</h3>
                  <p className="!mb-4">
                    A fundamental ethical imperative for any AI developer is the avoidance of harm. At NextHomeLabs, we are deeply committed to ensuring that our AI systems are designed and deployed in a manner that minimizes the potential for harm, both intentional and unintentional. This commitment extends to preventing malicious use of our technologies and proactively mitigating potential risks.
                  </p>
                  <p className="!mb-4">
                    Preventing malicious use is a critical aspect of harm avoidance.  We recognize that powerful AI technologies could be misused for harmful purposes.  Therefore, we are dedicated to building safeguards into our systems to deter and prevent malicious applications.  This includes designing AI with security in mind, implementing robust access controls, and actively monitoring for and responding to any signs of misuse.  We also believe in responsible dissemination of our AI technologies, carefully considering potential dual-use concerns and working to promote beneficial applications while mitigating risks.
                  </p>
                  <p className="!mb-4">
                    Regular risk assessments are an integral part of our development process.  Before deploying any AI system, we conduct thorough risk assessments to identify potential negative impacts, ethical dilemmas, and unintended consequences.  These assessments consider a wide range of risks, including but not limited to privacy violations, algorithmic bias, security vulnerabilities, and potential for misuse.  The findings of these risk assessments inform our design choices and guide the implementation of appropriate safeguards.
                  </p>
                  <p className="!mb-4">
                    Implementation of safeguards is a proactive measure to mitigate identified risks.  Based on our risk assessments, we implement a range of safeguards into our AI systems.  These safeguards may include technical controls such as data encryption, privacy-preserving algorithms, and bias mitigation techniques.  They also encompass procedural safeguards such as ethical review processes, user guidelines, and incident response protocols.  The specific safeguards implemented are tailored to the nature of the AI system and the context of its deployment.
                  </p>
                  <p className="!mb-0">
                    Continuous monitoring is essential for ensuring ongoing harm avoidance.  The AI landscape is constantly evolving, and new risks and challenges may emerge over time.  Therefore, we are committed to continuously monitoring the performance and impact of our deployed AI systems.  This includes tracking system behavior, user feedback, and relevant societal developments.  Continuous monitoring allows us to identify and address any emerging issues promptly, ensuring that our AI systems continue to operate responsibly and ethically throughout their lifecycle.
                  </p>
                </div>
              </div>

              <div id="governance" className="scroll-mt-24">
                <h2>4. Data Governance</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">4.1 Data Integrity</h3>
                  <p className="!mb-4">
                    Data integrity is paramount for the reliable and ethical operation of AI systems.  At NextHomeLabs, we recognize that the quality, accuracy, and security of data are fundamental to ensuring that our AI systems function as intended and produce trustworthy outcomes.  Our commitment to data integrity encompasses practices that ensure data is accurate, up-to-date, compliant with regulations, and handled securely throughout its lifecycle.
                  </p>
                  <p className="!mb-4">
                    Maintaining accurate and up-to-date data is a continuous effort.  AI systems are only as good as the data they are trained on and operate with.  Therefore, we prioritize data quality and accuracy, implementing processes to validate data sources, cleanse data of errors and inconsistencies, and ensure that data is regularly updated to reflect the current reality.  This includes establishing data quality metrics, monitoring data drift, and implementing mechanisms for data correction and enrichment.
                  </p>
                  <p className="!mb-4">
                    Regular data quality assessments are essential for proactively identifying and addressing data integrity issues.  We conduct periodic assessments of our data assets to evaluate their quality, completeness, and reliability.  These assessments may involve statistical analysis, manual reviews, and automated data quality checks.  The findings of these assessments inform our data management practices and guide our efforts to improve data integrity over time.
                  </p>
                  <p className="!mb-4">
                    Compliance with data regulations is a non-negotiable aspect of data governance.  We are committed to adhering to all applicable data privacy and protection regulations, such as GDPR, CCPA, and other relevant legal frameworks.  This includes implementing policies and procedures to ensure lawful data collection, processing, storage, and usage.  We stay abreast of evolving regulatory landscapes and adapt our data governance practices to maintain full compliance.
                  </p>
                  <p className="!mb-0">
                    Secure data handling is crucial for protecting data integrity and user privacy.  We employ robust security measures to safeguard data from unauthorized access, use, disclosure, alteration, or destruction.  This includes implementing physical, technical, and administrative safeguards to protect data at rest and in transit.  We adhere to industry best practices for data security, including encryption, access controls, security monitoring, and incident response protocols.  Our commitment to secure data handling is an ongoing effort to maintain the confidentiality, integrity, and availability of data entrusted to us.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">4.2 Consent and Control</h3>
                  <p className="!mb-4">
                    Respect for user privacy and data autonomy is a core ethical principle at NextHomeLabs.  Our approach to data governance emphasizes user consent and control over personal data.  We believe individuals should have clear choices and agency regarding how their data is collected, used, and managed within our AI systems.  This commitment is reflected in our practices regarding user consent, data management options, privacy controls, and transparency in data usage.
                  </p>
                  <p className="!mb-4">
                    Obtaining explicit user consent is a fundamental requirement for data collection and processing involving personal information.  We are committed to ensuring that users are fully informed about our data practices and that they provide clear, unambiguous consent before their data is collected or used for AI-related purposes.  This includes providing transparent privacy notices, explaining the purposes of data collection, and offering users the option to opt-in or opt-out of data processing.  We prioritize user agency and ensure that consent is freely given, specific, informed, and unambiguous.
                  </p>
                  <p className="!mb-4">
                    Providing users with data management options is crucial for empowering individuals to control their personal information.  We strive to offer users meaningful choices regarding their data, including the ability to access, rectify, erase, and port their data, where applicable and legally permissible.  We are committed to implementing user-friendly interfaces and mechanisms that enable users to easily manage their data preferences and exercise their rights.
                  </p>
                  <p className="!mb-4">
                    Privacy controls are integrated into our AI systems to give users granular control over their privacy settings.  This includes offering users the ability to customize their privacy preferences, such as controlling the types of data collected, the purposes for which it is used, and with whom it is shared.  We design privacy controls to be intuitive and accessible, ensuring that users can easily understand and manage their privacy settings.
                  </p>
                  <p className="!mb-0">
                    Transparency in data usage is essential for building trust and accountability.  We are committed to being transparent with users about how their data is used within our AI systems.  This includes providing clear explanations of data processing activities, the purposes for data usage, and the potential impacts on users.  We strive to communicate our data practices in a clear and accessible manner, fostering user understanding and confidence in our data governance approach.
                  </p>
                </div>
              </div>

              <div id="empowerment" className="scroll-mt-24">
                <h2>5. User Empowerment and Education</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">5.1 User Awareness</h3>
                  <p className="!mb-4">
                    Empowering users to effectively interact with and understand AI technologies is a key objective of our Responsible AI policy.  At NextHomeLabs, we believe that user awareness and education are crucial for fostering responsible AI adoption and utilization.  We are committed to providing users with the resources and information they need to understand our AI systems, their capabilities, and their appropriate uses.  This commitment is realized through detailed user guides, interactive tutorials, educational resources, and comprehensive system capabilities documentation.
                  </p>
                  <p className="!mb-4">
                    Detailed user guides are a fundamental component of our user awareness strategy.  We develop comprehensive user guides for our AI systems, including CentGPT, that provide step-by-step instructions, explanations of features and functionalities, and best practices for effective usage.  These guides are designed to be accessible to users with varying levels of technical expertise, ensuring that everyone can understand how to interact with our AI tools effectively and responsibly.
                  </p>
                  <p className="!mb-4">
                    Interactive tutorials offer a hands-on approach to learning about our AI systems.  We create interactive tutorials that guide users through practical exercises and real-world scenarios, allowing them to learn by doing.  These tutorials are designed to be engaging and informative, helping users to quickly grasp the core concepts and functionalities of our AI technologies.  Interactive learning experiences enhance user understanding and build confidence in using our AI tools.
                  </p>
                  <p className="!mb-4">
                    Educational resources extend beyond basic user guides and tutorials.  We develop a range of educational resources, such as articles, FAQs, and webinars, that delve deeper into the ethical, technical, and societal aspects of AI.  These resources are designed to promote broader AI literacy, helping users to understand the potential benefits and risks of AI, as well as the responsible practices that underpin our development efforts.  By providing access to comprehensive educational materials, we aim to foster a more informed and responsible AI user community.
                  </p>
                  <p className="!mb-0">
                    System capabilities documentation provides a comprehensive overview of the technical specifications, functionalities, and limitations of our AI systems.  This documentation is designed for users who require a deeper understanding of the underlying technology and its capabilities.  It includes details about model architecture, training data, performance metrics, and known limitations.  By providing transparent and detailed system documentation, we empower users to make informed decisions about how to utilize our AI technologies effectively and responsibly.
                  </p>
                </div>
              </div>

              <div id="prohibited" className="scroll-mt-24">
                <h2>6. Prohibited Uses of AI</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <p className="!mb-4">
                    To ensure the responsible and ethical application of our AI technologies, NextHomeLabs strictly prohibits certain uses of our AI systems.  We are committed to preventing the misuse of our AI for purposes that are illegal, harmful, or unethical.  This policy clearly outlines the prohibited uses of our AI, which include engagement in illegal activities, generation of harmful content, participation in human rights violations, and support of oppressive practices.
                  </p>
                  <p className="!mb-4">
                    Engagement in illegal activities through our AI systems is strictly forbidden.  This includes using AI for any purpose that violates local, national, or international laws and regulations.  Examples of prohibited illegal activities include, but are not limited to, fraud, illegal surveillance, creation of counterfeit goods, and any form of cybercrime.  We are committed to designing and monitoring our AI to prevent and deter its use in any unlawful manner.
                  </p>
                  <p className="!mb-4">
                    The generation of harmful content using our AI is expressly prohibited.  Harmful content encompasses a wide range of materials that can cause harm, distress, or offense to individuals or groups.  This includes, but is not limited to, hate speech, discriminatory content, incitement to violence, defamation, harassment, and the creation of malicious misinformation or disinformation.  We implement content moderation mechanisms and usage guidelines to prevent the creation and dissemination of harmful content through our AI systems.
                  </p>
                  <p className="!mb-4">
                    Participation in human rights violations using our AI is unequivocally prohibited.  We are committed to upholding fundamental human rights and will not tolerate the use of our AI to infringe upon or violate these rights.  This includes prohibiting the use of AI for purposes such as discriminatory profiling, mass surveillance that infringes on privacy, suppression of freedom of expression, or any other application that undermines human dignity and rights.  Our AI development and deployment are guided by principles of human rights and ethical considerations.
                  </p>
                  <p className="!mb-0">
                    Supporting oppressive practices through our AI is strictly forbidden.  Oppressive practices refer to systems or actions that unjustly control, dominate, or suppress individuals or groups.  We will not allow our AI to be used to enable or facilitate oppressive regimes, discriminatory practices, or any form of unjust social control.  This includes prohibiting the use of AI for purposes such as social scoring systems that unfairly penalize individuals, automated decision-making that perpetuates systemic inequalities, or any application that contributes to unjust power dynamics.  Our commitment is to ensure that our AI is used to empower and uplift, not to oppress or marginalize.
                  </p>
                </div>
              </div>

              <div id="monitoring" className="scroll-mt-24">
                <h2>7. Monitoring and Evaluation</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">7.1 Performance Monitoring</h3>
                  <p className="!mb-4">
                    Continuous monitoring and rigorous evaluation are essential for ensuring the ongoing responsible and ethical operation of our AI systems. At NextHomeLabs, we are committed to actively monitoring the performance of our AI, conducting regular ethical compliance checks, performing impact assessments, and engaging in continuous improvement efforts. This comprehensive approach to monitoring and evaluation is designed to ensure that our AI systems remain aligned with our Responsible AI principles and deliver intended benefits while mitigating potential risks.
                  </p>
                  <p className="!mb-4">
                    Regular system audits are a cornerstone of our performance monitoring strategy. We conduct periodic audits of our AI systems to assess their technical performance, identify potential vulnerabilities, and ensure they are functioning as intended. These audits may involve technical reviews of code, infrastructure, and algorithms, as well as performance testing and benchmarking. System audits help us to identify and address any technical issues that could impact the reliability, security, or effectiveness of our AI systems.
                  </p>
                  <p className="!mb-4">
                    Ethical compliance checks are crucial for ensuring that our AI systems adhere to our Responsible AI policy and ethical guidelines. We conduct regular checks to evaluate whether our AI systems are operating in accordance with our ethical principles, such as fairness, transparency, and accountability. These checks may involve reviewing system logs, analyzing model outputs for bias, and assessing compliance with data privacy regulations. Ethical compliance checks help us to proactively identify and address any ethical concerns that may arise in the operation of our AI systems.
                  </p>
                  <p className="!mb-4">
                    Impact assessments are performed to evaluate the broader societal and human impacts of our AI systems. We conduct assessments to understand the effects of our AI technologies on individuals, communities, and society as a whole. These assessments may consider a wide range of impacts, including economic, social, environmental, and ethical consequences. Impact assessments help us to gain a holistic understanding of the benefits and risks associated with our AI systems and guide our efforts to maximize positive impacts and mitigate negative ones.
                  </p>
                  <p className="!mb-0">
                    Continuous improvement is an ongoing commitment that is integral to our monitoring and evaluation framework. We use the insights gained from system audits, ethical compliance checks, and impact assessments to drive continuous improvement in our AI systems and Responsible AI practices. This includes refining algorithms, enhancing safeguards, updating policies, and incorporating user feedback. Our commitment to continuous improvement ensures that our AI systems remain at the forefront of responsible and ethical AI development, adapting to evolving societal needs and ethical considerations.
                  </p>
                </div>
              </div>

              <div id="collaboration" className="scroll-mt-24">
                <h2>8. Collaboration and Community Engagement</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <p className="!mb-4">
                    At NextHomeLabs, we recognize that responsible AI development is not an isolated endeavor but rather a collaborative effort that requires engagement with diverse stakeholders and communities. We are actively committed to fostering collaboration with industry partners, academic institutions, civil society organizations, and research communities. This collaborative approach is essential for sharing knowledge, promoting best practices, and ensuring that our AI development aligns with broader societal values and needs.
                  </p>
                  <p className="!mb-4">
                    Collaboration with industry partners is crucial for sharing insights and advancing responsible AI practices across the industry. We actively seek partnerships with other companies and organizations in the AI ecosystem to exchange knowledge, share best practices, and work together to address common challenges in responsible AI development and deployment. Industry collaboration helps to accelerate the adoption of responsible AI principles and raise the overall ethical standards in the AI industry.
                  </p>
                  <p className="!mb-4">
                    Engagement with academic institutions is vital for staying at the forefront of AI research and ethical considerations. We actively collaborate with universities and research institutions to support academic research in responsible AI, participate in joint research projects, and leverage academic expertise to inform our AI development practices. Collaboration with academia ensures that our AI development is grounded in the latest scientific knowledge and ethical insights, fostering innovation and responsible progress.
                  </p>
                  <p className="!mb-4">
                    Partnerships with civil society organizations are essential for ensuring that our AI development is aligned with societal values and addresses real-world needs. We actively engage with non-profit organizations, advocacy groups, and community-based organizations to understand their perspectives, address their concerns, and ensure that our AI systems are developed and deployed in ways that benefit communities and promote social good. Collaboration with civil society organizations helps to ground our AI development in real-world needs and ethical considerations, ensuring that our technologies serve society responsibly.
                  </p>
                  <p className="!mb-0">
                    Engagement with research communities is critical for contributing to the broader advancement of responsible AI knowledge and practices. We actively participate in AI research communities, contribute to open-source projects, share our research findings, and engage in public discourse on responsible AI topics. By actively participating in research communities, we contribute to the collective knowledge base of responsible AI, fostering innovation, transparency, and ethical progress in the field.
                  </p>
                </div>
              </div>

              <div id="enforcement" className="scroll-mt-24">
                <h2>9. Enforcement and Accountability</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">9.1 Internal Accountability</h3>
                  <p className="!mb-4">
                    Ensuring internal accountability is crucial for embedding Responsible AI principles within the fabric of NextHomeLabs' operations.  We are committed to establishing clear lines of responsibility and mechanisms for enforcing our Responsible AI policy internally.  This includes providing regular ethics training to our employees, incorporating ethical considerations into performance evaluations, implementing robust compliance monitoring, and consistently enforcing our policy across all aspects of our AI development and deployment.
                  </p>
                  <p className="!mb-4">
                    Regular ethics training is provided to all employees involved in AI development and deployment.  We believe that ethical awareness and understanding are essential for responsible AI practices.  Our ethics training programs are designed to educate employees on our Responsible AI policy, ethical principles, potential ethical risks, and best practices for ethical decision-making in AI development.  Regular training ensures that all team members are equipped with the knowledge and awareness necessary to uphold our ethical commitments.
                  </p>
                  <p className="!mb-4">
                    Ethical considerations are integrated into employee performance evaluations.  We recognize that promoting responsible AI requires aligning individual incentives with ethical organizational goals.  Therefore, we incorporate ethical conduct and adherence to our Responsible AI policy as factors in employee performance evaluations.  This sends a clear message that ethical behavior is valued and rewarded within our organization, encouraging employees to prioritize responsible AI practices in their work.
                  </p>
                  <p className="!mb-4">
                    Compliance monitoring mechanisms are implemented to ensure adherence to our Responsible AI policy across all AI-related activities.  We establish processes for monitoring compliance with our ethical guidelines, including regular audits, reviews of AI projects, and mechanisms for reporting and addressing potential ethical violations.  Compliance monitoring helps to identify and correct any deviations from our Responsible AI policy, ensuring consistent ethical practices across the organization.
                  </p>
                  <p className="!mb-0">
                    Policy enforcement is consistently applied to ensure that our Responsible AI policy is not just a document but a lived reality within NextHomeLabs.  We are committed to consistently enforcing our policy, addressing any violations promptly and appropriately.  This includes establishing clear procedures for handling ethical concerns, investigating potential breaches of policy, and taking corrective actions when necessary.  Consistent policy enforcement reinforces our commitment to Responsible AI and creates a culture of ethical accountability within the organization.
                  </p>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">9.2 External Accountability</h3>
                  <p className="!mb-4">
                    Extending accountability beyond our internal operations to external stakeholders is crucial for building trust and demonstrating our commitment to Responsible AI to the wider world.  NextHomeLabs is dedicated to fostering external accountability through transparency reports, public audits, stakeholder engagement, and independent oversight mechanisms.  These measures are designed to provide external validation of our Responsible AI practices and ensure that we are held accountable to our ethical commitments.
                  </p>
                  <p className="!mb-4">
                    Transparency reports are regularly published to communicate our Responsible AI efforts and progress to the public.  These reports provide insights into our Responsible AI policy, practices, performance, and challenges.  They may include information on our ethical guidelines, bias mitigation efforts, data governance practices, and incident response protocols.  Transparency reports demonstrate our openness and willingness to be held accountable for our Responsible AI performance.
                  </p>
                  <p className="!mb-4">
                    Public audits are conducted periodically to provide independent external assessments of our Responsible AI practices.  We may engage independent third-party auditors to review our AI systems, processes, and policies to verify our compliance with our Responsible AI commitments and industry best practices.  Public audits provide an objective and credible evaluation of our Responsible AI performance, enhancing external trust and accountability.
                  </p>
                  <p className="!mb-4">
                    Stakeholder engagement is actively pursued to solicit feedback and incorporate diverse perspectives into our Responsible AI approach.  We engage with a wide range of stakeholders, including users, customers, civil society organizations, and experts in AI ethics, to gather feedback on our Responsible AI policy and practices.  Stakeholder engagement ensures that our Responsible AI approach is informed by diverse perspectives and responsive to the needs and concerns of the wider community, promoting external accountability and inclusivity.
                  </p>
                  <p className="!mb-0">
                    Independent oversight mechanisms may be established to provide additional layers of external accountability.  This could include establishing an external advisory board composed of experts in AI ethics, law, and civil society to provide guidance and oversight on our Responsible AI practices.  Independent oversight mechanisms enhance credibility and impartiality in our Responsible AI governance, further strengthening external accountability and trust.
                  </p>
                </div>
              </div>

              <div id="improvement" className="scroll-mt-24">
                <h2>10. Continuous Improvement</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">10.1 Policy Evolution</h3>
                  <p className="!mb-4">
                    Recognizing that the field of AI ethics and responsible AI is constantly evolving, NextHomeLabs is committed to continuous improvement and policy evolution. We understand that our Responsible AI policy must be a living document, adapting to new challenges, technological advancements, and societal expectations. This commitment to policy evolution is driven by regular policy reviews, stakeholder feedback, consideration of industry best practices, and proactive anticipation of emerging challenges.
                  </p>
                  <p className="!mb-4">
                    Regular policy reviews are conducted to ensure that our Responsible AI policy remains relevant, effective, and aligned with current best practices. We periodically review our policy document to assess its comprehensiveness, clarity, and effectiveness in guiding our AI development and deployment. Policy reviews involve internal and external stakeholders, ensuring that diverse perspectives are considered in the policy evolution process. Regular reviews enable us to identify areas for improvement and update our policy to address emerging ethical challenges.
                  </p>
                  <p className="!mb-4">
                    Stakeholder feedback is actively sought and incorporated into our policy evolution process. We value the input of our employees, users, customers, civil society organizations, and experts in AI ethics. We establish channels for stakeholders to provide feedback on our Responsible AI policy and practices, and we actively solicit their input during policy review cycles. Stakeholder feedback ensures that our policy evolution is informed by diverse perspectives and responsive to the needs and concerns of the wider community.
                  </p>
                  <p className="!mb-4">
                    Industry best practices are continuously monitored and integrated into our Responsible AI policy. We actively track developments in responsible AI within the industry, including emerging standards, guidelines, and best practices. We benchmark our policy and practices against industry leaders and strive to incorporate relevant best practices into our own approach. Adhering to industry best practices ensures that our Responsible AI policy is aligned with leading standards and reflects the collective wisdom of the AI community.
                  </p>
                  <p className="!mb-0">
                    Emerging challenges in AI ethics and responsible AI are proactively anticipated and addressed through policy evolution. We recognize that the AI landscape is constantly changing, and new ethical challenges and risks may emerge as AI technologies advance. We actively monitor emerging trends in AI, anticipate potential ethical dilemmas, and proactively update our policy to address these challenges. Proactive anticipation of emerging challenges ensures that our Responsible AI policy remains forward-looking and prepared to address the evolving ethical landscape of AI.
                  </p>
                </div>
              </div>

              <div id="compensation" className="scroll-mt-24">
                <h2>11. Fair Compensation</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">11.1 Contribution Recognition</h3>
                  <p className="!mb-4">
                    Recognizing the value of data and contributions from individuals and communities that contribute to the development and improvement of our AI systems, NextHomeLabs is committed to exploring models for fair compensation and contribution recognition.  We believe that those who contribute data or effort that enhances our AI should be appropriately acknowledged and, where feasible and ethical, fairly compensated. This commitment to contribution recognition encompasses considerations of fair data compensation, value acknowledgment, transparent rewards, and equitable sharing of benefits.
                  </p>
                  <p className="!mb-4">
                    Fair data compensation is a principle we are actively exploring, particularly in contexts where individuals directly contribute their personal data to train or improve our AI systems. We are investigating models for providing fair compensation to individuals for the use of their data, while carefully considering ethical implications, privacy concerns, and practical implementation challenges.  Fair data compensation aims to recognize the value of data contributions and ensure that individuals are not unfairly exploited in the data-driven AI economy.
                  </p>
                  <p className="!mb-4">
                    Value acknowledgment extends beyond monetary compensation to encompass broader forms of recognition for contributions to our AI systems.  We are committed to acknowledging the value of contributions from individuals and communities, even when direct monetary compensation may not be feasible or appropriate.  This may include public acknowledgment, attribution of contributions, opportunities for co-creation, or other forms of recognition that demonstrate our appreciation for the valuable input we receive.  Value acknowledgment promotes a culture of reciprocity and respect for contributors.
                  </p>
                  <p className="!mb-4">
                    Transparent rewards mechanisms are essential for ensuring fairness and trust in any compensation or recognition system we implement.  We are committed to developing transparent mechanisms for determining and distributing rewards or compensation for contributions to our AI systems.  This includes clearly communicating the criteria for compensation, the processes for allocation, and the methods for distribution.  Transparency in rewards mechanisms builds trust and ensures that contributors understand how their efforts are valued and recognized.
                  </p>
                  <p className="!mb-0">
                    Equitable sharing of benefits derived from AI is a broader aspiration that guides our approach to compensation and contribution recognition.  We believe that the benefits generated by AI should be shared equitably with those who contribute to its development and with society as a whole.  While direct compensation may not be feasible in all contexts, we are committed to exploring ways to ensure that the positive impacts of our AI are broadly distributed and that communities benefit from the advancements in AI technology.  Equitable sharing of benefits contributes to a more just and inclusive AI ecosystem.
                  </p>
                </div>
              </div>

              <div id="research" className="scroll-mt-24">
                <h2>12. Open Research</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">12.1 Research Sharing</h3>
                  <p className="!mb-4">
                    In the spirit of advancing knowledge and fostering collaboration within the AI community, NextHomeLabs is committed to open research practices. We believe that sharing our research findings, methodologies, and insights with the broader research community is essential for accelerating progress in responsible AI and promoting transparency and reproducibility in AI research.  This commitment to research sharing is manifested through public research access, collaborative studies, knowledge exchange initiatives, and community engagement in research.
                  </p>
                  <p className="!mb-4">
                    Public research access is a core component of our open research commitment.  We strive to make our AI research findings publicly accessible whenever possible, through publications in open-access journals, pre-print servers, and online repositories.  Public access to research accelerates the dissemination of knowledge, enables wider scrutiny and validation of research findings, and promotes transparency in AI research.
                  </p>
                  <p className="!mb-4">
                    Collaborative studies with academic institutions and other research organizations are actively pursued to advance the field of responsible AI. We believe that collaborative research fosters innovation, leverages diverse expertise, and accelerates the pace of discovery. We actively seek partnerships for joint research projects, data sharing initiatives, and collaborative investigations into key challenges in responsible AI. Collaborative studies enhance the quality, impact, and reach of our AI research.
                  </p>
                  <p className="!mb-4">
                    Knowledge exchange initiatives are undertaken to share our research insights and expertise with the wider AI community. We actively participate in conferences, workshops, and seminars to present our research findings, engage in discussions, and exchange knowledge with fellow researchers and practitioners.  Knowledge exchange facilitates the transfer of best practices, promotes cross-fertilization of ideas, and accelerates the collective learning of the AI community.
                  </p>
                  <p className="!mb-0">
                    Community engagement in research is fostered to ensure that our research is relevant, impactful, and aligned with societal needs. We actively engage with communities affected by AI technologies to understand their perspectives, incorporate their input into our research agenda, and ensure that our research addresses real-world problems.  Community engagement in research promotes inclusivity, relevance, and social responsibility in AI research, ensuring that research benefits society as a whole.
                  </p>
                </div>
              </div>

              <div id="environmental" className="scroll-mt-24">
                <h2>13. Environmental Responsibility</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">13.1 Environmental Impact</h3>
                  <p className="!mb-4">
                    Recognizing the growing environmental footprint of AI technologies, particularly in terms of energy consumption and carbon emissions, NextHomeLabs is committed to environmental responsibility in our AI development and deployment. We strive to minimize the environmental impact of our AI systems through practices focused on energy efficiency, carbon footprint reduction, sustainable practices, and green computing principles.
                  </p>
                  <p className="!mb-4">
                    Energy efficiency is a primary focus in our efforts to reduce the environmental impact of AI. We prioritize the development of energy-efficient AI algorithms, models, and infrastructure. This includes optimizing code for computational efficiency, utilizing energy-efficient hardware, and exploring techniques such as model pruning and quantization to reduce the energy consumption of our AI systems. Energy efficiency not only reduces environmental impact but also improves the cost-effectiveness and scalability of AI solutions.
                  </p>
                  <p className="!mb-4">
                    Carbon footprint reduction is a key objective in our environmental responsibility commitment. We strive to minimize the carbon emissions associated with our AI operations by optimizing our infrastructure, utilizing renewable energy sources where feasible, and offsetting unavoidable carbon emissions. We track and measure our carbon footprint to identify areas for improvement and implement strategies to reduce our environmental impact over time. Carbon footprint reduction contributes to broader climate change mitigation efforts and aligns with global sustainability goals.
                  </p>
                  <p className="!mb-4">
                    Sustainable practices are integrated into our AI development lifecycle to promote environmental responsibility throughout our operations. This includes adopting sustainable data center practices, minimizing waste generation, promoting responsible resource consumption, and considering environmental impact in procurement decisions. Sustainable practices ensure that our AI development is conducted in an environmentally conscious manner, minimizing negative impacts and promoting long-term sustainability.
                  </p>
                  <p className="!mb-0">
                    Green computing principles guide our approach to AI infrastructure and operations. We embrace green computing principles, such as virtualization, cloud computing, and edge computing, to optimize resource utilization, reduce energy consumption, and minimize environmental impact. Green computing promotes the efficient and responsible use of computing resources, contributing to both environmental sustainability and cost savings.
                  </p>
                </div>
              </div>

              <div id="accessibility" className="scroll-mt-24">
                <h2>14. Accessibility in AI Systems</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">14.1 Inclusive Design</h3>
                  <p className="!mb-4">
                    Ensuring that our AI systems are accessible and usable by individuals with diverse abilities and needs is a core principle of our Responsible AI policy. At NextHomeLabs, we are committed to inclusive design principles, striving to create AI technologies that are universally accessible, support assistive technologies, offer multilingual support, and provide adaptive interfaces. Accessibility in AI is essential for promoting equity, inclusion, and ensuring that the benefits of AI are available to everyone.
                  </p>
                  <p className="!mb-4">
                    Universal access is a guiding principle in our AI design process. We strive to design our AI systems to be usable by people with the widest possible range of abilities, including those with disabilities. This includes adhering to accessibility standards and guidelines, such as WCAG (Web Content Accessibility Guidelines), and incorporating accessibility considerations into every stage of the design and development process. Universal access ensures that our AI systems are inclusive and benefit all users, regardless of their abilities.
                  </p>
                  <p className="!mb-4">
                    Support for assistive technologies is a critical aspect of AI accessibility. We design our AI systems to be compatible with assistive technologies, such as screen readers, keyboard navigation, and voice recognition software. This includes providing alternative text for images, ensuring keyboard navigability, and supporting semantic markup. Support for assistive technologies enables individuals with disabilities to effectively interact with and benefit from our AI systems.
                  </p>
                  <p className="!mb-4">
                    Multilingual support is essential for making our AI systems accessible to a global user base. We are committed to providing multilingual support for our AI systems, enabling users to interact with AI in their preferred languages. This includes supporting multiple languages for user interfaces, documentation, and AI-generated content. Multilingual support expands the reach and inclusivity of our AI systems, making them accessible to a wider range of users across different linguistic backgrounds.
                  </p>
                  <p className="!mb-0">
                    Adaptive interfaces are designed to cater to the diverse needs and preferences of users. We explore adaptive interface designs that can be customized to meet individual user requirements, such as adjustable font sizes, color contrast options, and customizable layouts. Adaptive interfaces enhance user experience, improve usability for individuals with varying needs, and promote personalized and inclusive AI interactions.
                  </p>
                </div>
              </div>

              <div id="compliance" className="scroll-mt-24">
                <h2>15. Adherence to Local Laws</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">15.1 Legal Framework</h3>
                  <p className="!mb-4">
                    Operating within the bounds of the law is a fundamental principle of responsible AI development and deployment. NextHomeLabs is committed to strict adherence to all applicable local, national, and international laws and regulations in the jurisdictions where our AI systems are developed, deployed, and used. This commitment to legal compliance encompasses considerations of regional compliance, regulatory standards, industry guidelines, and specific local requirements.
                  </p>
                  <p className="!mb-4">
                    Regional compliance is a key focus, as legal frameworks for AI and data privacy can vary significantly across different regions and countries. We ensure that our AI systems and practices are compliant with the specific legal requirements of each region where we operate. This includes adapting our data governance practices to meet regional data privacy regulations, such as GDPR in Europe and CCPA in California, and ensuring compliance with local laws related to AI ethics and usage. Regional compliance is essential for legal and ethical AI operations in a globalized world.
                  </p>
                  <p className="!mb-4">
                    Regulatory standards are continuously monitored and adhered to in our AI development and deployment. We actively track evolving regulatory landscapes related to AI, including emerging standards for AI ethics, safety, and accountability. We adapt our practices to comply with relevant regulatory standards and guidelines, ensuring that our AI systems meet or exceed legal and regulatory expectations. Adherence to regulatory standards demonstrates our commitment to responsible AI and legal compliance.
                  </p>
                  <p className="!mb-4">
                    Industry guidelines and best practices are considered and incorporated into our legal compliance framework. We are aware of and consider relevant industry guidelines and best practices related to responsible AI and legal compliance. This includes adopting industry-recommended practices for data privacy, security, and ethical AI development. Considering industry guidelines helps to ensure that our legal compliance framework is comprehensive, up-to-date, and aligned with industry standards.
                  </p>
                  <p className="!mb-0">
                    Local requirements are specifically addressed to ensure compliance with the unique legal context of each jurisdiction. We recognize that local laws and regulations may have specific requirements that need to be addressed in our AI development and deployment. We conduct thorough legal assessments to identify and comply with local legal requirements, ensuring that our AI operations are fully compliant with the specific legal framework of each location. Addressing local requirements is essential for responsible and legally sound AI operations in diverse legal environments.
                  </p>
                </div>
              </div>

              <div id="dual-use" className="scroll-mt-24">
                <h2>16. Preventing Dual Use</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">16.1 Risk Management</h3>
                  <p className="!mb-4">
                    Recognizing that AI technologies can have both beneficial and potentially harmful applications (dual use), NextHomeLabs is committed to proactively managing the risks associated with dual use. We implement robust risk management strategies to prevent the misuse of our AI systems for harmful purposes and ensure that they are primarily used for beneficial and ethical applications. This commitment to preventing dual use encompasses use case assessment, security protocols, access controls, and monitoring systems.
                  </p>
                  <p className="!mb-4">
                    Use case assessment is a crucial first step in managing dual-use risks. We conduct thorough assessments of potential use cases for our AI systems to identify and evaluate potential dual-use concerns. This includes analyzing the potential for misuse, unintended consequences, and ethical dilemmas associated with different applications of our AI. Use case assessment helps us to understand and mitigate the risks of dual use proactively.
                  </p>
                  <p className="!mb-4">
                    Security protocols are implemented to protect our AI systems from unauthorized access and misuse. We employ robust security measures to safeguard our AI infrastructure, algorithms, and data from malicious actors who might seek to exploit them for harmful purposes. This includes implementing access controls, encryption, security monitoring, and incident response protocols. Security protocols are essential for preventing unauthorized access and misuse of our AI technologies.
                  </p>
                  <p className="!mb-4">
                    Access controls are implemented to restrict access to sensitive AI systems and functionalities to authorized personnel only. We employ strict access control mechanisms to limit who can access, modify, or deploy our AI technologies. This includes role-based access control, authentication protocols, and authorization procedures. Access controls help to minimize the risk of internal or external misuse of our AI systems by limiting access to authorized individuals.
                  </p>
                  <p className="!mb-0">
                    Monitoring systems are deployed to detect and respond to potential misuse or anomalous behavior of our AI systems. We implement monitoring systems to continuously track the activity of our AI systems, detect any signs of misuse or unauthorized activity, and trigger alerts for investigation and response. Monitoring systems provide an early warning system for potential dual-use concerns, enabling us to take timely action to prevent or mitigate harm.
                  </p>
                </div>
              </div>

              <div id="marketing" className="scroll-mt-24">
                <h2>17. Responsible Marketing</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">17.1 Marketing Standards</h3>
                  <p className="!mb-4">
                    Ethical and responsible marketing is essential for building trust and ensuring that the public has an accurate understanding of AI technologies. NextHomeLabs is committed to responsible marketing practices that adhere to high ethical standards, promote accurate representation of AI capabilities, clearly communicate limitations, and prioritize transparent communication with the public. This commitment to responsible marketing is reflected in our marketing standards for accuracy, clear limitations, ethical promotion, and transparent communication.
                  </p>
                  <p className="!mb-4">
                    Accurate representation of AI capabilities is paramount in our marketing communications. We are committed to presenting our AI systems and their functionalities in a truthful and realistic manner, avoiding exaggeration or misleading claims. This includes accurately describing the capabilities and limitations of our AI, providing evidence-based claims, and avoiding hyperbole or sensationalism. Accurate representation builds trust and ensures that the public has a realistic understanding of AI technologies.
                  </p>
                  <p className="!mb-4">
                    Clear communication of limitations is as important as highlighting capabilities. We are committed to transparently communicating the limitations of our AI systems, including known biases, potential errors, and areas where AI may not perform optimally. This includes disclosing the limitations of CentGPT and other AI tools we develop, providing realistic expectations, and avoiding over-promising AI capabilities. Clear communication of limitations fosters informed decision-making and manages user expectations appropriately.
                  </p>
                  <p className="!mb-4">
                    Ethical promotion practices guide our marketing efforts. We adhere to high ethical standards in our marketing and promotional activities, avoiding manipulative tactics, deceptive advertising, or any form of unethical marketing. This includes respecting user privacy, avoiding discriminatory or offensive content, and promoting AI in a socially responsible manner. Ethical promotion builds trust and ensures that our marketing activities are aligned with our Responsible AI principles.
                  </p>
                  <p className="!mb-0">
                    Transparent communication is a guiding principle in all our marketing interactions. We are committed to transparent communication with the public about our AI technologies, their benefits, and their potential risks. This includes providing clear and accessible information about our AI systems, their development process, and our Responsible AI practices. Transparent communication fosters open dialogue, builds trust, and ensures that the public has a comprehensive understanding of our AI initiatives.
                  </p>
                </div>
              </div>

              <div id="contact" className="scroll-mt-24">
                <h2>18. Contact Information</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">Contact Details</h3>
                  <p className="!mb-4">
                    For questions about our Responsible AI Policy, or to report any concerns, please do not hesitate to contact our Responsible AI Team. We are committed to open communication and welcome your inquiries and feedback.
                  </p>
                  <p className="!mb-0">
                    Responsible AI Team<br />
                    NextHomeLabs Limited<br />
                    Email: responsibleai@nexthomelabs.com<br />
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
                <a href="#purpose" className="block text-sm text-gray-400 hover:text-white transition-colors">1. Purpose of the Policy</a>
                <a href="#principles" className="block text-sm text-gray-400 hover:text-white transition-colors">2. Core Principles</a>
                <a href="#design" className="block text-sm text-gray-400 hover:text-white transition-colors">3. Ethical AI Design</a>
                <a href="#governance" className="block text-sm text-gray-400 hover:text-white transition-colors">4. Data Governance</a>
                <a href="#empowerment" className="block text-sm text-gray-400 hover:text-white transition-colors">5. User Empowerment</a>
                <a href="#prohibited" className="block text-sm text-gray-400 hover:text-white transition-colors">6. Prohibited Uses</a>
                <a href="#monitoring" className="block text-sm text-gray-400 hover:text-white transition-colors">7. Monitoring</a>
                <a href="#collaboration" className="block text-sm text-gray-400 hover:text-white transition-colors">8. Collaboration</a>
                <a href="#enforcement" className="block text-sm text-gray-400 hover:text-white transition-colors">9. Enforcement</a>
                <a href="#improvement" className="block text-sm text-gray-400 hover:text-white transition-colors">10. Improvement</a>
                <a href="#compensation" className="block text-sm text-gray-400 hover:text-white transition-colors">11. Compensation</a>
                <a href="#research" className="block text-sm text-gray-400 hover:text-white transition-colors">12. Open Research</a>
                <a href="#environmental" className="block text-sm text-gray-400 hover:text-white transition-colors">13. Environmental</a>
                <a href="#accessibility" className="block text-sm text-gray-400 hover:text-white transition-colors">14. Accessibility</a>
                <a href="#compliance" className="block text-sm text-gray-400 hover:text-white transition-colors">15. Legal Compliance</a>
                <a href="#dual-use" className="block text-sm text-gray-400 hover:text-white transition-colors">16. Dual Use</a>
                <a href="#marketing" className="block text-sm text-gray-400 hover:text-white transition-colors">17. Marketing</a>
                <a href="#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">18. Contact</a>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
