
import React, {useState} from 'react'
import {Formik,Form} from 'formik'
  import { Box, Heading,Input,InputGroup,Text, Grid,InputRightElement,Link, Button} from '@chakra-ui/react'
  import {SignUpSchema} from '../../validation'

  const  SignUpForm = ()=> {

    const [show, setShow ] = useState(false)

    const handleClick=()=> {
        setShow(!show)
    }

    const initialValues = {
        firstname:'',
        lastname:'',
        phone:'',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = (values )=> {
        console.log( 'Data',values)
    }

    return(
        <Box pt={10} >
            <Box textAlign='center' my={4}>
                <Heading as='h5' fontSize={{ md: '3xl'}}> SIGN UP</Heading>
            </Box>
            <Formik
                initialValues={initialValues}
                validationSchema = {SignUpSchema}
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
                            <Grid templateColumns='repeat(2,1fr)' gap={6}>
                            <Input 
                                variant="flushed" 
                                name='firstname' 
                                placeholder="Enter firstname" 
                                value={values.firstname}
                                mt={6} 
                                borderColor='black'
                                error={errors.firstname}
                                onChange={handleChange}
                                px={4}
                                />
                                 <Input 
                                variant="flushed" 
                                name='lastname' 
                                placeholder="Enter lastname" 
                                value={values.lastname}
                                mt={6} 
                                borderColor='black'
                                error={errors.lastname}
                                onChange={handleChange}
                                px={4}
                                />
                            </Grid>
                            <Grid templateColumns='repeat(2,1fr)' gap={6}>
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
                                <Input 
                                    variant="flushed" 
                                    name='phone' 
                                    placeholder="Enter phone number" 
                                    value={values.phone}
                                    mt={6} 
                                    borderColor='black'
                                    error={errors.phone}
                                    onChange={handleChange}
                                    px={4}
                                />
                                </Grid>
                            <Grid templateColumns='repeat(2,1fr)' gap={6}>
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
                            <InputGroup size="md" my={4}>
                                    <Input
                                    variant="flushed"
                                    type={show ? "text" : "password"}
                                    placeholder="Confirm password"
                                    borderColor='black'
                                    value={values.confirmPassword}
                                    name='confirmPassword'
                                    onChange={handleChange}
                                    mb={4} px={4}
                                    />
                                <InputRightElement >
                                <Button h='25px' w='45px' fontSize="10px" rounded='5px' my={4} onClick={handleClick}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                                </InputRightElement>
                            </InputGroup>
                            </Grid>
                            
                                <Button as='a' href='/weather' type='submit' colorScheme='pink' size='md' w={{base:'100%', md:'80%'}} > Sign up
                                </Button>
                                <Text mt={2}>Already have an account? <Link href='/login' color='blue.500'>Login</Link></Text>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )

  }

  export default SignUpForm
