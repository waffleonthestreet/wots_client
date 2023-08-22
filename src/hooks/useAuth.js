import { useContext } from "react";

import { AuthContext } from "../contexts/JWTContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Auth context must be use inside AUthProvider");

  return context;
};

export default useAuth;
