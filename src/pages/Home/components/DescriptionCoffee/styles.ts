import styled from 'styled-components'

export const InformationCoffeeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  svg {
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border-radius: 9999px;
  }
`
