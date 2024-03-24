import React from "react";
import "./listingpopular.scss";
import StyleButton from "../../StyleComponents/StyleButton/StyleButton";
import { useSelector } from "react-redux";
import ShopComponent from "../ShopComponent/ShopComponent";
import { Swiper, SwiperSlide } from "swiper/react";
const ListingPopular = () => {
  const newShopItems = useSelector((state) => state.mainPage.popular_shop_item);
  const largeItemStyle = { order: "1" };
  const largeItemStyle2 = { order: "2" };

  const renderPopularShopItems = () => {
    return newShopItems.map((item) => {
      {
        return item.is_large ? (
          // <SwiperSlide>
          <ShopComponent key={item.id} {...item} style={largeItemStyle} />
        ) : (
          // </SwiperSlide>
          // <SwiperSlide>
          <ShopComponent key={item.id} {...item} style={largeItemStyle2} />
          // </SwiperSlide>
        );
      }
    });
  };

  return (
    <section className="listing-popular">
      <div className="listing-popular__wrapper container">
        <h2>Our popular products</h2>

        <div className="listing-popular__items">{renderPopularShopItems()}</div>

        <div className="listing-popular__btn">
          <StyleButton>View collection</StyleButton>
        </div>
      </div>
    </section>
  );
};

export default ListingPopular;
