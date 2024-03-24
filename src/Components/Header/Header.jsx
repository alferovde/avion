import React, { useState, useEffect } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  logoAvion,
  searchImg,
  userAvatar,
  shopingCart,
  mobileMuneHamburger,
} from "../../Images/sprites";
import SVGComponent from "../../StyleComponents/SVGComponent/SVGComponent";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import ShopingCart from "../ShopingCart/ShopingCart";
import UserLogin from "./../UserLogin/UserLogin";
import ModalComponent from "../../StyleComponents/ModalComponent/ModalComponent";
import Search from "./../Search/Search";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../Store/Reducers/ModalWindowsReducer/hiddenWindow";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 580px)" });
  const [hiddenMobileMenu, sethiddenMobileMenu] = useState(false);
  const hiddenSearch = useSelector((state) => state.modalWindown.hiddenSearch);
  const hiddenCart = useSelector((state) => state.modalWindown.hiddenCart);
  const hiddenLogin = useSelector((state) => state.modalWindown.hiddenLogin);
  const modalWindow = useSelector((state) => state.modalWindown.value);

  const dispatch = useDispatch();

  const navigationMenu = () => {
    if (!isTabletOrMobile) {
      return (
        <div className="header__bottom ">
          <NavigationMenu className={"header__navigation"} />
        </div>
      );
    }
  };

  useEffect(() => {
    if (!isTabletOrMobile && hiddenMobileMenu)
      sethiddenMobileMenu(!hiddenMobileMenu);

    if (hiddenMobileMenu || modalWindow) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isTabletOrMobile, hiddenMobileMenu, modalWindow]);

  return (
    <header className="header">
      {hiddenMobileMenu ? (
        <MobileMenu value={hiddenMobileMenu} setValue={sethiddenMobileMenu} />
      ) : undefined}
      <div className="header__wrapper ">
        <div className="header__top">
          <div
            className="header__search"
            onClick={() => dispatch(toggle("hiddenSearch"))}
          >
            <SVGComponent src={searchImg} />
          </div>
          <div className="header__logo">
            <NavLink to="/">
              <SVGComponent src={logoAvion} className="header__logo" />
            </NavLink>
          </div>
          <div className="header__cart">
            <div className="" onClick={() => dispatch(toggle("hiddenCart"))}>
              <SVGComponent src={shopingCart} />
            </div>
            <div className="" onClick={() => dispatch(toggle("hiddenLogin"))}>
              <SVGComponent src={userAvatar} />
            </div>
          </div>
          <div
            className="header__humburger"
            onClick={() => sethiddenMobileMenu(!hiddenMobileMenu)}
          >
            <SVGComponent src={mobileMuneHamburger} />
          </div>
        </div>
        {navigationMenu()}

        {hiddenSearch ? (
          <ModalComponent value={"hiddenSearch"} width={"90%"}>
            <Search />
          </ModalComponent>
        ) : undefined}

        {hiddenCart ? (
          <ModalComponent value={"hiddenCart"}>
            <ShopingCart />
          </ModalComponent>
        ) : undefined}

        {hiddenLogin ? (
          <ModalComponent value={"hiddenLogin"}>
            <UserLogin />
          </ModalComponent>
        ) : undefined}
      </div>
    </header>
  );
};

export default Header;
