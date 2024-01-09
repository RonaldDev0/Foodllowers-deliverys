import { create } from 'zustand'

export interface order {
  id: any
  product: {
    influencers: {
      full_name: string
      preview: string
    }
    preview: string
    name: string
    description: string
    price: number
  }
}

interface State {
  deliveryId: any
  user: any
  active: boolean | null
  currentOrder: order | null
}

interface Actions {
  setStore: (property: keyof State, value: any) => void
}

export const useData = create<State & Actions>(set => ({
  deliveryId: null,
  user: null,
  active: null,
  currentOrder: null,
  setStore: (property, value) => set(prev => ({ ...prev, [property]: value }))
}))
