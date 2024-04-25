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
  MdUnsubscribe,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Spark from "@/Svg/Spark.svg";
import Star from "@/Svg/Star.svg";
import Image from "next/image";
import { TiStarburst } from "react-icons/ti";

import SpikeStar from "@/Svg/SpikeStar.svg";
import roundedFlower from "@/Svg/roundedFlower.svg";

import ninjaStarFlower from "@/Svg/ninjaStarFlower.svg";


const Hero = () => {
  return (
    <>
      <HStack mt={"10"} justify={"center"} align={"start"} w={"100%"}>
        <VStack h={"100%"}>
          <Text as={"span"} fontSize={"70px"} fontFamily={"Raleway"} w={"100%"}>
            Unlock Success: Co-Own for Max Returns, Min Risk!
          </Text>

          <Text as={"span"} fontSize={"30px"} fontFamily={"Raleway"} w={"100%"}>
            Accelerate Wealth Growth: Explore Co-Ownership Opportunities for
            Smart Investors!
          </Text>

          <HStack w={"100%"} align={"center"} justify={"left"} mt={"20px"}>
            <Input
              fontFamily={"Raleway"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
              }}
              w={["80%", "70%", "60%", "60%", "50%"]}
              h={["30px", "40px", "60px", "60px", "60px"]}
              variant="filled"
              bgColor={"white"}
              boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
              bg={"white"}
              borderRadius={"10px"}
              borderWidth={"0px"}
              fontSize={["12px", "16px", "18px", "18px", "18px"]}
              placeholder="Enter an address and zip code"
            />

            <Box
              cursor={"pointer"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
              }}
              w={"70px"}
              h={"30px"}
              bg={"#9E9E9E"}
              rounded={"10px"}
              boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
              ml={"-100px"}
              zIndex={"1"}
            ></Box>
          </HStack>

          <HStack  w={"100%"} align={"start"} justify={"right"} mt={"40px"} gap={"20px"} h={"100%"} pr={"50px"} >
            <Box
            p={"5"}
              bg={"white"}
              rounded={"xl"}
              w={"100%"}
              h={"200px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            ></Box>
            <Box
              bg={"white"}
              rounded={"xl"}
              w={"100%"}
              h={"200px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            ></Box>
            <Box
              bg={"white"}
              rounded={"xl"}
              w={"100%"}
              h={"200px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            ></Box>
          </HStack>
        </VStack>

        <Spacer />
        <HStack w={"50%"} h={"100%"}>
          <Box
            bg={"white"}
            rounded={"xl"}
            boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
            h={"1000px"}
            w={"100%"}
            p={5}
            as=""
          >
            <Box minW={"100"} as="span">
              <HStack>
                <Text
                  as={"span"}
                  fontSize={"35px"}
                  fontFamily={"Raleway"}
                  w={"100%"}
                  fontWeight={"600"}
                >
                  Featured Near You
                </Text>
                <Image src={Star} width={50} height={100} />
              </HStack>
            </Box>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Hero;
