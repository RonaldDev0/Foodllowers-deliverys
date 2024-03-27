'use client'
import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'

interface IProps {
  setStep: Function,
  code: any,
  onClose: Function
}

export function CodeForm ({ setStep, code, onClose }: IProps) {
  const [input, setInput] = useState('')
  const [error, setError] = useState<any>(null)

  const handleChange = (e: any) => {
    setInput(e.target.value)
    setError(null)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (code !== input) {
      setError('Codigo incorrecto')
      return
    }
    console.log('Success!')
    onClose && onClose()
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Para confirmar tu número de celular, ingresa el código que hemos enviado a tu número. Este paso es importante para asegurar la seguridad de tu cuenta y para poder mantenernos en contacto contigo durante el proceso de entrega. ¡Gracias por tu cooperación!</p>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <Input
          type='number'
          placeholder='Código de verificación'
          value={input}
          onChange={handleChange}
          errorMessage={error}
          isInvalid={!!error}
        />
        <Button
          type='submit'
          color='secondary'
          className='text-lg font-semibold mt-4'
        >
          Guardar
        </Button>
      </form>
      <div className='w-full flex justify-center'>
        <p className='text-purple-700 font-semibold cursor-pointer' onClick={() => setStep(0)}>Cambiar el número</p>
      </div>
    </div>
  )
}
