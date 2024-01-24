import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
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

        <CardFooter>
          <div>
            <span>R$</span>
            <span>{coffee.price}</span>
          </div>

          <AddCartWrapper>
            <QuantityInput />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </AddCartWrapper>
        </CardFooter>
      </CardCoffeeContent>
    </Container>
  )
}
