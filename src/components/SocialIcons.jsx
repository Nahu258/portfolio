import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialIcons = () => {
  return (
    <>
      <Box position='fixed' top='247px' left='0'>
      <Flex
        w='125px'
        h='47px'
        justifyContent='space-around'
        textAlign='center'
        alignItems='center'
        marginLeft='-80px'
        _hover={{
          shadow: 'md',
          marginLeft: '0px',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease',
        }}
        bg='blue.600'
        borderRadius='3'
      >
        <Link
          alignItems='center'
          textColor='gray.300'
          href='https://www.linkedin.com/in/villegasnahuel/'
          isExternal
        >
          <Text p='2px'>LinkedIn</Text>
        </Link>
          <FaLinkedin size={30}/>
      </Flex>
    </Box>
    <Box position='fixed' top='295px' left='0'>
      <Flex
        w='125px'
        h='47px'
        justifyContent='space-around'
        textAlign='center'
        alignItems='center'
        marginLeft='-80px'
        _hover={{
          shadow: 'md',
          marginLeft: '0px',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease',
        }}
        bg='gray.700'
        borderRadius='3'
      >
        <Link
          alignItems='center'
          textColor='gray.300'
          href='https://github.com/Nahu258'
          isExternal
        >
          <Text p='4px'>GitHub</Text>
        </Link>
          <FaGithub size={30}/>
      </Flex>
    </Box>
    <Box position='fixed' top='343px' left='0'>
      <Flex
        w='125px'
        h='47px'
        justifyContent='space-around'
        textAlign='center'
        alignItems='center'
        marginLeft='-80px'
        _hover={{
          shadow: 'md',
          marginLeft: '0px',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease',
        }}
        bg='gray.900'
        borderRadius='3'
      >
        <Link
          alignItems='center'
          textColor='gray.300'
          href='https://github.com/Nahu258'
          isExternal
        >
          <Text p='12px'>Email</Text>
        </Link>
          <HiOutlineMail size={30}/>
      </Flex>
    </Box>
    <Box display='flex' position='fixed' top='391px' left='0'>
      <Flex
        w='125px'
        h='47px'
        justifyContent='space-around'
        textAlign='center'
        alignItems='center'
        marginLeft='-80px'
        _hover={{
          shadow: 'md',
          marginLeft: '0px',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease',
        }}
        bg='#565f69'
        borderRadius='3px'
      >
        <Link
          alignItems='center'
          textColor='gray.300'
          href='https://www.linkedin.com/in/kevin--villegas/'
          isExternal
        >
          <Text padding='1px'>Resume</Text>
        </Link>
        <BsFillPersonLinesFill size={25} />
      </Flex>
    </Box>
    </>
  )
}

export default SocialIcons