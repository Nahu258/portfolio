import { Box } from "@chakra-ui/react"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Navbar from "./components/NavBar"

function App() {

  return (
    <Box>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </Box>
  )
}

export default App
