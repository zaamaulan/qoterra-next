import Image from 'next/image'
import { Search } from './search'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center gap-[70px] pt-36">
      <div className="from-secondary bg-secondary absolute inset-0 h-[85%] rounded-[60px]"></div>
      <div className="z-10 flex grow flex-col items-center gap-6">
        <h1 className="mx-auto max-w-4xl text-center text-7xl leading-tight font-bold text-white">
          Manage Your Team`s Chat With Qoterra
        </h1>
        <p className="mx-auto max-w-3xl text-center text-lg text-white">
          Stay connected to your team and office without any worying about
          distance and remote locations. Get all conveniences by using Qoterra
        </p>
        <div className="flex w-full items-center justify-center gap-2.5">
          <Search />
          <Button>Register</Button>
        </div>
      </div>
      <div className="relative h-[900px] w-[1440px] shadow-[40px_40px_80px_0px_rgba(80,80,80,0.080)]">
        <Image
          src={'/images/hero.png'}
          alt="hero"
          fill
          className="object-contain"
        />
      </div>
    </section>
  )
}
