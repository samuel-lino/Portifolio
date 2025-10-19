import { ThemeProvider } from 'styled-components'

import Projetos from './Containers/Projetos'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import Estilo, { Container } from './estillo'
import Light from './theme/light'
import Dark from './theme/dark'
import { useState } from 'react'

function App() {
  const [themeDark, setThemeDark] = useState(false)

  function mudarTema() {
    setThemeDark(!themeDark)
  }
  return (
    <ThemeProvider theme={themeDark ? Dark : Light}>
      <Estilo />
      <Container>
        <Sidebar mudartheme={mudarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
