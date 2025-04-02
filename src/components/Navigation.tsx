'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/login');
  };

  const handleSignUp = () => {
    router.push('/register');
  };

  return (
    <section className="overflow-hidden">
      <div className="flex items-center justify-between px-7 xl:px-40 py-5 bg-black">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto mr-14">
              <Link href="/">
                <h1 className="text-2xl font-bold text-white">我的應用</h1>
              </Link>
            </div>
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-16">
                <li className="mr-9 font-medium text-white hover:text-gray-200">
                  <Link href="/features">功能</Link>
                </li>
                <li className="mr-9 font-medium text-white hover:text-gray-200">
                  <Link href="/solutions">解決方案</Link>
                </li>
                <li className="mr-9 font-medium text-white hover:text-gray-200">
                  <Link href="/resources">資源</Link>
                </li>
                <li className="font-medium text-white hover:text-gray-200">
                  <Link href="/pricing">價格</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden mr-5 lg:block">
              <div className="inline-block">
                <button
                  onClick={handleSignIn}
                  className="py-3 px-5 w-full text-white hover:text-gray-200 font-medium rounded-xl bg-transparent transition ease-in-out duration-200"
                  type="button"
                >
                  登入
                </button>
              </div>
            </div>
            <div className="w-auto hidden lg:block">
              <div className="inline-block">
                <button
                  onClick={handleSignUp}
                  className="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                  type="button"
                >
                  免費試用 14 天
                </button>
              </div>
            </div>
            <div className="w-auto lg:hidden">
              <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <svg
                  className="text-indigo-600"
                  width="51"
                  height="51"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          mobileNavOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}
      >
        <div
          onClick={() => setMobileNavOpen(false)}
          className="fixed inset-0 bg-gray-800 opacity-80"
        ></div>
        <nav className="relative z-10 px-9 pt-8 bg-black h-full overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <Link href="/" className="inline-block">
                    <h1 className="text-2xl font-bold text-white">我的應用</h1>
                  </Link>
                </div>
                <div className="w-auto p-2">
                  <button
                    onClick={() => setMobileNavOpen(false)}
                    className="text-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-16 w-full">
              <ul>
                <li className="mb-12">
                  <Link
                    href="/features"
                    className="font-medium text-white hover:text-gray-200"
                  >
                    功能
                  </Link>
                </li>
                <li className="mb-12">
                  <Link
                    href="/solutions"
                    className="font-medium text-white hover:text-gray-200"
                  >
                    解決方案
                  </Link>
                </li>
                <li className="mb-12">
                  <Link
                    href="/resources"
                    className="font-medium text-white hover:text-gray-200"
                  >
                    資源
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="font-medium text-white hover:text-gray-200"
                  >
                    價格
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <div className="flex flex-wrap">
                <div className="w-full mb-3">
                  <div className="block">
                    <button
                      onClick={handleSignIn}
                      className="py-3 px-5 w-full text-white hover:text-gray-200 font-medium rounded-xl bg-transparent transition ease-in-out duration-200"
                      type="button"
                    >
                      登入
                    </button>
                  </div>
                </div>
                <div className="w-full">
                  <div className="block">
                    <button
                      onClick={handleSignUp}
                      className="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                      type="button"
                    >
                      免費試用 14 天
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
} 