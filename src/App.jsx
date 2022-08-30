import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LogIn from "./pages/Auth/LogIn";
import SignUp from "./pages/Auth/SignUp";
import NotFound from "./components/NotFound";
import LogInModal from "./components/Modal/LogInModal";
import UserContext, { UserContextProvider } from "./context/UserContext";

function Main() {
  const { token, setToken } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <div className="App w-full box-border relative">
          <Routes>
            {token ? (
              <>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<NotFound />}></Route>
                <Route path="/join" element={<NotFound />}></Route>
              </>
            ) : (
              <>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<LogIn />}></Route>
                <Route path="/join" element={<SignUp />}></Route>
              </>
            )}
          </Routes>
        </div>
        <LogInModal />
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  );
}

export default App;
