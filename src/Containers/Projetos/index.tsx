import { useEffect, useState } from 'react'
import Projeto from '../../components/projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './estilo'

const usuario = 'samuel-lino'
const api = `https://api.github.com/users/${usuario}/repos`

interface Repositorio {
  id: number
  name: string
  description: string | null
  html_url: string
}

const Projetos = () => {
  const [repositorios, setRepositorios] = useState<Repositorio[]>([])

  useEffect(() => {
    async function carregarRepos() {
      try {
        const resposta = await fetch(api)
        const dados = await resposta.json()
        setRepositorios(dados) // ✅ atualiza o estado
      } catch (erro) {
        console.error('Erro ao buscar repositórios:', erro)
      }
    }

    carregarRepos()
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repositorios.map((repos) => (
          <Projeto
            key={repos.id}
            titulo={repos.name}
            sobre={repos.description || 'Sem descrição'}
            caminho={repos.html_url}
          ></Projeto>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
