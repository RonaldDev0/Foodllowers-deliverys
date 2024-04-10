'use client'
import { useData } from '@/store'
import { CardItem } from './CardItem'
import { registerSteps } from './registerSteps'
import { TermsAndConditions } from './TermsAndConditions'
import { Button } from '@nextui-org/react'
import { useSupabase } from '@/app/providers'
import { useRouter } from 'next/navigation'

export default function Register () {
  const router = useRouter()
  const { delivery, setStore } = useData()
  const { supabase } = useSupabase()

  const logout = () => {
    supabase.auth.signOut()
      .then(() => setStore('user', null))
  }

  if (delivery.register_complete) {
    router.push('/')
  }

  return (
    <main className='fixed z-50 w-full h-screen top-0 left-0 flex flex-col justify-center gap-20 items-center backdrop-blur-md'>
      <div className='flex flex-col gap-10 justify-center items-center'>
        <p className='font-semibold text-xl'>Completa tu registro</p>
        <div className='flex flex-col gap-2'>
          {
            registerSteps.map(({ icon, title, component, tableReference }, index) => (
              <CardItem
                key={index}
                icon={icon}
                title={title}
                component={component}
                tableReference={tableReference}
              />
            ))
        }
          <TermsAndConditions />
        </div>
        <Button color='secondary' className='w-96 font-semibold text-lg'>
          Continuar
        </Button>
      </div>
      <div className='w-full flex justify-center'>
        <p className='text-purple-700 font-semibold cursor-pointer' onClick={logout}>
          Cerrar sesión
        </p>
      </div>
    </main>
  )
}
