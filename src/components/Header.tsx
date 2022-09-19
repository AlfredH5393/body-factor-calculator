import React from "react";
import {CubeIcon,Bars3Icon} from '@heroicons/react/24/solid'
import "../styles/Header.css";

function Header(){
    return(
        <div className="header flex justify-between p-4">
            <div className="logo flex pl-28">
                <CubeIcon className="h-6 w-6 text-white" /> 
                <p className="pl-2 text-white">Health Overview</p>
            </div>
            <div className="menu pr-28">
                <Bars3Icon className="h-6 w-6 text-white" />
            </div>
        </div>
    );
}

export default Header;