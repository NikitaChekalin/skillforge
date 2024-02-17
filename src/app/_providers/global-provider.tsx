'use client'

import { NextAuthSessionProvider } from '@entities/session'
import { ThemeProvider } from '@features/theme'
import { queryClient } from '@shared/api'
import { QueryClientProvider } from '@tanstack/react-query'

interface GlobalProvider {
  children: React.ReactNode
}

export const GlobalProvider = ({ children }: GlobalProvider) => {
  return (
    <NextAuthSessionProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </NextAuthSessionProvider>
  )
}
