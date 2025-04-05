'use client';

import { translations } from '@/i18n/translations';

export default function Career() {
  const t = translations['en'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Career & Education</h1>

        {/* Professional Experience */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Professional Experience</h2>
          <div className="space-y-8">
            {/* Shanghai Commercial Bank Experience */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">Programmer</h3>
              <p className="text-gray-600 mt-2">Shanghai Commercial Bank | Apr 2023 - Present</p>
              <p className="text-gray-500 mt-1">Team Size: 20+ members</p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Core Banking System Development:</strong> Participated in the migration of legacy AS400 platform to modern Spring Boot system using Java 11, Spring Boot, Vue, MyBatis, and DB2 database
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>CI/CD Implementation:</strong> Assisted in implementing GitLab CI/CD pipelines and configuring JBoss application server for DevOps
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Module Development:</strong> Developed and maintained critical modules including Loans, CASA, Forex, Bills, and Time Deposit
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Reporting System:</strong> Created statements and reports using Jasper Reports
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>System Integration:</strong> Worked on integrating with other systems using RESTful API and binary file interfaces for Mainframe
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Documentation:</strong> Assisted in preparing launch plans, program specifications, and user guides
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Code Review:</strong> Participated in code reviews using SonarQube, IntelliJ analysis, and AI tools
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Testing:</strong> Performed unit testing with OpenText, load testing, and security audits
                  </span>
                </li>
              </ul>
            </div>

            {/* DXC Technology Experience */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">Svc Info Developer</h3>
              <p className="text-gray-600 mt-2">DXC Technology | Jun 2022 - Apr 2023</p>
              <p className="text-gray-500 mt-1">Programmer for 2 Government projects in Transport Department</p>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Project 1: Valid 5 - Core System of Transport Department (GOV) (70%)</h4>
                <p className="text-gray-500 mt-1">Team Size: 20+ (Team Size of 3 for the TDOP module)</p>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Framework Development:</strong> Worked on an in-house J2EE framework based on Struts, WebLogic, EJB, Oracle SQL, and Crystal Reports
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Module Development:</strong> Developed a new module, TDOP (Taxi Deduction Point System), enhancing system functionality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Testing & Collaboration:</strong> Conducted User Acceptance Testing (UAT) for a new module in collaboration with 7 third-party stakeholders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Onsite Support:</strong> Provided onsite support to West Kowloon Government Offices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Testing:</strong> Conducted various tests including unit test, SIT, UAT, and load tests
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Project 2: DCVRS - Diesel Commercial Vehicles Incentive-Cum-Regulatory System (30%)</h4>
                <p className="text-gray-500 mt-1">Team Size: 2</p>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>System Maintenance:</strong> Utilized C#, .NET, and MS SQL Server to provide maintenance, enhancements, regular patching, and on-call onsite production support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Infrastructure Upgrade:</strong> Assisted in coordinating with the infrastructure team for system upgrade process (2008 R2 to 2019)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Disaster Recovery:</strong> Assisted in reviewing and updating the disaster plan with frontline users
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>User Support:</strong> Provided onsite support to Admiralty Offices for User training and on-prem rack support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Documentation & Training:</strong> Assisted in writing user manuals and providing user training
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>Reporting Enhancement:</strong> Worked on enhancing SQL Server Reporting Services (SSRS) functionality as ActiveX controls were phased out
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FromDB Limited Experience */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">Web Developer</h3>
              <p className="text-gray-600 mt-2">FromDB Limited | Jun 2021 - Oct 2021</p>
              <p className="text-gray-500 mt-1">Summer Internship Program | Team Size: 3 (Start-up)</p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Full-Stack Development:</strong> Developed applications using Node.js, React.js, Next.js, and MongoDB, focusing on building Minimum Viable Product (MVP) single-page applications (SPAs) for events
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Client Projects:</strong> Assisted in developing solutions for clients including Oriental Watch Holdings Limited (東方表行) and The Hong Kong Jockey Club
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Internal Tools Development:</strong> Developed internal tools for an insurance company to automate salary calculations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Process Optimization:</strong> Assisted in improving payroll accuracy and processing speed through automated solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Development Tasks:</strong> Worked on end-to-end development tasks from collecting user requirements to implementation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Cloud Deployment:</strong> Assisted in deploying applications using AWS Cloud services (Lambda, Lightsail, S3) and Docker
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Background */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Education</h2>
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-800">Bachelor of Computer Science</h3>
            <p className="text-gray-600 mt-2">Hong Kong Baptist University | 2018 - 2022</p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Core Studies:</strong> Computer Science fundamentals, Software Engineering, Database Systems, and Web Development
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Technical Skills:</strong> Programming languages (Java, Python, C++), Data Structures, Algorithms, and System Design
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Projects:</strong> Developed various academic projects including web applications, database systems, and software solutions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 