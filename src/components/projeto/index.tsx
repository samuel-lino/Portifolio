import Paragrafo from '../paragrafo'
import Titulo from '../Titulo'
import { Card, Link } from './estilo'

type Props = {
  caminho: string
  titulo: string
  sobre: string
}

const Projeto = (props: Props) => (
  <Card>
    <Titulo>{props.titulo}</Titulo>
    <Paragrafo tipo="Secundario">{props.sobre}</Paragrafo>
    <Link href={props.caminho} target="_blank">
      Visualizar
    </Link>
  </Card>
)

export default Projeto
