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
import React from "react";

import Image from "next/image";

import dimond from "@/Svg/dimond.svg";
import FeaturedHouseBox from "../featuredHouseBox/featuredHouseBox";
import IdeaBox from "../ideaBox/ideaBox";
import HeroTextInput from "../heroTextInput/heroTextInput";
import HouseVerticalBanner from "@/components/houseVerticalBanner/HouseVerticalBanner";

const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(max-width: 990px)");

  return (
    <>
      <HStack
        mt={"10"}
        justify={"center"}
        align={"start"}
        w={"100%"}
        wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap"]}
      >
        <VStack
          h={"100%"}
          justify={["center", "center", "center", "left", "left"]}
          align={["left", "left", "left", "left", "left"]}
        >
          <HeroTextInput />

          <HStack
            fontFamily={"Raleway"}
            w={"100%"}
            align={"start"}
            justify={"right"}
            mt={"60px"}
            gap={["7px", "10px", "13px", "13px", "20px"]}
            h={"100%"}
            pr={["0px", "0px", "0px", "15px", "50px"]}
          >
            <IdeaBox />
          </HStack>

          <VStack
            w={"100%"}
            align={"center"}
            justify={"center"}
            mt={"60px"}
            pr={["0px", "0px", "0px", "15px", "50px"]}
          >
            <HouseVerticalBanner />
          </VStack>
        </VStack>

        <Spacer />
        <HStack w={["90%", "80%", "50%", "80%", "50%"]} h={"100%"}>
          {!isTablet ? <FeaturedHouseBox /> : null}
        </HStack>
      </HStack>
    </>
  );
};

export default Hero;
