import { DescriptionCoffee } from './components/DescriptionCoffee'
import { CardCoffee } from './components/CardCoffee'

import { coffees } from '../../../data'
import avatarImage from '../../assets/avatar.svg'
import backgroundImage from '../../assets/background.svg'

import {
  BackgroundContainer,
  DescriptionContainer,
  DescriptionContent,
  DescriptionTitle,
  HomeContainer,
  TitleCoffee,
  CoffeeList,
} from './styles'

export function Home() {
  return (
    <>
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

      <CoffeeList>
        <TitleCoffee>Nossos cafés</TitleCoffee>
        <div>
          {coffees.map((coffee) => (
            <CardCoffee key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </>
  )
}
