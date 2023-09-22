import { Flex } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Icon from "./Icon"

const SocialIcons = () => {
  return (
    <Flex direction="column" position="fixed" top="50%" left="0" transform="translateY(-50%)" zIndex='1'>
      <Icon
        padding='2px'
        icon={<FaLinkedin color="#fff" size={30}/>}
        text='LinkedIn'
        color='#2B6CB0'
        link='https://www.linkedin.com/in/villegasnahuel/'
      />
      <Icon
        padding='4px'
        icon={<FaGithub color="#fff" size={30}/>}
        text='GitHub'
        color='#2D3748'
        link='https://github.com/Nahu258'
      />
      <Icon
        padding='1px'
        icon={<BsFillPersonLinesFill color="#fff" size={25} />}
        text='Resume'
        color='#565f69'
        link='CV.pdf'
      />
    </Flex>
  )
}

export default SocialIcons