import React from 'react'
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

  import Image from "next/image";
import SpikeStar from "@/Svg/SpikeStar.svg";
import roundedFlower from "@/Svg/roundedFlower.svg";

import ninjaStarFlower from "@/Svg/ninjaStarFlower.svg";
const IdeaBox = () => {
  return (
    <>
   
     <Box
     p={"3"}
     px={"5"}
     bg={"white"}
     rounded={"xl"}
     w={"100%"}
     h={"200px"}
     boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
   >
     <VStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
       <Image src={SpikeStar} width={50} height={100} />
       <Text fontWeight={"bold"} fontSize={"20px"}>
         {" "}
         Diversified Portfolio{" "}
       </Text>
       <Text fontWeight={"200"} fontSize={"16px"}>
         {" "}
         Co-ownership reduces the financial threshold for entry,
         accelerating wealth growth.{" "}
       </Text>
     </VStack>
   </Box>
   <Box
     p={"3"}
     px={"5"}
     bg={"white"}
     rounded={"xl"}
     w={"100%"}
     h={"200px"}
     boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
   >
     <VStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
       <Image src={roundedFlower} width={50} height={100} />
       <Text fontWeight={"bold"} fontSize={"20px"}>
         Shared Expertise{" "}
       </Text>
       <Text fontWeight={"200"} fontSize={"16px"}>
         {" "}
         Pooling resources maximizes opportunities and improves
         outcomes.
       </Text>
     </VStack>
   </Box>
   <Box
     p={"3"}
     px={"5"}
     bg={"white"}
     rounded={"xl"}
     w={"100%"}
     h={"200px"}
     boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
   >
     {" "}
     <VStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
       <Image src={ninjaStarFlower} width={50} height={100} />
       <Text fontWeight={"bold"} fontSize={"20px"}>
         {" "}
         Accessible Investment{" "}
       </Text>
       <Text fontWeight={"200"} fontSize={"16px"}>
         Co-ownership diversifies investments across properties,
         lowering risk.{" "}
       </Text>
     </VStack>
   </Box>
   </>

  )
}

export default IdeaBox