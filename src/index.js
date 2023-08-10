import React from "react";
import  ReactDOM  from "react-dom/client";
// import App from "./App.js";
import {DatePickerProvider} from '@bcad1591/react-date-picker'
import './app.css'
import { PROVIDER } from "./context/searchSlice";
import {RouterProvider} from 'react-router-dom';
import ROUTER from "./routes";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
    
  <PROVIDER>
    <RouterProvider router={ROUTER} />
  </PROVIDER>

)