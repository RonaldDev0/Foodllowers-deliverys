import { create } from 'zustand'

export interface order {
  id: any
  kitchen_id: string
  delivery_id: string
  influencer_id: string
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
      avatar: string
      full_name: string
      preview: string
    }
    preview: string
    name: string
    description: string
    price: number
  }
  transaction_amount: {
    influencer: number
    kitchen: number
    delivery: {
      tip: number
      service: number
    }
  }
}

interface State {
  darkMode: boolean
  balanceFetched: boolean
  balance: number
  balanceHistory: {
    id: string
    created_at: string
    amount: number
  }[]
  deliveryId: any
  delivery: {
    bank_account: any,
    register_complete: boolean
    phone_number: string | null
    [key: string]: any
  }
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
  darkMode: true,
  balanceFetched: false,
  balance: 0,
  balanceHistory: [],
  deliveryId: null,
  delivery: {
    register_complete: false,
    bank_account: null,
    phone_number: null
  },
  tripState: null,
  user: null,
  active: null,
  currentOrder: null,
  currentPosition: null,
  setStore: (property, value) => set(prev => ({ ...prev, [property]: value }))
}))
