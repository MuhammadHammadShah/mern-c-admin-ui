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
};

export type CreateUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: string;
  tenantId: number;
};
