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

import "swiper/css";
import { Routes, Route, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductID />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
