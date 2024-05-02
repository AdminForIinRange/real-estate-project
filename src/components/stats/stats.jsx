
import React from "react";
import HallowFlower from "@/Svg/hollowFlower.svg";
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
} from "@chakra-ui/react";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const housePrice = payload[0].value.toLocaleString();
      return (
        <div style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
          <p>{`Year: ${label}`}</p>
          <p>{`${label > 2024 ? "Projections" : "House Price"}: $${housePrice}`}</p>
        </div>
      );
    }
  
    return null;
  };
  
const Stats = () => {

    const [isTablet] = useMediaQuery("(max-width: 1024px)");
    const data = [
        { name: "2000", AverageHousePrices: 295000 },
        { name: "2001", AverageHousePrices: 415000 },
        { name: "2002", AverageHousePrices: 445000 },
        { name: "2003", AverageHousePrices: 475000 },
        { name: "2004", AverageHousePrices: 435000 },
        { name: "2005", AverageHousePrices: 495000 },
        { name: "2006", AverageHousePrices: 505000 },
        { name: "2007", AverageHousePrices: 525000 },
        { name: "2008", AverageHousePrices: 385000 },
        { name: "2009", AverageHousePrices: 395000 },
        { name: "2010", AverageHousePrices: 505000 },
        { name: "2011", AverageHousePrices: 545000 },
        { name: "2012", AverageHousePrices: 575000 },
        { name: "2013", AverageHousePrices: 595000 },
        { name: "2014", AverageHousePrices: 635000 },
        { name: "2015", AverageHousePrices: 615000 },
        { name: "2016", AverageHousePrices: 655000 },
        { name: "2017", AverageHousePrices: 675000 },
        { name: "2018", AverageHousePrices: 675000 },
        { name: "2019", AverageHousePrices: 655000 },
        { name: "2020", AverageHousePrices: 645000 },
        { name: "2021", AverageHousePrices: 650000 },
        { name: "2022", AverageHousePrices: 675000 },
        { name: "2023", AverageHousePrices: 735000 },
        { name: "2024", AverageHousePrices: 775000 },
        
        { name: "2025", AverageHousePrices: 845000 },
        { name: "2026", AverageHousePrices: 865000 },
        { name: "2027", AverageHousePrices: 915000 },
        { name: "2028", AverageHousePrices: 1035000 },
        { name: "2029", AverageHousePrices: 1275000 },
        { name: "2030", AverageHousePrices: 1345000 },
      ];
      
      
      
  return (
    <>
      <HStack justify="center"  mt={["85px", "85px", "150px", "200px", "225px"]}>
        <HStack px="50px" gap="5px" textColor="#393939">
          <Image src={HallowFlower} width={100} height={100}  />
          <Text
            fontSize={["40px", "40px", "40px", "50px", "70px"]}
            fontFamily="Raleway"
            fontWeight="500"
          >
            Market Projection
          </Text>
        </HStack>
      </HStack>

      <HStack justify="center" mt="60px">
       <ResponsiveContainer width={isTablet ? "98%" : "95%"} height={400}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
           
            <XAxis dataKey="name" scale="point"  />
{ isTablet ? null : <YAxis  />}
            <Tooltip content={<CustomTooltip />} />
    
            <Area
            
              type="monotone"
              dataKey="AverageHousePrices"
              fill="#2D3748"
              stroke="#ffff"
            />


          </ComposedChart>
        </ResponsiveContainer> 
      </HStack>
    </>
  );
};

export default Stats;
