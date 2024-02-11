'use client'
import { SessionProvider } from 'next-auth/react'
import { ProcessContextProvider } from '@/app/(ProcessContext)/ProcessContext'


const Provider = ({children, session}) => {
  
    return (
      <SessionProvider session={session}>
          <ProcessContextProvider>
              {children}
          </ProcessContextProvider>
      </SessionProvider>
    )
}


export default Provider