import React from 'react';

function LibraryGameCard({ game }) {
  return (
    <article className="library-game-card">
      <div className="hero-img">
        <img
          alt=""
          src={`/game-covers/${game.slug}.jpeg`}
        />
      </div>
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      <dl>
        <dt>Time played</dt>
        <dd>{game.totalPlayed} hours</dd>
        <dt>Achievements</dt>
        <dd>
          {game.achievements.granted} /{' '}
          {game.achievements.total}
        </dd>
      </dl>
    </article>
  );
}

export default LibraryGameCard;
