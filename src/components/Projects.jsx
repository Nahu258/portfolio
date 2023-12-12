import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import adminPanel from '../assets/projects/admin-panel.png'
import ecommerce from '../assets/projects/e-commerce-app.png'
import gameHub from '../assets/projects/game-hub-app.png'
import CardComponent from "./CardComponent"

const Projects = () => {
  return (
    <Box height={{ base: 'screen', md: 'calc(100vh)' }} bg={{ base: '#0a192f', md: 'brand.800' }} width='full' name='projects' color='gray.300'>
      <Flex maxWidth='1000px' padding={4} marginX='auto' flexDirection='column' justifyContent='center' width='full' height='full'>
        <Box>
          <Text fontWeight='bold' display='inline' fontSize='4xl' borderBottom='2px' color='gray.300' borderColor='pink.600'>Projects</Text>
          <Text paddingY={6}>Recents Projects</Text>
        </Box>
        <Grid width='full' gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} textAlign='center' gap={4} paddingY={8}>
          <CardComponent
            title='Game Hub App'
            image={gameHub}
            demoLink='https://game-hub-five-tau.vercel.app/'
            repoLink='https://github.com/Nahu258/game-hub'
          />
          <CardComponent
            title='E-comerce (in progress)'
            image={ecommerce}
            demoLink=''
            repoLink='https://github.com/Nahu258/e-commerce-front.git'
          />
          <CardComponent
            title='Admin Panel (in progress)'
            image={adminPanel}
            demoLink=''
            repoLink='https://github.com/Nahu258/e-commerce-admin.git'
          />
        </Grid>
      </Flex>
    </Box>
  )
}

export default Projects