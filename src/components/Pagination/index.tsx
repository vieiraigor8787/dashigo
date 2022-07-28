import { Stack, Box, Text } from "@chakra-ui/react";
import { ButtonPagination } from "./ButtonPagination";

interface PaginationProps {
  totalRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalRegisters,
  currentPage = 1,
  onPageChange,
  registerPerPage = 10,
}: PaginationProps) {
  const lastPage = Math.floor(totalRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount))
      : [];

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
        {currentPage > 1 + siblingsCount && (
          <>
            <ButtonPagination onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" textAlign="center" width="8">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <ButtonPagination
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        <ButtonPagination
          onPageChange={onPageChange}
          number={currentPage}
          isCurrentPage
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <ButtonPagination
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" textAlign="center" width="8">
                ...
              </Text>
            )}
            <ButtonPagination onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
