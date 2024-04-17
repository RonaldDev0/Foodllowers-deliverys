import { Card, CardHeader, CardBody } from '@nextui-org/react'

export default function Validation () {
  return (
    <main className='fixed z-50 w-full h-screen top-0 left-0 flex flex-col justify-center gap-20 items-center backdrop-blur-md'>
      <Card>
        <CardHeader>
          <div className='w-full flex justify-center mt-4'>
            <p className='font-semibold text-lg'>
              Tus datos se estan validando
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <div className='w-96 flex flex-col gap-5'>
            <p>¡Hola!</p>
            <p>Gracias por registrarte para trabajar como delivery en Foodllowers. Queremos informarte que hemos recibido tus datos y actualmente están siendo validados por nuestro equipo.</p>
            <p>Este proceso puede tomar algún tiempo, ya que queremos asegurarnos de que toda la información sea correcta y segura. Tu paciencia durante este tiempo es muy apreciada.</p>
            <p>Una vez que tus datos hayan sido validados, te enviaremos una notificación a través del correo electrónico que tienes registrado en Foodllowers. Por favor, asegúrate de revisar tu bandeja de entrada y la carpeta de spam.</p>
            <p>Agradecemos tu interés en trabajar con nosotros y esperamos poder darte la bienvenida a nuestro equipo de deliverys muy pronto.</p>
            <p>¡Gracias por tu paciencia y comprensión!</p>
            <p>Saludos, El equipo de Foodllowers</p>
          </div>
        </CardBody>
      </Card>
    </main>
  )
}
