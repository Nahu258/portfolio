import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Aws from '../assets/aws.png';

const Skills = () => {
  return (
    <Box height='calc(90vh)' name='skills' bg='#0a192f'>
      <Flex flexDirection='column' marginX='auto' maxWidth='1000px' justifyContent='center' width='full' height='full'>
        <Box paddingX={6}>
          <Text display='inline' fontSize='4xl' fontWeight='bold' borderBottom='2px' borderColor='pink.600'>Experience</Text>
          <Text paddingY={4}>These are the technologies I&apos;ve been using</Text>
        </Box>
        <Grid width='full' gridTemplateColumns={{base: '1fr 1fr', sm: '1fr 1fr 1fr 1fr'}} textAlign='center' gap={4} paddingY={8}>
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
            <Image marginX='auto' width={20} src={ReactImg}/>
            <p>React</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Node}/>
            <p>Node.js</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Tailwind}/>
            <p>Tailwind CSS</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Mongo}/>
            <p>MongoDB</p>
          </GridItem>
          <GridItem _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} boxShadow='1px 3px #040c16'>
            <Image marginX='auto' width={20} src={Aws}/>
            <p>AWS</p>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  )
}

export default Skills