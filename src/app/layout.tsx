import { NextAuthSessionProvider } from '@entities/session'
import { ThemeProvider } from '@features/theme'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Header } from '@/widgets'

import './globals.css'

export const metadata: Metadata = {
  title: 'SkillForge',
  description: 'SkillForge - Learn with us!'
}

interface RootLayout {
  children: React.ReactNode
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const RootLayout = ({ children }: RootLayout) => {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider>
          <NextAuthSessionProvider>
            <Header />
            {children}
          </NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
