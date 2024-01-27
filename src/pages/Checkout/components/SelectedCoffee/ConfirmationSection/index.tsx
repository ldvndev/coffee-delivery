import { Button } from '../../../../../components/Button'
import { useCart } from '../../../../../hooks/useCart'
import { formatMoney } from '../../../../../utils/formatMoney'

import { ConfirmationSectionContainer } from '../styles'
import { TotalPrice } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const totalValueOfItemsInCart = formatMoney(cartItemsTotal)
  const totalPayment = formatMoney(cartTotal)
  const deliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <span>R$ {totalValueOfItemsInCart}</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R$ {deliveryPrice}</span>
      </div>
      <div>
        <TotalPrice>Total</TotalPrice>
        <TotalPrice>R$ {totalPayment}</TotalPrice>
      </div>
      <Button type="submit" text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  )
}
