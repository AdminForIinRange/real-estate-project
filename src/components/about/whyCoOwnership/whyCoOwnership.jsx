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
  import dimond from "@/Svg/dimond.svg";

const WhyCoOwnership = () => {
  return (
    <>

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
    </>
  )
}

export default WhyCoOwnership