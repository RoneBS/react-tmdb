import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.main`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`
export const CardList = styled.div`
  width: 260px;
  height: 320px;
  display: flex;
  flex-direction: column;

  img {
    width: 260px;
    height: 320px;
  }

  div {
    width: 260px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background: #000;
    color: #fff;
  }
`
