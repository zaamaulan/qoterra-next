type FooterCopyright = {
  text: string
  policies: string[]
}

type FooterSection = {
  title: string
  links?: string[]
  email?: string
  phone?: string
}

type FeatureBrand = {
  name: string
  logo: React.FC
  tagline: string
}

type Footer = {
  brand: FooterBrand
  sections: FooterSection[]
  copyright: FooterCopyright
}
