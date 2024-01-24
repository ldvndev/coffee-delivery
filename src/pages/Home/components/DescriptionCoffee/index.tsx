import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'

import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { BenefitsContainer } from './styles'
import { useTheme } from 'styled-components'

export function DescriptionCoffee() {
  const { colors } = useTheme()

  return (
    <BenefitsContainer>
      <InfoWithIcon
        iconColor={colors['yellow-dark']}
        icon={<ShoppingCart weight="fill" />}
        text="Compra simples e segura"
      />
      <InfoWithIcon
        iconColor={colors['base-text']}
        icon={<Package weight="fill" />}
        text="Embalagem mantém o café intacto<"
      />
      <InfoWithIcon
        iconColor={colors.yellow}
        icon={<Clock weight="fill" />}
        text="Entrega rápida e rastreada"
      />
      <InfoWithIcon
        iconColor={colors.purple}
        icon={<Coffee weight="fill" />}
        text="O café chega fresquinho até você"
      />
    </BenefitsContainer>
  )
}
