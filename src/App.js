import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";
import ProductID from "./Pages/ProductID/ProductID";
import ProductPage from "./Pages/ProductPage/ProductPage";
import "./style.scss";
import "animate.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import "swiper/css";
import { Routes, Route, Outlet } from "react-router-dom";
import SpinerLoading from "./StyleComponents/SpinerLoading/SpinerLoading";
import { useEffect } from "react";
import UserCartPage from "./Pages/UserCartPage/UserCartPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
function App() {
  const mainPageLoading = useSelector(
    (state) => state.mainPage.mainPageLoading
  );

  console.log("--->", mainPageLoading);
  useEffect(() => {
    if (mainPageLoading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  });

  return (
    <div className="App">
      {mainPageLoading ? <SpinerLoading /> : undefined}
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductID />} />
          <Route path="/cart/:id" element={<UserCartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
