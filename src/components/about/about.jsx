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

import WhyCoOwnership from "./whyCoOwnership/whyCoOwnership";
import BenefitsinCoOwnership from "./benefitsinCoOwnership/benefitsinCoOwnership";

import curvedFan from "@/Svg/curvedFan.svg";

import Fan from "@/Svg/Fan.svg";

import subStar from "@/Svg/subStar.svg";

const About = () => {
  const benefits = [
    {
      image: curvedFan,
      title: "Dividends",
      sub: "Regular income from property rentals, providing steady cash flow.",
    },
    {
      image: Fan,
      title: "Less Risk",
      sub: " Smaller risk for financial loss due to shared responsibility and diversified ownership",
    },
    {
      image: subStar,
      title: "Ownership",
      sub: " Legal right to possess, control, and benefit from property depending on owned percentage.",
    },
  ];
  return (
    <>
      <Box  mt={["85px", "85px", "150px", "200px", "225px"]}>
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

      <Box  mt={["85px", "85px", "150px", "200px", "225px"]}>
        <VStack
          px={["0px", "20px", "30px", "40px", "50px"]}
          h={"100%"}
          align={["center", "center", "end", "end", "end"]}
          justify={["center", "center", "right", "right", "right"]}
          w={["100%", "100%", "100%", "100%", "100%"]}
        >
          <BenefitsinCoOwnership />
        </VStack>
      </Box>

      <HStack
        px={["10px", "20px", "30px", "40px", "50px"]}
        w={["100%", "100%", "100%", "100%", "100%"]}
        align={["center", "center", "end", "end", "end"]}
        justify={["center", "center", "right", "right", "right"]}
        mt={"60px"}
        h={"100%"}
      >
        <HStack
          w={["90%", "80%", "95%", "80%", "70%"]}
          align={["center", "center", "end", "end", "end"]}
          justify={["center", "center", "right", "right", "right"]}
          gap={["13px", "13px", "13px", "13px", "20px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          h={"100%"}
          fontFamily={"Raleway"}
        >
          {benefits.map(({ image, title, sub }, index) => (
            <Box
              key={title}
              w={["100%", "100%", "100%", "100%", "100%"]}
              rounded={"10px"}
              h={"200px"}
              shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              p={"20px"}
            >
              <Box w={["35px", "35px", "50px", "50px", "100px"]}>
                <Image src={image} />
              </Box>

              <Text
                fontWeight={"bold"}
                fontSize={["20px", "20px", "20px", "16px", "20px"]}
                mt={"5px"}
              >
                {title}
              </Text>
              <Text
                fontWeight={"300"}
                fontSize={["16px", "15px", "15px", "13px", "16px"]}
              >
                {sub}
              </Text>
            </Box>
          ))}
        </HStack>
      </HStack>
    </>
  );
};

export default About;
