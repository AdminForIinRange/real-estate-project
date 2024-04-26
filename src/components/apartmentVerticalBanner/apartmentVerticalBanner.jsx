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
const ApartmentVerticalBanner = () => {
  return (
    <>
      <VStack
        w={"100%"}
        align={"center"}
        justify={"center"}
        mt={"60px"}
        pr={["0px", "0px", "0px", "15px", "50px"]}
      >
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
      </VStack>
    </>
  );
};

export default ApartmentVerticalBanner;
