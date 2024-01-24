import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CardCoffee'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex((cartItem) => {
      return cartItem.id === coffee.id
    })

    if (coffeeAlreadyExistInCart < 0) {
      setCartItems((state) => [...state, coffee])
    } else {
      const newList = cartItems.map((cartItem) => {
        return { ...cartItem, quantity: coffee.quantity + cartItem.quantity }
      })

      setCartItems(newList)
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
