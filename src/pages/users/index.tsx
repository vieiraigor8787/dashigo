import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Link as ChakraLink,
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
import Link from "next/link";
import { useState } from "react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList({ users }) {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching } = useUsers(page, {
    initialData: users,
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const response = await api.get(`/users/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, //10min
      }
    );
  }

  return (
    <Box>
      <Header />

      <Flex w="100" my="6" maxWidth={1480} mx="0" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" marginLeft={3} />
              )}
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
                  {data.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <ChakraLink
                              color="purple.500"
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              <Text margin="auto">{user.name}</Text>
                            </ChakraLink>
                            <Text margin="auto" color="gray.300" fontSize="sm">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td px="4">{user.createdAt}</Td>}

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
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination
                totalRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
