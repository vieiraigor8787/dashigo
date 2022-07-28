import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { api } from "../api";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface GetUserResponse  {
  totalCount: number;
  users: User[];
}

export async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count'])

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

  return {
    users, 
    totalCount
  };
  
}


//separando o hook da função que lista os usuários getUsers, desta forma é possivel utilizar a função de listagem em outro componente, independente do hook.

export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery([["users"], page], () => getUsers(page), {
    staleTime: 1000 * 5,
    ...options,
  }) as UseQueryResult<GetUserResponse, unknown>
}
