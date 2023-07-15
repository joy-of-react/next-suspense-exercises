import React from 'react';

async function ArticleWrapper({
  numOfGames,
  children,
}) {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        {typeof numOfGames === 'number' && (
          <p>
            <span className="num-of-games">
              {numOfGames}
            </span>{' '}
            games in library
          </p>
        )}
      </header>

      <div className="game-grid">{children}</div>
    </section>
  );
}

export default ArticleWrapper;
