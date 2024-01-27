import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffee } from './components/SelectedCoffee'
import { CheckoutContainer, CompleteOrderContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrderContainer>
        <CompleteOrderForm />
        <SelectedCoffee />
      </CompleteOrderContainer>
    </CheckoutContainer>
  )
}
