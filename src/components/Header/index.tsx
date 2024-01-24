import { Link } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImage from '../../assets/logo.svg'

import { HeaderButton, HeaderContainer, Navigation } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logoImage} alt="" />
      </Link>

      <Navigation>
        <HeaderButton variant="purple">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </HeaderButton>

        <Link to={'/ShoppingCart'}>
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Navigation>
    </HeaderContainer>
  )
}
