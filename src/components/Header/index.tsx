import * as S from './styles'
export function Header() {
  return (
    <>
      <S.Header>
        <S.Title>Central Movies</S.Title>
        <S.Search>
          <input type="text" placeholder="digite o nome do filme" />
        </S.Search>
      </S.Header>
    </>
  )
}
