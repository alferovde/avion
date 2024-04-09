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
    // minPrise: 0,
    // maxPrice: 100000,
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
    return productArray.map((item) => {
      return item.is_large ? (
        <ShopComponent
          {...item}
          className={style.product_item_product_page_large}
        />
      ) : (
        <ShopComponent {...item} className={style.product_item_product_page} />
      );
    });
  };
  //style={{ width: "25%", order: "1" }}style={{ width: "500px", order: "2" }}
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
            {/*  <div className="product-page__sidebar-mobile">
           <div className="sidebar-mobile__filter">
                <ProductPageMobileSideBar
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                /> 
                <ProductPageSideBar
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                />
              </div>
            </div>*/}

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

{
  /* <StyleSelect
                title={"Filters"}
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "-40px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3>Product type</h3>
                {
                  <select name="pets" id="">
                    <option value="">Filter</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Sofas">Sofas</option>
                    <option value="Homeware">Homeware</option>
                    <option value="Light_fittings">Light fittings</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                }
              </StyleSelect>

              <StyleSelect
                title={"Sorting"}
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "-40px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3>Price</h3>
                <label htmlFor="0-100">
                  <input type="checkbox" name="" id="0-100" />
                  0-100
                </label>{" "}
                <label htmlFor="101-250">
                  <input type="checkbox" name="" id="101-250" />
                  101-250
                </label>{" "}
                <label htmlFor="250">
                  <input type="checkbox" name="" id="250" />
                  250 +
                </label>
                <h3>Designer</h3>
                <label htmlFor="Robert_Smith">
                  <input type="checkbox" name="" id="Robert_Smith" />
                  Robert Smith
                </label>{" "}
                <label htmlFor="Liam_Gallagher">
                  <input type="checkbox" name="" id="Liam_Gallagher" />
                  <span>Liam Gallagher</span>
                </label>{" "}
                <label htmlFor="Biggie_Smalls">
                  <input type="checkbox" name="" id="Biggie_Smalls" />
                  Biggie Smalls
                </label>{" "}
                <label htmlFor="Thom_Yorke">
                  <input type="checkbox" name="" id="Thom_Yorke" />
                  Thom Yorke
                </label>
              </StyleSelect> */
}
{
  /* <div
              className="siderbar__filter"
              onClick={() => setHiddenMenuFilter(true)}
            >
              Filter
              {hiddenFilterMenu ? (
                <div className="siderbar__filter__menu"></div>
              ) : undefined}
            </div>
            <div
              className="siderbar__sorting"
              onClick={() => setHiddenSortFilter(true)}
            >
              Sorting
              {hiddenSortMenu ? (
                <div className="siderbar__sort__menu"></div>
              ) : undefined}
            </div> */
}
{
  /* <select name="type" id="">
                  <option value="">Filter</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Sofas">Sofas</option>
                  <option value="Homeware">Homeware</option>
                  <option value="Light_fittings">Light fittings</option>
                  <option value="Accessories">Accessories</option>
                </select>
                <select name="designer" id="">
                  <option value="">Sorting</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Sofas">Sofas</option>
                  <option value="Homeware">Homeware</option>
                  <option value="Light_fittings">Light fittings</option>
                  <option value="Accessories">Accessories</option>
                </select> */
}
