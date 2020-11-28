
import React, {useState} from 'react'
import {Formik,Form} from 'formik'
  import { Box, Heading,Input,InputGroup,Text, Link, InputRightElement,Button} from '@chakra-ui/react'
  import {LoginSchema} from '../../validation'

  const  LoginForm = ()=> {

    const [show, setShow ] = useState(false)

    const handleClick=()=> {
        setShow(!show)
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values ,errors)=> {
        console.log( 'Data',values)
        console.log('error',errors);
    }

    return(
        <Box py={10} iscentered='true'>
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
                        <Box mx={{md:'400px'}}>
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
