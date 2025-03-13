type FeatureAccordion = {
  title: string
  content: string
}

type Feature = {
  title: string
  description: string
  image: string
  reverse: boolean
  accordion?: FeatureAccordion[]
  cta?: string
}