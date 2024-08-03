import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
import { PartyPopper } from 'lucide-react'

export function AlertStartWork () {
  const isStartWork = new Date() >= new Date('2024-09-01')
  if (isStartWork) return null
  return (
    <div className='fixed z-50 w-full h-screen top-0 left-0 flex flex-col justify-center gap-20 items-center backdrop-blur-md'>
      <Card className='w-96 p-4'>
        <CardHeader>
          <div className='flex gap-3 justify-center items-center w-full'>
            <PartyPopper size={30} />
            <b>¡Gracias por registrarte como delivery!</b>
            <PartyPopper size={30} />
          </div>
        </CardHeader>
        <CardBody>
          <div>
            <p>Nuestra aplicación estará disponible a partir del 1 de septiembre de 2024. Hasta entonces, no habrá trabajos disponibles.</p><br />
            <p>Te recomendamos estar atento a esa fecha para comenzar a recibir pedidos y trabajar con nosotros.</p>
          </div>
        </CardBody>
        <CardFooter>
          ¡Gracias por tu paciencia y esperamos contar contigo!
        </CardFooter>
      </Card>
    </div>
  )
}
