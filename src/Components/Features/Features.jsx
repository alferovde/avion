import React from "react";
import "./features.scss";

import { useSelector } from "react-redux";
import FeatureItem from "../FeatureItem/FeatureItem";
const Features = () => {
  const { features1_title } = useSelector((state) => state.mainPage.value);
  const featuresArray = useSelector((state) => state.mainPage.features__items);

  const renderFeatureItems = () => {
    return featuresArray.map((item) => {
      return <FeatureItem key={item.id} {...item} />;
    });
  };

  return (
    <section className="features">
      <div className="features__wrapper container">
        <h2>{features1_title}</h2>
        <div className="features__items">{renderFeatureItems()}</div>
      </div>
    </section>
  );
};

export default Features;
