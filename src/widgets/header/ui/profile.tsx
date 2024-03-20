'use client'

import { getProfileDisplayName, ProfileAvatar, useNextAuthSession } from '@entities/user'
import { SignInButton } from '@features/auth/sign-in-button'
import { useSignOut } from '@features/auth/use-sign-out'
import { Button } from '@shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@shared/ui/dropdown-menu'
import { Skeleton } from '@shared/ui/skeleton'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'

export const Profile = () => {
  const session = useNextAuthSession()
  const { signOut, isPending: isLoadingSignOut } = useSignOut()

  if (session.status === 'loading') {
    return <Skeleton className='w-8 h-8 rounded-full' />
  }

  if (session.status === 'unauthenticated') {
    return <SignInButton />
  }

  const profile = session?.data?.user

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='p-px rounded-full self-center h-8 w-8'>
          <ProfileAvatar profile={profile} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 mr-2 '>
        <DropdownMenuLabel>
          <p>My account</p>
          {profile && (
            <p className='text-xs text-muted-foreground overflow-hidden text-ellipsis'>
              {getProfileDisplayName(profile)}
            </p>
          )}
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/profile/1`}>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem disabled={isLoadingSignOut} onClick={() => signOut()}>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Exit</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
