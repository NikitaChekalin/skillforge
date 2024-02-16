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
  name: z.string(),
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
              <FormLabel>Название </FormLabel>
              <FormControl>
                <Input placeholder='название...' {...field} />
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
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder='описание...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='mt-8' type='submit' disabled={isCreateTransition}>
          Добавить
        </Button>
      </form>
    </Form>
  )
}
