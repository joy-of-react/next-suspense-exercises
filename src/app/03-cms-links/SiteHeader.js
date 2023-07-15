import React from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/cms-helpers';

async function SiteHeader() {
  let navLinks = await getNavLinks();

  // Only show the first 4 in the header
  navLinks = navLinks.slice(0, 4);

  return (
    <header className="site-header">
      <Link href="" className="logo">
        Webzip
      </Link>
      <nav>
        <ol className="header-nav-links">
          {navLinks.map(
            ({ slug, label, href, type }) => (
              <li key={slug}>
                <Link
                  href={href}
                  className={`header-nav-link ${type}`}
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ol>
      </nav>
    </header>
  );
}

export default SiteHeader;
