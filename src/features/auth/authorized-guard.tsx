'use client'

import { useEffect } from 'react'
import { useNextAuthSession } from '@entities/user'
import { FullPageSpinner } from '@shared/ui/full-page-spinner'
import { signIn } from 'next-auth/react'

interface AuthorizedGuard {
  children: React.ReactNode
}

const AuthorizedGuard = ({ children }: AuthorizedGuard) => {
  const session = useNextAuthSession()

  const isUnauthorized = session.status === 'unauthenticated'
  const isLoading = session.status === 'loading' || isUnauthorized

  useEffect(() => {
    if (isUnauthorized) {
      signIn()
    }
  }, [isUnauthorized])

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === 'authenticated' && children}
    </>
  )
}

export default AuthorizedGuard
