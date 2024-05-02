"use client";

import { Box, Flex, Link, Text, Stack, Icon } from "@chakra-ui/react";

import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      mt={["150px", "200px", "300px", "300px", "300px"]}
      bgColor="white"
      py={2}
      borderRadius={"15px"}
      bg={"#f6f6f6"}
    >
      <Flex
        direction={{ base: "row", md: "row" }}
        justify="space-around"
        align="start"
        color={"black"}
      >
        <Stack
          spacing={4}
          textAlign="center"
          mb={{ base: 8, md: 0 }}
          color={"black"}
        >
          <Text fontSize="lg" fontWeight="bold" color={"black"}>
            Company
          </Text>
          <Link href="#" fontSize="sm" color={"#393939"}>
            About Us
          </Link>
          <Link href="#" fontSize="sm" color={"#393939"}>
            Contact Us
          </Link>
          <Link href="#" fontSize="sm" color={"#393939"}>
            Privacy Policy
          </Link>
          <Link href="#" fontSize="sm" color={"#393939"}>
            Terms of Service
          </Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold" color={"black"}>
            Get Started
          </Text>
          <Link href="/components" fontSize="sm" color={"#393939"}>
            Blog
          </Link>

          <Link href="/components/loginForm" fontSize="sm" color={"#393939"}>
            Properties
          </Link>

          <Link href="/components/loginForm" fontSize="sm" color={"#393939"}>
            Add Listing
          </Link>

          <Link href="/" fontSize="sm" color={"black"}>
            Contact
          </Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text color={"black"} fontSize="lg" fontWeight="bold">
            Connect
          </Text>
          <Flex justify="center">
            <Link
              target="_blank"
              href="https://github.com/AdminForIinRange"
              mr={2}
            >
              <Icon as={FaGithub} boxSize={6} color={"#393939"} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/anjesh-bhattarai/"
              mr={2}
            >
              <Icon as={FaLinkedin} boxSize={6} color={"#393939"} />
            </Link>
          </Flex>
        </Stack>
      </Flex>
      <Text mt={8} textAlign="center" fontSize="sm" color={"#393939"}>
        © 2024 Anjesh Bhattarai
      </Text>
    </Box>
  );
};

export default Footer;
