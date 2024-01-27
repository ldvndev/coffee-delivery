import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { SectionTitle } from './components/SectionTitle'
import { Address } from './components/Form/Address'
import { PaymentMethodOptions } from './components/Payment/PaymentMethodOptions'

import {
  CheckoutContainer,
  CheckoutOrderContainer,
  FormSectionContainer,
  Form,
} from './styles'

export function Checkout() {
  const { colors } = useTheme()

  return (
    <CheckoutContainer>
      <CheckoutOrderContainer>
        <h1>Complete seu pedido</h1>
        <Form>
          <FormSectionContainer>
            <SectionTitle
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine color={colors['yellow-dark']} size={22} />}
            />
            <Address />
          </FormSectionContainer>
        </Form>

        <Form>
          <FormSectionContainer>
            <SectionTitle
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar color={colors.purple} size={22} />}
            />

            <PaymentMethodOptions />
          </FormSectionContainer>
        </Form>
      </CheckoutOrderContainer>
    </CheckoutContainer>
  )
}
