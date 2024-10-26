import Loader from "@/shared/ui/Loader";
import { FC, PropsWithChildren, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      // navigate("login");
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loader />;

  return children;
};
