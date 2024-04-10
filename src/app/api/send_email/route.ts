import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req: Request) {
  const { customerEmail, nombre, direccion, numeroDePedido, detallesDelPedido, marcaDelRestaurante, transacction } = await req.json()

  function getDate () {
    const _date = new Date()

    const year = _date.getFullYear()
    const month = _date.getMonth() + 1
    const day = _date.getDate()

    const hours = _date.getHours()
    const minutes = _date.getMinutes()
    const seconds = _date.getSeconds()

    const date = `${day}/${month}/${year}`
    const hour = `${hours}:${minutes}:${seconds}`

    return { date, hour }
  }

  try {
    const data = await resend.emails.send({
      from: 'Foodllowers <onboarding@resend.dev>',
      to: [customerEmail],
      subject: 'Recibo Foodllowers',
      react: EmailTemplate({
        nombre,
        direccion,
        numeroDePedido,
        detallesDelPedido,
        fechaDeEntrega: getDate().date,
        horaDeEntrega: getDate().hour,
        marcaDelRestaurante,
        transacction
      }),
      text: ''
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
