import AuthorizedGuard from '@features/auth/authorized-guard'
import { Header } from '@widgets/header'

interface Layout {
  children: React.ReactNode
}

const Layout = async ({ children }: Layout) => {
  return (
    <>
      <Header variant='private' />
      <AuthorizedGuard>{children}</AuthorizedGuard>
    </>
  )
}

export default Layout
