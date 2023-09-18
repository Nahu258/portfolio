import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <Box name='about' width='full' height='calc(100vh)' paddingY={9} bg='#0a192f' color='gray.300'>
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
          <Text>Nice to meet you, take a look at my portfolio and see the projects i have been working on</Text>
        </GridItem>
        <Box>
          <Text>Hi I&apos;m a passionate Full Stack developer who enjoy the process to make modern web aplications, always trying to learn something new and trying to improve my habilities as a web developer, feel free to look around and if you want leave a feedback about this portfolio.</Text>
        </Box>
      </Grid>
      </Flex>
    </Box>
  )
}

export default About