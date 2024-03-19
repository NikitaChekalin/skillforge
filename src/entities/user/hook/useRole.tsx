import { useNextAuthSession } from './use-next-auth-session'

export const useRole = () => {
  const session = useNextAuthSession()

  return session.data?.user?.role
}
