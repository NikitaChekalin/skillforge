'use client'

import { NextAuthSessionProvider } from '@entities/session'
import { ThemeProvider } from 'next-themes'

interface GlobalProvider {
  children: React.ReactNode
}

export const GlobalProvider = ({ children }: GlobalProvider) => {
  return (
    <ThemeProvider>
      <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
    </ThemeProvider>
  )
}
