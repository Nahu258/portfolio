import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"

const Contact = () => {

  return (
    <Flex w='full' flexDirection='column' height='screen' bg='#0a192f' justifyContent='center' alignItems='center'>
      <Text marginY='10px' display='inline' fontSize='3xl' fontWeight='bold' borderBottom='2px' borderColor='pink.600'>Contact</Text>
      <Box w={{base: '80%', lg: '50%'}} mx='auto'>

      <form action='https://getform.io/f/3055c8c3-8dac-4326-8bc5-1232396d5bf5' method='POST' >
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name='name' type='text'/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input name='email' type='text'/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea name='message'/>
        </FormControl>
        <Flex justifyContent='center' marginY={9}>
          <Button color="white" role="group" _hover={{ bg: 'pink.600', borderColor: 'pink.600'}} border='2px' px={6} py={3} marginY={2} display='flex' alignItems='center' type='submit'>
            Send
          </Button>
        </Flex>
      </form>
      </Box>

    </Flex>
  )
}

export default Contact