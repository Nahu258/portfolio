import { Flex, HStack, List, ListItem, Show, Text } from "@chakra-ui/react"
import DrawerComponent from "./DrawerComponent"
import SocialIcons from "./SocialIcons"
import { Link } from "react-scroll"

const NavBar = () => {
  return (
    <>
    <HStack h='70px' justifyContent='space-between' backgroundColor='#0a192f' color='#CBD5E0' padding={3}>
      <Text>LOGO</Text>
      <Show above="md">
        <List>
          <Flex gap='10'>
            <ListItem cursor='pointer'>
              <Link to='home' smooth={true} duration={500}>Home</Link>
            </ListItem>
            <ListItem cursor='pointer'>
              <Link to='about' smooth={true} duration={500}>About</Link>
            </ListItem>
            <ListItem cursor='pointer'>
              <Link to='skills' smooth={true} duration={500}>Skills</Link>
            </ListItem>
            <ListItem cursor='pointer'>
              <Link to='work' smooth={true} duration={500}>Work</Link>
            </ListItem>
            <ListItem cursor='pointer'>
              <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </ListItem>
          </Flex>
        </List>
      </Show>
      {/* Mobile burger */}
      <Show below="md">
        <DrawerComponent/>
      </Show>
    </HStack>
    {/* Social icons */}
    <Show above="lg">
      <SocialIcons/>
    </Show>
    </>
  )
}

export default NavBar