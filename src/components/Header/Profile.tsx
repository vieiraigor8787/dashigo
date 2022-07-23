import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text mb="-3">Igor vieira</Text>
        <Text color="gray.300" fontSize="small">
          igor.vc@!ashahs.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Igor Vieira"
        src="https://github.com/vieiraigor8787.png"
      />
    </Flex>
  );
}
