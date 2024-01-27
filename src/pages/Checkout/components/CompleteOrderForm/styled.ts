import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  > h1 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: 700;
  }
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
