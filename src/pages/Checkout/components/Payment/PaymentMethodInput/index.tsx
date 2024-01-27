import { InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export function PaymentMethodInput({
  icon,
  label,
  ...props
}: PaymentMethodInputProps) {
  return (
    <PaymentMethodContainer>
      <input type="radio" {...props} name="paymentMethod" />
      <label>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
}
