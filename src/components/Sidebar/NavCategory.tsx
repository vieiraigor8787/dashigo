import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavCategoryProps {
  title: string;
  children?: ReactNode;
}

export function NavCategory({ title, children }: NavCategoryProps) {
  return (
    <Box>
      <Text color="gray.400" fontSize="small" fontWeight="bold" >
        {title}
      </Text>
      <Stack>
        {children}
      </Stack>
    </Box>
  );
}
