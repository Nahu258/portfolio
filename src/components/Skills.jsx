import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JavaScript from '../assets/images/javascript.png';
import React from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Tailwind from '../assets/images/tailwind.png';
import Mongo from '../assets/images/mongo.png';
import Aws from '../assets/images/aws.png';
import Next from '../assets/images/next.png';
import Styled from '../assets/images/styled.png';
import Git from '../assets/images/git.png';
import Chakra from '../assets/images/chakra.png';

const Skills = () => {
  return (
    <Box name='skills' height={{base: 'screen', sm: 'calc(100vh)'}} bg='#0a192f'>
      <Flex flexDirection='column' marginX='auto' maxWidth='1000px' justifyContent='center' width='full' height='full'>
        <Box paddingX={6}>
          <Text display='inline' fontSize='4xl' fontWeight='bold' borderBottom='2px' borderColor='pink.600'>Skills</Text>
          <Text paddingY={4}>These are the technologies I&apos;ve been using</Text>
        </Box>
        <Grid width='full' gridTemplateColumns={{base: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr'}} textAlign='center' gap={6} paddingY={8}>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={HTML}/>
            <Text>HTML</Text>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={CSS}/>
            <p>CSS</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={JavaScript}/>
            <p>JavaScript</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={React}/>
            <p>React</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Next}/>
            <p>Next.js</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Styled}/>
            <p>Styled-components</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Tailwind}/>
            <p>Tailwind CSS</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Chakra}/>
            <p>Chakra-ui</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Node}/>
            <p>Node.js</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Mongo}/>
            <p>MongoDB</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Aws}/>
            <p>AWS</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Git}/>
            <p>Git</p>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  )
}

export default Skills