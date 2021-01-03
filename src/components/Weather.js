import React, {useState} from 'react'
import {Box,Flex,Button,Icon, Text,Spacer,Image, Heading,Input} from '@chakra-ui/react'
import axios from 'axios'
import config from '../config'
import { WiCloud, WiCelsius, WiHumidity, WiDirectionUp } from "react-icons/wi";
import SideMenu from './SideMenu'
import weather from '../weather.jpg'

const BASE = config.base
const KEY = config.key


const Weather = ({isLogin,email}) =>{

    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [search, setSearch] = useState(null)


   
    
    const handleCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleCity = (e)=> { 
        setCity(e.target.value)
    }
    const savedSearchHistory = (search) => {
        // Check If User Is Logged In
    
        if (isLogin) {
          // Get Existing History
          const existingHistoryJSON = localStorage.getItem('searchHistory');
          // Parse History JSON to Object
          const existingHistory = existingHistoryJSON ? JSON.parse(existingHistoryJSON) : {};
        
          // Get History For Logged In User it will be an array
          const userHistory = existingHistory[email] ? existingHistory[email] : [];
          // Push New Search Into User History Array and Update All History
          userHistory.push(search);
          existingHistory[email] = userHistory;
          // Push Updates to localStorage
    
          localStorage.setItem('searchHistory', JSON.stringify(existingHistory));
        }
      }

      const Search =(e) => {
        e.preventDefault()
        if(country&& city){
        axios.get(`${BASE}?access_key=${KEY}&query=${country},${city}`)
        .then((res) => {
            setCountry('')
            setCity('')
            setSearch({...res.data})
            savedSearchHistory({country,city})
        }).catch((error) => {
            console.log(error)
        })
    }
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
                    <Box >
                    <Image pos='absolute' src={weather} alt='image'/>
                    <Box pl={8} pos='relative'>
                        <Heading color='white' fontSize={{md: '15px'}} fontWeight='thin'  pt={14} > WEATHER APP </Heading>
                       <SideMenu ml={8}/>
                        <Box w={{md: '80%'}}  m='auto' color='white'>
                            <Flex justify='center' mt={12} pb={6}>
                                <Input value={country} onChange={handleCountry} placeholder='Enter a country' rounded='30px' mr={3}/>
                                <Input value={city} onChange={handleCity} placeholder='Enter city' rounded='30px' mr={3}/>
                                <Button px={10} rounded='30px' w={{md: '60%'}} onClick={Search} colorScheme='blue'>Search</Button>
                            </Flex>
                        </Box>
                    <Box color='white'>
                        <Text mt={8} fontSize={{md: '30px'}} textAlign='center' >Observation Time: {search.current.observation_time}</Text>
                        <Text fontSize={{md: '40px'}} textAlign='center' mt={2}>{`${search.location.name} ,${search.location.country}`}</Text>
                        <Flex pb={8}  justify='center'>
                            <Icon as={WiCloud} w={12} h={12} pt={4}/>
                            <Box>
                            <Text as='h4' pt={6}> Temperature: {search.current.temperature} </Text>
                            <Text>{search.current.weather_descriptions}</Text>
                            </Box>
                            <Icon as={WiCelsius} pt={6} w={10} h={12} />
                        
                            <Box pt={6} pl={12} mr={12}>
                                <Text > Humidity: {search.current.humidity}</Text>
                                < Flex>
                                <Text>Wind : {search.current.wind_speed} mph</Text>
                                <Icon as={WiDirectionUp} w={10} h={6} /> 
                                </Flex>
                                <Text>Pecipitation : {search.current.precip}</Text>
                                <Text>Feels like : {search.current.feelslike}</Text>
                            </Box>
                            </Flex>
                            </Box>
                            </Box>
                    </Box>
                )
            }
        </Box>
      
    )
}

export default Weather
