'use client'
import { Github } from 'lucide-react'
import { ClientSafeProvider } from 'next-auth/react'

import { Button } from '@/shared/ui/button'
import { Spinner } from '@/shared/ui/spinner'

import { useOAuthSignIn } from '../_vm/use-oauth-sign-in'

interface ProviderButton {
  provider: ClientSafeProvider
}

export const ProviderButton = ({ provider }: ProviderButton) => {
  const oauthSignIn = useOAuthSignIn(provider)

  const getIcon = (provider: ClientSafeProvider) => {
    switch (provider.id) {
      case 'github':
        return <Github className='mr-2 h-4 w-4' />
      default:
        return null
    }
  }

  return (
    <Button
      type='button'
      variant='outline'
      disabled={oauthSignIn.isPending}
      onClick={() => oauthSignIn.signIn()}
    >
      {oauthSignIn.isPending ? (
        <Spinner className='mr-2 h-4 w-4 animate-spin' aria-label='Login' />
      ) : (
        getIcon(provider)
      )}
      {provider.name}
    </Button>
  )
}
