import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className='flex items-start md:items-center gap-10 text-sm font-medium flex-col md:flex-row '>
      <Link className='transition-colors hover:text-foreground/80 text-foreground/60' href='/map'>
        Map
      </Link>
      <Link className='transition-colors hover:text-foreground/80 text-foreground/60' href='/learn'>
        Learn
      </Link>
      <Link
        className='transition-colors hover:text-foreground/80 text-foreground/60'
        href='/courses'
      >
        Courses
      </Link>
    </nav>
  )
}
