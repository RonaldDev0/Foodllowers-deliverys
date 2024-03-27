'use client'
import { useState } from 'react'
import { Select, SelectItem, Input, Button } from '@nextui-org/react'
// import { useData } from '@/store'
// import { useSupabase } from '@/app/providers'

const banks = [
  {
    name: 'Bancolombia',
    value: 'Bancolombia'
  },
  {
    name: 'Banco Caja Social',
    value: 'Banco Caja Social'
  },
  {
    name: 'Banco Davivienda',
    value: 'Banco Davivienda'
  },
  {
    name: 'Banco de Bogotá',
    value: 'Banco de Bogotá'
  },
  {
    name: 'Banco de la República',
    value: 'Banco de la República'
  },
  {
    name: 'Banco de Occidente',
    value: 'Banco de Occidente'
  },
  {
    name: 'BBVA Colombia',
    value: 'BBVA Colombia'
  },
  {
    name: 'Banco Pichincha',
    value: 'Banco Pichincha'
  },
  {
    name: 'Banco Santander Colombia',
    value: 'Banco Santander Colombia'
  },
  {
    name: 'Financiera Comultrasan',
    value: 'Financiera Comultrasan'
  },
  {
    name: 'Itaú Corpbanca Colombia',
    value: 'Itaú Corpbanca Colombia'
  }
]

export function BankAccount ({ onClose }: { onClose: any }) {
  // const { deliveryId, setStore } = useData()
  // const { supabase } = useSupabase()

  const [bank, setBank] = useState<any>(null)
  const [bankError, setBankError] = useState<any>(null)
  const [bankNumber, setBankNumber] = useState<string>('')
  const [bankNumberError, setBankNumberError] = useState<any>(null)

  const handleChangeSelect = (e: any) => {
    setBank(e.target.value)
    setBankError(null)
  }

  const handleChangeInput = (e: any) => {
    setBankNumber(e.target.value)
    setBankNumberError(null)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!bank) {
      setBankError('Selecciona tu banco')
      return
    }
    if (bankNumber.length !== 20) {
      setBankNumberError('Cuenta de banco invalida')
      return
    }

    // supabase
    //   .from('deliverys')
    //   .update({ bank_account: { bank, bankNumber } })
    //   .eq('id', deliveryId)
    //   .select('*')
    //   .then(res => {
    //     if (res.error) {
    //       return
    //     }
    //     setStore('delivery', res.data[0])
    //     onClose()
    //   })

    onClose()
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Estimado repartidor, para agilizar los pagos de tus entregas, necesitamos que nos proporciones los detalles de tu cuenta bancaria. Esta información será utilizada exclusivamente para realizar los pagos correspondientes a tu trabajo. ¡Gracias por tu colaboración!</p>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <Select
          label='Selecciona tu cuenta de banco'
          onChange={handleChangeSelect}
          errorMessage={bankError && bankError}
          isInvalid={!!bankError}
        >
          {banks.map(bank => (
            <SelectItem
              key={bank.value}
              value={bank.value}
            >
              {bank.name}
            </SelectItem>
          ))}
        </Select>
        <Input
          label='Número de cuenta'
          type='number'
          value={bankNumber}
          onChange={handleChangeInput}
          errorMessage={bankNumberError && bankNumberError}
          isInvalid={!!bankNumberError}
        />
        <Button
          type='submit'
          color='secondary'
          className='text-lg font-semibold mt-4'
        >
          Guardar
        </Button>
      </form>
    </div>
  )
}
