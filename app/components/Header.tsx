"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Hamburger from './Hamburger';
import Image from "next/image";
import { useSession } from 'next-auth/react';
import { Box } from '@radix-ui/themes';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { status, data: session } = useSession();

  return (
    <header className="bg-gray-800 sm:flex sm:justify-start sm:px-4 sm:py-3 sm:items-center">
      {/* <header className="bg-gray-800 flex items-center p-3"> */}
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
        </div>
        <div className="sm:hidden">
          <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <div className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${isOpen ? 'block' : 'hidden'}`}>
        {status === "authenticated" && (
          <Link href="/home" onClick={() => setIsOpen(!isOpen)} className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">Home
          </Link>
        )}
        {status === "authenticated" && (
            <Link href="/people" onClick={() => setIsOpen(!isOpen)} className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">People
            </Link>
        )}
        {status === "authenticated" && (
          <Link href="/prayer" onClick={() => setIsOpen(!isOpen)} className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">Prayer Requests
          </Link>
        )}
        {status === "authenticated" && (
          <Link href="/about" onClick={() => setIsOpen(!isOpen)} className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">About
          </Link>
        )}
        {status === "authenticated" && (
          <Link href="/contact" onClick={() => setIsOpen(!isOpen)} className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">Contact
          </Link>
        )}
      </div>
      <Box className='justify-end'>
        {status === "authenticated" && (
          <Link href="/api/auth/signout" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">Log out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">Login</Link>
        )}
      </Box>
    </header>
  );
};

export default Header;
