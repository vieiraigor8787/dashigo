import { Button, Stack, Box } from "@chakra-ui/react";
import { ButtonPagination } from "./ButtonPagination";

interface PaginationProps {
  totalRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange?: (poge: number) => void;
}

export function Pagination({
  totalRegisters,
  currentPage = 1,
  onPageChange,
  registerPerPage = 10,
}: PaginationProps) {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>1</strong> de <strong>10</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <ButtonPagination number={1} isCurrentPage />
        <ButtonPagination number={2} />
        <ButtonPagination number={3} />
        <ButtonPagination number={4} />
        <ButtonPagination number={5} />
      </Stack>
    </Stack>
  );
}
