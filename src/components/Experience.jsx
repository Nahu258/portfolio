import { Box } from '@chakra-ui/react'
import TimelineComponent from './TimelineComponent'

const Experience = () => {
  return (
    <Box name='experience' width='full' bg={{ base: '#0a192f', md: 'brand.800' }} height={{ base: 'screen', sm: 'calc(100vh)' }} paddingY={16} color='gray.300'>
      <TimelineComponent />
    </Box>
  )
}

export default Experience