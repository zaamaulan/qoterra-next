import { footer } from '@/data/footer'
import { Fragment } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Separator } from './ui/separator'

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto">
        <div className="flex justify-between gap-38 py-32">
          <FooterBrand />
          <FooterSection />
        </div>
        <Separator className="bg-neutral-400" />
        <FooterCopyright />
      </div>
    </footer>
  )
}

const FooterBrand = () => (
  <div className="space-y-7">
    <div>
      <footer.brand.logo />
      <span className="sr-only">{footer.brand.name}</span>
    </div>
    <p className="max-w-sm">{footer.brand.tagline}</p>
  </div>
)

const FooterSection = () => (
  <ul className="flex gap-28 space-y-8">
    {footer.sections.map((section) => (
      <li key={section.title} className="space-y-8">
        <p className="font-bold">{section.title}</p>
        <FooterLink section={section} />
      </li>
    ))}
  </ul>
)

const FooterLink = ({ section }: { section: FooterSection }) => (
  <ul className="space-y-8">
    {section.links ? (
      section.links.map((link) => (
        <li key={link}>
          <Link href={'#'}>{link}</Link>
        </li>
      ))
    ) : (
      <Fragment>
        <li>
          <a href={`mailto:${section.email}`}>{section.email}</a>
        </li>
        <li>
          <a href={`tel:${section.phone}`}>{section.phone}</a>
        </li>
        <Button>Help Center</Button>
      </Fragment>
    )}
  </ul>
)

const FooterCopyright = () => (
  <div className="flex items-center justify-between py-12">
    <p>{footer.copyright.text}</p>
    <p>{footer.copyright.policies.join(', ')}</p>
  </div>
)
