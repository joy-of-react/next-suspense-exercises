import React from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/cms-helpers';

async function SiteHeader() {
  const navLinks = await getNavLinks();

  return (
    <header className="site-header">
      <Link href="" className="logo">
        Webzip
      </Link>
      <nav>
        <ol className="header-nav-links">
          {navLinks.map(
            ({ slug, label, href }) => (
              <li key={slug}>
                <Link href={href}>{label}</Link>
              </li>
            )
          )}
        </ol>
      </nav>
    </header>
  );
}

export default SiteHeader;
