import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import { random } from '@/utils';

const lorem = new LoremIpsum();

function LibraryGameCardSkeleton() {
  return (
    <article
      className="library-game-card skeleton"
      aria-hidden="true"
    >
      <div className="hero-img"></div>
      <h2>{lorem.generateWords(random(2, 4))}</h2>
      <p>{lorem.generateWords(random(20, 40))}</p>
      <dl>
        <dt>Time played</dt>
        <dd>{random(0, 500)} hours</dd>
        <dt>Achievements</dt>
        <dd>
          {random(0, 10)}{' '}
          <span className="normal-font">/</span>{' '}
          {random(4, 20)}
        </dd>
      </dl>
    </article>
  );
}

export default LibraryGameCardSkeleton;
