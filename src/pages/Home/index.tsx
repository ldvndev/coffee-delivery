import backgroundImage from '../../assets/background.svg'
import avatarImage from '../../assets/avatar.svg'

import {
  BackgroundContainer,
  DescriptionContainer,
  DescriptionContent,
  DescriptionTitle,
  HomeContainer,
} from './styles'
import { DescriptionCoffee } from './components/DescriptionCoffee'

export function Home() {
  return (
    <BackgroundContainer>
      <HomeContainer>
        <DescriptionContainer>
          <DescriptionContent>
            <DescriptionTitle>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </DescriptionTitle>

            <DescriptionCoffee />
          </DescriptionContent>
          <img src={avatarImage} alt="" />
        </DescriptionContainer>
      </HomeContainer>
      <img src={backgroundImage} id="hero-bg" alt="" />
    </BackgroundContainer>
  )
}
