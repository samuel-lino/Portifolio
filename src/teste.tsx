import styled from 'styled-components'

type ButtonProps = {
  confirmar?: boolean
  fontsize?: string
}

const Bsaudacao = styled.button<ButtonProps>`
  background-color: ${(props) => (props.confirmar ? 'green' : 'blue')};
  font-size: ${(props) => props.fontsize || '16px'};
  border-radius: 50%;
`

function Teste() {
  return (
    <div>
      <h1>Olá</h1>
      <Bsaudacao fontsize="24px">clique aqui</Bsaudacao>
    </div>
  )
}

export default Teste
