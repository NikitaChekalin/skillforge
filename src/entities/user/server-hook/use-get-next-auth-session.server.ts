import { getServerSession } from 'next-auth'

import { nextAuthConfig } from '../config/next-auth-config'

export const getAppSessionServer = () => getServerSession(nextAuthConfig)
