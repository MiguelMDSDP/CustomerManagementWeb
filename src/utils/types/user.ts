import { Roles } from "./access";

export type User = {
  id: number;
  username: string;
  role: Roles;
  token?: string;
};
