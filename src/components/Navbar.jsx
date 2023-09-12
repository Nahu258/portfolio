import { Flex, HStack, List, ListItem, Show, Text } from "@chakra-ui/react"
import DrawerComponent from "./DrawerComponent"

const NavBar = () => {
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
      {/* Mobile burger */}
      <Show below="md">
        <DrawerComponent/>
      </Show>
      {/* Social icons */}
      {/* <Box></Box> */}
    </HStack>
  )
}

export default NavBar