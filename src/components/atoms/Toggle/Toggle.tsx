'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEvent, FC } from 'react';

export interface ToggleProps {}

const Toggle: FC<ToggleProps> = ({}): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (pathname?.startsWith('/es')) {
      const route = pathname === '/es' ? '/en' : pathname.replace('/es', '/en');
      console.log(route);
      router.push(`${route}`);
    } else {
      router.push(`/es${pathname}`);
    }
  };

  return (
    <div
      className="flex items-center rounded-full bg-gray-700 p-[3px] transition-all duration-300
					ease-in-out hover:bg-primary-900"
    >
      <label className="relative h-8 w-16 cursor-pointer select-none items-center">
        <input
          type="checkbox"
          value=""
          checked={!pathname?.startsWith('/es')}
          onChange={handleOnChange}
          className="peer sr-only"
        />
        <div
          className="peer-[not:(checked:)]:translate-x-0
					peer absolute h-full w-1/2 rounded-full border-none
					bg-primary-500 transition-all
					duration-300 content-['']
					peer-checked:translate-x-8 peer-focus:outline-none"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center bg-transparent font-body text-white">
          <div className="flex h-full flex-1 items-center justify-center">
            <span>ES</span>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            <span>EN</span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
