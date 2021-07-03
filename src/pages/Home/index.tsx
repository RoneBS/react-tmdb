import movieImg from '../../assets/star-wars-poster.jpg'

import { Header } from '../../components/Header'
import * as S from './styes'

export function Home() {
  return (
    <>
      <S.Container>
        <Header />

        <S.Main>
          <S.CardList>
            <img src={movieImg} alt="movie photo" />
            <div>Star Wars</div>
          </S.CardList>
          <S.CardList>
            <img src={movieImg} alt="movie photo" />
            <div>Star Wars</div>
          </S.CardList>
          <S.CardList>
            <img src={movieImg} alt="movie photo" />
            <div>Star Wars</div>
          </S.CardList>
        </S.Main>
      </S.Container>
    </>
  )
}
