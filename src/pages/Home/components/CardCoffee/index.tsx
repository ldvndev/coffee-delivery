import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  Container,
  CardCoffeeContent,
  CoffeeImage,
  CoffeeTags,
  CoffeeTitle,
  CoffeeDescription,
  CoffeePriceContainer,
  CoffeePrice,
  Countdown,
  CountdownContainer,
} from './styles'

interface CardCoffeeProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: string
    image: string
  }
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
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

        <CoffeePriceContainer>
          <CoffeePrice>
            <span>R$</span>
            <span>{coffee.price}</span>
          </CoffeePrice>

          <CountdownContainer>
            <Countdown>
              <button>
                <Minus size={14} />
              </button>
              <span>01</span>
              <button>
                <Plus size={14} />
              </button>
            </Countdown>
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </CountdownContainer>
        </CoffeePriceContainer>
      </CardCoffeeContent>
    </Container>
  )
}
