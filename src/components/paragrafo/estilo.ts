import styled from 'styled-components'
import { Props } from '.'
import { Theme } from '../../theme/light'

const EstiloParagrafo = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'Principal'
      ? (props.theme as Theme).corPrincipal
      : (props.theme as Theme).corSecundaria};
  line-height: 22px;
`

export default EstiloParagrafo
