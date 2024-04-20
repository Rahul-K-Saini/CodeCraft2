import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeButton from '../Buttons/ThemeButton';

const styles ={
    active:" dark:bg-red-500 bg-yellow-500 border-dashed border-2  p-2 px-3  rounded-sm ",
    notActive:" border-2 dark:border-red-500 border-yellow-500 hover:border-dashed  p-2 px-3 rounded-sm" // here fix the styling for hover very Important
}

const Header = () => {
    return (
        <header className="bg-blue-500 dark:bg-slate-800 text-white flex p-2 justify-around">
                <div className="text-2xl font-bold text-center md:text-left mb-3 md:mb-0">
                    <NavLink to="/"
                    >
                        <span className="text-yellow-500 dark:text-red-500">&lt;Code</span>Craft/&gt;
                    </NavLink>
                </div>
                <div className='flex gap-5'>
                    <NavLink to="web" className={ (({ isActive }) =>
                        isActive ?  styles.active: styles.notActive)
                        }>
                        Web Editor
                    </NavLink>
                    <NavLink to="programming" className={({ isActive }) =>
                        isActive ? styles.active: styles.notActive
                    }>
                        Language Editor
                    </NavLink>
                    <NavLink to="convert" className={({ isActive }) =>
                        isActive ? styles.active: styles.notActive
                    }>
                        Code Converter
                    </NavLink>
                </div>
                <div>
                    <ThemeButton />
                </div>
            
        </header>
    );
};

export default Header;
