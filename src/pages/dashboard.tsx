import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import {Header} from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enable: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[500],
    },
    axisTicks: {
      color: theme.colors.gray[500],
    },
    categories: [
      "2022-07-21T00:00:00",
      "2022-07-22T00:00:00",
      "2022-07-23T00:00:00",
      "2022-07-24T00:00:00",
      "2022-07-25T00:00:00",
      "2022-07-26T00:00:00",
      "2022-07-27T00:00:00",
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series = [{ name: "cocozinho1", data: [31, 120, 10, 22, 55, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["8", "6"]} bg="gray.800" borderRadius={8}>
            <Text>asdasd</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p={["8", "6"]} bg="gray.800" borderRadius={8}>
            <Text>asdasd</Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
