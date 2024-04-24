import { HStack, Text, Box, Icon, Spacer, VStack, Input } from "@chakra-ui/react";
import React from "react";
import Spark from "@/Svg/Spark.svg";
import Star from "@/Svg/Star.svg";
import Image from "next/image";
import { TiStarburst } from "react-icons/ti";
const Hero = () => {
  return (
    <>
      <HStack mt={"10"} justify={"center"} align={"start"} w={"100%"}>
        <VStack  h={"100%"}>
            
          <Text as={"span"} fontSize={"70px"} fontFamily={"Raleway"} w={"100%"}>
            Unlock Success: Co-Own for Max Returns, Min Risk!
        
          </Text> 

          <Text as={"span"} fontSize={"30px"} fontFamily={"Raleway"} w={"100%"}>
          Accelerate Wealth Growth: Explore Co-Ownership Opportunities for Smart Investors!
        
          </Text> 
    

    <Input />
    
          
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
