import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import { InformationCoffeeWrapper } from './styles'

export function DescriptionCoffee() {
  return (
    <InformationCoffeeWrapper>
      <div>
        <ShoppingCart
          size={32}
          weight="fill"
          style={{ backgroundColor: '#C47F17' }}
        />
        <span>Compra simples e segura</span>
      </div>

      <div>
        <Package
          size={32}
          weight="fill"
          style={{ backgroundColor: '#574F4D' }}
        />
        <span>Embalagem mantém o café intacto</span>
      </div>

      <div>
        <Clock size={32} weight="fill" style={{ backgroundColor: '#DBAC2C' }} />
        <span>Entrega rápida e rastreada</span>
      </div>

      <div>
        <Coffee
          size={32}
          weight="fill"
          style={{ backgroundColor: '#8047F8' }}
        />
        <span>O café chega fresquinho até você</span>
      </div>
    </InformationCoffeeWrapper>
  )
}
