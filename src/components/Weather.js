import React, {useState} from 'react'
import {Box,Flex,Button,Icon, Text, Heading,Input} from '@chakra-ui/react'
import axios from 'axios'
import config from '../config'
import { WiCloud, WiCelsius, WiHumidity } from "react-icons/wi";

const BASE = config.base
const KEY = config.key


const Weather = () =>{

    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [search, setSearch] = useState(null)


    const Search =(e) => {

        e.preventDefault()

        if(country&& city){
            
        axios.get(`${BASE}?access_key=${KEY}&query=${country},${city}`)
        .then((res) => {
            setCountry('')
            setCity('')
            setSearch({...res.data})
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    }
    
    const handleCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleCity = (e)=> { 
        setCity(e.target.value)
    }


    return (
        
        <Box>
            {
                !search ? (
                    <Box w={{md: '50%'}}  m='auto'>
                        <Heading as='h4' textAlign='center' fontWeight='thin' color='white' pt={20}>WEATHER APP</Heading>
                        <Flex justify='center' mt={12} pb={14}>
                            <Input value={country} onChange={handleCountry} placeholder='Enter a country' rounded='30px' mr={3}/>
                            <Input value={city} onChange={handleCity} placeholder='Enter city' rounded='30px' mr={3}/>
                            <Button px={10} rounded='30px' w={{md: '60%'}} onClick={Search} colorScheme='blue'>Search</Button>
                        </Flex>
                    </Box>
                ) : (
                    <Box color='white' pl={8}>
                        <Heading fontSize={{md: '15px'}} fontWeight='thin'  pt={14} > WEATHER APP </Heading>
                <Text mt={8} fontSize={{md: '30px'}} textAlign='center'>Observation Time: {search.current.observation_time}</Text>
                        <Text fontSize={{md: '40px'}} textAlign='center' mt={14}>{`${search.location.country} , ${search.location.name}`}</Text>
                        <Flex textAlign='center'>
                            <Icon as={WiCloud} w={10} h={12}   color='white'/>
                             <Text as='h4' pt={3}> Temperature: {search.current.temperature} </Text>
                             <Icon as={WiCelsius} w={10} h={12}   color='white'/>
                             <Icon as={WiHumidity} w={10} h={12}   color='white'/> 
                            <Text as='h4' pt={3}> Humidity: {search.current.humidity}</Text>
                        </Flex>
                    </Box>
                )
            }
        </Box>
      
    )
}

export default Weather
