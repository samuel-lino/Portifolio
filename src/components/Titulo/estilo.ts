import styled from 'styled-components'
import { Props } from '.'
import { Theme } from '../../theme/light'

const Estilo = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.theme as Theme).corPrincipal};
  margin-bottom: 16px;
  font-weight: bold;
`

export default Estilo
