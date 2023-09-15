import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Link, Stack } from "@chakra-ui/react"
import gameHub from '../assets/projects/game-hub-app.png'

const CardComponent = () => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={gameHub}
          alt='An App Screenshot'
          borderRadius='md'
        />
        <Stack mt='6'>
          <Heading size='md'>Game Hub App</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='4' marginX='auto'>
          <Button variant='solid' colorScheme='blue'>
            <Link href='https://game-hub-five-tau.vercel.app/' isExternal>Demo</Link>
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            <Link href='https://github.com/Nahu258/game-hub' isExternal>Code</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default CardComponent