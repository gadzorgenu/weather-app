import React from 'react'
import {Box} from '@chakra-ui/react'
import Weather from '../components/Weather'


const Posts = () => {
    return(
    <Box  bg='red.500' h={{md: '100%'}}>
       <Weather/>
    </Box>
    )
}

export default Posts