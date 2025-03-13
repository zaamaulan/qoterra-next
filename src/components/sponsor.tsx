import { sponsors } from '@/data/sponsor'
import Image from 'next/image'
import React from 'react'

export const Sponsor = () => {
  return (
    <section className="container mx-auto space-y-20">
      <p className="text-center text-lg text-zinc-500">
        Supported and being used with large company like
      </p>
      <div className="flex items-center justify-between gap-10">
        {sponsors.map((sponsor) => (
          <div key={sponsor.alt} className="relative h-[40px] w-full">
            <Image
              src={sponsor.logo}
              alt={sponsor.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
