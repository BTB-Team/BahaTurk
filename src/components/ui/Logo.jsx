import React from 'react';
import logo from "../../assets/images/logo.png";

export default function Logo() {
    return (
        <img src={logo} alt="Logo" className="-mt-2 sm:-mt-4 max-w-[180px] sm:max-w-none" />
    );
};

