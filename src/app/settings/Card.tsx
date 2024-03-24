import { Card, CardBody } from '@nextui-org/react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { ISetting } from './page'

export function CardItem ({ path, icon, title }: ISetting) {
  return (
    <Link href={'/settings' + path}>
      <Card className='relative group'>
        <CardBody>
          <div className='flex justify-between relative'>
            <div className='flex items-center gap-3'>
              {icon}
              <p>{title}</p>
            </div>
            <div className='absolute top-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center'>
              <ChevronRight size={20} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}
