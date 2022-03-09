import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, Favorites } from "./Pages/index"
import Layout from "./Components/Layout/Layout";
import './App.css';

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/favorite" element={<Favorites />} />
        </Routes>
    </Layout>
  );
}

export default App;
