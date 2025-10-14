import styled from 'styled-components'
import { Props } from '.'

const Estilo = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: #0e0c0cfd;
`

export default Estilo
