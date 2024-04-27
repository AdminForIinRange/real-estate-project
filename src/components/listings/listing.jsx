"use client";

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
  Center,
  MdUnsubscribe,
  Button,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";

import SwirlyStar from "@/Svg/SwirlyStar.svg";
import { FaArrowRight, FaArrowUp } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { LuBoxSelect } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const Listing = () => {
  return (
    <>
      <HStack
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        mt={"250px"}
      >
        <HStack px={"50px"} gap={"20px"} textColor={"#393939"}>
          <Image src={SwirlyStar} width={100} height={100} />
          <Text
            fontSize={["30px", "30px", "30px", "50px", "70px"]}
            fontFamily={"Raleway"}
            fontWeight={"500"}
          >
            Featured
          </Text>
        </HStack>
      </HStack>

      <HStack
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        mt={"100px"}
      >
        {" "}
        <Box
          h={"400px"}
          w={"400px"}
          shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
          rounded={"10px"}
        >
          <Box
            h={"60%"}
            w={"100%"}
            shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            rounded={"10px"}
            bgImage={
              "https://source.unsplash.com/brown-and-white-concrete-building-MAnVoJlQUvg"
            }
            bgSize={"cover"}
            bgPos={["center", " center", "center", "center", "center"]}
          ></Box>
          <Box
            w={"100%"}
            shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            p={"10px"}
            px={"20px"}
          >
            <HStack>
              <Text
                fontSize={["28px", "28px", "28px", "35px", "40px"]}
                fontWeight={"400"}
              >
                {" "}
                $1,542,000
              </Text>
              <Box
                cursor={"pointer"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                w={["70px", "70px", "70px", "70px", "70px"]}
                h={"28px"}
                bg={"#C2FF93"}
                rounded={"10px"}
                zIndex={"1"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"center"}
                  align={"center"}
                  textColor={"#197C00"}
                >
                  <FaArrowUp fontSize={"12px"} />
                  <Text
                    fontFamily={"sans-serif"}
                    fontWeight={"500"}
                    fontSize={"17px"}
                    color={"#197C00"}
                  >
                    1.5%
                  </Text>
                </HStack>
              </Box>
            </HStack>

            <Text
              mb={"5px"}
              fontSize={["12px", "12px", "16px", "18px", "18px"]}
              fontWeight={"500"}
            >
              {" "}
              2427 Sunburst Drive
            </Text>

            <HStack gap={"10px"}>
              <Icon as={FaBed} />
              <Text
                fontSize={["10px", "12px", "12px", "16px", "16px"]}
                fontWeight={"500"}
              >
                {" "}
                3
              </Text>

              <VStack></VStack>

              <Center height="40px">
                <Divider orientation="vertical" color={"gray.300"} />
              </Center>

              <Icon as={FaShower} />
              <Text
                fontSize={["10px", "12px", "12px", "16px", "16px"]}
                fontWeight={"500"}
              >
                {" "}
                2
              </Text>

              <Center height="40px">
                <Divider orientation="vertical" color={"gray.300"} />
              </Center>
              <Icon as={LuBoxSelect} />
              <Text
                fontSize={["10px", "12px", "12px", "16px", "16px"]}
                fontWeight={"500"}
              >
                {" "}
                300m<sup>2</sup>
              </Text>
              <HStack w={"100%"} justify={"end"} align={"center"} h={"100%"}  
                  textAlign={"right"}
                  fontSize={["10px", "12px", "12px", "16px", "25px"]}
                  fontWeight={"300"} >
                
               
                   <Icon as={FaArrowRightLong} />{" "}
            
              </HStack>
            </HStack>
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default Listing;
