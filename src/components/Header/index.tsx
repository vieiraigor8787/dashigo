import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { IconsAction } from "./IconsAction";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          fontSize="24"
          border="none"
          variant="unstyled"
          cursor="pointer"
          onClick={onOpen}
          icon={<Icon as={RiMenuLine} />}
        >
        </IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchInput />}

      <Flex align="center" ml="auto">
        <IconsAction />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
