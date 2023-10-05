import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeButton from '../Buttons/ThemeButton';

const Header = () => {
    return (
        <header className="bg-blue-500 dark:bg-slate-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
                <div className="text-2xl font-bold text-center md:text-left mb-3 md:mb-0">
                    <NavLink to="/"
                    >
                        <span className="text-yellow-500 dark:text-red-500">Code</span>Craft
                    </NavLink>
                </div>
                <div className="text-center md:text-right">
                    <NavLink to="web" style={({isActive})=>({backgroundColor: isActive ? "#00FFFF" : ""})} className=" text-white hover:underline font-semibold py-2 px-4 my-2 mx-2 rounded">
                        Web Editor
                    </NavLink>
                    <NavLink to="programming" style={({isActive})=>({backgroundColor: isActive ? "#00FFFF" : ""})} className=" text-white hover:underline font-semibold py-2 px-4 my-2 mx-2 rounded">
                        Language Editor
                    </NavLink>
                </div>
                    <ThemeButton/>
            </div>
        </header>
    );
};

export default Header;
