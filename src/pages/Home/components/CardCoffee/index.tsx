import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import coffeeTradicionalImage from '../../../../assets/coffee-tradicional.svg'

import {
  Container,
  CardCoffeeContent,
  CoffeeImage,
  CoffeeTags,
  CoffeeTitle,
  CoffeeDescription,
  CardCoffeeContainer,
  CoffeePriceContainer,
  CoffeePrice,
  Countdown,
  CountdownContainer,
} from './styles'

export function CardCoffee() {
  return (
    <Container>
      <CardCoffeeContainer>
        <CardCoffeeContent>
          <CoffeeImage src={coffeeTradicionalImage} />
          <CoffeeTags>
            <span>Tradicional</span>
          </CoffeeTags>
          <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
          <CoffeeDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeDescription>

          <CoffeePriceContainer>
            <CoffeePrice>
              <span>R$</span>
              <span>9,90</span>
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

        <CardCoffeeContent>
          <CoffeeImage src={coffeeTradicionalImage} />
          <CoffeeTags>
            <span>Tradicional</span>
          </CoffeeTags>
          <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
          <CoffeeDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeDescription>

          <CoffeePriceContainer>
            <CoffeePrice>
              <span>R$</span>
              <span>9,90</span>
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
      </CardCoffeeContainer>
    </Container>
  )
}
