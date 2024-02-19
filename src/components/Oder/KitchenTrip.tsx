/* eslint-disable array-callback-return */
'use client'
import { Card, CardHeader, CardBody, CardFooter, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from '@nextui-org/react'
import { useData } from '@/store'
import { CircleDollarSign, ChefHat, Home } from 'lucide-react'
import { useSupabase } from '@/app/providers'
import { useState, useRef } from 'react'

export function KitchenTrip () {
  const { supabase } = useSupabase()
  const { currentOrder, deliveryId, deliveryData, setStore } = useData()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [values, setValues] = useState(['', '', '', ''])
  const inputsRef = useRef<any>([])
  const [error, setError] = useState<string | null>(null)

  if (!currentOrder) {
    return
  }

  const focusNextInput = (index: number) => {
    if (index < 3) {
      inputsRef.current[index + 1].focus()
    }
  }

  const handleChange = (index: number) => (e: any) => {
    const inputValue = e.target.value
    if (inputValue.length <= 1 && !isNaN(inputValue)) {
      setValues(values.map((value, i) => (i === index ? inputValue : value)))
      if (inputValue.length !== 0) {
        focusNextInput(index)
      }
    }
  }

  const acceptOrder = () => {
    supabase
      .from('orders')
      .update({ order_state: 'recogiendo...' })
      .eq('id', currentOrder.id)
      .select('*')
      .then(({ data }) => {
        if (data?.length) {
          supabase
            .from('deliverys')
            .update({ free: false })
            .eq('id', deliveryId)
            .select('*')
            .then(({ data }) => {
              if (data?.length) {
                const { latitude, longitude } = currentOrder.kitchen_address
                window.open(`https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`, '_blank')
              }
            })
        }
      })
  }

  const handleSubmit = () => {
    let complete = false

    values.map(value => {
      if (value === '') {
        complete = true
      }
    })

    if (complete) {
      setError('Completa los campos')
      return
    }

    supabase
      .from('kitchens')
      .select('activation_code')
      .eq('id', currentOrder.kitchen_id)
      .then(({ data }) => {
        if (!data?.length) {
          return
        }

        const { activation_code: activationCode } = data[0]

        if (!(activationCode === values.join(''))) {
          setError('Codigo incorrecto')
          return
        }

        setError(null)

        if (error) {
          return
        }

        setStore('tripState', 'reciveOrder')
      })
  }

  return (
    <>
      <div className='fixed w-screen h-screen flex top-0 left-0 justify-center items-center'>
        <Card className='p-2'>
          <CardHeader className='flex justify-center font-semibold'>
            Detalle de la entrega
          </CardHeader>
          <CardBody className='w-96 gap-8'>
            <div className='flex justify-around font-semibold text-xl'>
              <div className='flex justify-center items-center gap-1'>
                <CircleDollarSign size={28} />
                <p>{deliveryData.earnings.toLocaleString()}</p>
              </div>
              <p>{deliveryData.distance}</p>
            </div>
            <div>
              <div className='flex gap-2 justify-center items-center'>
                <ChefHat size={28} />
                <p>{currentOrder?.kitchen_address?.address}</p>
              </div>
              <div className='bg-white w-[0.5px] h-8 ml-3 my-2'>{}</div>
              <div className='flex items-center gap-2'>
                <Home size={28} />
                <p>{currentOrder?.user_address.complete}</p>
              </div>
            </div>
          </CardBody>
          <CardFooter className='flex gap-2'>
            <Button
              color='primary'
              className='w-full text-lg'
              onClick={acceptOrder}
            >
              Como llegar?
            </Button>
            <Button
              color='secondary'
              className='w-full text-lg'
              onPress={onOpen}
            >
              ya llegúe
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Número de confirmación
              </ModalHeader>
              <ModalBody>
                <p>Pidele el número de confirmación al restaurante e ingresalo en los siguientes campos:</p>
                {!!error && <p className='text-red-700'>{error}</p>}
                <div className='flex gap-3'>
                  {values.map((value, index) => (
                    <Input
                      key={index}
                      value={value}
                      onChange={handleChange(index)}
                      ref={ref => (inputsRef.current[index] = ref)}
                      className='text-center text-lg'
                      isInvalid={!!error}
                      variant='bordered'
                    />
                  ))}
                </div>
              </ModalBody>
              <ModalFooter className='flex justify-center'>
                <Button
                  color='danger'
                  variant='light'
                  className='w-full'
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  color='secondary'
                  className='w-full'
                  onPress={handleSubmit}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
