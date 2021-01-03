import React,{useState} from 'react'
import {Box} from '@chakra-ui/react'
import Weather from '../components/Weather'


const Posts = () => {

  const [isLogin] =useState(false)
  const [authUser] =useState('')
  
  
//   const getSearchHistory =()=>{
//     let results = JSON.parse(localStorage.getItem('searchHistory'));
//   // paln A (difficulty : easy)
//     // if(results!==null) setHistory(results[authUser.name])
//   // plan b (difficulty: High)
//     results && setHistory(results[authUser.email]) 
//   }
    return(
    <Box  h={{md: '100%'}}  bg='red.500'>
       <Weather isLogin={isLogin} email={typeof authUser==='object' ? authUser.email:null}/>
    </Box>
    )
}

export default Posts