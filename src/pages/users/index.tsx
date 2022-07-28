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
import Link from "next/link";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const { data, error, isLoading, isFetching } = useUsers();

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

              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" marginLeft={3}/>}
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
                    <Tr key={user.id} >
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text margin="auto">{user.name}</Text>
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