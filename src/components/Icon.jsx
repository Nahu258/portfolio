import { Flex, Link, Text } from "@chakra-ui/react"
import PropTypes from "prop-types"

const Icon = ({link, text, icon, padding, color}) => {
  return (
    <Flex
        w='125px'
        h='47px'
        justifyContent='space-around'
        textAlign='center'
        alignItems='center'
        marginY='1px'
        marginLeft='-80px'
        transition='margin-left 500ms ease'
        _hover={{
          shadow: 'md',
          marginLeft: '0px',
        }}
        bg={color}
        borderRadius='3'
      >
        <Link
          alignItems='center'
          textColor='gray.300'
          href={link}
          isExternal
        >
          <Text p={padding}>{text}</Text>
        </Link>
        {icon}
      </Flex>
  )
}

Icon.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  padding: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Icon