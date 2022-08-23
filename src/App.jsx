import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/Auth/SignUp";
function App() {
  return (
    <div className="App w-full box-border relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
