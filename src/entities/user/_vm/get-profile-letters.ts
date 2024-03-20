import { Profile } from '../_domain/types'

import { getProfileDisplayName } from './get-profile-display-name'

export const getProfileLetters = (profile: Profile) => {
  const displayName = getProfileDisplayName(profile)

  const [firstLetter, secondLetter] = displayName.split('@')[0].split(/\.|\s|-|_/)

  if (!secondLetter) {
    return `${firstLetter[0]?.toUpperCase() ?? ''}${firstLetter[1]?.toUpperCase() ?? ''}`
  }

  return `${firstLetter[0]?.toUpperCase() ?? ''}${secondLetter[0]?.toUpperCase() ?? ''}`
}
