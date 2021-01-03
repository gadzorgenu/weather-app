import React,{useState} from 'react'
import LoginForm from '../components/Form/LoginForm'
import {Box} from '@chakra-ui/react'

const Login = () =>{ 
  const [isLogin,setLoginState] =useState(false)
  const [authUser,setAuthUser] =useState('')

  const loginState = (isLogin, user) =>{
    setLoginState(isLogin);
    setAuthUser(user);
  }
  
  return(
    <Box bg='green.400'>
      <LoginForm loginState={loginState} />
    </Box>
  )
}
export default Login