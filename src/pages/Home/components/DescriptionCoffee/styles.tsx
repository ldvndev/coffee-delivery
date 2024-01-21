import styled from 'styled-components'

// const ICONS_COLOR = {
//   yellowDark: 'yellow-dark',
//   baseText: 'base-text',
//   yellow: 'yellow',
//   purple: 'purple',
// } as const

// interface IconsProps {
//   iconColor: keyof typeof ICONS_COLOR
// }

export const InformationCoffeeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
