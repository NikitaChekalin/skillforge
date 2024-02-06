import { Button } from '@shared/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@shared/ui/sheet'
import { Menu } from 'lucide-react'

interface Layout {
  logo: React.ReactNode
  navigation: React.ReactNode
  profile: React.ReactNode
  actions?: React.ReactNode
}

export const Layout = ({ logo, navigation, profile, actions }: Layout) => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center'>
        <div className='md:hidden mr-2'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <SheetHeader className=' border-b pb-5 mb-5'>{logo}</SheetHeader>
              {navigation}
            </SheetContent>
          </Sheet>
        </div>

        <div className='mr-4 hidden md:flex mr-4'>{logo}</div>
        <div className='items-center flex-1 flex'>
          <div className='hidden md:flex'>{navigation}</div>
          <div className='flex flex-1 items-center justify-end space-x-3 '>
            {actions}
            {profile}
          </div>
        </div>
      </div>
    </header>
  )
}