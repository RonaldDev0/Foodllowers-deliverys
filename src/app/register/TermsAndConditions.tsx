'use client'
import { Checkbox, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import { ClipboardList } from 'lucide-react'

export function TermsAndConditions ({ termsAndConditions, setTermsAndConditions }: { termsAndConditions: boolean, setTermsAndConditions: Function }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div className='flex justify-center items-center '>
        <Checkbox
          isSelected={termsAndConditions}
          onChange={({ target: { checked } }) => setTermsAndConditions(checked)}
          color='secondary'
        />
        <p onClick={onOpen} className='cursor-pointer hover:opacity-75 transition-all'>
          Términos y condiciones
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
                  pagos a los deliverys se realizarán mensualmente, previa verificación de las entregas realizadas.<br /> <br /> Los deliverys deben confirmar la recepción de pagos y reportar cualquier discrepancia dentro de las 24 horas.<br /> <br />

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
    </>
  )
}
