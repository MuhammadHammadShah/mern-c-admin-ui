import type { CreateUserData, Credentials } from "../types";
import { api } from "./client";

// Auth Service
export const login = (credential: Credentials) =>
  api.post("/auth/login", credential);
export const self = () => api.get("/auth/self");
export const logout = () => api.post("/auth/logout");
export const getUsers = (queryString: string) =>
  api.get(`/users?${queryString}`);
export const getTenants = () => api.get("/tenants");
export const createUser = (user: CreateUserData) => api.post("/users", user);
