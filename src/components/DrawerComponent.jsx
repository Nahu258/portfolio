import { FaBars } from 'react-icons/fa'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, List, ListItem, VStack, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-scroll'

const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Button onClick={() => onOpen()}><FaBars/></Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>{`${size} drawer contents`}</DrawerHeader> */}
          <DrawerBody>
            <List>
              <VStack p={{base: 100}}>
                <ListItem py={4} fontSize='25px'>
                  <Link onClick={onClose} to='home' smooth={true} duration={500}>Home</Link>
                </ListItem>
                <ListItem py={4} fontSize='25px'>
                  <Link onClick={onClose} to='about' smooth={true} duration={500}>About</Link>
                </ListItem>
                <ListItem py={4} fontSize='25px'>
                  <Link offset={-70} onClick={onClose} to='skills' smooth={true} duration={500}>Skills</Link>
                </ListItem>
                <ListItem py={4} fontSize='25px'>
                  <Link offset={-70} onClick={onClose} to='work' smooth={true} duration={500}>Work</Link>
                </ListItem>
                <ListItem py={4} fontSize='25px'>
                  <Link onClick={onClose} to='contact' smooth={true} duration={500}>Contact</Link>
                </ListItem>
              </VStack>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
    
  )
}

export default DrawerComponent