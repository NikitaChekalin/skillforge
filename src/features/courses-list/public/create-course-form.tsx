'use client'

import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@lib/utils'
import { z } from 'zod'

import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'

import { createCourseAction } from '../actions'

interface CreateCourseForm {
  className: string
  revalidatingPagePath: string
}

const createCourseFormSchema = z.object({
  name: z.string().min(4, 'Please enter a course name with at least 4 characters'),
  description: z.string()
})

export const CreateCourseForm = ({ className, revalidatingPagePath }: CreateCourseForm) => {
  const [isCreateTransition, startCreateTransition] = useTransition()
  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createCourseAction({ command: data, revalidatingPagePath })
          })
        })}
        className={cn(className, 'space-y-4')}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Course name...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='Describe your course...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='mt-10' type='submit' disabled={isCreateTransition}>
          Add
        </Button>
      </form>
    </Form>
  )
}
