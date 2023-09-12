import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, List, ListItem, Show, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [size, setSize] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  return (
    <HStack h='80px' justifyContent='space-between' backgroundColor='#0a192f' color='#CBD5E0' padding={3}>
      <Text>LOGO</Text>
      <Show above="md">
        <List>
          <Flex gap='10'>
            <ListItem cursor='pointer'>Home</ListItem>
            <ListItem cursor='pointer'>About</ListItem>
            <ListItem cursor='pointer'>Skills</ListItem>
            <ListItem cursor='pointer'>Work</ListItem>
            <ListItem cursor='pointer'>Contact</ListItem>
          </Flex>
        </List>
      </Show>
      {/* Hamburger */}
      <Show below="md">
        <Box as={Button} onClick={() => handleClick(size)}>
          <FaBars/>
        </Box>
      </Show>
      {/* Mobile */}
      <Show below="md">
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>{`${size} drawer contents`}</DrawerHeader> */}
            <DrawerBody>
              <List>
                <VStack p={{base: 100}}>
                  <ListItem py={4} fontSize='25px'>Home</ListItem>
                  <ListItem py={4} fontSize='25px'>About</ListItem>
                  <ListItem py={4} fontSize='25px'>Skills</ListItem>
                  <ListItem py={4} fontSize='25px'>Work</ListItem>
                  <ListItem py={4} fontSize='25px'>Contact</ListItem>
                </VStack>
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
      {/* Social icons */}
      {/* <Box></Box> */}
    </HStack>
  )
}

export default Navbar