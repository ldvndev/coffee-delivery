import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`
export const HomeContainer = styled.div`
  max-width: 72.5rem;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;
`

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;
`

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const DescriptionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  > span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeList = styled.section`
  max-width: 72.5rem;
  padding: 2rem 1.25rem 9.375rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
  }
`
export const TitleCoffee = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
`
