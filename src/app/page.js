import React from 'react';

function Home() {
  return (
    <main className="homepage">
      <h1>Next Suspense exercises</h1>
      <p>There are 3 exercises held within this repository:</p>
      <ol>
        <li>
          {/*
            NOTE: In a real application, you’d want to use <Link>
            here (from `next/link`) to take advantage of client-side
            routing. The reason I'm using anchor tags is because some
            CSS leaks between routes when navigating back and forth
            with <Link>.

            This isn't something you have to worry about in real apps. It only happens here because I'm using plain CSS files, rather than a more production-friendly solution like CSS Modules, CSS-in-JS, Tailwind, etc.
          */}
          <a href="/01-vapor">Vapor Games</a>
        </li>
        <li>
          <a href="/02-interview">Artist Interview with Comments</a>
        </li>
        <li>
          <a href="/03-web-base">WebBase landing page w/ CMS links</a>
        </li>
      </ol>
    </main>
  );
}

export default Home;
