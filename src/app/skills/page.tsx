'use client';

import { useState } from 'react';
import { translations } from '@/i18n/translations';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export default function Skills() {
  const t = translations['en'];
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillCategories: Record<string, SkillCategory> = {
    backend: {
      title: 'Backend Development',
      skills: [
        'Java',
        'J2EE/Spring Boot',
        'JBoss',
        'WebLogic',
        'MyBatis',
        'Hibernate',
        'JPA',
        'C#',
        'ASP.NET',
        'RESTful',
        'SOAP'
      ],
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
    },
    frontend: {
      title: 'Frontend Development',
      skills: [
        'JavaScript',
        'TypeScript',
        'Vue/React',
        'Nuxt/Next',
        'Bootstrap CSS',
        'XML'
      ],
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
    },
    devops: {
      title: 'DevOps & Infrastructure',
      skills: [
        'GitLab CI/CD',
        'Linux',
        'Docker',
        'Nginx',
        'JUnit',
        'SonarQube'
      ],
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>'
    },
    database: {
      title: 'Database & Reporting',
      skills: [
        'Jasper Report',
        'Crystal Report',
        'SQL',
        'Oracle SQL',
        'DB2',
        'MS SQL Server',
        'MongoDB',
        'Redis'
      ],
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>'
    },
    testing: {
      title: 'Testing & Cloud',
      skills: [
        'OpenText (Automation Testing)',
        'AWS Cloud'
      ],
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Technical Skills</h1>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg transition-colors text-lg font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <div dangerouslySetInnerHTML={{ __html: skillCategories[activeCategory].icon }} />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 