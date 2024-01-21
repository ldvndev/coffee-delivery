import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import { InformationCoffeeWrapper } from './styles'

export function DescriptionCoffee() {
  return (
    <InformationCoffeeWrapper>
      <div>
        <span>
          <ShoppingCart />
        </span>
        <span>Compra simples e segura</span>
      </div>

      <div>
        <Package />
        <span>Embalagem mantém o café intacto</span>
      </div>

      <div>
        <Clock />
        <span>Entrega rápida e rastreada</span>
      </div>

      <div>
        <Coffee />
        <span>O café chega fresquinho até você</span>
      </div>
    </InformationCoffeeWrapper>
  )
}
