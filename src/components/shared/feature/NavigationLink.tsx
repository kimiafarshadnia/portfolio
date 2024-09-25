'use client';

import { ReactNode } from 'react';
import { LinkProps } from 'next/link';
import { Link } from '@/src/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavigationLink({ href, children, ...rest }: LinkProps & { children: ReactNode }) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      className={`duration-200 ${isActive
          ? "text-black dark:text-white"
          : "text-gray-500 dark:text-gray-300 hover:text-black hover:dark:text-white"
        }`}
      {...rest}
    >{children}
    </Link>
  );
}