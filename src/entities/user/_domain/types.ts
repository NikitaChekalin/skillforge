import { Nullable } from '@shared/types'

export type UserId = string
export type Role = 'ADMIN' | 'USER'

export const ROLES: Record<Role, Role> = {
  ADMIN: 'ADMIN',
  USER: 'USER'
}

export type UserEntity = {
  id: UserId
  email: string
  role: Role
  emailVerified?: Nullable<Date>
  name?: Nullable<string>
  image?: Nullable<string>
}

export type SessionEntity = {
  user: {
    id: UserId
    email: string
    role: Role
    name?: Nullable<string>
    image?: Nullable<string>
  }
  expires: number
}

export type Profile = {
  email: string
  name?: Nullable<string>
  image?: Nullable<string>
}
