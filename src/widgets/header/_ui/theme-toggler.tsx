'use client'

import { Button } from '@shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@shared/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { USER_THEMES } from '../constants'

export const ThemeToggler = () => {
  const { setTheme, theme = 'system' } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer' />
          <Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer' />
          <span className='sr-only'>Switcher theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {USER_THEMES.map(({ label, value }) => (
          <DropdownMenuItem key={label} className='cursor-pointer' onClick={() => setTheme(value)}>
            {theme === value ? `${label} ✓` : label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
