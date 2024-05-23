import React from "react";
import "./listing_new.scss";

import ShopComponent from "../ShopComponent/ShopComponent";
import StyleButton from "../../StyleComponents/StyleButton/StyleButton";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

const ListingNew = () => {
  const newShopItems = useSelector((state) => state.mainPage.new_shop_item);
  const navigate = useNavigate();
  const storage_url = process.env.REACT_APP_STORAGE_SERVER;
  const renderNewShopItems = () => {
    return newShopItems.map((item) => {
      return item.is_large == 0 ? (
        <SwiperSlide key={item.id}>
          <ShopComponent {...item} />
        </SwiperSlide>
      ) : undefined;
    });
  };

  return (
    <section className="listing_new">
      <div className="listing_new__wrapper container">
        <h2>New ceramics</h2>

        <div className="listing__items">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            className="mySwiper"
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {renderNewShopItems()}
          </Swiper>
        </div>

        <div className="listing_new__btn">
          <StyleButton onClick={() => navigate("/product")}>
            View collection
          </StyleButton>
        </div>
      </div>
    </section>
  );
};

export default ListingNew;
