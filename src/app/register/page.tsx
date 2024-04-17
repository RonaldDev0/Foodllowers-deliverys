'use client'
import { useState, useEffect, FC } from 'react'
import { useData } from '@/store'
import { CardItem } from './CardItem'
import { registerSteps } from './registerSteps'
import { TermsAndConditions } from './TermsAndConditions'
import { Button } from '@nextui-org/react'
import { useSupabase } from '@/app/providers'
import { useRouter } from 'next/navigation'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

const Toast: FC<ToastProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) {
    return null
  }

  return (
    <div className='fixed bottom-0 right-0 m-6 animate-bounce'>
      <div className='bg-green-500 border-l-4 border-green-700 text-white px-4 py-2 shadow-md rounded-lg transform transition duration-500 ease-in-out hover:scale-105'>
        <div className='flex items-center justify-center gap-5'>
          <span className='font-bold'>{message}</span>
          <button onClick={onClose} className='text-2xl leading-none hover:text-gray-300'>&times;</button>
        </div>
      </div>
    </div>
  )
}

function validateForm (delivery: any, termsAndConditions: boolean) {
  if (!delivery.phone_number) {
    return { success: false, error: 'Ingresa tu número de celular antes de continuar' }
  } else if (!delivery.identification_card || !delivery.identification_card_front || !delivery.identification_card_back) {
    return { success: false, error: 'Ingresa los datos de tu cedula antes de continuar' }
  } else if (!delivery.license) {
    return { success: false, error: 'Ingresa los datos de tu licencia antes de continuar' }
  } else if (!delivery.property_card) {
    return { success: false, error: 'Ingresa los datos de tu targeta de propiedad antes de continuar' }
  } else if (!delivery.bank_account) {
    return { success: false, error: 'Ingresa los datos de tu cuenta bancaria antes de continuar' }
  } else if (!termsAndConditions) {
    return { success: false, error: 'Debes aceptar los terminos y condiciones antes de continuar' }
  }

  return { success: true }
}

export default function Register () {
  const router = useRouter()
  const { deliveryId, delivery, setStore } = useData()
  const { supabase } = useSupabase()

  const [termsAndConditions, setTermsAndConditions] = useState(false)
  const [toast, setToast] = useState<null | string>(null)

  function showToast (message: string) {
    setToast(message)
    setTimeout(() => {
      setToast(null)
    }, 5000)
  }

  const handleSubmit = () => {
    const { error } = validateForm(delivery, termsAndConditions)

    if (error) {
      showToast(error)
      return
    }

    supabase
      .from('deliverys')
      .update({ register_step: 'data_validation' })
      .eq('id', deliveryId)
      .select()
      .then(({ data, error }) => {
        if (error) {
          return
        }
        setStore('delivery', data[0])
      })
  }

  const logout = () => {
    supabase.auth.signOut()
      .then(() => setStore('user', null))
  }

  useEffect(() => {
    if (!delivery) {
      return
    }
    if (delivery.register_complete) {
      router.push('/')
    }
  }, [delivery])

  return (
    <main className='fixed z-50 w-full h-screen top-0 left-0 flex flex-col justify-center gap-20 items-center backdrop-blur-md'>
      <Toast message={toast || ''} isVisible={!!toast} onClose={() => setToast(null)} />
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
          <TermsAndConditions
            termsAndConditions={termsAndConditions}
            setTermsAndConditions={setTermsAndConditions}
          />
        </div>
        <Button
          onClick={handleSubmit}
          color='secondary'
          className='w-96 font-semibold text-lg'
        >
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
