'use client'
import { useEffect } from 'react'
import { useData } from '@/store'
import { useSupabase } from '../providers'
import { HistoryCard } from './HistoryCard'

export function History () {
  const { deliveryId, balanceFetched, balanceHistory, setStore } = useData()
  const { supabase } = useSupabase()

  useEffect(() => {
    if (!deliveryId || balanceFetched) {
      return
    }

    supabase
      .from('earnings')
      .select('*')
      .eq('delivery_id', deliveryId)
      .order('created_at', { ascending: false })
      .range(0, 10)
      .then(({ data, error }) => {
        if (error) {
          return
        }
        setStore('balanceFetched', true)
        setStore('balanceHistory', data)
      })
  }, [deliveryId])

  return (
    <div className='w-96 [@media(max-width:365px)]:!w-80 flex flex-col gap-2'>
      <p>Detalle de ganancia por pedido</p>
      <div className='max-h-[70vh] overflow-auto'>
        {balanceHistory.map(item => (
          <HistoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
