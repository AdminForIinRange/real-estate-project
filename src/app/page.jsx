import Navbar from "@/components/navbar/navbar";
import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "@/components/home/hero/hero";
import About from "@/components/about/about";
import Listing from "@/components/listings/listing";
import Testimonial from "@/components/testimonial/testimonial";
import CompanyMaterial from "@/components/companyMaterial/companyMaterial";
import Footer from "@/components/footer/footer";
import Faq from "@/components/faq/faq";
const Home = () => {
  return (
    <>
      <Box px={["2", "2", "5", "5", "5"]} pl={["2", "2", "5", "12", "12"]}>
        <Box>
          <Navbar />
        </Box>

        <Box>
          <Hero />
        </Box>
        <Box>
          <About />
        </Box>

        <Box>
          <Listing />
        </Box>
        <Box>
          <Testimonial />
        </Box>

        <Box>
          <CompanyMaterial />
        </Box>

        <Box>
          <Faq />
        </Box>

        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Home;
