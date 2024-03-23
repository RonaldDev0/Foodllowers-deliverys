import { Card } from './Card'
import { Landmark } from 'lucide-react'

export interface ISetting {
  path: string
  icon: any
  title: string
}

const settings: ISetting[] = [
  {
    path: '/bank-account',
    icon: <Landmark size={28} />,
    title: 'Cuenta de banco'
  }
]

export default function Settings () {
  return (
    <main className='flex flex-col gap-2'>
      {settings.map(({ path, icon, title }, index) => (
        <Card
          key={index}
          path={path}
          icon={icon}
          title={title}
        />
      ))}
    </main>
  )
}
