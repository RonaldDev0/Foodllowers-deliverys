import { Fingerprint, Car, Landmark, LucideUser2, ShoppingBag } from 'lucide-react'
import { BankAccount, IdentificationCard, License, UserPicture, BagPicture } from './Components'

export interface IStep {
  icon: any
  title: string
  component: any
  tableReference: string
}

const size = 40

export const registerSteps: IStep[] = [
  {
    icon: <LucideUser2 size={size} />,
    title: 'Foto de usuario',
    component: <UserPicture onClose={() => {}} />,
    tableReference: 'user_picture'
  },
  // {
  //   icon: <Smartphone size={size} />,
  //   title: 'Número de celular',
  //   component: <PhoneNumber onClose={() => {}} />,
  //   tableReference: 'phone_number'
  // },
  {
    icon: <Fingerprint size={size} />,
    title: 'Cedula de ciudadania',
    component: <IdentificationCard onClose={() => {}} />,
    tableReference: 'identification_card'
  },
  {
    icon: <Car size={size} />,
    title: 'Licencia de conducir',
    component: <License onClose={() => {}} />,
    tableReference: 'license'
  },
  // {
  //   icon: <Camera size={size} />,
  //   title: 'Foto de la placa',
  //   component: <LicensePlatePhoto onClose={() => {}} />,
  //   tableReference: 'license_plate_photo'
  // },
  // {
  //   icon: <KeySquare size={size} />,
  //   title: 'Tarjeta de propiedad',
  //   component: <PropertyCard onClose={() => {}} />,
  //   tableReference: 'property_card'
  // },
  {
    icon: <ShoppingBag size={size} />,
    title: 'Foto de la mochila',
    component: <BagPicture onClose={() => {}} />,
    tableReference: 'bag_picture'
  },
  {
    icon: <Landmark size={size} />,
    title: 'Cuenta Bancaria',
    component: <BankAccount onClose={() => {}} />,
    tableReference: 'bank_account'
  }
]
