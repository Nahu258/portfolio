import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import CardComponent from "./CardComponent"

const Work = () => {
  return (
    <Box height='screen' width='full' name='work' color='gray.300' bg='#0a192f'>
      <Flex maxWidth='1000px' padding={4} marginX='auto' flexDirection='column' justifyContent='center' width='full' height='full'>
        <Box>
          <Text fontWeight='bold' display='inline' fontSize='4xl' borderBottom='2px' color='gray.300' borderColor='pink.600'>Work</Text>
          <Text paddingY={6}>Recents work</Text>
        </Box>
        <Grid width='full' gridTemplateColumns={{base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'}} textAlign='center' gap={4} paddingY={8}>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
        </Grid>
      </Flex>
    </Box>
  )
}

export default Work