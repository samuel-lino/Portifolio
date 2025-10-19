import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './theme/light'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Inter", sans-serif;
}
  body{
    padding-top: 80px;
    background-color: ${(props) => (props.theme as Theme).corDeFundo}
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 178px auto;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  main {
    margin-left: 40px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`
