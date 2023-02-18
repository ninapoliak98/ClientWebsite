import React from 'react';
import {Link} from "react-router-dom";

function SmallMenu({setIsOpen, isOpen}) {
    let links = [{name: "Home", link: "/"}, {name:"Services", link: "/services"}, {name:"Insurances", link:"/insurances"},
        {name:"Contact", link: "/contact"}, {name:"About", link: "/about"}]
    return (
        <div className="flex w-full justify-center mt-4 z-[-1] static lg:hidden md:hidden">
            <ul className="text-s text-center font-medium text-gray-700 tracking-wider w-full">
                {links.map((link) =>
                    <li className="hover:bg-gray-400 py-6" onClick={() => setIsOpen(!isOpen)} ><Link to={link.link} >{link.name}</Link></li>
                )}
            </ul>
        </div>
    );
}

export default SmallMenu;