import Estilo from './estilo'

export type Props = {
  children: string
  tipo?: 'Principal' | 'Secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'Principal', fontSize }: Props) => (
  <Estilo tipo={tipo} fontSize={fontSize}>
    {children}
  </Estilo>
)

export default Paragrafo
