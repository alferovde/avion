import React, { useEffect, useState } from "react";
import "./productpage.scss";
import { fetchAllproduct } from "../../Store/Reducers/ShopReducer/ShopReducer";
import { useDispatch, useSelector } from "react-redux";
import ShopComponent from "../../Components/ShopComponent/ShopComponent";
import StyleButton from "./../../StyleComponents/StyleButton/StyleButton";
import style from "./productpage.module.scss";
import SpinerLoading from "./../../StyleComponents/SpinerLoading/SpinerLoading";

import ProductPageSideBar from "../../Components/ProductPageSideBar/ProductPageSideBar";
import ProductPageMobileSideBar from "../../Components/ProductPageMobileSideBar/ProductPageMobileSideBar";

const ProductPage = () => {
  const dispatch = useDispatch();

  const productArray = useSelector((state) => state.shop.productArray);
  const [filterValue, setFilterValue] = useState({
    value: 6,

    product_designer: "",
    product_type: "",
    price: "",
  });
  const isLoading = useSelector((state) => state.shop.isLoading);

  const [hiddenFilterMenu, setHiddenMenuFilter] = useState(false);
  const [hiddenSortMenu, setHiddenSortFilter] = useState(false);

  const handlerLoadProduct = () => {
    setFilterValue({ ...filterValue, value: filterValue.value + 3 });
  };

  useEffect(() => {
    dispatch(fetchAllproduct(filterValue));
  }, [filterValue]);

  const renderAllProduct = () => {
    return productArray.map((item, index) => {
      return item.is_large == 1 ? (
        <ShopComponent
          {...item}
          className={style.product_item_product_page_large}
          key={index}
        />
      ) : (
        <ShopComponent
          {...item}
          className={style.product_item_product_page}
          key={index}
        />
      );
    });
  };

  return (
    <div className="product-page">
      <div className="product-page__header-bg">
        <h2 className="container">All products</h2>
      </div>
      <div className="product-page__wrapper container">
        <div className="product-page__sidebar">
          <ProductPageSideBar
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </div>

        <div className="product-page__items">
          <div className="product-page__items-container">
            {!isLoading ? renderAllProduct() : <SpinerLoading />}
            {productArray.length === 0 ? <h2>Ничего не найдено</h2> : undefined}
          </div>

          <div className="load-more__btn">
            <StyleButton
              color={"black"}
              order="0"
              onClick={() => handlerLoadProduct()}
            >
              Load more
            </StyleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
