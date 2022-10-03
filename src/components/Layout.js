import React from 'react'
import { Routes, Route, Link, Navigate, Outlet, useParams, useNavigate, useMatch, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import LandingPage from '../pages/LandingPage';
import SingleTestimonial from '../pages/SingleTestimonial';
import { useState , useEffect } from 'react'

function Main() {
    return (
    <>
        <Navbar />
        <div className="b-example-divider"></div>
        <Outlet />
        <div className="b-example-divider"></div>
        <Footer />
    </>
    )
        }

export default function Layout() {

    const location = useLocation();

    // props
    // redux
    // redux-toolkit
    // hook (useParams)
    // hook (useLocation)

    

    return (
    <Routes>
        <Route path="main" element={<Main />} >
            <Route path="home" exact element={<LandingPage />} />
            <Route path="home/:id" element={<SingleTestimonial /> } />
        </Route>
        <Route
            path="*"
            element={<Navigate to="/main/home" />}
        />
    </Routes>
)
}
