'use client'
import { useState, useEffect } from 'react'
import { useData } from '@/store'
import { useSupabase } from '../providers'
import { HistoryCard } from './HistoryCard'

export interface Item {
  id: string
  created_at: string
  amount: number
}

export function History () {
  const { deliveryId } = useData()
  const { supabase } = useSupabase()

  const [history, setHistory] = useState<Item[]>([])

  useEffect(() => {
    if (!deliveryId) {
      return
    }

    supabase
      .from('transactions')
      .select('*')
      .eq('delivery_id', deliveryId)
      .order('created_at', { ascending: false })
      .range(0, 10)
      .then(({ data, error }) => {
        if (error) {
          return
        }
        console.log(data)
        setHistory(data)
      })
  }, [deliveryId])

  return (
    <div className='w-96 flex flex-col gap-2'>
      <p>Detalle de ganancia por dia</p>
      <div className='max-h-[70vh] overflow-auto'>
        {history.map(item => (
          <HistoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
