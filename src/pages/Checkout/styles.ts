import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 72.5rem;
  margin: 0 auto;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const CompleteOrderContainer = styled.form`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`
