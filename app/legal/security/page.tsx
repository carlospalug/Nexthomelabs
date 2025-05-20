"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function SecurityPage() {
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
          <span className="text-white">Security</span>
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

              <h1 className="text-4xl md:text-5xl font-bold">Security</h1>

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
              {/* Introduction */}
              <div className="p-6 border border-[#00E6E6]/20 rounded-xl bg-[#00E6E6]/5 mb-8">
                <p className="!mt-0 !mb-0">
                  At NextHomeLabs, the security of our users' data and our systems is not just a feature, but a foundational principle. We understand that trust is earned through consistent and demonstrable commitment to protecting your information. This Security Policy is designed to clearly outline the comprehensive measures we undertake to safeguard your data and to delineate the shared responsibilities between NextHomeLabs and our users in maintaining a secure environment when utilizing our services, including CentGPT. We are dedicated to transparency and believe that a well-informed user is a more secure user. This document serves as a testament to our ongoing efforts and dedication to upholding the highest standards of security in all aspects of our operations.
                </p>
              </div>

              {/* Security Overview */}
              <div id="overview" className="scroll-mt-24">
                <h2>1. Security Overview</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <p className="!mb-0">
                    NextHomeLabs is committed to creating and maintaining a secure ecosystem for all our users. To achieve this, we employ a multi-layered security strategy that adheres to industry-standard best practices. Our approach is not limited to a single technology or procedure but encompasses a holistic framework that includes technical, organizational, and physical controls. These controls are meticulously designed and continuously updated to proactively protect sensitive information from unauthorized access, use, disclosure, disruption, modification, or destruction, and to ensure the ongoing integrity and availability of our systems. We believe that robust security is an evolving process, and we are dedicated to adapting and enhancing our measures to meet the ever-changing landscape of cyber threats.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div id="user-responsibilities" className="scroll-mt-24">
                <h2>2. User Responsibilities</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">2.1 Account Security</h3>
                  <p className="!mb-4">While NextHomeLabs implements robust security measures on our end, users also play a vital role in maintaining the security of their accounts and data. Responsible user practices are crucial for a secure environment. Users are expected to take ownership of their account security by adhering to the following guidelines:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Creating strong, unique passwords:</b> Passwords are the first line of defense against unauthorized access. Users should create passwords that are complex, incorporating a mix of uppercase and lowercase letters, numbers, and symbols. It is equally important to avoid using easily guessable information such as birthdays, pet names, or common words. Furthermore, each account should have a unique password to prevent a breach in one service from compromising others. Password managers can be valuable tools in generating and securely storing complex, unique passwords for multiple accounts.
                    </li>
                    <li>
                      <b>Enabling two-factor authentication (2FA):</b> Two-factor authentication adds an extra layer of security beyond just a password. By requiring a second verification factor, typically from a separate device like a smartphone or email account, 2FA significantly reduces the risk of unauthorized account access, even if a password is compromised. Users are strongly encouraged to enable 2FA wherever available to enhance their account protection.
                    </li>
                    <li>
                      <b>Regularly updating passwords:</b> While strong passwords are essential, it is also a good security practice to update them periodically. Password updates mitigate the risk associated with potential password compromises that may not be immediately apparent. Regularly changing passwords, especially for sensitive accounts, is a proactive measure to maintain security over time.
                    </li>
                    <li>
                      <b>Monitoring account activity:</b> Users should regularly review their account activity for any signs of unauthorized access or suspicious behavior. This includes checking login history, recent transactions, and profile changes. Promptly reporting any unfamiliar or unauthorized activity to NextHomeLabs security team is crucial for timely incident response and mitigation.
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">2.2 Device Security</h3>
                  <p className="!mb-4">The security of devices used to access NextHomeLabs services is as important as account security. Compromised devices can be a significant point of vulnerability. Users are responsible for ensuring the security of their devices by implementing the following measures:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Use up-to-date antivirus software:</b> Antivirus software is crucial for protecting devices from malware, viruses, spyware, and other malicious software that can compromise security and steal sensitive information. Keeping antivirus software updated ensures it can effectively detect and neutralize the latest threats. Regular scans should be performed to proactively identify and remove any malicious software.
                    </li>
                    <li>
                      <b>Maintain active firewalls:</b> Firewalls act as a barrier between a device and the internet, monitoring and controlling network traffic based on pre-defined security rules. An active firewall helps to prevent unauthorized access to a device and its data. It is important to ensure that the firewall is properly configured and remains active whenever the device is connected to a network.
                    </li>
                    <li>
                      <b>Avoid public or untrusted devices:</b> Public computers or devices on untrusted networks can pose security risks. These devices may be compromised with malware or monitoring software, increasing the risk of data theft or account compromise. When possible, users should avoid accessing sensitive accounts or data from public or untrusted devices. If unavoidable, users should exercise extreme caution and ensure they log out completely after each session and clear browsing data.
                    </li>
                    <li>
                      <b>Log out after sessions:</b> Leaving accounts logged in, especially on shared or public devices, creates a significant security vulnerability. Always logging out of accounts after each session, particularly after accessing sensitive information or using shared devices, is a fundamental security practice. This prevents unauthorized access if the device is left unattended or accessed by another user.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Security Measures */}
              <div id="data-security" className="scroll-mt-24">
                <h2>3. Data Security Measures</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">3.1 Encryption</h3>
                  <p className="!mb-4">Encryption is a cornerstone of our data security strategy. It is the process of converting readable data into an unreadable format, ciphertext, which can only be deciphered back to its original form with a decryption key. NextHomeLabs employs encryption to protect data at various stages:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>SSL/TLS for data in transit:</b> To secure data as it travels between a user's device and our servers, we utilize Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols. These protocols establish encrypted connections, ensuring that data transmitted over the internet, such as login credentials, personal information, and application data, is protected from eavesdropping and interception. This encryption is crucial for maintaining the confidentiality and integrity of data during transmission.
                    </li>
                    <li>
                      <b>AES-256 for data at rest:</b> For data stored on our servers, we employ Advanced Encryption Standard (AES) with a 256-bit key, a highly robust encryption algorithm. AES-256 encryption protects data at rest, meaning data that is not actively being transmitted. This measure ensures that even in the event of unauthorized physical access to storage media or a data breach, the data remains encrypted and unreadable without the decryption keys, providing a significant layer of protection for sensitive information.
                    </li>
                    <li>
                      <b>End-to-end encryption where applicable:</b> In specific services or features where heightened privacy is paramount, NextHomeLabs implements end-to-end encryption. This means that data is encrypted on the user's device before it is transmitted and remains encrypted until it is decrypted by the intended recipient's device. End-to-end encryption ensures that even NextHomeLabs, as the service provider, cannot access the content of the communication, providing the highest level of privacy for user data in these contexts.
                    </li>
                    <li>
                      <b>Secure key management:</b> The effectiveness of encryption relies heavily on secure key management. NextHomeLabs employs robust key management practices to protect encryption keys from unauthorized access and compromise. This includes secure generation, storage, distribution, and rotation of encryption keys. Secure key management is essential to maintain the integrity and confidentiality of encrypted data and to prevent unauthorized decryption.
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#00E6E6]/20 rounded-xl p-6 my-8">
                  <h3 className="!mt-0">3.2 Access Controls</h3>
                  <p className="!mb-4">Controlling access to systems and data is fundamental to security. NextHomeLabs implements stringent access control mechanisms to ensure that only authorized individuals and systems can access specific resources. Our access control strategy is based on several key principles:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Role-based access control (RBAC):</b> Role-based access control (RBAC) is a method of regulating access to computer or network resources based on the roles of individual users within an organization. In our implementation of RBAC, access rights are grouped by role, and users are assigned roles based on their job responsibilities. This approach simplifies access management, improves security by ensuring users only have access to the systems and data they need to perform their duties, and facilitates compliance with security policies.
                    </li>
                    <li>
                      <b>Multi-factor authentication (MFA):</b> Multi-factor authentication (MFA) adds an additional layer of security to the authentication process by requiring users to provide multiple verification factors to gain access. Typically, these factors fall into categories such as something you know (password), something you have (security token or mobile device), or something you are (biometrics). By requiring multiple factors, MFA significantly reduces the risk of unauthorized access, even if one factor, like a password, is compromised. NextHomeLabs employs MFA to protect sensitive accounts and systems.
                    </li>
                    <li>
                      <b>Regular access audits:</b> To maintain the effectiveness of access controls, NextHomeLabs conducts regular access audits. These audits involve reviewing user access rights and permissions to ensure they are still appropriate and necessary. Access audits help identify and rectify any instances of excessive or inappropriate access, ensuring that the principle of least privilege is consistently enforced. Regular audits are a proactive measure to prevent privilege creep and maintain a secure access environment.
                    </li>
                    <li>
                      <b>Principle of least privilege:</b> The principle of least privilege dictates that users and systems should be granted only the minimum level of access necessary to perform their required functions. This principle is a cornerstone of our access control strategy. By limiting access rights to only what is essential, we minimize the potential damage that could result from accidental or malicious actions, such as data breaches or system disruptions. Implementing the principle of least privilege is crucial for reducing the attack surface and enhancing overall system security.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Security */}
              <div id="third-party" className="scroll-mt-24">
                <h2>4. Third-Party Security</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">4.1 Vendor Management</h3>
                  <p className="!mb-0">
                    NextHomeLabs recognizes that our security posture is not only determined by our internal practices but also by the security of our third-party vendors and service providers. We are committed to ensuring that all third-party vendors meet our stringent security standards. Our vendor management process includes a thorough evaluation of potential vendors' security practices before engagement. This evaluation encompasses reviewing their security policies, certifications, and infrastructure. We require all vendors who handle sensitive data to comply with relevant industry security standards and regulations. Data Protection Agreements (DPAs) are established with vendors to legally bind them to our security and data protection requirements, ensuring accountability and outlining expectations regarding data handling and security measures. This rigorous vendor management approach is essential for extending our security perimeter beyond our organization and ensuring the security of the entire ecosystem.
                  </p>
                </div>
              </div>

              {/* Incident Response */}
              <div id="incident-response" className="scroll-mt-24">
                <h2>5. Incident Response</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">5.1 Detection and Response</h3>
                  <p className="!mb-4">Despite our proactive security measures, security incidents can still occur. NextHomeLabs has established a comprehensive incident response plan to effectively detect, respond to, and recover from security incidents. Our incident response capabilities are designed to minimize the impact of any security breaches and ensure business continuity:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>24/7 system monitoring:</b> To maintain continuous vigilance, we employ 24/7 system monitoring. Our security monitoring systems are designed to constantly observe our infrastructure and applications for unusual activity, security events, and potential threats. This continuous monitoring is critical for the early detection of security incidents, enabling a rapid response to mitigate potential damage.
                    </li>
                    <li>
                      <b>Automated threat detection:</b> We utilize automated threat detection tools to proactively identify and respond to security threats. These tools employ various techniques, including security information and event management (SIEM) systems, intrusion detection and prevention systems (IDPS), and anomaly detection algorithms, to automatically identify suspicious patterns, malicious activities, and potential security breaches. Automated threat detection enhances our ability to respond quickly and efficiently to security incidents.
                    </li>
                    <li>
                      <b>Incident response team:</b> NextHomeLabs maintains a dedicated incident response team composed of security experts who are trained to handle security incidents effectively. This team is responsible for coordinating incident response activities, investigating security alerts, containing breaches, eradicating threats, recovering systems, and implementing corrective actions to prevent future incidents. The incident response team follows predefined procedures and protocols to ensure a structured and efficient response to security events.
                    </li>
                    <li>
                      <b>Regular security assessments:</b> To continuously improve our incident response capabilities and proactively identify potential vulnerabilities, we conduct regular security assessments. These assessments may include vulnerability scans, penetration testing, and security audits. The findings from these assessments are used to refine our incident response plan, enhance our detection mechanisms, and strengthen our overall security posture. Regular assessments ensure that our incident response plan remains effective and up-to-date with the evolving threat landscape.
                    </li>
                  </ul>
                </div>
              </div>

              {/* User Data Protection */}
              <div id="data-protection" className="scroll-mt-24">
                <h2>6. User Data Protection</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">6.1 Data Handling</h3>
                  <p className="!mb-4">Protecting user data is paramount at NextHomeLabs. We adhere to strict data handling practices to ensure the privacy, integrity, and availability of user information throughout its lifecycle. Our data handling principles are guided by privacy by design and data minimization:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Data minimization practices:</b> We are committed to data minimization, collecting and retaining only the minimum amount of user data necessary for the specified purposes of our services. This principle reduces the risk associated with data breaches and aligns with privacy regulations. We regularly review our data collection and retention policies to ensure they adhere to the principle of data minimization. By limiting the data we collect and store, we minimize the potential impact of a security incident and uphold user privacy.
                    </li>
                    <li>
                      <b>Regular backups:</b> To ensure data availability and business continuity, NextHomeLabs performs regular backups of critical data. Backups are essential for data recovery in the event of system failures, data corruption, or disasters. Our backup procedures are designed to create secure and reliable backups that can be efficiently restored to minimize data loss and downtime. Backups are stored securely and in geographically separate locations to protect against regional disasters.
                    </li>
                    <li>
                      <b>Secure data disposal:</b> When user data is no longer needed for its intended purpose or when users request data deletion, we ensure secure data disposal. Secure data disposal involves methods that render data irrecoverable, preventing unauthorized access to data even after it has been decommissioned. Techniques such as data wiping and cryptographic erasure are used to securely dispose of data, ensuring data privacy and compliance with data protection regulations.
                    </li>
                    <li>
                      <b>Privacy by design:</b> Privacy by design is a proactive approach to privacy and data protection, embedding privacy considerations into the design and development of our systems and services from the outset. This means that privacy is not an afterthought but a core component of our development process. We integrate privacy enhancing technologies and practices into our systems to minimize data collection, enhance data security, and empower user privacy controls. Privacy impact assessments are conducted for new projects and features to identify and mitigate potential privacy risks proactively.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Compliance */}
              <div id="compliance" className="scroll-mt-24">
                <h2>7. Compliance with Regulations</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">7.1 Regulatory Framework</h3>
                  <p className="!mb-4">NextHomeLabs is dedicated to adhering to applicable laws, regulations, and industry standards related to data security and privacy. Compliance is not just a legal obligation but a demonstration of our commitment to user trust and responsible data handling. We strive to maintain compliance with the following frameworks:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>GDPR compliance:</b> The General Data Protection Regulation (GDPR) is a comprehensive data privacy law in the European Union that imposes strict requirements on the processing of personal data of individuals within the EU and EEA. NextHomeLabs is committed to GDPR compliance for users within its scope. We have implemented policies and procedures to ensure data protection, user rights, and transparency as mandated by GDPR. This includes lawful basis for processing, data subject rights, data breach notification, and data protection impact assessments.
                    </li>
                    <li>
                      <b>DPPA compliance:</b> DPPA refers to a relevant Data Protection and Privacy Act, NextHomeLabs adheres to the principles and requirements outlined in this act. This includes compliance with data processing principles, data subject rights, obligations related to data security, and cross-border data transfers as defined by the DPPA.
                    </li>
                    <li>
                      <b>Industry standards:</b> In addition to legal regulations, NextHomeLabs aligns with recognized industry security standards and best practices. This may include frameworks such as ISO 27001 for information security management, SOC 2 for service organization controls, and other relevant standards depending on the nature of our services and the industries we serve. Adhering to industry standards demonstrates our commitment to maintaining a robust security posture and adopting widely accepted security practices.
                    </li>
                    <li>
                      <b>Regular audits:</b> To ensure ongoing compliance and effectiveness of our security measures, NextHomeLabs conducts regular security audits. These audits may be internal or external and are designed to assess our compliance with relevant regulations, industry standards, and internal security policies. Audit findings are used to identify areas for improvement and to enhance our security and compliance posture continuously. Regular audits provide assurance to our users and stakeholders that we are committed to maintaining a compliant and secure environment.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Security Awareness */}
              <div id="awareness" className="scroll-mt-24">
                <h2>8. Security Awareness</h2>

                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">8.1 Training Programs</h3>
                  <p className="!mb-4">Human error is often a significant factor in security incidents. To mitigate this risk, NextHomeLabs invests in security awareness training programs for our employees. A security-conscious workforce is a crucial element of our overall security strategy. Our training programs are designed to equip employees with the knowledge and skills to recognize and avoid security threats:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Regular employee training:</b> We conduct regular security awareness training sessions for all employees. These training sessions cover a range of security topics relevant to their roles and responsibilities. Training is delivered through various methods, including online modules, workshops, and simulated exercises. Regular training ensures that security awareness remains top-of-mind and that employees are updated on the latest threats and best practices.
                    </li>
                    <li>
                      <b>Security best practices:</b> Training programs emphasize security best practices that employees should follow in their daily work. This includes topics such as password security, secure communication, data handling, incident reporting, and social engineering awareness. By promoting security best practices, we aim to create a security-conscious culture within the organization and empower employees to be proactive in security.
                    </li>
                    <li>
                      <b>Phishing awareness:</b> Phishing attacks are a common and effective method used by attackers to gain unauthorized access to systems and data. Our training programs include specific modules on phishing awareness, educating employees on how to recognize phishing emails, websites, and other social engineering attempts. Employees are trained to identify red flags, verify sender authenticity, and report suspicious communications. Phishing simulations may be conducted to test and reinforce employee awareness.
                    </li>
                    <li>
                      <b>Incident reporting procedures:</b> It is crucial that employees know how to report security incidents or potential vulnerabilities. Training programs clearly outline incident reporting procedures, including who to contact and what information to provide. We encourage employees to report any security concerns, no matter how minor they may seem. Timely incident reporting is essential for early detection and effective response to security incidents.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Continuous Improvement */}
              <div id="improvement" className="scroll-mt-24">
                <h2>9. Continuous Improvement</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">9.1 Improvement Process</h3>
                  <p className="!mb-4">Security is not a static state but an ongoing process of adaptation and enhancement. NextHomeLabs is committed to continuous improvement of our security posture. We recognize that the threat landscape is constantly evolving, and we must continually adapt our security measures to stay ahead of emerging threats. Our continuous improvement process involves several key activities:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Regular security audits and assessments:</b> We conduct regular security audits and assessments to evaluate the effectiveness of our security controls and identify areas for improvement. These audits may be performed internally or by independent third-party security experts. Audits cover various aspects of our security program, including policies, procedures, technical controls, and physical security. The findings from audits are used to develop action plans for remediation and enhancement.
                    </li>
                    <li>
                      <b>Emerging threat monitoring:</b> We actively monitor the evolving threat landscape to stay informed about new vulnerabilities, attack techniques, and emerging threats. This includes tracking security advisories, threat intelligence feeds, and security research publications. By staying informed about emerging threats, we can proactively adjust our security measures to mitigate new risks and maintain a strong security posture.
                    </li>
                    <li>
                      <b>Security researcher collaboration:</b> We value collaboration with the security research community and encourage security researchers to report any vulnerabilities they may discover in our systems. We operate a bug bounty program (described in section 14) to incentivize responsible vulnerability disclosure. Feedback from security researchers is invaluable in helping us identify and address security weaknesses and improve the overall security of our systems.
                    </li>
                    <li>
                      <b>Continuous system enhancement:</b> Based on audit findings, threat intelligence, and security research, we continuously enhance our security systems and processes. This includes implementing new security technologies, updating security policies, refining incident response procedures, and improving security awareness training. Continuous system enhancement is essential for maintaining a robust and adaptive security posture that can effectively address evolving threats and vulnerabilities.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Secure Development */}
              <div id="development" className="scroll-mt-24">
                <h2>10. Secure Development Practices</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">10.1 Development Standards</h3>
                  <p className="!mb-4">Security must be integrated into the software development lifecycle from the outset. NextHomeLabs follows secure development practices to build and maintain secure applications and systems. Our secure development standards are designed to minimize vulnerabilities and ensure that security is a core consideration throughout the development process:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Code review requirements:</b> Code review is a critical security practice in software development. We require code reviews for all code changes to identify potential security vulnerabilities, coding errors, and adherence to secure coding guidelines. Code reviews are conducted by experienced developers or security specialists and serve as a quality control mechanism to improve code security before deployment. Peer review helps catch security flaws early in the development process when they are less costly and easier to fix.
                    </li>
                    <li>
                      <b>Automated security testing:</b> To complement manual code reviews, we utilize automated security testing tools as part of our development pipeline. These tools perform static application security testing (SAST) and dynamic application security testing (DAST) to automatically identify common security vulnerabilities in code and running applications. Automated security testing helps detect vulnerabilities efficiently and at scale, ensuring that security testing is consistently applied throughout the development lifecycle.
                    </li>
                    <li>
                      <b>Dependency management:</b> Software applications often rely on third-party libraries and dependencies. Vulnerabilities in these dependencies can introduce security risks. NextHomeLabs employs dependency management practices to track and manage third-party dependencies used in our projects. We regularly scan dependencies for known vulnerabilities and apply updates and patches promptly to mitigate risks associated with vulnerable dependencies. Dependency management is essential for maintaining the security of our software supply chain.
                    </li>
                    <li>
                      <b>Secure coding guidelines:</b> We have established secure coding guidelines that developers are required to follow when writing code. These guidelines incorporate best practices for secure coding, such as input validation, output encoding, error handling, and authentication and authorization controls. Secure coding guidelines help developers write code that is inherently more secure and less prone to common vulnerabilities. Training on secure coding practices is provided to developers to ensure they are proficient in writing secure code.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Access Policies */}
              <div id="access-policies" className="scroll-mt-24">
                <h2>11. Data Access Policies</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">11.1 Access Management</h3>
                  <p className="!mb-4">Data access policies are essential for ensuring that sensitive data is accessed only by authorized individuals and systems for legitimate business purposes. NextHomeLabs has implemented data access policies to govern how data is accessed, used, and protected within the organization. Our access management practices are based on the principle of least privilege and need-to-know basis:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Need-to-know basis access:</b> Access to sensitive data is granted strictly on a need-to-know basis. This means that individuals are granted access only to the data necessary to perform their specific job responsibilities. Access requests are reviewed and approved based on demonstrated need and alignment with job functions. Need-to-know access minimizes the risk of unauthorized data exposure and limits the potential impact of compromised accounts.
                    </li>
                    <li>
                      <b>Regular access reviews:</b> To maintain the appropriateness of data access permissions, we conduct regular access reviews. These reviews involve verifying user access rights against their current job roles and responsibilities. Access reviews help identify and remove any unnecessary or excessive access privileges. Regular reviews ensure that access permissions remain aligned with business needs and security requirements over time.
                    </li>
                    <li>
                      <b>Access revocation procedures:</b> We have established clear procedures for access revocation when employees change roles, leave the organization, or no longer require access to specific data. Access revocation procedures are implemented promptly to remove access rights when they are no longer needed. Timely access revocation is crucial to prevent unauthorized access by former employees or individuals who no longer require data access. Automated access provisioning and de-provisioning systems may be used to streamline access management and ensure timely revocation.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Physical Security */}
              <div id="physical" className="scroll-mt-24">
                <h2>12. Physical Security</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">12.1 Facility Security</h3>
                  <p className="!mb-4">Physical security measures are implemented to protect our physical facilities and infrastructure from unauthorized physical access, theft, damage, and environmental hazards. Physical security is a critical component of our overall security program, complementing our digital security controls. Our facility security measures include:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Access control systems:</b> Our facilities are protected by access control systems to restrict physical access to authorized personnel only. These systems may include measures such as security badges, key card access, biometric authentication, and security guards. Access control systems help prevent unauthorized entry to sensitive areas, such as data centers and server rooms, ensuring that only authorized individuals can physically access critical infrastructure.
                    </li>
                    <li>
                      <b>Surveillance systems:</b> We utilize surveillance systems, including closed-circuit television (CCTV) cameras, to monitor our facilities and deter unauthorized activities. Surveillance systems provide visual monitoring of critical areas, recording activities and providing evidence in case of security incidents. Surveillance footage is stored securely and reviewed as needed for security investigations and incident analysis.
                    </li>
                    <li>
                      <b>Environmental controls:</b> Environmental controls are in place to protect our facilities and equipment from environmental hazards such as fire, flood, power outages, and extreme temperatures. This includes measures such as fire suppression systems, backup power generators, climate control systems, and environmental monitoring sensors. Environmental controls help ensure the continuous operation of our infrastructure and protect against physical damage that could disrupt services or compromise data.
                    </li>
                    <li>
                      <b>Security personnel:</b> Security personnel, including security guards and facility security staff, play a vital role in maintaining physical security. Security personnel are responsible for monitoring access control systems, patrolling facilities, responding to security alerts, and ensuring adherence to security procedures. Trained security personnel provide a physical security presence and act as a deterrent to unauthorized activities.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Penetration Testing */}
              <div id="penetration" className="scroll-mt-24">
                <h2>13. Penetration Testing</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">13.1 Testing Program</h3>
                  <p className="!mb-4">Proactive security testing is essential to identify vulnerabilities before they can be exploited by malicious actors. NextHomeLabs conducts regular penetration testing to simulate real-world attacks and assess the security posture of our systems and applications. Our penetration testing program is designed to provide an objective assessment of our security effectiveness:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Regular penetration tests:</b> We conduct penetration tests on a regular schedule, typically at least annually, and more frequently for critical systems or after significant changes. Penetration tests are performed by experienced security professionals, either in-house or external, who attempt to exploit vulnerabilities in our systems and applications using various attack techniques. Regular penetration testing helps identify security weaknesses proactively and ensures that our defenses are effective against evolving threats.
                    </li>
                    <li>
                      <b>Vulnerability assessments:</b> In addition to penetration testing, we conduct vulnerability assessments to systematically scan our systems and applications for known vulnerabilities. Vulnerability assessments use automated tools to identify potential weaknesses based on vulnerability databases and security checklists. Vulnerability assessments provide a broad overview of potential vulnerabilities and help prioritize remediation efforts. They are often conducted more frequently than penetration tests to provide continuous vulnerability monitoring.
                    </li>
                    <li>
                      <b>Security architecture reviews:</b> Security architecture reviews are conducted to evaluate the security design of our systems and applications. These reviews assess the overall security architecture, identify potential design flaws, and ensure that security principles are properly implemented in the system design. Security architecture reviews are typically performed during the design phase of new systems or major system upgrades to embed security into the architecture from the outset.
                    </li>
                    <li>
                      <b>Remediation tracking:</b> Findings from penetration tests, vulnerability assessments, and security architecture reviews are tracked and managed through a remediation process. Identified vulnerabilities are prioritized based on risk level, and remediation actions are assigned to responsible teams. We use a vulnerability management system to track remediation progress, ensure timely resolution of vulnerabilities, and verify the effectiveness of remediation efforts. Remediation tracking is essential for ensuring that identified security weaknesses are addressed effectively and in a timely manner.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bug Bounty Program */}
              <div id="bug-bounty" className="scroll-mt-24">
                <h2>14. Bug Bounty Program</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">14.1 Program Details</h3>
                  <p className="!mb-4">NextHomeLabs values the contributions of the security research community and operates a bug bounty program to encourage responsible disclosure of security vulnerabilities. Our bug bounty program provides a structured process for security researchers to report vulnerabilities and receive recognition and rewards for valid submissions. The bug bounty program is designed to enhance our security by leveraging the expertise of external researchers:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Vulnerability reporting process:</b> We provide a clear and accessible vulnerability reporting process for security researchers to submit vulnerability reports. This typically involves a dedicated email address or a bug bounty platform where researchers can submit detailed information about identified vulnerabilities. The reporting process outlines the required information, communication channels, and expected response times. A well-defined reporting process facilitates efficient and effective vulnerability disclosure.
                    </li>
                    <li>
                      <b>Reward structure:</b> Our bug bounty program includes a reward structure that provides monetary or other forms of recognition to security researchers for valid vulnerability submissions. The reward amount typically depends on the severity and impact of the reported vulnerability. A clear and transparent reward structure incentivizes researchers to report vulnerabilities responsibly and encourages ongoing participation in the program.
                    </li>
                    <li>
                      <b>Scope of program:</b> The scope of our bug bounty program defines the systems and applications that are in scope for vulnerability testing and reporting. The scope is clearly communicated to security researchers to ensure they focus their testing efforts on authorized targets. The program scope may be periodically updated to reflect changes in our infrastructure and application portfolio. Defining a clear scope helps manage expectations and ensures that research efforts are aligned with our security priorities.
                    </li>
                    <li>
                      <b>Researcher guidelines:</b> We provide guidelines for security researchers participating in our bug bounty program. These guidelines outline ethical testing practices, responsible disclosure requirements, prohibited activities, and legal considerations. Researcher guidelines promote ethical and responsible vulnerability research and ensure that testing activities are conducted in a safe and lawful manner. Adherence to researcher guidelines is essential for participation in the bug bounty program.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Secure APIs */}
              <div id="secure-apis" className="scroll-mt-24">
                <h2>15. Secure APIs</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">15.1 API Security</h3>
                  <p className="!mb-4">Application Programming Interfaces (APIs) are critical components of modern applications, enabling communication and data exchange between different systems and services. Securing APIs is essential to protect sensitive data and prevent unauthorized access. NextHomeLabs implements robust security measures to protect our APIs:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Authentication mechanisms:</b> We employ strong authentication mechanisms to verify the identity of clients accessing our APIs. This may include API keys, OAuth 2.0, JWT (JSON Web Tokens), or mutual TLS authentication, depending on the API and security requirements. Authentication mechanisms ensure that only authorized clients can access and use our APIs, preventing unauthorized access and API abuse.
                    </li>
                    <li>
                      <b>Rate limiting:</b> Rate limiting is implemented to control the number of requests that can be made to our APIs within a given timeframe. Rate limiting helps prevent denial-of-service (DoS) attacks, API abuse, and excessive resource consumption. By limiting the request rate, we ensure API availability and stability and protect against malicious or unintentional overload. Rate limits are configured based on API usage patterns and security considerations.
                    </li>
                    <li>
                      <b>Input validation:</b> API input validation is crucial to prevent injection attacks and ensure data integrity. We validate all input data received by our APIs to ensure it conforms to expected formats, data types, and values. Input validation helps prevent common API vulnerabilities such as SQL injection, cross-site scripting (XSS), and command injection. Robust input validation is a fundamental security practice for API security.
                    </li>
                    <li>
                      <b>Output encoding:</b> API output encoding is used to protect against output-based vulnerabilities such as cross-site scripting (XSS) and other injection attacks. We encode API responses to neutralize potentially malicious characters or code before they are sent to clients. Output encoding ensures that API responses are safe and do not introduce security vulnerabilities on the client-side. Encoding techniques are applied based on the context and type of output data.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Monitoring & Analytics */}
              <div id="monitoring" className="scroll-mt-24">
                <h2>16. Monitoring & Analytics</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">16.1 Security Monitoring</h3>
                  <p className="!mb-4">Continuous security monitoring and analytics are essential for detecting and responding to security incidents in real-time. NextHomeLabs implements comprehensive security monitoring and analytics capabilities to provide visibility into our security posture and identify potential threats:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Real-time monitoring:</b> We employ real-time security monitoring systems to continuously monitor our infrastructure, applications, and networks for security events and anomalies. Real-time monitoring provides immediate visibility into security activity and enables rapid detection of potential security incidents. Monitoring systems collect and analyze logs, security events, and system metrics to identify suspicious patterns and trigger alerts.
                    </li>
                    <li>
                      <b>Security analytics:</b> Security analytics tools are used to analyze security data and identify trends, patterns, and anomalies that may indicate security threats. Security analytics leverage techniques such as machine learning, behavioral analysis, and threat intelligence to detect sophisticated attacks and insider threats. Security analytics enhance our ability to proactively identify and respond to security incidents that may not be detected by traditional monitoring methods.
                    </li>
                    <li>
                      <b>Anomaly detection:</b> Anomaly detection techniques are used to identify deviations from normal system behavior that may indicate security incidents. Anomaly detection systems establish baselines of normal activity and alert when unusual or unexpected behavior is detected. Anomaly detection is effective in identifying zero-day attacks, insider threats, and other novel attack patterns that may not be recognized by signature-based detection methods.
                    </li>
                    <li>
                      <b>Performance metrics:</b> In addition to security-specific metrics, we monitor system performance metrics to detect performance anomalies that may be indicative of security incidents such as denial-of-service attacks or resource exhaustion. Performance monitoring provides insights into system health and availability and helps identify performance degradation that may be related to security issues. Performance metrics are integrated into our security monitoring dashboard for comprehensive visibility.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Disaster Recovery */}
              <div id="disaster-recovery" className="scroll-mt-24">
                <h2>17. Disaster Recovery</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">17.1 Recovery Planning</h3>
                  <p className="!mb-4">Disaster recovery planning is crucial for ensuring business continuity in the event of major disruptions such as natural disasters, system failures, or cyberattacks. NextHomeLabs has developed a comprehensive disaster recovery plan to minimize downtime and data loss in the event of a disaster. Our disaster recovery planning includes:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Business continuity plans:</b> We maintain business continuity plans (BCPs) that outline procedures for responding to and recovering from various disaster scenarios. BCPs define critical business functions, recovery time objectives (RTOs), recovery point objectives (RPOs), and step-by-step procedures for restoring operations. Business continuity plans ensure that we can resume essential business functions with minimal disruption in the event of a disaster. BCPs are regularly reviewed and updated to reflect changes in our business and infrastructure.
                    </li>
                    <li>
                      <b>Backup procedures:</b> Robust backup procedures are a cornerstone of our disaster recovery strategy. We perform regular backups of critical data, systems, and configurations to ensure data can be restored in the event of data loss or system failures. Backup procedures define backup frequency, retention policies, backup media, and backup locations. Backups are stored securely and offsite to protect against regional disasters. Regular backup testing is conducted to verify backup integrity and restorability.
                    </li>
                    <li>
                      <b>Recovery testing:</b> Disaster recovery testing is conducted regularly to validate the effectiveness of our disaster recovery plan and backup procedures. Recovery testing involves simulating disaster scenarios and performing failover and recovery exercises to verify that systems can be restored within defined RTOs and RPOs. Recovery testing identifies gaps in our disaster recovery plan and allows us to refine procedures and improve recovery capabilities. Regular testing ensures that our disaster recovery plan is effective and reliable.
                    </li>
                    <li>
                      <b>Incident documentation:</b> Comprehensive incident documentation is maintained throughout the disaster recovery process. Incident documentation includes details of the disaster event, recovery actions taken, system downtime, data loss, and lessons learned. Incident documentation provides a record of the disaster recovery process and is used to analyze the effectiveness of our response and identify areas for improvement. Incident documentation is valuable for post-incident review and continuous improvement of our disaster recovery plan.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Privacy Integration */}
              <div id="privacy-integration" className="scroll-mt-24">
                <h2>18. Privacy Integration</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">18.1 Privacy Controls</h3>
                  <p className="!mb-4">Privacy is a fundamental right, and NextHomeLabs is committed to integrating privacy considerations into all aspects of our operations. Privacy is not just a compliance requirement but a core value. We implement various privacy controls to protect user privacy and ensure responsible data handling:</p>
                  <ul className="!mb-0">
                    <li>
                      <b>Privacy by design principles:</b> We adhere to privacy by design principles, embedding privacy considerations into the design and development of our systems and services from the outset. Privacy by design is a proactive approach to privacy, ensuring that privacy is considered at every stage of the development lifecycle. This includes data minimization, purpose limitation, security, transparency, and user control. Privacy by design helps build privacy-enhancing systems and services that respect user privacy.
                    </li>
                    <li>
                      <b>Data protection measures:</b> We implement robust data protection measures to safeguard user personal data from unauthorized access, use, disclosure, alteration, or destruction. Data protection measures include encryption, access controls, data anonymization, pseudonymization, and data loss prevention (DLP) technologies. Data protection measures are continuously reviewed and updated to maintain a high level of data security and privacy.
                    </li>
                    <li>
                      <b>Consent management:</b> For data processing activities that require user consent, we implement consent management mechanisms to obtain, record, and manage user consent in a transparent and compliant manner. Consent management systems provide users with clear information about data processing practices and enable them to exercise their consent choices effectively. Consent management is essential for complying with privacy regulations and respecting user preferences.
                    </li>
                    <li>
                      <b>Privacy impact assessments:</b> We conduct privacy impact assessments (PIAs) for new projects, initiatives, and data processing activities that may have a significant impact on user privacy. PIAs assess potential privacy risks, identify mitigation measures, and ensure that privacy considerations are properly addressed before implementation. PIAs are a proactive tool for identifying and mitigating privacy risks and ensuring that privacy is considered in decision-making processes.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div id="contact" className="scroll-mt-24">
                <h2>19. Contact Information</h2>
                <div className="bg-gradient-to-r from-[#00E6E6]/10 to-transparent p-6 rounded-xl my-8">
                  <h3 className="!mt-0">19.1 Security Team</h3>
                  <p className="!mb-4">For any security concerns, questions, or to report potential vulnerabilities, please do not hesitate to contact our dedicated Security Team. We are committed to working with the community to ensure the security of our platform and user data.</p>
                  <p className="!mb-0">
                    Security Team<br />
                    NextHomeLabs Limited<br />
                    Email: <a href="mailto:security@nexthomelabs.com" className="text-[#00E6E6] hover:underline">security@nexthomelabs.com</a><br />
                    Emergency: [Emergency Contact - To be added and specified for critical security incidents]<br />
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
                <a href="#overview" className="block text-sm text-gray-400 hover:text-white transition-colors">1. Security Overview</a>
                <a href="#user-responsibilities" className="block text-sm text-gray-400 hover:text-white transition-colors">2. User Responsibilities</a>
                <a href="#data-security" className="block text-sm text-gray-400 hover:text-white transition-colors">3. Data Security Measures</a>
                <a href="#third-party" className="block text-sm text-gray-400 hover:text-white transition-colors">4. Third-Party Security</a>
                <a href="#incident-response" className="block text-sm text-gray-400 hover:text-white transition-colors">5. Incident Response</a>
                <a href="#data-protection" className="block text-sm text-gray-400 hover:text-white transition-colors">6. User Data Protection</a>
                <a href="#compliance" className="block text-sm text-gray-400 hover:text-white transition-colors">7. Compliance</a>
                <a href="#awareness" className="block text-sm text-gray-400 hover:text-white transition-colors">8. Security Awareness</a>
                <a href="#improvement" className="block text-sm text-gray-400 hover:text-white transition-colors">9. Continuous Improvement</a>
                <a href="#development" className="block text-sm text-gray-400 hover:text-white transition-colors">10. Secure Development</a>
                <a href="#access-policies" className="block text-sm text-gray-400 hover:text-white transition-colors">11. Data Access Policies</a>
                <a href="#physical" className="block text-sm text-gray-400 hover:text-white transition-colors">12. Physical Security</a>
                <a href="#penetration" className="block text-sm text-gray-400 hover:text-white transition-colors">13. Penetration Testing</a>
                <a href="#bug-bounty" className="block text-sm text-gray-400 hover:text-white transition-colors">14. Bug Bounty Program</a>
                <a href="#secure-apis" className="block text-sm text-gray-400 hover:text-white transition-colors">15. Secure APIs</a>
                <a href="#monitoring" className="block text-sm text-gray-400 hover:text-white transition-colors">16. Monitoring & Analytics</a>
                <a href="#disaster-recovery" className="block text-sm text-gray-400 hover:text-white transition-colors">17. Disaster Recovery</a>
                <a href="#privacy-integration" className="block text-sm text-gray-400 hover:text-white transition-colors">18. Privacy Integration</a>
                <a href="#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">19. Contact Information</a>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
