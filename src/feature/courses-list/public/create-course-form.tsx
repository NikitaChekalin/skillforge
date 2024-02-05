'use client'

import { useTransition } from 'react'
import { Form, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/shared/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { createCourseAction } from '../actions'

interface CreateCourseForm {
  revalidatingPagePath: string
  className: string
}

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string()
})

export const CreateCourseForm = ({ revalidatingPagePath, className }: CreateCourseForm) => {
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
        className={cn(className, 'space-x-8')}
        onSubmit={form.handleSubmit((command) => {
          startCreateTransition(async () => {
            createCourseAction({ revalidatingPagePath, command })
          })
        })}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Course</FormLabel>
              <FormControl>
                <Input placeholder='Name...' {...field} />
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
              <FormLabel>Description of Course</FormLabel>
              <FormControl>
                <Input placeholder='Description...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isCreateTransition}>
          Create
        </Button>
      </form>
    </Form>
  )
}
