import React from "react";
import "./hero.scss";
import hero__img from "../../Images/hero_img.jpg";
import StyleButton from "../../StyleComponents/StyleButton/StyleButton";
import { useSelector } from "react-redux";

const Hero = () => {
  const { hero_title, hero_description, hero_img } = useSelector(
    (state) => state.mainPage.value
  );
  const storage_url = process.env.REACT_APP_STORAGE_SERVER;

  let backgroundImage = storage_url + hero_img;

  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <div className="hero__left">
          <h2>{hero_title}</h2>
          <StyleButton
            onClick={() => console.log("sdf11")}
            bgColor={"#f9f9f915"}
          >
            View collection
          </StyleButton>
          <p>{hero_description}</p>
        </div>
        <div
          className="hero__right"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
