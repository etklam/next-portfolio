'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <Link 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
            >
              Next.js
            </Link>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} Elliot. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 