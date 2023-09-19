import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2'

const Contact = () => {
  const schema = z.object({
    name: z.string().min(4, {message: 'Name must be at least 4 characters!'}).max(30),
    email: z.string().email().min(6).max(60),
    message: z.string().min(15, {message: 'Message needs a minimum of 15 characters!'}).max(200),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    fetch('https://getform.io/f/3055c8c3-8dac-4326-8bc5-1232396d5bf5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
          reset()
        }
        Swal.fire({
          icon: response.ok ? 'success' : 'error',
          title: response.ok ? 'Your message has been sent' : 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
        })
    })
  };


  return (
    <Flex name='contact' w='full' flexDirection='column' height='calc(100vh)' bg='#0a192f' justifyContent='center' alignItems='center'>
      <Text marginY='10px' display='inline' fontSize='3xl' fontWeight='bold' borderBottom='2px' borderColor='pink.600'>Contact</Text>
      <Box w={{base: '80%', lg: '50%'}} mx='auto'>

      <form onSubmit={handleSubmit(submitData)}>
        <FormControl my={4}>
          <FormLabel>Name</FormLabel>
          <Input {...register('name')} name='name' type='text'/>
        {errors.name && <Text color='red.600'>{errors.name.message}</Text>}
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Email address</FormLabel>
          <Input {...register('email')} name='email' type='text'/>
        {errors.email && <Text color='red.600'>{errors.email.message}</Text>}
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Message</FormLabel>
          <Textarea {...register('message')} resize={"none"} name='message'/>
        {errors.message && <Text color='red.600'>{errors.message.message}</Text>}
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