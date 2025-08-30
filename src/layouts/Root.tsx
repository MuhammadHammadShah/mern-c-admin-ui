import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { self } from "../http/api";
import { useEffect } from "react";
import { useAuthStore } from "../store";

const getSelf = async () => {
  const { data } = await self();
  return data;
};

const Root = () => {
  const { setUser } = useAuthStore();

  const { data, isLoading } = useQuery({
    queryKey: ["self"],
    queryFn: getSelf,
  
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  if (isLoading) {
    <div>loading.......................</div>;
  }

  return <Outlet />;
};

export default Root;
