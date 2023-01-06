import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Review from "./pages/Review/Review"
import Form from "./pages/Form/Form"

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/review" element={<Review />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  </div>

)

export default App
