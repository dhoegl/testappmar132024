"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Hamburger from './Hamburger';
import Image from "next/image";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
            <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                <div>
                <Link href="/home">
          <Image
            src="/assets/TEC App Icon 08.png" // Set the path to your logo image
            width={50} // Set the desired width
            height={50} // Set the desired height
            alt="Your Site"
          // placeholder="blur"
          />
        </Link>
                    {/* <Link href="/" className="text-white text-2xl font-semibold">Logo
                    </Link> */}
                </div>
                <div className="sm:hidden">
                    {/* <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button> */}
                    <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            <div
                className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${isOpen ? 'block' : 'hidden'}`}
            >
                <Link href="/home" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">Home
                </Link>
                <Link href="/people" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">People
                </Link>
                <Link href="/prayer" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">Prayer Requests
                </Link>
                <Link href="/about" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">About
                </Link>
                <Link href="/contact" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">Contact
                </Link>
            </div>
        </header>
    );
};

export default Header;
