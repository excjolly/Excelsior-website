import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Blogs, BlogDetails, Programs, ProgramsDetails } from "../screens";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/details" element={<ProgramsDetails />} />
        </Routes>
    );
};

export default AppRoutes;
