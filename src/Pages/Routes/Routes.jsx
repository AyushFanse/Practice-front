import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

//^ Pages
import Error from "../Error/Error";
import Display from "../Display/Display";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Collections from "../Collection/Collections";
import CollectionItems from "../Collection/CollectionItems";

//^ Components
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

//^ Utils
import Search from "../../utils/Search/Search";
import ContactUs from "../../utils/ContactUs/ContactUs";
import SizeGuide from "../../utils/SizeGuide/SizeGuide";
import ItemNotFound from "../../utils/ItemNotFound/ItemNotFound";
import DeliveryTimes from "../../utils/DeliveryTimes/DeliveryTimes";
import ReturnsPolicy from "../../utils/ReturnsPolicy/ReturnsPolicy";
import QualityGuarantee from "../../utils/QualityGuarantee/QualityGuarantee";
import "./routers.css";

const RouterComp = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main_container flex jc ac col ">
          <div className="inner_container">
            <Routes>
              <Route exact path="/" element={<Display path={`KitsXI`} />} />
              <Route exact path="search" element={<Search path={`Search`} />} />
              <Route
                exact
                path="collections"
                element={<Collections path={`Collections`} />}
              />
              <Route
                exact
                path="collections/:team"
                element={<CollectionItems />}
              />
              <Route
                exact
                path="account/login"
                element={<Login path={`Login`} />}
              />
              <Route
                exact
                path="account/register"
                element={<Register path={`Create Account`} />}
              />
              <Route
                exact
                path="pages/contact"
                element={<ContactUs path={`Contact Us`} />}
              />
              <Route
                exact
                path="pages/size-guide"
                element={<SizeGuide path={`Size Guide`} />}
              />
              <Route
                exact
                path="pages/returns-policy"
                element={<ReturnsPolicy path={`Returns Policy`} />}
              />
              <Route
                exact
                path="pages/delivery-times"
                element={<DeliveryTimes path={`Delivery times`} />}
              />
              <Route
                exact
                path="pages/i-cant-find-my-shirt"
                element={<ItemNotFound path={`I can't find my shirt`} />}
              />
              <Route
                exact
                path="pages/are-our-shirts-replicas"
                element={<QualityGuarantee path={`Are our shirts replicas?`} />}
              />
              <Route path="*" element={<Error path={`404 Page Not Found`} />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RouterComp;
