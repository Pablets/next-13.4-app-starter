'use client';
import Link from 'next/link';
import React from 'react';
import Button from '../../atoms/Button/Button';
import HamburgerMenu from '../../molecules/HamburgerMenu/HamburgerMenu';
import Toggle from '../../atoms/Toggle/Toggle';
import { usePathname } from 'next/navigation';
import es from '@/dictionaries/es';
import en from '@/dictionaries/en';

export const pages = {
  HOME_PAGE: '',
  SERVICES_PAGE: '/services',
};

const NavBar = () => {
  const pathname = usePathname();
  const lang = pathname?.startsWith('/es') ? 'es' : 'en';
  const dictionary = lang === 'es' ? es : en;

  return (
    <nav className="fixed left-0 top-0 z-20 flex h-20 w-screen items-center bg-gradient-to-b from-black to-transparent">
      <div className="w-full max-w-960 sm:mx-auto">
        <div className="m-4 flex items-center justify-between md:m-0">
          <div className="flex w-52 sm:order-1 md:hidden">
            <HamburgerMenu lang={lang} />
          </div>
          <div className="flex self-center sm:order-2 md:order-first md:mr-12">
            <Link href={`/${lang}`} className="flex items-center">
              logo
            </Link>
          </div>
          <div className="order-3 flex w-52 justify-end md:ml-12 md:justify-between">
            <div className="flex items-center">
              <Toggle />
            </div>
            <Button variant="primary" className="hidden md:block">
              <span className="font-display">Contact us</span>
            </Button>
          </div>
          <div className="hidden flex-1 items-center md:order-1 md:mx-5 md:flex">
            {['', 'services'].map((page, index) => (
              <Link key={index} href={`/${page}`} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
