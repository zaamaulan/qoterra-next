import { Logo } from '@/components/logo'

type Footer = {
  brand: {
    name: string
    logo: React.FC
    tagline: string
  }
  sections: {
    title: string
    links?: string[]
    email?: string
    phone?: string
  }[]
  copyright: {
    text: string
    policies: string[]
  }
}

export const footer: Footer = {
  brand: {
    name: 'Qoterra',
    logo: Logo,
    tagline:
      'Effortlessly manage and organize chats, tasks, and files in one centeral location with Qoterra chat management solutions',
  },
  sections: [
    {
      title: 'Navigate',
      links: ['Home', 'About', 'Product', 'Feature', 'Pricing'],
    },
    {
      title: 'Support Us',
      links: ['FAQ`s', 'Contact Us', 'Support Center', 'Security'],
    },
    {
      title: 'Resources',
      links: ['Community', 'Contact', 'Tems of service'],
    },
    {
      title: 'Contact US',
      email: 'qoterra@business.com',
      phone: '+91-80-65652545',
    },
  ],
  copyright: {
    text: '© 2023 Qoterra,All right reserved',
    policies: [
      'Terms & Conditions',
      'Privacy Policy',
      'Cookies Policy',
      'Sitemap',
    ],
  },
} as const
