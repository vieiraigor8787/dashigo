import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" letterSpacing="tight" w="64">
      DashIgo
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  );
}
