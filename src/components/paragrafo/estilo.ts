import styled from 'styled-components'
import { Props } from '.'

const EstiloParagrafo = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'Principal' ? '#1f1e1efd' : '#4b4949fd')};
  line-height: 22px;
`

export default EstiloParagrafo
