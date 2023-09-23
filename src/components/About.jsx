import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <Box name='about' width='full' bg={{base: '#0a192f', md: 'brand.800'}} height='calc(100vh)' paddingY={9} color='gray.300'>
      <Flex direction='column' justifyContent='center' alignItems='center' width='full' height='full'>
      <Grid maxWidth='1000px' width='full' gridTemplateColumns='1fr 1fr' gap={8}>
        <GridItem textAlign={{ sm: 'right'}} paddingBottom={8} paddingLeft={4}>
          <Text display='inline' fontSize='4xl' fontWeight='bold' borderBottom='2px' borderColor='pink.600'>About me</Text>
        </GridItem>
        <Box></Box>
      </Grid>
      <Grid
        gridTemplateColumns={{ 
          base: '1fr', // 0px
          sm: '1fr 1fr', // ~480px
        }}
        maxWidth='1000px'
        width='full'
        gap={8}
        paddingX={4}>
        <GridItem textAlign={{ sm: 'right'}} fontSize='2xl' fontWeight='bold'>
          <Text>Nice to meet you! Please take a look at my portfolio to see the projects I have been working on.</Text>
        </GridItem>
        <Box>
          <Text>I&apos;m a 24-year-old developer from Argentina. I&apos;ve been passionate about programming since I was very young. At the age of 13, I started learning programming using a language called Lua. My first project was a small server for a video game that I created with my best friend. Since then, I have never stopped learning new things.</Text>
        </Box>
      </Grid>
      </Flex>
    </Box>
  )
}

export default About