import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import User from "./pages/user";
import Konseling from "./pages/konseling";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Login from "./pages/auth/login";
import UserDetail from "./pages/user/detail";
import KonselingDetail from "./pages/konseling/detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/konseling/:id" element={<KonselingDetail />} />
          <Route path="/konseling" element={<Konseling />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
