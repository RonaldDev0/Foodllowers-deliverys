import { Smartphone, Fingerprint, Car, KeySquare, Landmark } from 'lucide-react'
import { BankAccount, IdentificationCard, License, PropertyCard } from './Components'
import { PhoneNumber } from './Components/PhoneNumber'

export interface IStep {
  icon: any
  title: string
  component: any
  tableReference: string
}

const size = 40

export const registerSteps: IStep[] = [
  {
    icon: <Smartphone size={size} />,
    title: 'Número de celular',
    component: <PhoneNumber onClose={() => {}} />,
    tableReference: 'phone_number'
  },
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
  {
    icon: <KeySquare size={size} />,
    title: 'Tarjeta de propiedad',
    component: <PropertyCard onClose={() => {}} />,
    tableReference: 'property_card'
  },
  {
    icon: <Landmark size={size} />,
    title: 'Cuenta Bancaria',
    component: <BankAccount onClose={() => {}} />,
    tableReference: 'bank_account'
  }
]
