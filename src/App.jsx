import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/home/Home";
import MyCart from "./pages/myCart/MyCart";
import LogIn from "./pages/Auth/LogIn";
import SignUp from "./pages/Auth/SignUp";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Payment from "./pages/payment/Payment";
import SellerCenter from "./pages/sellerCenter/SellerCenter";
import SellerProductRegister from "./pages/sellerCenter/sellerProductsUpload/SellerProductRegister";
import SellerProductsEdit from "./pages/sellerCenter/sellerProductsUpload/SellerProductsEdit";
import NotFound from "./components/NotFound";
import LogInModal from "./components/Modal/LogInModal";
import UserContext, { UserContextProvider } from "./context/UserContext";

const queryClient = new QueryClient();

function Main() {
  const { token, userType } = useContext(UserContext);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="App w-full box-border relative">
            <Routes>
              {token ? (
                <>
                  <Route path="/" element={<Home />}></Route>
                  {userType === "BUYER" ? (
                    <>
                      <Route path="/cart" element={<MyCart />}></Route>
                      <Route path="/order" element={<Payment />}></Route>
                    </>
                  ) : (
                    <>
                      <Route path="/cart" element={<NotFound />}></Route>
                      <Route path="/order" element={<NotFound />}></Route>
                    </>
                  )}
                  {userType === "SELLER" ? (
                    <>
                      <Route
                        path="/seller_center"
                        element={<SellerCenter />}
                      ></Route>
                      <Route
                        path="/seller_center/upload"
                        element={<SellerProductRegister />}
                      ></Route>
                      <Route
                        path="/seller_center/upload/:productId"
                        element={<SellerProductsEdit />}
                      ></Route>
                    </>
                  ) : (
                    <>
                      <Route
                        path="/seller_center"
                        element={<NotFound />}
                      ></Route>
                      <Route
                        path="/seller_center/upload"
                        element={<NotFound />}
                      ></Route>
                      <Route
                        path="/seller_center/upload/:productId"
                        element={<NotFound />}
                      ></Route>
                    </>
                  )}
                  <Route path="/login" element={<NotFound />}></Route>
                  <Route path="/join" element={<NotFound />}></Route>
                </>
              ) : (
                <>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/cart" element={<NotFound />}></Route>
                  <Route path="/order" element={<NotFound />}></Route>
                  <Route path="/login" element={<LogIn />}></Route>
                  <Route path="/join" element={<SignUp />}></Route>
                </>
              )}
              <Route
                path="/products/:productId"
                element={<ProductDetail />}
              ></Route>
            </Routes>
          </div>
          <LogInModal />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
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
