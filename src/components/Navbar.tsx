import React from "react";

const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Задачи</a></li>
                <li><a href="/">Информация</a></li>
            </ul>
        </div>
    </nav>  
) 

export default Navbar;