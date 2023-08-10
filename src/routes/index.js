import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Booking from '../pages/booking';
import Success from '../pages/success';
import Landing from '../pages/landing';
import Packages from '../pages/packages';
import Aboutus from '../pages/about';
import Contact from '../pages/contact';


const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/destination/:PackageId",
    element: <Booking />
  },
  {
    path: "/destination",
    element: <Booking />
  },
  {
    path: "/booking-confirmation",
    element: <Success />
  },
  {
    path: "/packages",
    element: <Packages />
  },
  {
    path: "/about",
    element: <Aboutus />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

export default ROUTER;