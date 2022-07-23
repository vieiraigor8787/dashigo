import { Button } from "@chakra-ui/react";

interface ButtonPaginationProps {
  isCurrentPage?: boolean;
  number: number;
}

export function ButtonPagination({ isCurrentPage = false, number }: ButtonPaginationProps) {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        border="none"
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.900"
      color="gray.100"
      border="none"
      _hover={{ bgColor: "gray.700" }}
    >
      {number}
    </Button>
  );
}
