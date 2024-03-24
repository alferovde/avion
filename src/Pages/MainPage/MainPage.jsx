import React, { useEffect } from "react";
import "./mainpage.scss";
import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import { fetchMainPage } from "../../Store/Reducers/MainPageSlice/MainPageSlice";
import { useDispatch, useSelector } from "react-redux";
import ListingNew from "../../Components/ListingNew/ListingNew";
import ListingPopular from "../../Components/ListingPopular/ListingPopular";
import SignUp from "../../Components/SignUp/SignUp";

const MainPage = () => {
  const dispatch = useDispatch();
  const mainPage = useSelector((state) => state.mainPage.value);

  useEffect(() => {
    dispatch(fetchMainPage());
  }, []);

  return (
    <div className="mainpage">
      <Hero />
      <Features />
      <ListingNew />
      <ListingPopular />
      <SignUp />
    </div>
  );
};

export default MainPage;
