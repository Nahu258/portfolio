import adminPanel from '../assets/projects/admin-panel.png'
import ecommerce from '../assets/projects/e-commerce-app.png'
import gameHub from '../assets/projects/game-hub-app.png'
import mediconnect from '../assets/projects/mediconnect.png'
import stereos from '../assets/projects/stereos.png'
// import { Box, Flex, Grid, Text } from "@chakra-ui/react"
// import CardComponent from "./CardComponent"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import { Box, Flex, Grid, IconButton, Text } from '@chakra-ui/react'
import { useState } from 'react'
import CardComponent from './CardComponent'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projects = [
    {
      title: 'MediConnect - No Country',
      image: mediconnect,
      demoLink: '',
      repoLink: 'https://github.com/No-Country/c14-50-ft-nest.git'
    },
    {
      title: 'Stereos en la nube - No Country',
      image: stereos,
      demoLink: '',
      repoLink: 'https://github.com/No-Country/s12-11-m-java-next.git'
    },
    {
      title: 'Game Hub App',
      image: gameHub,
      demoLink: 'https://game-hub-five-tau.vercel.app/',
      repoLink: 'https://github.com/Nahu258/game-hub'
    },
    {
      title: 'E-commerce',
      image: ecommerce,
      demoLink: 'https://e-commerce-front-drab.vercel.app/',
      repoLink: 'https://github.com/Nahu258/e-commerce-front.git'
    },
    {
      title: 'Admin Panel (Auth required)',
      image: adminPanel,
      demoLink: '',
      repoLink: 'https://github.com/Nahu258/e-commerce-admin.git'
    }
    // Agrega aquí más proyectos si lo deseas
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <Box height={{ base: 'screen', md: 'calc(100vh)' }} bg={{ base: '#0a192f', md: 'brand.800' }} width='full' name='projects' color='gray.300'>
      <Flex maxWidth='1000px' padding={4} marginX='auto' flexDirection='column' justifyContent='center' width='full' height='full'>
        <Box>
          <Text fontWeight='bold' display='inline' fontSize='4xl' borderBottom='2px' color='gray.300' borderColor='pink.600'>Projects</Text>
          <Text paddingY={6}>Recents Projects</Text>
        </Box>
        <Flex alignItems="center" justifyContent="center">
          <IconButton
            icon={<FaChevronLeft />}
            aria-label="Previous"
            onClick={handlePrev}
            mr={4}
            isDisabled={currentIndex === 0}
            opacity={currentIndex === 0 ? 0.5 : 1}
            cursor={currentIndex === 0 ? 'not-allowed' : 'pointer'}
          />
          <Grid width='full' gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} textAlign='center' gap={4} paddingY={8}>
            {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
              <CardComponent
                key={index}
                title={project.title}
                image={project.image}
                demoLink={project.demoLink}
                repoLink={project.repoLink}
              />
            ))}
          </Grid>
          <IconButton
            icon={<FaChevronRight />}
            aria-label="Next"
            onClick={handleNext}
            ml={4}
            isDisabled={currentIndex === projects.length - 3}
            opacity={currentIndex === projects.length - 1 ? 0.5 : 1}
            cursor={currentIndex === projects.length - 1 ? 'not-allowed' : 'pointer'}
          />
        </Flex>
      </Flex>
    </Box>
    // <Box height={{ base: 'screen', md: 'calc(100vh)' }} bg={{ base: '#0a192f', md: 'brand.800' }} width='full' name='projects' color='gray.300'>
    //   <Flex maxWidth='1000px' padding={4} marginX='auto' flexDirection='column' justifyContent='center' width='full' height='full'>
    //     <Box>
    //       <Text fontWeight='bold' display='inline' fontSize='4xl' borderBottom='2px' color='gray.300' borderColor='pink.600'>Projects</Text>
    //       <Text paddingY={6}>Recents Projects</Text>
    //     </Box>
    //     <Grid width='full' gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} textAlign='center' gap={4} paddingY={8}>
    //       <CardComponent
    //         title='Game Hub App'
    //         image={gameHub}
    //         demoLink='https://game-hub-five-tau.vercel.app/'
    //         repoLink='https://github.com/Nahu258/game-hub'
    //       />
    //       <CardComponent
    //         title='E-comerce (in progress)'
    //         image={ecommerce}
    //         demoLink=''
    //         repoLink='https://github.com/Nahu258/e-commerce-front.git'
    //       />
    //       <CardComponent
    //         title='Admin Panel (in progress)'
    //         image={adminPanel}
    //         demoLink=''
    //         repoLink='https://github.com/Nahu258/e-commerce-admin.git'
    //       />
    //     </Grid>
    //   </Flex>
    // </Box>
  )
}

export default Projects