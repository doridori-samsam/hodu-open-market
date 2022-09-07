import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userType, setUserType] = useState("BUYER");
  const changeUserType = (type) => {
    setUserType(type);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        userType,
        setUserType,
        changeUserType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
