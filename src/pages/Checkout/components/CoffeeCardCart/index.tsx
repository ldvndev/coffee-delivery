import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartItem } from '../../../../context/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

interface CoffeeCardCartProps {
  coffee: CartItem
}

export function CoffeeCardCart({ coffee }: CoffeeCardCartProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveItemToCart() {
    removeCartItem(Number(coffee.id))
  }

  const subTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(subTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.image} alt="" />
        <div>
          <p>{coffee.title}</p>
          <ActionsContainer>
            <QuantityInput
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton type="button" onClick={handleRemoveItemToCart}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
