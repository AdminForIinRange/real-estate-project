import { HStack, Text, Box, Icon, Spacer, } from "@chakra-ui/react";
import React from "react";
import Spark from "@/Svg/Spark.svg";
import Star from "@/Svg/Star.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <HStack mt={"10"} justify={"center"} align={"start"} w={"100%"}>
      <HStack alignItems="center" as="span" > {/* Align items vertically */}
  <Text fontSize="70px" fontFamily="Raleway" flex="1" as="span" > {/* Set flex to 1 to take remaining space */}
    Unlock Success: Co-Own for Max Returns, Min Risk!
    <Box minW="100px"> {/* Adjust the width as needed */}
    <Image as="span" src={Spark} width={10} height={10} /> {/* Adjust width and height as needed */}
  </Box>
  </Text>
 
</HStack>

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
