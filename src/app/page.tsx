import { Feature } from '@/components/feature'
import { Hero } from '@/components/hero'
import { Sponsor } from '@/components/sponsor'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col gap-[200px]'>
      <Hero />
      <Sponsor />
      <Feature />
    </div>
  )
}

export default Page
