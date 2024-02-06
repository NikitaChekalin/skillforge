import { Header } from '@widgets'

interface Layout {
  children: React.ReactNode
}

const Layout = async ({ children }: Layout) => {
  return (
    <>
      <Header variant='auth' />
      {children}
    </>
  )
}

export default Layout
