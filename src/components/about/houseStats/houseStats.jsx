"use client";

import React, { useState } from "react";

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
    { label: "Yearly", number: "32%" },
  ];

  const extraStats = [
    { label: "Investors", number: "1.4k" },
    { label: "land", number: "356k" },
    { label: "Rental", number: "2.5k" },
    ,
  ];

  const [flexibleBgImage, setFlexibleBgImage] = useState(
    "https://source.unsplash.com/white-concrete-building-under-blue-sky-during-daytime-mR1CIDduGLc"
  );


  const [display, setDisplay] = useState(false);


  return (
    <>
      <Box



onMouseEnter={() => setDisplay(true)}
onMouseLeave={() => setDisplay(false)}
        transition={"transform 0.3s ease-in-out"}
        bgImage={flexibleBgImage}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={["center", " center", "center", "center", "center "]}
        w={"100%"}
        h={"300px"}
        rounded={"5px"}
        boxShadow={"0px 0px 20px rgba(0,0,0,0.50)"}
      >
        { display ? <> <HStack mt={"50px"}
         transition="all 0.3s ease"
          w={"100%"}
          h={"100%"}
          align={"end"}
          justify={"center"}
          p={5}
          gap={"15px"}
        >
          <Box
            transition={"transform 0.3s ease-in-out"}
            _hover={{
              transform: "scale(1.1)",
            }}
            cursor={"pointer"}
            onClick={() =>
              setFlexibleBgImage(
                "https://source.unsplash.com/white-concrete-building-under-blue-sky-during-daytime-mR1CIDduGLc"
              )
            }
            bgImage={
              "https://source.unsplash.com/white-concrete-building-under-blue-sky-during-daytime-mR1CIDduGLc"
            }
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPos={["center", " center", "center", "center", "center "]}
            w={"75px"}
            h={"55px"}
            rounded={"5px"}
          
          ></Box>
          <Box
            transition={"transform 0.3s ease-in-out"}
            _hover={{
              transform: "scale(1.1)",
            }}
            cursor={"pointer"}
            onClick={() =>
              setFlexibleBgImage(
                "https://source.unsplash.com/round-white-wooden-table-near-kitchen-island-MyeOnGcibCQ"
              )
            }
            bgImage={
              "https://source.unsplash.com/round-white-wooden-table-near-kitchen-island-MyeOnGcibCQ"
            }
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPos={["center", " center", "center", "center", "center "]}
            w={"75px"}
            h={"55px"}
            rounded={"5px"}
          
          ></Box>
          <Box
            transition={"transform 0.3s ease-in-out"}
            _hover={{
              transform: "scale(1.1)",
            }}
            cursor={"pointer"}
            onClick={() =>
              setFlexibleBgImage(
                "https://source.unsplash.com/brown-wooden-kitchen-cabinet-JDBVXignFdA"
              )
            }
            bgImage={
              "https://source.unsplash.com/brown-wooden-kitchen-cabinet-JDBVXignFdA"
            }
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPos={["center", " center", "center", "center", "center "]}
            w={"75px"}
            h={"55px"}
            rounded={"5px"}
           
          ></Box>

        
        </HStack>
        
        </>: <></>}
      </Box>

      <Box
        shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
        w={["100%", "85%", "80%", "70%", "40%"]}
        h={"230px"}
        rounded={"10px"}
        boxShadow={"0px 0px 20px rgba(0,0,0,0.50)"}
        p={"3"}
      >
        <HStack justify={"center"} align={"center"}>
          <Text
            fontSize={["35px", "40px", "40px", "40px", "40px"]}
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
              <FaArrowUp fontSize={"12px"} />
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
                    <FaArrowUp fontSize={"12px"} />
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

        <VStack
          w={"100%"}
          h={"65px"}
          mt={"10px"}
          rounded={"10px"}
          py={"10px"}
          justify={"center"}
          align={"center"}
        >
          <HStack
            justify={"center"}
            align={"center"}
            w={"100%"}
            gap={"15px"}
            mb={"5px"}
          ></HStack>
        </VStack>
      </Box>
    </>
  );
};

export default HouseStats;
