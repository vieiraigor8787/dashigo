import { Flex} from "@chakra-ui/react";
import { IconsAction } from "./IconsAction";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";

export default function Header() {
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
      <Logo />

      <SearchInput />

      <Flex align="center" ml="auto">
        <IconsAction />
        <Profile />
      </Flex>

    </Flex>
  );
}
