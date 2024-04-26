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
import { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { FaArrowUp } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { IoIosResize } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { FaRuler } from "react-icons/fa";
const HouseStats = () => {
  const stats = [
    { label: "Weekly", number: "1.9%" },
    { label: "Monthly", number: "7.6%" },
    { label: "Yearly", number: "37.2%" },
  ];

  const extraStats = [
    { label: "Investors", number: "1.4k" },
    { label: "land", number: "356k" },
    { label: "Rental", number: "2.5k" },
    ,
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
        w={["100%", "85%", "80%", "70%", "50%"]}
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
        <HStack
          justify={"center"}
          align={"start"}
          w={"100%"}
          gap={"25px"}
          mt={"5px"}
        >
          {" "}
          {stats.map(({ label, number }, index) => (
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
                      {number}
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </>
          ))}
        </HStack>

        <HStack
          justify={"center"}
          align={"start"}
          w={"100%"}
          gap={"25px"}
          mt={"5px"}
        >
          {" "}
          {extraStats.map(({ label, number }, index) => (
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
                  bg={"gray.200"}
                  rounded={"10px"}
                  zIndex={"1"}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                    textColor={"gray.500"}
                  >
                    <Text
                      fontFamily={"sans-serif"}
                      fontWeight={"100"}
                      fontSize={"17px"}
                      color={"gray.500"}
                    >
                      {number}
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </>
          ))}
        </HStack>

        <VStack w={"100%"} h={"65px"} mt={"10px"} rounded={"10px"} py={"10px"} justify={"center"} align={"center"}>
          <HStack
            justify={"center"}
            align={"center"}
            w={"100%"}
            gap={"15px"}
            mb={"5px"}
          >
            <HStack>
              <FaBed fontSize={"13px"} as="span" />
              <Text fontSize={"13px"}>Bed: 5</Text>
            </HStack>

            <HStack>
              <FaHammer fontSize={"13px"} />
              <Text fontSize={"13px"}>built: 2022</Text>
            </HStack>


            <HStack>
            <IoIosResize fontSize={"13px"} />
            <Text fontSize={"13px"}>Land: 800m2</Text>
            </HStack>
      
          </HStack>
          <HStack justify={"center"} align={"center"} w={"100%"} gap={"15px"}>

          <HStack>
          <FaHouse fontSize={"13px"} />
            <Text fontSize={"13px"}>Type: Rental</Text>

            </HStack>
            <HStack>
            <FaRuler fontSize={"13px"} />
            <Text fontSize={"13px"}>Hight: 2022</Text>

            </HStack>
            <HStack>
            <IoIosResize fontSize={"13px"} />
            <Text fontSize={"13px"}>Tenants: 2</Text>
            </HStack>
     
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default HouseStats;
