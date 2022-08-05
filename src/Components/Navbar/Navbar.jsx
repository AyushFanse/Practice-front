import {
  Search,
  ShoppingCartOutlined,
  PersonOutline,
  Close,
  Menu,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer } from "../Drawer/DrawerFunc";
import CartDrawer from "../CartItems/CartItems";
import "./navbar.css";

function Navbar() {
  const redirect = useNavigate();
  const Redirect = (path) => {
    Drawer("menu");
    redirect(path);
  };

  return (
    <>
      <header className="navbar flex jc ac col">
        <div className="navbar_inner flex jsb ac row">
          <div className="nav_search flex js ac">
            <div className="search_section flex ac">
              <Menu
                id="media_sm"
                className="menu_icon"
                onClick={() => {
                  Drawer("menu");
                }}
              />
              <Search
                id="media_lg"
                className="icon_search"
                onClick={() => {
                  Drawer("search");
                }}
              />
              <div className="menu_icon_inner flex col">
                <div className="menu_close_outter flex je ac row">
                  <div className="menu_close_inner flex jc ac">
                    <Close
                      className="menu_close flex jc ac"
                      onClick={() => {
                        Drawer("menu");
                      }}
                    />
                  </div>
                </div>
                <ul className="menu_tab_outter flex js as col">
                  <li>
                    <div
                      className="link menu_tabs"
                      onClick={() => {
                        Redirect("/");
                      }}
                    >
                      Home
                    </div>
                  </li>
                  <li>
                    <div
                      className="link menu_tabs"
                      onClick={() => {
                        Redirect("collections");
                      }}
                    >
                      Shop All
                    </div>
                  </li>
                  <li>
                    <div
                      className="link menu_tabs"
                      onClick={() => {
                        Redirect("pages/size-guide");
                      }}
                    >
                      Size Guides
                    </div>
                  </li>
                  <li>
                    <div
                      className="link menu_tabs"
                      onClick={() => {
                        Redirect("pages/delivery-times");
                      }}
                    >
                      Delivery items
                    </div>
                  </li>
                  <li>
                    <div
                      className="link menu_tabs"
                      onClick={() => {
                        Redirect("pages/i-cant-find-my-shirt");
                      }}
                    >
                      I can't find my shirt
                    </div>
                  </li>
                  <li>
                    <div
                      className="link menu_tabs"
                      onClick={() => {
                        Redirect("login");
                      }}
                    >
                      Log in
                    </div>
                  </li>
                  <li>
                    <div className="menu_tabs social  flex js ac row">
                      <a
                        href="http://instagram.com"
                        rel="noopener noreferrer"
                        className="like social_media_icon"
                        target="_blank"
                        id="icon"
                      >
                        <Instagram />
                      </a>
                      <a
                        href="http://snapchat.com"
                        rel="noopener noreferrer"
                        className="like social_media_icon"
                        target="_blank"
                        id="icon"
                      >
                        <WhatsApp />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="search_bar">
                <div className="search_bar_inner flex jc ac row">
                  <div
                    className="link"
                    onClick={() => {
                      redirect("search");
                    }}
                  >
                    <Search
                      id="icon"
                      className="icon_search"
                      onClick={() => {
                        Drawer("search");
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    className="search"
                    placeholder="Search our store"
                  />
                  <Close
                    id="icon"
                    className="flex jc ac"
                    onClick={() => {
                      Drawer("search");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="nav_logo flex jc ac row">
            <img src="../Images/logo.webp" alt="" />
          </div>
          <div className="nav_features flex je ac col">
            <div className="nav_profile_cart flex jsb ac row">
              <div className="nav_profile">
                <PersonOutline
                  id="media_lg"
                  onClick={() => {
                    redirect("account/login");
                  }}
                />
                <Search
                  id="media_sm"
                  onClick={() => {
                    Drawer("search");
                  }}
                />
              </div>
              <div
                className="nav_cart"
                onClick={() => {
                  Drawer("cart");
                }}
              >
                <ShoppingCartOutlined id="icon" />
                <sup className="badge"></sup>
              </div>
              <CartDrawer />
            </div>
            <div className="nav_currency flex jc ac" id="media_lg">
              <select name="currency" className="currency" defaultValue="INR">
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
              </select>
            </div>
          </div>
        </div>
        <div className="navbar_navigation flex jc ac " id="media_lg">
          <ul className="flex jc ac row">
            <li>
              <div
                className="link navigation_tabs"
                onClick={() => {
                  redirect("/");
                }}
              >
                Home
              </div>
            </li>
            <li>
              <div
                className="link navigation_tabs"
                onClick={() => {
                  redirect("collections");
                }}
              >
                Shop All
              </div>
            </li>
            <li>
              <div
                className="link navigation_tabs"
                onClick={() => {
                  redirect("pages/size-guide");
                }}
              >
                Size Guides
              </div>
            </li>
            <li>
              <div
                className="link navigation_tabs"
                onClick={() => {
                  redirect("pages/delivery-times");
                }}
              >
                Delivery items
              </div>
            </li>
            <li>
              <div
                className="link navigation_tabs"
                onClick={() => {
                  redirect("pages/i-cant-find-my-shirt");
                }}
              >
                I can't find my shirt
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
