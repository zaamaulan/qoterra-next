import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href={'/'} className="inline-flex items-center gap-3">
      <Image src="/qoterra.svg" alt="Qoterra Logo" width={37} height={34} />
      <span className="text-[28px] font-medium">Qoterra</span>
    </Link>
  )
}
