import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 72.5rem;
  margin: 0 auto;
  padding: 2rem 1.25rem;
`

export const Navigation = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    border-radius: 0.375rem;
    padding: 0.5rem;
    background: ${(props) => props.theme.colors['yellow-light']};

    svg {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`
export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;

  border: 0;
  background: ${(props) => props.theme.colors['purple-light']};
  padding: 0.5rem;

  span {
    color: ${(props) => props.theme.colors['purple-dark']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
