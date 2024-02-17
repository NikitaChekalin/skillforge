import { Separator } from '@/shared/ui/separator'

const NewUserPage = async () => {
  return (
    <main className='space-y-6 py-14 container  max-w-[600px]'>
      <div>
        <h3 className='text-lg font-medium'>The final step</h3>
        <p className='text-sm text-muted-foreground'>
          Update your profile, this is how other users will see you on the site
        </p>
      </div>
      <Separator />
    </main>
  )
}
export default NewUserPage
