import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, HStack, Link, List, ListItem, VStack, useDisclosure } from '@chakra-ui/react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link as Scroll } from 'react-scroll'

const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Button bg='#0a192f' _hover={{ cursor: 'pointer' }} onClick={() => onOpen()}>
        <FaBars color='#fff' />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent bg='#202020'>
          <DrawerCloseButton />
          {/* <DrawerHeader>{`${size} drawer contents`}</DrawerHeader> */}
          <DrawerBody>
            <List>
              <VStack p={{ base: 100 }}>
                <ListItem cursor='pointer' py={4} fontSize='25px'>
                  <Scroll onClick={onClose} to='home' smooth={true} duration={500} >
                    Home
                  </Scroll>
                </ListItem>
                <ListItem cursor='pointer' py={4} fontSize='25px'>
                  <Scroll onClick={onClose} to='experience' smooth={true} duration={500}>
                    Experience
                  </Scroll>
                </ListItem>
                <ListItem cursor='pointer' py={4} fontSize='25px'>
                  <Scroll offset={-70} onClick={onClose} to='skills' smooth={true} duration={500}>
                    Skills
                  </Scroll>
                </ListItem>
                <ListItem cursor='pointer' py={4} fontSize='25px'>
                  <Scroll offset={-70} onClick={onClose} to='projects' smooth={true} duration={500}>
                    Projects
                  </Scroll>
                </ListItem>
                <ListItem cursor='pointer' py={4} fontSize='25px'>
                  <Scroll onClick={onClose} to='contact' smooth={true} duration={500}>
                    Contact
                  </Scroll>
                </ListItem>
              </VStack>
            </List>
          </DrawerBody>
          <DrawerFooter>
            <HStack w='full' justifyContent='space-around'>
              <Link isExternal href='https://www.linkedin.com/in/villegasnahuel/'><FaLinkedin color="#fff" size={30} /></Link>
              <Link isExternal href='https://github.com/Nahu258'><FaGithub color="#fff" size={30} /></Link>
              <Link isExternal href='CV.pdf'><BsFillPersonLinesFill color="#fff" size={30} /></Link>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default DrawerComponent