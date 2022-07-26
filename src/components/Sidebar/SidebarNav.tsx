import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavCategory } from "./NavCategory";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavCategory title="GERAL" />
      <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
      <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>

      <NavCategory title="AUTOMAÇÃO" />
      <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
      <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
    </Stack>
  );
}
