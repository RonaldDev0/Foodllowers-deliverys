/* eslint-disable array-callback-return */
'use client'
import { Card, CardHeader, CardBody, CardFooter, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from '@nextui-org/react'
import { useData } from '@/store'
import { CircleDollarSign, ChefHat, Home } from 'lucide-react'
import { useSupabase } from '@/app/providers'
import { useState, useRef, useEffect } from 'react'

export function KitchenTrip () {
  const { supabase } = useSupabase()
  const { currentOrder, currentPosition, setStore } = useData()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [earnings, setEarnings] = useState('')
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [values, setValues] = useState(['', '', '', ''])
  const inputsRef = useRef<any>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!currentOrder) {
      return
    }

    setEarnings('2000')

    fetch('/api/maps_distance', {
      cache: 'no-cache',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        origin: {
          lat: currentPosition?.latitude,
          lng: currentPosition?.longitude
        },
        destination: currentOrder.user_address.geometry.location,
        waypoint: currentOrder.kitchen_address.geometry.location
      })
    })
      .then(res => res.json())
      .then(data => {
        if (!data) {
          return
        }

        setDistance(data.distance)
        setDuration(data.duration)
      })
  }, [currentOrder])

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
                <p>{earnings.toLocaleString()}</p>
              </div>
              <p>{distance}</p>
              <p>{duration}</p>
            </div>
            <div>
              <div className='flex gap-2 items-center'>
                <ChefHat size={28} />
                <p>{currentOrder.kitchen_address.formatted_address}</p>
              </div>
              <div className='bg-white w-[0.5px] h-8 ml-3 my-2'>{}</div>
              <div className='flex items-center gap-2'>
                <Home size={28} />
                <p>{currentOrder?.user_address.formatted_address}</p>
              </div>
            </div>
          </CardBody>
          <CardFooter className='flex gap-2'>
            <Button
              color='primary'
              className='w-full text-lg'
              onClick={() => {
                const { lat, lng } = currentOrder.kitchen_address.geometry.location
                window.open(`https://waze.com/ul?ll=${lat},${lng}&navigate=yes`, '_blank')
              }}
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
