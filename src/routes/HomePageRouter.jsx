import React from "react";
import { Route, Routes } from "react-router-dom";
import langs from "../assets/homePageLangs.json";
import HomePage from "../pages/HomePage";

const HomePageRouter = () => {
  return (
    <Routes>
      <Route path="es" element={<HomePage lang={langs.es} />} />
      <Route path="en" element={<HomePage lang={langs.es} />} />
      <Route path="br" element={<HomePage lang={langs.es} />} />
      <Route path="ko" element={<HomePage lang={langs.es} />} />
      <Route path="ja" element={<HomePage lang={langs.es} />} />
      <Route path="de" element={<HomePage lang={langs.es} />} />
      <Route path="nl" element={<HomePage lang={langs.es} />} />
      <Route path="ru" element={<HomePage lang={langs.es} />} />
      <Route path="fr" element={<HomePage lang={langs.es} />} />
      <Route path="zh" element={<HomePage lang={langs.es} />} />
      <Route path="it" element={<HomePage lang={langs.es} />} />
    </Routes>
  );
};

export default HomePageRouter;
