'use client'
import { useData } from '@/store'
import { KitchenTrip } from './KitchenTrip'
import { ReciveOrder } from './ReciveOrder'
import { CustomerTrip } from './CustomerTrip'

export function Order () {
  const { tripState } = useData()

  if (tripState === '=>kitchen') {
    return <KitchenTrip />
  }

  if (tripState === 'reciveOrder') {
    return <ReciveOrder />
  }

  if (tripState === 'kitchen=>customer') {
    return <CustomerTrip />
  }

  return null
}
