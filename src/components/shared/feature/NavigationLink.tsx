'use client';

import { ReactNode } from 'react';
import { LinkProps } from 'next/link';
import { Link } from '@/src/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';
import { UrlObject } from 'url';

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  href: string | UrlObject;
}

export default function NavigationLink({ href, children, ...rest }: CustomLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const currentPathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const getHrefPathname = (href: string | UrlObject): string => {
    if (typeof href === 'string') {
      return href;
    } else {
      return href.pathname ?? '/';
    }
  };

  const isActive = currentPathname === getHrefPathname(href);

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      className={`duration-200 ${isActive
          ? 'text-black dark:text-white'
          : 'text-gray-500 dark:text-gray-300 hover:text-black hover:dark:text-white'
        }`}
      {...rest}
    >
      {children}
    </Link>
  );
}
