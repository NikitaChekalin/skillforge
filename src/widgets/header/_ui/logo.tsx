import Link from 'next/link'

import { LogoIcon } from '@/shared/ui/logo-icon'

export const Logo = () => {
  return (
    <Link className='flex items-center space-x-2' href='/'>
      <LogoIcon className='h-6 w-6' />
      <span className='font-bold inline-block'>SkillForge</span>
    </Link>
  )
}
