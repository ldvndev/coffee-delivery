import { Input } from '../../../../../components/Input'
import { AddressFormContainer, InputWrapper } from './styles'

export function Address() {
  return (
    <AddressFormContainer>
      <InputWrapper className="cep">
        <Input placeholder="CEP" type="number" />
      </InputWrapper>

      <InputWrapper className="street">
        <Input placeholder="Rua" />
      </InputWrapper>

      <InputWrapper className="street">
        <Input placeholder="Rua" />
      </InputWrapper>

      <InputWrapper>
        <Input placeholder="Número" type="number" />
      </InputWrapper>

      <InputWrapper className="complement">
        <Input placeholder="Complemento" />
      </InputWrapper>

      <InputWrapper>
        <Input placeholder="Bairro" />
      </InputWrapper>

      <InputWrapper>
        <Input placeholder="Cidade" />
      </InputWrapper>

      <InputWrapper>
        <Input placeholder="UF" />
      </InputWrapper>
    </AddressFormContainer>
  )
}
