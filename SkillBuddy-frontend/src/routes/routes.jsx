import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login/login";
import SignUpForm from "../pages/auth/Register/register";
import Home from "../pages/Home/home";
import ProfileForm from "../pages/Profile/profile";

const Routing = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/my-profile" element={<ProfileForm />} />
             </Routes>
        </>
    );
};

export default Routing;