import React from 'react';
import {
  Nunito_Sans,
  Redacted_Script,
} from 'next/font/google';

import './styles.css';

const primaryFont = Nunito_Sans({
  weight: ['500', '700'],
  subsets: ['latin'],
});
const loadingFont = Redacted_Script({
  weight: ['400'],
  subsets: ['latin'],
  display: 'block',
});

function VaporLayout({ children }) {
  return (
    <div
      className="vapor"
      style={{
        '--font-family-primary':
          primaryFont.style.fontFamily,
        '--font-family-loading':
          loadingFont.style.fontFamily,
      }}
    >
      <header>
        <div className="header-content max-width-wrapper">
          <a href="" className="logo">
            Vapor
          </a>
          <nav>
            <ul>
              <li>
                <a className="active" href="">
                  Library
                </a>
              </li>
              <li>
                <a href="">Store</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        Copyright © 2003-present Vapor Inc. All
        Rights Reserved.
      </footer>
    </div>
  );
}

export default VaporLayout;
