import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";

import Logo from "@/Svg/Logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
          <Box
            bg={"white"}
            rounded={"xl"}
            shadow={"xl"}
            w={["100%", "100%", "100%", "85%", "70%"]}
            h={"75px"}
            px={"14"}
          >
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"center"}
              align={"center"}
              gap={["6", "10", "20", "20", "20"]}
              fontFamily={"Raleway"}
            >
              <Box minW={"10"}>
                <Image src={Logo} />
              </Box>

              <Box w={["0%", "0%", "0%", "0%", "50%"]}></Box>

              <Text
                 transition={"all 0.3s ease-in-out"}
                cursor={"pointer"}
                _hover={{
                  transform: "scale(1.2)",
                 
                }}
               
                whiteSpace={"nowrap"}
                fontSize={["12px", "12px", "14px", "16px", "16px"]}
              >
                Blog
              </Text>

              <Text
                transition={"all 0.3s ease-in-out"}
                cursor={"pointer"}
                _hover={{
                  transform: "scale(1.2)",
                  transition: "all 0.3s ease-in-out",
                }}
                whiteSpace={"nowrap"}
                fontSize={["12px", "12px", "14px", "16px", "16px"]}
              >
                About Us
              </Text>

              <Text
                transition={"all 0.3s ease-in-out"}
                cursor={"pointer"}
                _hover={{
                  transform: "scale(1.2)",
                  transition: "all 0.3s ease-in-out",
                }}
                whiteSpace={"nowrap"}
                fontSize={["12px", "12px", "14px", "16px", "16px"]}
              >
                Properties{" "}
              </Text>

              <Text
                transition={"all 0.3s ease-in-out"}
                cursor={"pointer"}
                _hover={{
                  transform: "scale(1.2)",
                  transition: "all 0.3s ease-in-out",
                }}
                whiteSpace={"nowrap"}
                fontSize={["12px", "12px", "14px", "16px", "16px"]}
              >
                Add Listing{" "}
              </Text>
            </HStack>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
