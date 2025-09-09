import type { Tenant } from "./store";


export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  tenant: Tenant | null;
};

export type CreateUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: string;
  tenantId: number;
};

export type FiledData = {
  name: string[];
  value?: string;
};


