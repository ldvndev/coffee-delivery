import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'

import {
  Container,
  CardCoffeeContent,
  CoffeeImage,
  CoffeeTags,
  CoffeeTitle,
  CoffeeDescription,
  AddCartWrapper,
  CardFooter,
} from './styles'
import { formatMoney } from '../../../../utils/formatMoney'

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CardCoffeeProps {
  coffee: Coffee
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = { ...coffee, quantity }
    addCoffeeToCart(coffeeToAdd)
  }

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  return (
    <Container>
      <CardCoffeeContent>
        <CoffeeImage src={coffee.image} alt={coffee.title} />
        <CoffeeTags>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </CoffeeTags>
        <CoffeeTitle>{coffee.title}</CoffeeTitle>
        <CoffeeDescription>{coffee.description}</CoffeeDescription>

        <CardFooter>
          <div>
            <span>R$</span>
            <span>{formatMoney(coffee.price)}</span>
          </div>

          <AddCartWrapper>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={quantity}
            />
            <button onClick={handleAddToCart}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </AddCartWrapper>
        </CardFooter>
      </CardCoffeeContent>
    </Container>
  )
}
