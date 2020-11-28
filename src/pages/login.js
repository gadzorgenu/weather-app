import React from 'react'
import LoginForm from '../components/Form/LoginForm'
import {Box} from '@chakra-ui/react'

function Login(){ 
  return(
    <Box bg='green.400'>
      <LoginForm/>
    </Box>
  )
}
export default Login