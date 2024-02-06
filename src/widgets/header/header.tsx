import { HeaderVariants } from './types'
import { Layout, Logo, Navigation, Profile, ThemeToggler } from './ui'

interface Header {
  variant: HeaderVariants
}

export const Header = ({ variant }: Header) => {
  const isPrivate = variant !== 'public'

  return (
    <Layout
      logo={<Logo />}
      navigation={<Navigation />}
      actions={<ThemeToggler />}
      profile={isPrivate && <Profile />}
    />
  )
}
