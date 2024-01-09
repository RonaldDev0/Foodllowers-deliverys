import { HistoryCard } from './HistoryCard'
import { data } from './data'

export function History () {
  return (
    <div className='w-96 flex flex-col gap-2'>
      <p>Detalle de ganancia por dia</p>
      <div className='max-h-[74vh] overflow-auto'>
        {data.map(item => <HistoryCard key={item.id} item={item} />)}
      </div>
    </div>
  )
}
