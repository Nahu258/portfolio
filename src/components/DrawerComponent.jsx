import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, List, ListItem, VStack, useDisclosure } from '@chakra-ui/react'

const DrawerComponent = () => {
  const [size, setSize] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  return (
    <Box>
      <Button onClick={() => handleClick(size)}><FaBars/></Button>
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
    </Box>
    
  )
}

export default DrawerComponent