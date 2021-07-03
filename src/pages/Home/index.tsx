import * as S from './styes'

export function Home() {
  return (
    <>
      <S.Container>
        <S.Header>
          <S.Title>Central Movies</S.Title>
          <S.Search>
            <input type="text" placeholder="procure o filme aqui" />
          </S.Search>
        </S.Header>

        <S.Main>
          <S.CardList></S.CardList>
        </S.Main>
      </S.Container>
    </>
  )
}
