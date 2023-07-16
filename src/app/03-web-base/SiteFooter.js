import React from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/web-base-helpers';

async function SiteFooter() {
  const navLinks = await getNavLinks();

  return (
    <header className="site-footer">
      <div className="logo-wrapper">
        <Link href="" className="logo">
          Webzip
        </Link>
        <p className="disclaimer">
          Copyright © 2099 Webzip Inc. All Rights
          Reserved.
        </p>
      </div>

      <div className="link-wrapper">
        <div className="col">
          <h2>Navigation</h2>
          <nav>
            <ol>
              {navLinks.map(
                ({ slug, label, href }) => (
                  <li key={slug}>
                    <Link href={href}>
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ol>
          </nav>
        </div>
        <div className="col">
          <h2>Legal</h2>
          <nav>
            <ol>
              <li>
                <Link href="">Terms of Use</Link>
              </li>
              <li>
                <Link href="">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteFooter;
