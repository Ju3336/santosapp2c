import React ,{useState,useEffect} from "react";
import {Routes,Route} from "react-router-dom";
import App from "../App";
const AppRoutes =() => {


    return (
        <Routes>
            <Route path ="/" element={<App/>}/>

        </Routes>

    )

}

export default AppRoutes