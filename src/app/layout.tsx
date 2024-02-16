import { cn } from '@lib/utils'
import { Header } from '@widgets/header'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { GlobalProvider } from './_providers/global-provider'

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
        <GlobalProvider>
          {/* <Header /> */}
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}

export default RootLayout
