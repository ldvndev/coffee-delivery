import { Button } from '../../../../../components/Button'

import { ConfirmationSectionContainer } from '../styles'
import { TotalPrice } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <span>R$ 9.90</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R$ 3.50</span>
      </div>
      <div>
        <TotalPrice>Total</TotalPrice>
        <TotalPrice>R$ 9.90</TotalPrice>
      </div>
      <Button type="submit" text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  )
}
