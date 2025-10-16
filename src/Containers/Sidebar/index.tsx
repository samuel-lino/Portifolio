import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/Titulo'
import Estilo, { Estilobutton, SideBarContainer, Sub } from './estilo'

const Sidebar = () => (
  <Estilo>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Samuel Eduardo</Titulo>
      <Paragrafo tipo="Secundario" fontSize={16}>
        samuel-lino
      </Paragrafo>
      <Sub fontSize={12} tipo="Principal">
        Trainer front-end
      </Sub>
      <Estilobutton>Trocar tema</Estilobutton>
    </SideBarContainer>
  </Estilo>
)

export default Sidebar
