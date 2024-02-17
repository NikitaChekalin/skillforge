'use client'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Spinner } from '@/shared/ui/spinner'

import { useEmailSignIn } from '../_vm/use-email-sign-in'

export const EmailSignInForm = () => {
  const form = useForm<{ email: string }>({
    defaultValues: {
      email: ''
    }
  })

  const emailSignIn = useEmailSignIn()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => emailSignIn.signIn(data.email))}>
        <div className='grid gap-2'>
          <FormField
            name='email'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='sr-only'>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={emailSignIn.isPending}
                    type='email'
                    autoCorrect='off'
                    autoComplete='email'
                    autoCapitalize='none'
                    placeholder='name@example.com'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={emailSignIn.isPending}>
            {emailSignIn.isPending && (
              <Spinner className='mr-2 h-4 w-4 animate-spin' aria-label='Loading...' />
            )}
            Sign in via Email
          </Button>
        </div>
      </form>
    </Form>
  )
}
