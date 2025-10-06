import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import User from "./pages/user";
import Konseling from "./pages/konseling";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/konseling" element={<Konseling />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
