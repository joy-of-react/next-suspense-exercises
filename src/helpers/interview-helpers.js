export async function getComments() {
  await delay(2500);

  return COMMENTS;
}

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const COMMENTS = [
  {
    id: crypto.randomUUID(),
    from: {
      name: 'BluePencilArtistry',
      avatarSrc:
        '/avatars/BluePencilArtistry.png',
    },
    body: 'Gwen, your work is such an inspiration! 🤩 It’s so cool how you’ve managed to blend classic art techniques with pop culture. I can’t wait to see what characters you choose to paint next!',
    postedAt: '5:33PM • August 23rd',
  },
  {
    id: crypto.randomUUID(),
    from: {
      name: 'oldschoolroger',
      avatarSrc: '/avatars/oldschoolroger.png',
    },
    body: 'what happen to real art, flowers, nature, beautiful lady. i dont see the need for cartoons. Im sorry if im wrong',
    postedAt: '3:58PM • August 22nd',
  },
  {
    id: crypto.randomUUID(),
    from: {
      name: 'HappyLittleTrees',
      avatarSrc: '/avatars/HappyLittleTrees.png',
    },
    body: 'I saw one of Gwen’s works at a con last year and it was amazing! It’s one thing to see the images online, but the texture and depth of the oil paint is really something in person.',
    postedAt: '10:05AM • August 22nd',
  },
  {
    id: crypto.randomUUID(),
    from: {
      name: 'DerrickLevendreaux',
      avatarSrc:
        '/avatars/DerrickLevendreaux.png',
    },
    body: 'I appreciate Gwen’s boundary-pushing approach. It’s innovative. But, I think the composition in some of her work could be more balanced to better reflect the classical aspect she is trying to portray',
    postedAt: '9:27AM • August 22nd',
  },
  {
    id: crypto.randomUUID(),
    from: {
      name: 'HannahBakes',
      avatarSrc: '/avatars/HannahBakes.png',
    },
    body: '❤️ This is postmodernism at its finest. Gwen is challenging our preconceived notions of art and culture. This is not just fan art, this is a cultural dialogue! 👏👏👏',
    postedAt: '5:05PM • August 21st',
  },
  {
    id: crypto.randomUUID(),
    from: {
      name: 'Smitten Kitten',
      avatarSrc: '/avatars/SmittenKitten.png',
    },
    body: 'Oil painting just got LIT 🔥🔥🔥 thanks to Gwen! Shes a wild one, making Monet and Pikachu dance on the same canvas! Mind = BLOWN 🤯💥💫',
    postedAt: '2:09PM • August 21st',
  },
  {
    id: crypto.randomUUID(),
    from: {
      name: 'alice1973',
      avatarSrc: '/avatars/alice1973.png',
    },
    body: '??? why though',
    postedAt: '1:44PM • August 21st',
  },
];
