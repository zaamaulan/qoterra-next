import React from 'react'
import { Search } from './search'
import { Button } from './ui/button'

export const Cta = () => {
  return (
    <section className="container mx-auto">
      <div
        className="bg-secondary flex flex-col items-center justify-center space-y-8 rounded-[40px] bg-cover bg-center bg-no-repeat py-40"
        style={{ backgroundImage: `url("/bg-cta.svg")` }}
      >
        <h2 className="text-center text-[56px] leading-none font-bold text-white">
          Let`s Start Something Great
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg text-white">
          We Offers a wide range of features that are specially designed to help
          teams stay organized and productive , such as task, assaignments, file
          sharing, and chat routing.
        </p>
        <div className="flex w-full items-center justify-center gap-2.5">
          <Search />
          <Button>Free Trial</Button>
        </div>
      </div>
    </section>
  )
}
