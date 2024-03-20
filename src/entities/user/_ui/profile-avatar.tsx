import { cn } from '@lib/utils'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'

import { Profile } from '../_domain/types'
import { getProfileLetters } from '../_vm/get-profile-letters'

interface ProfileAvatar {
  profile?: Profile
  className?: string
}
export const ProfileAvatar = ({ profile, className }: ProfileAvatar) => {
  if (!profile) {
    return null
  }

  return (
    <Avatar className={(cn(className), 'w-8 h-8')}>
      <AvatarImage src={profile.image ?? ''} />
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  )
}
