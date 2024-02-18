import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import HomeCvPage from "./Pages/HomeCvPage";
import VacancyDetailPage from "./Pages/VacancyDetailPage";
import VacancyCategoryPage from "./Pages/VacancyCategoryPage";
import CvCategoryPage from "./Pages/CvCategoryPage";
import CvDetailPage from "./Pages/CvDetailPage";
import WishListPage from "./Pages/WishListPage";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import Advertising from "./Pages/AdvertisingPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cv" element={<HomeCvPage/>}/>
          <Route path="/vacancydetailpage/:id" element={<VacancyDetailPage/>}/>
          <Route path="/cvdetailpage/:id" element={<CvDetailPage/>}/>
          <Route path="/vacancycategory/:id" element={<VacancyCategoryPage/>}/>
          <Route path="/cvcategory/:id" element={<CvCategoryPage/>}/>
          <Route path="/wishlist" element={<WishListPage/>}/>
          <Route path="/advertising" element={<Advertising/>}/>
          <Route path="/about" element={<AboutPage/>}/>

        </Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
