import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Text,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const { error, isLoading } = useQuery(["users"], async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString()
      }
    })

    console.log(users)
    return users;
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100" my="6" maxWidth={1480} mx="0" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                fontWeight="normal"
                textDecoration="none"
                leftIcon={<Icon as={RiAddLine} fontSize="16" />}
              >
                {isWideVersion ? "Criar novo" : ""}
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px="6" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th px="6" width="8">
                      Usuário
                    </Th>
                    <Th px="6" width="8">
                      Data de cadastro
                    </Th>
                    <Th width="8"></Th>
                  </Tr>
                </Thead>

                <Tbody>
                 {data.map(user => {
                  return (
                    <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text>Igor vieira</Text>
                        <Text color="gray.400" fontSize="sm">
                          igor.vieira@ahsuahs.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>21/07/2022</Td>}

                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        fontWeight="normal"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        {isWideVersion ? "Editar" : ""}
                      </Button>
                    </Td>
                  </Tr>
                  )
                 })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
function user(user: any): import("react").ReactNode {
  throw new Error("Function not implemented.");
}

