'use client';
import React, { useState } from 'react';

interface HamburgerMenuProps {
  lang: string;
}

function HamburgerMenu({ lang }: HamburgerMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={`${showMenu ? '' : 'relative z-20'}`} onClick={() => setShowMenu((prev) => !prev)}>
        <button
          type="button"
          className={`flex h-6 w-fit cursor-pointer flex-col justify-center gap-1 bg-transparent p-0 opacity-100 focus:outline-none`}
        >
          <div
            style={{ transform: showMenu ? 'rotate(45deg)' : 'rotate(0)' }}
            className={`h-[2.4px] w-5 origin-[1.5px] bg-neutral-100 transition-transform duration-300`}
          />
          <div
            style={{ opacity: showMenu ? '0' : '1' }}
            className={`h-[2.4px] w-5 bg-neutral-100 transition-opacity duration-300`}
          />
          <div
            style={{ transform: showMenu ? 'rotate(-45deg)' : 'rotate(0)' }}
            className={`h-[2.4px] w-5 origin-[1.5px] bg-neutral-100 transition-transform duration-300`}
          />
        </button>
      </div>
    </>
  );
}

export default HamburgerMenu;
