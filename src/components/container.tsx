import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export const Container = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={cn('container mx-auto', className)}>{children}</div>
}
