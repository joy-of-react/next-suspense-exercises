import React from 'react';

import { getGamesInLibrary } from '@/helpers/vapor-helpers';
import LibraryGameCard from '@/components/LibraryGameCard';

import ArticleWrapper from './ArticleWrapper';

export const dynamic = 'force-dynamic';

async function VaporExercise() {
  const games = await getGamesInLibrary();

  return (
    <ArticleWrapper numOfGames={games.length}>
      {games.map((game) => (
        <LibraryGameCard
          key={game.slug}
          game={game}
        />
      ))}
    </ArticleWrapper>
  );
}

export default VaporExercise;
