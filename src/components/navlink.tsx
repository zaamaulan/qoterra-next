import Link from 'next/link'
import React from 'react'

export const Navlink = ({ links }: { links: Navlink[] }) => {
  return (
    <>
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </>
  )
}
