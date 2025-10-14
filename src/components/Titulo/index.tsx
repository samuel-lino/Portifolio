import Estilo from './estilo'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <Estilo fontSize={props.fontSize}>{props.children}</Estilo>
)

export default Titulo
