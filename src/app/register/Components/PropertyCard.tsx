import { Input, Button } from '@nextui-org/react'

export function PropertyCard ({ onClose }: { onClose: any }) {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Estimado repartidor, para confirmar que el vehículo que utilizas para las entregas es de tu propiedad, necesitamos que nos proporciones los detalles de tu tarjeta de propiedad. Esta información será utilizada exclusivamente para fines de verificación. ¡Gracias por tu colaboración!</p>
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
