import { create } from 'zustand'

export interface order {
  id: any
  kitchen_address: string
  kitchen_logo: string
  delivery_details: string
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
  currentPosition: {
    latitude: string
    longitude: string
  } | null
}

interface Actions {
  setStore: (property: keyof State, value: any) => void
}

export const useData = create<State & Actions>(set => ({
  deliveryId: null,
  user: null,
  active: null,
  currentOrder: null,
  currentPosition: null,
  setStore: (property, value) => set(prev => ({ ...prev, [property]: value }))
}))
