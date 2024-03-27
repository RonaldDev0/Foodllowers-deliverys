import { Smartphone, Fingerprint, Car, KeySquare, Landmark } from 'lucide-react'
import { BankAccount, IdentificationCard, License, PropertyCard } from './Components'
import { PhoneNumber } from './Components/PhoneNumber'

export interface IStep {
  icon: any,
  title: string,
  component: any,
}

const size = 40

export const registerSteps: IStep[] = [
  {
    icon: <Smartphone size={size} />,
    title: 'Número de celular',
    component: <PhoneNumber onClose={undefined} />
  },
  {
    icon: <Fingerprint size={size} />,
    title: 'Cedula de ciudadania',
    component: <IdentificationCard onClose={undefined} />
  },
  {
    icon: <Car size={size} />,
    title: 'Licencia de conducir',
    component: <License onClose={undefined} />
  },
  {
    icon: <KeySquare size={size} />,
    title: 'Tarjeta de propiedad',
    component: <PropertyCard onClose={undefined} />
  },
  {
    icon: <Landmark size={size} />,
    title: 'Cuenta Bancaria',
    component: <BankAccount onClose={undefined} />
  }
]
