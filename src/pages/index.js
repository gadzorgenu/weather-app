import React from 'react'

const Login = React.lazy(() => import('./login'))
const SignUp = React.lazy(() => import('./signUp'))
const Weather = React.lazy(() => import ('./Weather'))

const Pages = {
  Login,
  SignUp,
  Weather
};

export default Pages;