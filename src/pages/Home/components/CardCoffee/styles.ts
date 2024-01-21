import styled from 'styled-components'

export const Container = styled.main`
  max-width: 72.5rem;
  margin: 0 auto;
`

export const CardCoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`

export const CardCoffeeContent = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 0.375rem 2.25rem;
  width: 16rem;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImage = styled.img`
  margin-top: -20px;
  margin-bottom: 0.75rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
  align-self: center;
`

export const CoffeeTags = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
  }
`

export const CoffeeTitle = styled.h3`
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  margin-top: 1rem;
`

export const CoffeeDescription = styled.span`
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  font-size: 0.875rem;
  line-height: 130%;
  margin-top: 0.5rem;
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.0625rem;
`

export const CoffeePrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }

  span:last-child {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-text']};
  }
`

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    border-radius: 6px;
    padding: 5px;
    border: 0;
    background: ${(props) => props.theme['purple-dark']};

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }

    svg {
      color: ${(props) => props.theme.white};
      border: 0;
    }
  }
`

export const Countdown = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 0.25rem;

  display: flex;
  gap: 0.25rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    border: 0;
  }

  button svg {
    color: ${(props) => props.theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }
`
