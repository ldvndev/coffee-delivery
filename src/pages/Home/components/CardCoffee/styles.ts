import styled from 'styled-components'

export const Container = styled.main`
  max-width: 72.5rem;
  margin: 0 auto;
`

export const CardCoffeeContent = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
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
    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
  }
`

export const CoffeeTitle = styled.h3`
  color: ${(props) => props.theme.colors['base-subtitle']};
  text-align: center;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  margin-top: 1rem;
`

export const CoffeeDescription = styled.span`
  color: ${(props) => props.theme.colors['base-label']};
  text-align: center;
  font-size: 0.875rem;
  line-height: 130%;
  margin-top: 0.5rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    border-radius: 6px;
    padding: 5px;
    border: 0;
    background: ${(props) => props.theme.colors['purple-dark']};

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme.colors.purple};
    }

    svg {
      color: ${(props) => props.theme.colors.white};
      border: 0;
    }
  }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.0625rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    span:first-child {
      color: ${(props) => props.theme.colors['base-text']};
      font-size: 0.875rem;
    }

    span:last-child {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;

      color: ${(props) => props.theme.colors['base-text']};
    }

    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors['purple-dark']};
    color: ${(props) => props.theme.colors['base-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme.colors.purple};
    }
  }
`
