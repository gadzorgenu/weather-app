
import React, {useState} from 'react'
import {Formik,Form} from 'formik'
  import { Box, Heading,Input,InputGroup,Text,Flex, Grid,InputRightElement, Button, useToast} from '@chakra-ui/react'
  import {SignUpSchema} from '../../validation'
import {useHistory} from 'react-router-dom'

  const  SignUpForm = ()=> {
    const[name] = useState('')
    const [email] = useState('')
    const [password ] = useState('') 

   const history=useHistory()
   const toast = useToast()

    const [show, setShow ] = useState(false)

    const handleClick=()=> {
        setShow(!show)
    }

    const initialValues = {
        name:'',
        email: '',
        password: '',
    }

    const onSubmit = (values)=> {
        console.log('hi')
        console.log( 'Data',values)
        let user= {...values},
           userData = localStorage.getItem('users'),
           users= userData ? JSON.parse(userData) : {}

        //    !users && users={}
           users[user.name]=user;
          localStorage.setItem('users', JSON.stringify(users))
          toast({
            title: 'Account created.',
            description: 'Account created successfully',
            status: 'success',
            duration: 9000,
            isClosable: true
          })
            setTimeout(()=>{
                history.push('/login')
            },3000)

    }

    return(
        <Box pt={10} >
            <Box textAlign='center' my={4}>
                <Heading as='h5' fontSize={{ md: '3xl'}}> SIGN UP</Heading>
            </Box>
            <Formik
                initialValues={initialValues}
                // validationSchema = {SignUpSchema}
                onSubmit= {onSubmit}
            >
                {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
              }) => (
                    <Form onSubmit={handleSubmit}>
                            <Grid templateColumns='repeat(2,1fr)' gap={6}>
                                <Input 
                                    variant="flushed" 
                                    name='name' 
                                    placeholder="Enter name" 
                                    value={values.phone}
                                    mt={6} 
                                    borderColor='black'
                                    error={errors.phone}
                                    onChange={handleChange}
                                    px={4}

                                    />
                                <Input 
                                    variant="flushed" 
                                    name='email' 
                                    placeholder="Enter email" 
                                    value={values.email}
                                    mt={6} 
                                    borderColor='black'
                                    error={errors.email}
                                    onChange={handleChange}
                                    px={4}
                                />
                                
                                </Grid>
                                <InputGroup size="md" my={4}>
                                    <Input
                                    variant="flushed"
                                    type={show ? "text" : "password"}
                                    placeholder="Enter password"
                                    borderColor='black'
                                    value={values.password}
                                    name='password'
                                    onChange={handleChange}
                                    mb={4}
                                    px={4}
                                    />
                                <InputRightElement >
                                <Button h='25px' w='45px' fontSize="10px" rounded='5px' my={4} onClick={handleClick}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                                </InputRightElement>
                            </InputGroup>
                                <Button  type='submit' colorScheme='pink' size='md' w={{base:'100%', md:'80%'}} > Sign up
                                </Button>
                                <Flex>
                                    <Text mt={2}>Already have an account?</Text> 
                                    <Text as='a' href='/login' m={2} color='blue.500'>Login</Text>
                                </Flex>
                    </Form>
                )}
            </Formik>
        </Box>
    )

  }

  export default SignUpForm
