"use client";

import React from "react";

import {
  HStack,
  Text,
  Box,
  Icon,
  Spacer,
  VStack,
  Input,
  InputGroup,
  InputRightAddon,
  MdUnsubscribe,
  Button,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import  { PureComponent } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { FaArrowUp } from "react-icons/fa6";


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
 
  

const HouseStats = () => {
    
  const stats = [
    { label: "Weekly", percentage: "1.9%" },
    { label: "Monthly", percentage: "7.6%" },
    { label: "Yearly", percentage: "37.2%" },
  ];

  return (
    <>
      <Box
        bgImage={
          "https://source.unsplash.com/white-and-brown-concrete-building-b_79nOqf95I"
        }
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={["center", " center", "center", "center", "center "]}
        w={"100%"}
        h={"300px"}
        rounded={"10px"}
        boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
      ></Box>

      <Box
        shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
        w={"40%"}
        h={"300px"}
        rounded={"10px"}
        boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
        p={"3"}
      >
        <HStack justify={"center"} align={"center"}>
          <Text
            fontSize={["30px", "30px", "30px", "50px", "50px"]}
            fontWeight={"100"}
          >
            {" "}
            $1,542,000
          </Text>
          <Box
            cursor={"pointer"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            w={["70px", "70px", "70px", "70px", "70px"]}
            h={"28px"}
            bg={"green.200"}
            rounded={"10px"}
          
            zIndex={"1"}
          >
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"center"}
              align={"center"}
              textColor={"green.500"}
            >
              <FaArrowUp fontSize={"13px"} />
              <Text
                fontFamily={"sans-serif"}
                fontWeight={"500"}
                fontSize={"17px"}
                color={"green.500"}
              >
                1.5%
              </Text>
            </HStack>
          </Box>
        </HStack>

<Divider mt={"5px"} borderColor={"lack"} />
        <HStack 
          justify={"center"}
          align={"start"}
          w={"100%"}
          h={"100%"}
          gap={"25px"}
          mt={"10px"}
      
        
        >
          {" "}
          {stats.map(({ label, percentage }, index) => (
            <>
              <VStack justify={"center"} align={"center"} key={label}>
                <Text
                  fontSize={["15px", "15px", "16px", "16px", "16px"]}
                  fontFamily={"Raleway"}
                  fontWeight={"500"}
                >
                  {label}
                </Text>
                <Box
                  cursor={"pointer"}
                  transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                  w={["70px", "70px", "70px", "70px", "80px"]}
                  h={"28px"}
                  bg={"green.200"}
                  rounded={"10px"}
                
                  zIndex={"1"}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                    textColor={"green.500"}
                  >
                    <FaArrowUp fontSize={"13px"} />
                    <Text
                      fontFamily={"sans-serif"}
                      fontWeight={"100"}
                      fontSize={"17px"}
                      color={"green.500"}
                    >
                      {percentage}
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </>
          ))}
          


        


        </HStack>
                    
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
    
      </Box>
    </>
  );
};

export default HouseStats;
