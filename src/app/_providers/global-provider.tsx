'use client'

import { ThemeProvider } from 'next-themes'

interface GlobalProvider {
  children: React.ReactNode
}

export const GlobalProvider = ({ children }: GlobalProvider) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
