import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const changeToken = (data) => {
    localStorage.setItem("token", data);
  };
  const changeUserType = (type) => {
    localStorage.setItem("userType", type);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        userType,
        changeToken,
        changeUserType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
