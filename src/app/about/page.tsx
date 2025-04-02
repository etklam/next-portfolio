'use client';

import { useEffect, useState } from 'react';
import { translations } from '@/i18n/translations';

export default function About() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh-TW'>('zh-TW');
  const t = translations[currentLang];

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'zh-TW';
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const aboutContent = {
    'en': {
      title: 'About Me',
      description: 'I am a proactive programmer with years of experience in government and banking projects, delivering robust solutions for transport and core banking systems. With a strong foundation in multiple programming languages and technologies, I excel at modernizing legacy systems, developing new modules, and ensuring operational efficiency. My positive work attitude fuels my ability to tackle challenges, implement innovative solutions, and collaborate effectively to achieve project goals.',
      skills: {
        title: 'Skills & Expertise',
        items: [
          'Full-stack Development',
          'Legacy System Modernization',
          'Core Banking Systems',
          'Transport Systems',
          'Government Projects',
          'Team Collaboration'
        ]
      },
      experience: {
        title: 'Experience',
        items: [
          'Government projects',
          'Banking system development',
          'Transport system solutions',
          'Legacy system modernization'
        ]
      }
    },
    'zh-TW': {
      title: '關於我',
      description: '我是一位積極主動的程式設計師，擁有多年政府和銀行專案經驗，為交通和核心銀行系統提供穩健的解決方案。憑藉紮實的多種程式語言和技術基礎，我擅長現代化舊系統、開發新模組，並確保營運效率。我積極的工作態度使我能夠應對挑戰、實施創新解決方案，並有效協作以達成專案目標。',
      skills: {
        title: '技能與專長',
        items: [
          '全端開發',
          '舊系統現代化',
          '核心銀行系統',
          '交通系統',
          '政府專案',
          '團隊協作'
        ]
      },
      experience: {
        title: '經驗',
        items: [
          '政府專案經驗',
          '銀行系統開發',
          '交通系統解決方案',
          '舊系統現代化'
        ]
      }
    }
  };

  const content = aboutContent[currentLang];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{content.title}</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {content.description}
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{content.skills.title}</h2>
            <ul className="space-y-4">
              {content.skills.items.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{content.experience.title}</h2>
            <ul className="space-y-4">
              {content.experience.items.map((exp, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 