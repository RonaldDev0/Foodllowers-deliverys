import { create } from 'zustand'

export interface order {
  id: any
  kitchen_id: string
  invoice_id: string
  user_name: string
  user_email: string
  user_address: {
    aditionalInfo: string
    complete: string
  }
  kitchen_address: {
    address: string
    latitude: number
    longitude: number
  }
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
  transaction_amount: string
}

interface State {
  deliveryData: {
  earnings: number
  distance: string
}
  deliveryId: any
  tripState: string | null
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
  tripState: null,
  deliveryData: {
    earnings: 10500,
    distance: '1.2km'
  },
  user: null,
  active: null,
  currentOrder: null,
  currentPosition: null,
  setStore: (property, value) => set(prev => ({ ...prev, [property]: value }))
}))
