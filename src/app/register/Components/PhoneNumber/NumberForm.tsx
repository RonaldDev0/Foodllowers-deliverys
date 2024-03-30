'use client'
import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { z } from 'zod'

const numberSchema = z.string().refine(value => {
  const numberPattern = /^3\d{9}$/
  return numberPattern.test(value)
},
{
  message: 'Número invalido'
})

export function NumberForm ({ setStep, setNumber, number, createCode }: { setStep: Function, setNumber: Function, number: string, createCode: Function }) {
  const [error, setError] = useState<any>(null)

  const handleChange = (e: any) => {
    setNumber(e.target.value)
    setError(null)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    try {
      setNumber(numberSchema.parse(number))
      createCode()
      setStep(1)
    } catch {
      setError('Número invalido')
    }
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Estimado repartidor, para mejorar nuestra comunicación y coordinación, necesitamos que nos proporciones tu número de celular. Esta información será utilizada exclusivamente para contactarte en relación a tus entregas. ¡Gracias por tu colaboración!</p>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <Input
          type='number'
          placeholder='Número de celular'
          startContent='+57 '
          value={number}
          onChange={handleChange}
          errorMessage={error}
          isInvalid={!!error}
        />
        <Button
          type='submit'
          color='secondary'
          className='text-lg font-semibold mt-4'
        >
          Siguiente
        </Button>
      </form>
    </div>
  )
}
