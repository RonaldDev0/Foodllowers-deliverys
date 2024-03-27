import { Input, Button } from '@nextui-org/react'

export function IdentificationCard ({ onClose }: { onClose: any }) {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Estimado repartidor, para completar tu registro en nuestra plataforma, necesitamos que nos proporciones el número de tu cédula. Esta información será utilizada exclusivamente para fines de identificación. ¡Gracias por tu colaboración!</p>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <Input type='number' placeholder='Número de identificación' />
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
