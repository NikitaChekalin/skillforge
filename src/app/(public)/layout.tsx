import { Header } from '@widgets/header'

interface Layout {
  children: React.ReactNode
}

const Layout = async ({ children }: Layout) => {
  return (
    <>
      <Header variant='public' />
      {children}
    </>
  )
}

export default Layout
