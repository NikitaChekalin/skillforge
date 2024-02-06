import { Layout } from './_ui/layout'
import { Logo } from './_ui/logo'
import { Navigation } from './_ui/navigation'
import { Profile } from './_ui/profile'
import { ThemeToggler } from './_ui/theme-toggler'

export const Header = () => {
  return (
    <Layout
      logo={<Logo />}
      navigation={<Navigation />}
      actions={<ThemeToggler />}
      profile={<Profile />}
    />
  )
}
