import styled from 'styled-components'
import EstiloParagrafo from '../../components/paragrafo/estilo'
import { Theme } from '../../theme/light'

const Estilo = styled.aside`
  text-align: center;
`
export const Sub = styled(EstiloParagrafo)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const Estilobutton = styled.button`
  font-size: 10px;
  color: ${(props) => (props.theme as Theme).corDeFundo};
  font-weight: bold;
  background-color: ${(props) => (props.theme as Theme).corTextoBotao};
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  margin-bottom: 20px;
`

export default Estilo
