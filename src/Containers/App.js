import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../UI/Layout";
import Stories from "./Blog/Stories/Stories";
import Review from "./Blog/Review/Review"
import Form from "../components/FormNewPost/Form"

const App = () => (
  <div>
    <Layout>
      <Routes>
        <Route path="/" element={<Stories />} />
        <Route path="/review" element={<Review />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Layout>
  </div>

)

export default App
