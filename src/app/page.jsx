import Navbar from '@/components/navbar/navbar'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '@/components/home/hero/hero'
const Home = () => {
  return (
    <>
 
    <Box  px={["2", "2", "5", "12", "12"]} > 



    <Box>
      <Navbar />
    </Box>

    <Box>
      <Hero />
    </Box>
    </Box>
    </>
  )
}

export default Home