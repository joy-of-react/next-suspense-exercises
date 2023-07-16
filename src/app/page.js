import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <main className="homepage">
      <h1>Next 13 Suspense exercises</h1>
      <p>
        There are 3 exercises held within this
        repository:
      </p>
      <ol>
        <li>
          <Link href="/01-vapor">
            Vapor Games
          </Link>
        </li>
        <li>
          <Link href="/02-interview">
            Artist Interview with Comments
          </Link>
        </li>
        <li>
          <Link href="/03-web-base">
            WebBase landing page w/ CMS links
          </Link>
        </li>
      </ol>
    </main>
  );
}

export default Home;
