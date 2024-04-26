import Navbar from '@/components/navbar/navbar'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '@/components/home/hero/hero'
import About from '@/components/about/about'
const Home = () => {
  return (
    <>
 
    <Box  px={["2", "2", "5", "5", "5"]}
    pl={["2", "2", "5", "12", "12"]} > 



    <Box>
      <Navbar />
    </Box>

    <Box>
      <Hero />
    </Box>
    <Box>
      <About />
      
    </Box>
    </Box>
    </>
  )
}

export default Home