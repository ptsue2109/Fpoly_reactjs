import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ScrollTop } from "primereact/scrolltop";
import { useAppDispatch, useAppSelector } from './app/stores/hooks';

const CustomerLayout= React.lazy(() => import ("./components/themes/custommer/CustomerLayout")  );
const Home = React.lazy(() => import("./pages/Home"));
const Search = React.lazy(() => import("./pages/Search"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const ErrorBound = React.lazy(() => import("./components/Error"));



function App() {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(state => state.authReducer);
  console.log('userInfo',userInfo);
  

  return (
    <div className="max-w-full overflow-x-hidden">
       <ScrollTop threshold={20} />
       <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Home />} />
          <Route path='tim-kiem/' element={<Search />} />
        </Route>
        <Route path="/login" element={<Login user={userInfo}/>} />
        <Route path="/register" element={<Register user={userInfo}/>} />
        <Route path="*" element={< ErrorBound/>} />
      </Routes>
    </div>
  );
}

export default App;
