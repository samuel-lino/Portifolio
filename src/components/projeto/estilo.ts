import styled from 'styled-components'
import { Theme } from '../../theme/light'

export const Card = styled.div`
  border: solid 1px ${(props) => (props.theme as Theme).corDaBorda};
  padding: 16px;
`
export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => (props.theme as Theme).corTextoBotao};
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) => (props.theme as Theme).corDeFundoBotao};
  padding: 8px;
  display: inline-block;
  margin-top: 14px;
`
