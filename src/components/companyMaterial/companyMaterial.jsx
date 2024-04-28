import React from "react";

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
  Center,
  MdUnsubscribe,
  Button,
  useMediaQuery,
  Divider,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

import { FaFilePdf } from "react-icons/fa";
import inwardCross from "@/Svg/inwardCross.svg";
import Image from "next/image";
const CompanyMaterial = () => {
  return (
    <>
      <HStack
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        mt={"250px"}
      >
        <HStack px={"50px"} gap={"5px"} textColor={"#393939"}>
          <Image src={inwardCross} width={100} height={100} />
          <Text
            fontSize={["40px", "40px", "40px", "50px", "70px"]}
            fontFamily={"Raleway"}
            fontWeight={"500"}
          >
            Company Material
          </Text>
        </HStack>
      </HStack>

      <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
        <HStack
          fontFamily={"Raleway"}
          w={"100%"}
          h={"100%"}
          align={"start"}
          justify={"center"}
          gap={["10px", "8px", "12px", "15px", "20px"]}
          mt={["85px", "85px", "150px", "200px", "225px"]}
          px={["0px", "10px", "30px", "40px", "60px"]}
          wrap={["wrap", "wrap", "wrap", "wrap", "wrap"]}
        >


<Box
            w={["170px", "500px", "500px", "325px", "500px"]}
            h={["225px", "300px", "290px", "250px", "250px"]}
            maxW={["200px", "200px", "250px", "100%", "100%"]}
            shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            p={"10px"}
            rounded={"10px"}
            
          >
            <HStack w={"100%"} h={"100%"} align={"end"} justify={"center"}>
              <Box
                _hover={{

                    cursor:"pointer",
                    bgColor:"#FFC5C5",
                    transform:"scale(1.05)"
                  }}
              transition={"all 0.3s ease-in-out"}
                w={"50%"}
                h={"20%"}
                rounded={"10px"}
                shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  align={"center"}
                  justify={"center"}
                >
                  <FaFilePdf fontSize={"25px"} />
                  <Text>Download PDF</Text>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box
            w={["170px", "500px", "500px", "325px", "500px"]}
            h={["225px", "300px", "290px", "250px", "250px"]}
            maxW={["200px", "200px", "250px", "100%", "100%"]}
            shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            p={"10px"}
            rounded={"10px"}
            
          >
            <HStack w={"100%"} h={"100%"} align={"end"} justify={"center"}>
              <Box
              _hover={{

                cursor:"pointer",
                bgColor:"#FFC5C5",
                transform:"scale(1.05)"
              }}
            
              transition={"all 0.3s ease-in-out"}
                w={"50%"}
                h={"20%"}
                rounded={"10px"}
                shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  align={"center"}
                  justify={"center"}
                >
                  <FaFilePdf fontSize={"25px"} />
                  <Text>Download PDF</Text>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box
            w={["170px", "500px", "500px", "325px", "500px"]}
            h={["225px", "300px", "290px", "250px", "250px"]}
            maxW={["200px", "200px", "250px", "100%", "100%"]}
            shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            p={"10px"}
            rounded={"10px"}

          >
            <HStack w={"100%"} h={"100%"} align={"end"} justify={"center"}>
              <Box
               _hover={{

                cursor:"pointer",
                bgColor:"#FFC5C5",
                transform:"scale(1.05)"
              }}
              transition={"all 0.3s ease-in-out"}
                w={"50%"}
                h={"20%"}
                rounded={"10px"}
                shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  align={"center"}
                  justify={"center"}
                >
                  <FaFilePdf fontSize={"25px"} />
                  <Text>Download PDF</Text>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default CompanyMaterial;
