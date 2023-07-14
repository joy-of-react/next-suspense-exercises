export async function getGamesInLibrary() {
  await delay(1200);

  return GAMES;
}

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const GAMES = [
  {
    slug: 'a-short-hike',
    name: 'A Short Hike',
    description:
      'Hike, climb, and soar through the peaceful mountainside landscapes of Hawk Peak Provincial Park as you make your way to the summit.',
    developer: 'adamgryu',
    totalPlayed: 5,
    achievements: {
      granted: 9,
      total: 12,
    },
  },
  {
    slug: 'bastion',
    name: 'Bastion',
    description:
      'Discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces.',
    developer: 'Supergiant Games',
    totalPlayed: 37.4,
    achievements: {
      granted: 8,
      total: 24,
    },
  },
  {
    slug: 'beat-saber',
    name: 'Beat Saber',
    description:
      'Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you, surrounded by a futuristic world.',
    developer: 'Beat Games',
    totalPlayed: 587.6,
    achievements: {
      granted: 18,
      total: 26,
    },
  },
  {
    slug: 'binding-of-isaac',
    name: 'Binding of Isaac: Rebirth',
    description:
      'The Binding of Isaac: Rebirth is a randomly generated action RPG shooter with heavy Rogue-like elements. Following Isaac on his journey players will find bizarre treasures that change Isaac’s form…',
    developer: 'Nicalis Inc',
    totalPlayed: '∞',
    achievements: {
      granted: 636,
      total: 637,
    },
  },
  {
    slug: 'cult-of-the-lamb',
    name: 'Cult of the Lamb',
    description:
      'Start your own cult in a land of false prophets, venturing out into diverse and mysterious regions to build a loyal community of woodland Followers and spread your Word to become the one true cult.',
    developer: 'Massive Monster',
    totalPlayed: 15.1,
    achievements: {
      granted: 26,
      total: 42,
    },
  },
  {
    slug: 'enter-the-gungeon',
    name: 'Enter the Gungeon',
    description:
      'Enter the Gungeon is a bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon’s ultimate treasure: the gun that can kill the past.',
    developer: 'Dodge Roll',
    totalPlayed: 1074,
    achievements: {
      granted: 51,
      total: 54,
    },
  },
  {
    slug: 'hades',
    name: 'Hades',
    description:
      'Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.',
    developer: 'Supergiant Games',
    totalPlayed: 282.9,
    achievements: {
      granted: 39,
      total: 49,
    },
  },
  {
    slug: 'hollow-knight',
    name: 'Hollow Knight',
    description:
      'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
    developer: 'Team Cherry',
    totalPlayed: 49.9,
    achievements: {
      granted: 33,
      total: 63,
    },
  },
  {
    slug: 'monolith',
    name: 'Monolith',
    description:
      'Monolith is a top down action shooter with procedurally generated elements. Explore a large, abandoned facility in search of incredible power, fighting dangerous foes and gaining new weapons and upgrades as you progress.',
    developer: 'Team D-13',
    totalPlayed: 188.1,
    achievements: {
      granted: 39,
      total: 42,
    },
  },
  {
    slug: 'noita',
    name: 'Noita',
    description:
      'Noita is a magical action roguelite set in a world where every pixel is physically simulated. Fight, explore, melt, burn, freeze and evaporate your way through the procedurally generated world using spells you’ve created yourself.',
    developer: 'Nolla Games',
    totalPlayed: 128.2,
    achievements: {
      granted: 5,
      total: 14,
    },
  },
  {
    slug: 'nuclear-throne',
    name: 'Nuclear Throne',
    description:
      'Nuclear Throne is a post-apocalyptic roguelike-like top-down shooter. Not “the final hope of humanity” post-apocalyptic, but “humanity is extinct and mutants and monsters now roam the world” post-apocalyptic.',
    developer: 'Vlambeer',
    totalPlayed: 897.4,
    achievements: {
      granted: 22,
      total: 44,
    },
  },
  {
    slug: 'outer-wilds',
    name: 'Outer Wilds',
    description:
      'Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop',
    developer: 'Mobius Digital',
    totalPlayed: 40.8,
    achievements: {
      granted: 16,
      total: 31,
    },
  },
  {
    slug: 'starbound',
    name: 'Starbound',
    description:
      'You’ve fled your home, only to find yourself lost in space with a damaged ship. Your only option is to beam down to the planet below, repair your ship and set off to explore the universe…',
    developer: 'Chucklefish',
    totalPlayed: 537.8,
    achievements: {
      granted: 25,
      total: 51,
    },
  },
  {
    slug: 'super-meat-boy',
    name: 'Super Meat Boy',
    description:
      'The infamous, tough-as-nails platformer comes to Steam with a playable Head Crab character (Steam-exclusive)!',
    developer: 'Team Meat',
    totalPlayed: 378.1,
    achievements: {
      granted: 24,
      total: 48,
    },
  },
  {
    slug: 'terraria',
    name: 'Terraria',
    description:
      'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game.',
    developer: 'Re-Logic',
    totalPlayed: 963,
    achievements: {
      granted: 78,
      total: 115,
    },
  },
];
