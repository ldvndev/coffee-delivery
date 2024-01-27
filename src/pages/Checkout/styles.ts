import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 72.5rem;
  margin: 0 auto;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const CheckoutOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  > h1 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    margin-top: 2.5rem;
  }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
