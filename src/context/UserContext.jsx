import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const changeToken = (data) => {
    localStorage.setItem("token", data);
  };
  const changeUserType = (type) => {
    localStorage.setItem("userType", type);
  };
  const changeUserName = (name) => {
    localStorage.setItem("userName", name);
  };
  return (
    <UserContext.Provider
      value={{
        token,
        userType,
        userName,
        changeToken,
        changeUserType,
        changeUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
