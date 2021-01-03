
import React, {useState} from 'react'
import {Formik,Form} from 'formik'
import { Box, Heading,Input, useToast,InputGroup,Text, Link, InputRightElement,Button} from '@chakra-ui/react'
import {LoginSchema} from '../../validation'
import {useHistory } from 'react-router-dom'

  const  LoginForm = ({loginState})=> {
    const [show, setShow ] = useState(false)

    const history = useHistory()
    const toast = useToast()

    const handleClick=()=> {
        setShow(!show)
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values  )=> {
        console.log( 'Data',values)
        let users = JSON.parse(localStorage.getItem('users'))
        if(users ){
            let user= {...values}
            let email=users['Georgina Adzorgenu'].email
            let password = users['Georgina Adzorgenu'].password

            if(user.email === email && user.password === password){
                loginState(true, user.email)
                history.push('/weather')
                toast({
                    title: 'Login successful',
                    description: 'Login successful',
                    status: 'success',
                    duration: 9000,
                    isClosable: true
                  })
            }else {
                toast({
                    title: 'Error occured',
                    description: 'Wrong email or password',
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                  })
            }
        }else{
            toast({
                title: 'Error occured',
                description: 'Unknown user.. Signup',
                status: 'error',
                duration: 9000,
                isClosable: true
              })
        }
        
    }

    return(
        <Box py='12%' mx='25%' w={{base:'30%', md:'50%'}}>
            <Box textAlign='center' my={6}>
                <Heading as='h5' fontSize={{ md: '2xl'}}>LOGIN</Heading>
            </Box>
            <Formik
                initialValues={initialValues}
                validationSchema = {LoginSchema}
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
                        <Box >
                            <Input 
                                variant="flushed" 
                                name='email' 
                                placeholder="Enter email" 
                                value={values.email}
                                mt={6} 
                                borderColor='black'
                                color='white'
                                error={errors.email}
                                onChange={handleChange}
                                />
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
                                />
                                <InputRightElement >
                                <Button h='25px' w='45px' fontSize="10px" rounded='5px' my={4} onClick={handleClick}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                                </InputRightElement>
                            </InputGroup>
                                <Button type='submit' colorScheme='pink' size='md' w={{base:'80%', md:'100%'}} > Login</Button>
                            <Text mt={2}>Do not have an account? <Link href='/signup' color='blue.500'> Sign up</Link></Text>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )

  }

  export default LoginForm
