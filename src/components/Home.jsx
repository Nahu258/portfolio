import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

const Home = () => {
  const isMobile = window.innerWidth < 768

  return (
    <Box name='home' w='full' h='calc(100vh)' bg='#0a192f'>
      <Flex flexDirection='column' maxWidth='1000px' marginX='auto' paddingX={8} justifyContent='center' h='full'>
        <Text as='p' color='pink.600' fontSize={{ base: '1xl', md: '2xl'}}>Hi, my name is</Text>
        <Text as='h1' fontWeight='bold' fontSize={{ base: '2xl',md: '4xl', lg: '5xl' }} color='#ccd6f6'>Nahuel Villegas</Text>
        <Text as='h2' fontWeight='bold' fontSize={{ base: '2xl',md: '4xl', lg: '5xl' }} color='#8892b0'>I&apos;m a Full Stack developer</Text>
        <Text as='p' maxWidth='700px' paddingY={4} color='#8892b0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, accusamus aspernatur. Provident repellat similique eos.</Text>
        <Link offset={isMobile ? -70 : 0} to='work' smooth={true} duration={500}>
          <Button color="white" role="group" bg='transparent' _hover={{ bg: 'pink.600', borderColor: 'pink.600'}} border='2px' px={6} py={3} marginY={2} display='flex' alignItems='center'>
            View work
            <Text _groupHover={{transform: 'rotate(90deg)', transitionDuration: '0.3s'}} marginLeft={3}>
              <HiArrowNarrowRight/>
            </Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Home