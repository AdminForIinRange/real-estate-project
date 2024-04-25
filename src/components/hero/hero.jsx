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

<VStack  w={"100%"}
         
          align={"center"}
          justify={"center"}
          mt={"20px"}>


          <InputGroup
          
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",

            }}
            w={["80%", "70%", "60%", "50%", "30%"]}
            h={["30px", "40px", "50px", "50px", "50px"]}
            variant="filled"
            borderRadius={"20px"}
            bgColor={"#F5F5F5"}
            width={"100%"}
          >
            <Input
              w={"100%"}
              borderWidth={"0px"}
              h={"100%"}
              fontSize={["12px", "16px", "18px", "18px", "18px"]}
              placeholder="@gmail.com"
            />
            <InputRightAddon h={"100%"}>
              <Button
                colorScheme="gray"
                fontSize={"100%"}
                size={["xs", "sm", "md", "md", "md"]}
              >😱</Button>
            </InputRightAddon>
          </InputGroup>

          </VStack>
        </VStack>

        <Spacer />
        <HStack w={"50%"} h={"100%"}>
          <Box
            bg={"white"}
            rounded={"xl"}
            shadow={"xl"}
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
