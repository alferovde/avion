import React from "react";
import "./featurestouch.scss";
import { useSelector } from "react-redux";
import StyleButton from "../../StyleComponents/StyleButton/StyleButton";
const FeaturesTouch = () => {
  const { features_touch__img, features2_description, features2_title } =
    useSelector((state) => state.mainPage.value);

  const storage_url = process.env.REACT_APP_STORAGE_SERVER;

  let backgroundImage = storage_url + features_touch__img;

  let description_top = features2_description?.slice(0, 117);
  let description_bottom = features2_description?.slice(118);

  console.log(backgroundImage);
  return (
    <section className="featurstouch">
      <div className="featurstouch__wrapper container  ">
        <div className="featurstouch__info">
          <h2>{features2_title}</h2>
          <p>{description_top}</p>
          <p>{description_bottom}</p>
          <StyleButton>Get in touch</StyleButton>
        </div>
      </div>

      <div
        className="featurstouch__bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div
        className="featurstouch__bgmobile"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </section>
  );
};

export default FeaturesTouch;
