'use client'
import Image from 'next/image'
import { Button, Card, CardHeader, CardBody, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox } from '@nextui-org/react'
import { ClipboardList } from 'lucide-react'
import { useSupabase } from '../providers'
import { useState } from 'react'

export default function Login () {
  const { supabase } = useSupabase()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { isOpen: isOpenModal, onOpen: onOpenModal, onOpenChange: onOpenChangeModal } = useDisclosure()
  const [checked, setCkecked] = useState(false)

  function login () {
    if (!checked) {
      onOpenModal()
      return
    }

    supabase.auth
      .signInWithOAuth({
        provider: 'google'
        // options: { redirectTo: window.location.origin + '/api/auth/callback' }
      })
  }

  return (
    <main className='h-screen flex justify-center items-center'>
      <Image
        src='/img/LogName.png'
        alt='Google'
        width='450'
        height='450'
        className='fixed
        [@media(max-width:800px)]:top-32
        [@media(max-width:1400px)]:top-28
        [@media(min-width:1500px)]:top-60'
      />
      <Card className='p-10 [@media(max-width:800px)]:p-2'>
        <CardHeader className='justify-center text-2xl'>
          Iniciar sesión
        </CardHeader>
        <Button
          onPress={() => login()}
          className='flex justify-center items-center gap-2 w-80 py-6 text-lg bg-zinc-950'
        >
          <Image
            src='/icons/google.svg'
            alt='Google'
            width='35'
            height='45'
          />
          <p>
            Continuar con Google
          </p>
        </Button>
        <CardBody className='justify-center items-center flex flex-col gap-6'>
          <div className='flex justify-center items-center gap-2'>
            <Checkbox isSelected={checked} onChange={() => setCkecked(!checked)} />
            <p className='text-purple-500 cursor-pointer' onClick={onOpen}>
              Terminos y Condiciones de Uso
            </p>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {() => (
                <>
                  <ModalHeader>
                    <div className='flex flex-col gap-3 justify-center items-center w-full'>
                      <ClipboardList size={30} />
                      <p className='font-semibold text-lg'>
                        Términos y Condiciones de Uso
                      </p>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className='overflow-y-auto h-[75vh]'>
                      <b>1. Información General:</b> <br /> <br />
                      Los deliverys deben aceptar estos términos y condiciones para operar a través de la plataforma de Foodllowers.<br /> <br /> Foodllowers se reserva el derecho de modificar estos términos en cualquier momento.<br /> <br />

                      <b>2. Responsabilidades:</b> <br /> <br />
                      Los deliverys son responsables de la entrega segura y puntual de los productos.<br /> <br /> Deben informar cualquier incidente relacionado con la entrega de inmediato a Foodllowers.<br /> <br />

                      <b>3. Políticas de Pago:</b> <br /> <br />
                      Los pagos a los deliverys se realizarán semanalmente, previa verificación de las entregas realizadas.<br /> <br /> Los deliverys deben confirmar la recepción de pagos y reportar cualquier discrepancia dentro de las 24 horas.<br /> <br />

                      <b>4. Uso del Servicio:</b> <br /> <br />
                      Los deliverys deben utilizar la app exclusivamente para fines relacionados con la entrega de pedidos de Foodllowers.<br /> <br /> El uso no autorizado de la app resultará en la terminación del contrato.<br /> <br />

                      <b>5. Privacidad:</b> <br /> <br />
                      Los deliverys deben proteger la confidencialidad de la información del usuario obtenida durante el proceso de entrega.<br /> <br /> Cualquier violación de esta política puede resultar en la suspensión de la cuenta.<br /> <br />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    {}
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Modal isOpen={isOpenModal} onOpenChange={onOpenChangeModal}>
            <ModalContent>
              {() => (
                <>
                  <ModalHeader>
                    <div className='flex flex-col gap-3 justify-center items-center w-full'>
                      <ClipboardList size={30} />
                      <p className='font-semibold text-lg'>
                        Términos y Condiciones de Uso
                      </p>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    para continuar debes aceptar los términos y condiciones de uso
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardBody>
      </Card>
    </main>
  )
}
