import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login/login";
import SignUpForm from "../pages/auth/Register/register";
import Home from "../pages/Home/home";
import ProfileForm from "../pages/Profile/profile";
import Swap from "../pages/SwapRequests/swap";
import UserProfile from "../pages/User-Profile/user-profile";

const Routing = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/my-profile" element={<ProfileForm />} />
            <Route path="/my-requests" element={<Swap />} />
            <Route path="/user" element={<UserProfile />} />
             </Routes>
        </>
    );
};

export default Routing;