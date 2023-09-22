import { HStack, ListItem, List, Text, Show, Flex } from '@chakra-ui/react';
import DrawerComponent from './DrawerComponent';
import SocialIcons from './SocialIcons';
import { Link } from 'react-scroll';
import { useState } from 'react';

const NavBar = () => {
  const [brandColor, setBrandColor] = useState(false)

  return (
    <>
      <HStack
        h='70px'
        w='full'
        justifyContent='space-between'
        // bg='#0a192f'
        shadow='md'
        bg={brandColor ? 'brand.800' : '#0a192f'}
        transition='background-color 500ms linear'
        color='#CBD5E0'
        padding={3}
        position='fixed'
        top='0'
        zIndex='999'
      >
        <Link to='home' smooth={true} duration={500}>
          <Text padding='25px' marginLeft={4} cursor='pointer'>
            NV
          </Text>
        </Link>
        <Show above='md'>
          <List>
            <Flex gap='10' marginRight={8}>
              <ListItem cursor='pointer'>
                <Link activeStyle={{
                  fontWeight:'bold', borderBottom: '2px solid #b3317d' 
                }}
                onSetActive={() => setBrandColor(false)} 
                spy={true}
                to='home'
                smooth={true}
                duration={500}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem cursor='pointer'>
                <Link activeStyle={{
                  fontWeight:'bold',
                  borderBottom: '2px solid #b3317d'
                }}
                onSetActive={() => setBrandColor(true)} 
                spy={true}
                to='about'
                smooth={true}
                duration={500}
                >
                  About
                </Link>
              </ListItem>
              <ListItem cursor='pointer'>
                <Link activeStyle={{
                  fontWeight:'bold',
                  borderBottom: '2px solid #b3317d'
                }}
                onSetActive={() => setBrandColor(false)} 
                spy={true}
                to='skills'
                smooth={true}
                duration={500}
                >
                  Skills
                </Link>
              </ListItem>
              <ListItem cursor='pointer'>
                <Link activeStyle={{
                  fontWeight:'bold',
                  borderBottom: '2px solid #b3317d'
                }}
                onSetActive={() => setBrandColor(true)} 
                spy={true}
                to='work'
                smooth={true}
                duration={500}
                >
                  Work
                </Link>
              </ListItem>
              <ListItem cursor='pointer'>
                <Link activeStyle={{
                  fontWeight:'bold',
                  borderBottom: '2px solid #b3317d'
                }}
                onSetActive={() => setBrandColor(false)} 
                spy={true}
                to='contact'
                smooth={true}
                duration={500}
                >
                  Contact
                </Link>
              </ListItem>
            </Flex>
          </List>
        </Show>

        <Show below='md'>
          <DrawerComponent />
        </Show>
      </HStack>

      <Show above='md'>
        <SocialIcons />
      </Show>
    </>
  );
};

export default NavBar;