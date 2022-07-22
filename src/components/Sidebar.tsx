import { Box, Icon, Stack, Text, Link } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text color="gray.400" fontSize="small" fontWeight="bold">
            GERAL
          </Text>
          <Stack>
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        
      </Stack>
    </Box>
  );
}
