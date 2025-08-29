import type { Credentials } from "../types";
import { api } from "./client";

// Auth Service
export const login = (credential: Credentials) =>
  api.post("/auth/login", credential);
export const self = () => api.get("/auth/self");
