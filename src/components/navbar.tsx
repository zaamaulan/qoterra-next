import { navlinks } from '@/data/nav'
import { Logo } from './logo'
import { Navlink } from './navlink'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <header className="relative container mx-auto flex items-center justify-between py-5">
      <Logo />
      <nav className="absolute left-1/2 -translate-x-1/2">
        <ul className="gap flex items-center gap-11">
          <Navlink links={navlinks} />
        </ul>
      </nav>
      <div className="flex items-center gap-3.5">
        <Button variant={'outline'}>Login</Button>
        <Button>Demo</Button>
      </div>
    </header>
  )
}
