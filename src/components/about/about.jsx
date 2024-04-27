import React from "react";
import dimond from "@/Svg/dimond.svg";

import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";
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
import HouseStats from "./houseStats/houseStats";
import ApartmentVerticalBanner from "../apartmentVerticalBanner/apartmentVerticalBanner";
const About = () => {
  return (
    <>
      <Box mt={"250px"}>
        <HStack px={"50px"} gap={"5px"}>
          <Image src={dimond} width={50} height={100} />
          <Text
            fontSize={["30px", "30px", "30px", "50px", "70px"]}
            fontFamily={"Raleway"}
            fontWeight={"500"}
          >
            Why Co-Ownership
          </Text>
        </HStack>

        <Text
          px={"50px"}
          fontSize={["16px", "16px", "20px", "20px", "27px"]}
          fontFamily={"Raleway"}
          mt={["40px", "40px", "50px", "50px", "50px"]}
          w={["100%", "90%", "80%", "70%", "70%"]}
          fontWeight={"300"}
        >
          Co-ownership offers a powerful investment strategy where individuals
          join forces to share ownership of properties, pooling resources for
          greater returns while spreading risk. It's a collaborative path to
          real estate success."
        </Text>
      </Box>

      <HStack
        px={["10px", "20px", "30px", "40px", "50px"]}
        w={["100%", "100%", "100%", "100%", "80%"]}
        align={"start"}
        justify={"center"}
        mt={"60px"}
        gap={["3", "3", "6", "8", "8"]}
        wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
      >
        <HouseStats />
      </HStack>
    </>
  );
};

export default About;
