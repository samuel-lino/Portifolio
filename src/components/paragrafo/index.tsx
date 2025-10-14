import Estilo from './estilo'

export type Props = {
  children: string
  tipo?: 'Principal' | 'Secundario'
}

const Paragrafo = ({ children, tipo = 'Principal' }: Props) => (
  <Estilo tipo={tipo}>{children}</Estilo>
)

export default Paragrafo
