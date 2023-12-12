import { Box } from "@chakra-ui/react"
import Contact from "./components/Contact"
import Experience from './components/Experience'
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Projects from './components/Projects'
import Skills from "./components/Skills"

function App () {

  return (
    <Box>
      <NavBar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  )
}

export default App
