import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

async function getUsers(): Promise<User[]> {
  const { data } = await api.get("users");

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

//separando o hook da função que lista os usuários getUsers, desta forma é possivel utilizar a função de listagem em outro componente, independente do hook.

export function useUsers() {
  return useQuery(["users"], getUsers, {
    staleTime: 1000 * 5,
  });
}
