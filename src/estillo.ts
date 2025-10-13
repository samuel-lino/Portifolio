import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
}
  body{
    padding-top: 80px
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 128px auto;

  img {
    max-width: 100%;
    border-radius: 50%;
  }
  main {
    margin-left: 40px;
  }
`
