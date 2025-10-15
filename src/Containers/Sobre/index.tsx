import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/paragrafo'
import Estilo from './estilo'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="Secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quod quasi
      pariatur soluta sequi nulla quos quaerat aut! Iusto, quidem explicabo
      voluptate dicta quod in suscipit beatae harum saepe sint!
    </Paragrafo>
    <Estilo>
      <img src="https://github-readme-stats.vercel.app/api?username=samuel-lino&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=samuel-lino&layout=compact&langs_count=7&theme=dracula" />
    </Estilo>
  </section>
)

export default Sobre
