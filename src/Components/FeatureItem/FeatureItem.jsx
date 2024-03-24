import React from "react";
import "./featureitem.scss";
const FeatureItem = ({
  features_items_img,
  features_items_text,
  features_items_title,
}) => {
  const storage_url = process.env.REACT_APP_STORAGE_SERVER;

  let featuresImage = storage_url + features_items_img;
  return (
    <div className="featureitem">
      <div className="featuresImage">
        <img src={featuresImage} alt={features_items_title} />
      </div>

      <h4>{features_items_title}</h4>
      <p>{features_items_text}</p>
    </div>
  );
};

export default FeatureItem;
