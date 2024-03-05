import { create } from 'zustand'

export interface order {
  id: any
  kitchen_id: string
  invoice_id: string
  user_name: string
  user_email: string
  user_address: {
    aditionalInfo: string
    formatted_address: string
    geometry: {
      location: {
        lat: string | number
        lng: string | number
      }
    }
  }
  kitchen_address: {
    formatted_address: string
    geometry: {
      location: {
        lat: string | number
        lng: string | number
      }
    }
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
  user: null,
  active: null,
  currentOrder: null,
  currentPosition: null,
  setStore: (property, value) => set(prev => ({ ...prev, [property]: value }))
}))
