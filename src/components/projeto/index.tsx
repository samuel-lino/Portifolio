import Paragrafo from '../paragrafo'
import Titulo from '../Titulo'
import { Card, Link } from './estilo'

const Projeto = () => (
  <Card>
    <Titulo>Projeto de tarefas</Titulo>
    <Paragrafo tipo="Secundario">Projeto de portifolio usando react</Paragrafo>
    <Link>Visualizar</Link>
  </Card>
)

export default Projeto
