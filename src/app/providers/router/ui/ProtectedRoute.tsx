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

  if (isLoading)
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Загрузка...</h2>
      </div>
    );

  return children;
};
