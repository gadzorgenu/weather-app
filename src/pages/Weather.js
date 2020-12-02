import React from 'react'
import {Box} from '@chakra-ui/react'
import Weather from '../components/Weather'


const Posts = () => {
    return(
    <Box  h={{md: '100%'}}  bg='red.500'>
       <Weather/>
    </Box>
    )
}

export default Posts