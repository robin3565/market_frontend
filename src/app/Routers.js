import React from "react";
import { Routes, Route } from "react-router-dom";
import MapLayout from "../layout/MapLayout";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import {
  Home,
  Map,
  Geo,
  Market,
  Yangdong,
  Curation,
  Forgot,
  Login,
  Signup,
  Gwangju,
} from "../pages";

const Routers = ({ mapInit, saveMapInit, myLocation }) => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/curation" element={<Curation />} /> */}
        <Route path="/curation" element={<Yangdong />} />
        <Route path="/curation/gwangju" element={<Gwangju />} />
      </Route>
      <Route
        element={
          <MapLayout
            saveMapInit={saveMapInit}
            mapInit={mapInit}
            myLocation={myLocation}
          />
        }
      >
        <Route path="/map" element={<Map mapInit={mapInit} />} />
        <Route path="/map/:id" element={<Geo mapInit={mapInit} />} />
        <Route path="/map/market/:id" element={<Market mapInit={mapInit} />} />
      </Route>
    </Routes>
  );
};

export default Routers;
