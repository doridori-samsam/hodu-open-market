import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userType, setUserType] = useState("");

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        userType,
        setUserType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
