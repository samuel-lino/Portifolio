import styled from 'styled-components'
import EstiloParagrafo from '../../components/paragrafo/estilo'

const Estilo = styled.aside`
  text-align: center;
`
export const Sub = styled(EstiloParagrafo)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const Estilobutton = styled.button`
  font-size: 10px;
  color: #eee;
  font-weight: bold;
  background-color: #282a35;
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
