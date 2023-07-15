export async function getNavLinks() {
  await delay(2500);

  return LINKS;
}

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const LINKS = [
  {
    slug: 'platform',
    label: 'Platform',
    href: '/platform',
    type: 'primary',
  },
  {
    slug: 'solutions',
    label: 'Solutions',
    href: '/solutions',
  },
  {
    slug: 'integrations',
    label: 'Integrations',
    href: '/integrations',
  },
  {
    slug: 'docs',
    label: 'Docs',
    href: '/documentation/start-here',
  },
  {
    slug: 'pricing',
    label: 'Pricing',
    href: '/pricing',
  },
];
