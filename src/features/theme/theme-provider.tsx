'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ThemeProvider {
  children?: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProvider) => {
  return (
    <NextThemesProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
