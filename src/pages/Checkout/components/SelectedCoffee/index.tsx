import { useCart } from '../../../../hooks/useCart'
import { CoffeeCardCart } from '../CoffeeCardCart'
import { ConfirmationSection } from './ConfirmationSection'

import { SelectedCoffeeContainer, DetailsContainer } from './styles'

export function SelectedCoffee() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeeContainer>
      <h1>Cafés selecionados</h1>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCardCart key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeeContainer>
  )
}
