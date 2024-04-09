import React from "react";
import StyleSelect from "../../StyleComponents/StyleSelect/StyleSelect";
import {
  typeData2,
  designerData,
  priceData,
  typeData,
} from "../ProductPageSideBar/ProductPageSideBar";
import "./ProductPageMobileSideBar.scss";
const ProductPageMobileSideBar = ({ filterValue, setFilterValue }) => {
  return (
    <div className="sidear__mobile">
      <StyleSelect
        title={"Filters"}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        dataRender={typeData}
      ></StyleSelect>
      <StyleSelect
        title={"Filters"}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        dataRender={designerData}
      ></StyleSelect>
    </div>
  );
};

export default ProductPageMobileSideBar;
