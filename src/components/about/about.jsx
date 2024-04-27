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
import WhyCoOwnership from "./whyCoOwnership/whyCoOwnership";
import BenefitsinCoOwnership from "./benefitsinCoOwnership/benefitsinCoOwnership";

import curvedFan from "@/Svg/curvedFan.svg";

import Fan from "@/Svg/Fan.svg";

import subStar from "@/Svg/subStar.svg";

const About = () => {
  return (
    <>
      <Box mt={"250px"}>
        <VStack
          h={"100%"}
          align={"start"}
          justify={"start"}
          w={["100%", "100%", "100%", "100%", "100%"]}
        >
          <WhyCoOwnership />
        </VStack>
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

      <Box mt={"250px"}>
        <VStack
          px={["0px", "20px", "30px", "40px", "50px"]}
          h={"100%"}
          align={["center", "end", "end", "end", "end"]}
          justify={["center", "right", "right", "right", "right"]}
          w={["100%", "100%", "100%", "100%", "100%"]}
        >
          <BenefitsinCoOwnership />
        </VStack>
      </Box>

      <HStack
        px={["10px", "20px", "30px", "40px", "50px"]}
        w={["100%", "100%", "100%", "100%", "100%"]}
        align={["center", "end", "end", "end", "end"]}
        justify={["center", "right", "right", "right", "right"]}
        mt={"60px"}
        gap={["3", "3", "6", "8", "8"]}
        wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
      >
        <HStack
          w={["100%", "100%", "100%", "100%", "70%"]}
          align={"end"}
          justify={"start"}
          gap={["3", "3", "6", "8", "8"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box
            w={["100%", "100%", "100%", "100%", "100%"]}
            rounded={"10px"}
            h={"200px"}
            shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            p={"20px"}
          >
            <Box w={["35px", "35px", "50px", "50px", "100px"]}>
              <Image src={subStar} />
            </Box>

            <Text
              fontWeight={"bold"}
              fontSize={["16px", "16px", "20px", "16px", "20px"]}
            >
              Dividends
            </Text>
            <Text
              fontWeight={"200"}
              fontSize={["10px", "12px", "15px", "13px", "16px"]}
            >
              ssss
            </Text>
          </Box>
          <Box
            w={["100%", "100%", "100%", "100%", "100%"]}
            rounded={"10px"}
            h={"200px"}
            shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            p={"20px"}
          >
            <Box w={["35px", "35px", "50px", "50px", "100px"]}>
              <Image src={Fan} />
            </Box>

            <Text
              fontWeight={"bold"}
              fontSize={["16px", "16px", "20px", "16px", "20px"]}
            >
             Ownership
            </Text>
            <Text
              fontWeight={"200"}
              fontSize={["10px", "12px", "15px", "13px", "16px"]}
            >
              ssss
            </Text>
          </Box>
          <Box
            w={["100%", "100%", "100%", "100%", "100%"]}
            rounded={"10px"}
            h={"200px"}
            shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            p={"20px"}
          >
            <Box w={["35px", "35px", "50px", "50px", "100px"]}>
              <Image src={curvedFan} />
            </Box>

            <Text
              fontWeight={"bold"}
              fontSize={["16px", "16px", "20px", "16px", "20px"]}
            >
              Less Risk
            </Text>
            <Text
              fontWeight={"200"}
              fontSize={["10px", "12px", "15px", "13px", "16px"]}
            >
              ssss
            </Text>
          </Box>{" "}
        </HStack>
      </HStack>
    </>
  );
};

export default About;
