import { FC } from 'react'

interface EmailTemplateProps {
  nombre: string
  direccion: string
  numeroDePedido: string
  detallesDelPedido: string
  fechaDeEntrega: string
  horaDeEntrega: string
  marcaDelRestaurante: string
  transacction: string
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  direccion,
  numeroDePedido,
  detallesDelPedido,
  fechaDeEntrega,
  horaDeEntrega,
  marcaDelRestaurante,
  transacction
}) => (
  <div>
    <h1>¡Hola, {nombre}!</h1>
    <p>Tu pedido de Foodllowers ha sido entregado a tu domicilio en {direccion}.</p>
    <p>Número del pedido: {numeroDePedido}</p>
    <p>Detalles del pedido: {detallesDelPedido}</p>
    <p>Marca del restaurante: {marcaDelRestaurante}</p>
    <p>Monto del pedido: {transacction}</p>
    <p>Fecha de entrega: {fechaDeEntrega}</p>
    <p>Hora de entrega: {horaDeEntrega}</p>
    <p>¡Gracias por usar Foodllowers!</p>
  </div>
)
