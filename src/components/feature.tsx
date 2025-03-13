import { features } from '@/data/feature'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from './ui/button'

export const Feature = () => {
  return (
    <section className="container mx-auto">
      <div className="space-y-4">
        <h2 className="mx-auto max-w-5xl text-center text-[56px] leading-tight font-medium">
          Select the{' '}
          <span className="text-center font-semibold">Best Chat Solutions</span>{' '}
          for Your <span className="font-semibold">Team Management</span>
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg">
          Effortlessly manage and organize chats, task, and files in one central
          location with our Qoterra chat management solution
        </p>
        <FeatureSection />
      </div>
    </section>
  )
}

const FeatureSection = () => (
  <div>
    {features.map((feature) => (
      <div key={feature.title} className="grid grid-cols-2 gap-32">
        <div
          className={cn('relative aspect-square', feature.reverse && 'order-2')}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-5 self-center">
          <h3 className="text-[44px] font-semibold">{feature.title}</h3>
          <p className="text-lg text-zinc-500">{feature.description}</p>
          {feature.accordion && <FeatureAccordion feature={feature} />}
          {feature.cta && <Button>{feature.cta}</Button>}
        </div>
      </div>
    ))}
  </div>
)

const FeatureAccordion = ({ feature }: { feature: Feature }) => (
  <Accordion
    type="single"
    collapsible
    className="flex flex-col gap-3"
    defaultValue={feature.accordion?.[0].title}
  >
    {feature.accordion?.map((item) => (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="w-full rounded-[18px] border-none bg-stone-50 px-6"
      >
        <AccordionTrigger className="text-[30px] font-medium hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="text-lg text-zinc-500">
          {item.content}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)
