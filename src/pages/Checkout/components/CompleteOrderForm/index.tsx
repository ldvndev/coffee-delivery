import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { SectionTitle } from './SectionTitle'
import { Address } from './Form'
import { useTheme } from 'styled-components'

import { CompleteOrderFormContainer, FormSectionContainer } from './styled'
import { PaymentMethodOptions } from './Payment/PaymentMethodOptions'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <h1>Complete seu pedido</h1>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['yellow-dark']} size={22} />}
        />

        <Address />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors.purple} size={22} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
