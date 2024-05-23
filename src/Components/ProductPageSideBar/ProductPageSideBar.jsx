import React, { useState } from "react";
import "./productpagesidebar.scss";
export const priceData = ["0-300", "301-500", "501-9999"];
export const typeData = [
  "Furniture",
  "Sofas",
  "Homeware",
  "Light fittings",
  "Accessories",
];

export const typeData2 = [
  { title: "Furniture", checked: false },
  { title: "Sofas", checked: false },
  { title: "Homeware", checked: false },
  { title: "Light_fittings", checked: false },
  { title: "Accessories", checked: false },
];

export const designerData = [
  "Robert_Smith",
  "Liam_Gallagher",
  "Biggie_Smalls",
  "Thom_Yorke",
];

const ProductPageSideBar = ({ filterValue, setFilterValue }) => {
  const [typeDataState, setTypeDateState] = useState(typeData2);

  const handlerPriceChange = (value) => {
    if (!filterValue.price.split(", ").includes(value)) {
      setFilterValue({
        ...filterValue,
        price: filterValue.price + ", " + value,
      });
    } else {
      setFilterValue({
        ...filterValue,
        price: filterValue.price
          .split(", ")
          .filter((item) => item !== value)
          .join(", "),
      });
    }
  };

  const renderPriceChange = () => {
    return priceData.map((item, index) => {
      return (
        <label htmlFor={item} key={index}>
          <input
            type="checkbox"
            name={item}
            id={item}
            onClick={() => handlerPriceChange(item)}
          />
          {item}
        </label>
      );
    });
  };

  const handlerTypeRender = () => {
    return typeDataState.map((item, index) => {
      return (
        <label htmlFor={item.title} key={index}>
          <input
            type="checkbox"
            name=""
            defaultChecked={item.checked}
            id={item.title}
            onClick={() => handlerTypeSelect(item)}
          />
          <span>{item.title.replace("_", " ")}</span>
        </label>
      );
    });
  };
  const handlerTypeSelect = (value) => {
    if (!filterValue.product_type.split(", ").includes(value.title)) {
      setFilterValue({
        ...filterValue,
        product_type: filterValue.product_type + ", " + value.title,
      });
    } else {
      setFilterValue({
        ...filterValue,
        product_type: filterValue.product_type
          .split(", ")
          .filter((item) => item !== value.title)
          .join(", "),
      });
    }
  };

  const handlerDesignerRender = () => {
    return designerData.map((item, index) => {
      return (
        <label htmlFor={item} key={index}>
          <input
            type="checkbox"
            name=""
            id={item}
            onClick={() => hanlerDesignerSelect(item)}
          />
          <span>{item.replace("_", " ")}</span>
        </label>
      );
    });
  };

  const hanlerDesignerSelect = (value) => {
    if (!filterValue.product_designer.split(", ").includes(value)) {
      setFilterValue({
        ...filterValue,
        product_designer: filterValue.product_designer + ", " + value,
      });
    } else {
      setFilterValue({
        ...filterValue,
        product_designer: filterValue.product_designer
          .split(", ")
          .filter((item) => item !== value)
          .join(", "),
      });
    }
  };

  return (
    <div className="productpagesidebar__wrapper">
      <div className="product__type">
        <h3>Product type</h3>
        {handlerTypeRender()}
      </div>
      <div className="product__price">
        <h3>Price</h3>
        {renderPriceChange()}
      </div>
      <div className="product_designer">
        <h3>Designer</h3>
        {handlerDesignerRender()}
      </div>
    </div>
  );
};

export default ProductPageSideBar;
