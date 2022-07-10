import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ScrollTop } from "primereact/scrolltop";

const CustomerLayout= React.lazy(() => import ("./components/themes/custommer/CustomerLayout")  );
const Home = React.lazy(() => import("./pages/Home"));
const Search = React.lazy(() => import("./pages/Search"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const ErrorBound = React.lazy(() => import("./components/Error"))
function App() {
  return (
    <div className="max-w-full overflow-x-hidden">
       <ScrollTop threshold={20} />
       <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Home />} />
          <Route path='tim-kiem/' element={<Search />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={< ErrorBound/>} />
      </Routes>
    </div>
  );
}

export default App;
