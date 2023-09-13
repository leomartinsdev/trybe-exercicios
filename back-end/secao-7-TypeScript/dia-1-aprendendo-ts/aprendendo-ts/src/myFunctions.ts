import { User } from './types/User';

// Essa função recebe como parametro uma lista de usuários do GH (como definida no data.ts) o tipo User (User[]) e retorna um array de strings. Qual strings?
// A do map. O map vai pegar cada user (elemento) do tipo User e retornar seu nome. Isso tudo vai dentro do array retornado pela função.

export const getUserNames = (userList: User[]): string[] => userList.map((user: User) => user.name);

export const getUsersByRepoQuantity = (users: User[], repos: number): string[] => users
  .filter((user) => user.repositories >= repos).map((user) => user.name);

export const IsMostActiveUser = (name: string, users: User[]): boolean => {
  const mostActiveUser = users.reduce(
    (prev, curr) => 
      (prev.repositories > curr.repositories ? prev : curr),
  );
  return mostActiveUser.name === name;
};