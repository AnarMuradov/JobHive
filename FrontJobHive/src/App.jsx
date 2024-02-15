import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import HomeCvPage from "./Pages/HomeCvPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cv" element={<HomeCvPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
