import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  > h1 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
  }
`
export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`
export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    color: ${(props) => props.theme.colors['base-text']};
  }
`
