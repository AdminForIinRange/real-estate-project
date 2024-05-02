"use client";
import {

  Box,

} from "@chakra-ui/react";
const HouseVerticalBanner = () => {
  return (
    <>
      <Box
        w={"100%"}
        h={"130px"}
        rounded={"10px"}
        boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
      ></Box>

      <Box
        w={"80%"}
        h={"400px"}
        mt={"-90px"}
        boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
        rounded={"xl"}
        bgImage={
          "https://source.unsplash.com/windowpanes-at-the-building-B0aCvAVSX8E"
        }
        bgSize={"cover"}
        bgPos={["center", " center", "center", "center", "center"]}
      ></Box>
    </>
  );
};

export default HouseVerticalBanner;
