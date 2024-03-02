import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Link, Stack } from "@chakra-ui/react"
import PropTypes from "prop-types"

const CardComponent = ({ image, demoLink, repoLink, title }) => {
  return (
    <Card maxW='sm' bg='#202020' color='gray.300'>
      <CardBody>
        <Image
          src={image}
          alt='An App Screenshot'
          borderRadius='md'
        />
        <Stack mt='6'>
          <Heading size='md'>{title}</Heading>
        </Stack>
      </CardBody>
      <Divider color='#fff' />
      <CardFooter>
        <ButtonGroup spacing='4' marginX='auto'>
          {demoLink !== '' &&
            <Button _hover={{ textDecoration: 'none' }} bg='#b3317d' color='#fff'>
              <Link href={demoLink} onClick={(event) => demoLink === '' && event.preventDefault()} isExternal>Demo</Link>
            </Button>
          }
          <Button _hover={{ textDecoration: 'none' }} bg='whiteAlpha.100' color='#fff'>
            <Link href={repoLink} isExternal>Code</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default CardComponent