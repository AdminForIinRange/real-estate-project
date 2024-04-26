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
  useMediaQuery,
} from "@chakra-ui/react";

const HeroTextInput = () => {
  return (
    <>
      <Text
        fontSize={["40px", "50px", "60px", "60px", "70px"]}
        as={"span"}
        fontFamily={"Raleway"}
        w={"100%"}
        color={["gray", "blue", "green", "red", "#393939"]}
        fontWeight={"500"}
      >
        Unlock Success: Co-Own for Max Returns, Min Risk!
      </Text>

      <Text
        textAlign={"left"}
        fontWeight={"light"}
        fontSize={["12px", "16px", "20px", "20px", "30px"]}
        fontFamily={"Raleway"}
        w={"80%"}
        color={"#393939"}
      >
        Accelerate Wealth Growth: Explore Co-Ownership Opportunities for Smart
        Investors!
      </Text>

      <HStack w={"100%"} align={"center"} justify={"left"} mt={"20px"}>
        <Input
          fontFamily={"Raleway"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
          }}
          w={["100%", "80%", "60%", "60%", "50%"]}
          h={["45px", "45px", "60px", "60px", "60px"]}
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
    </>
  );
};

export default HeroTextInput;
