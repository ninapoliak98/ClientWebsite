import React from 'react';
import {Link} from "react-router-dom";

function SmallMenu({setIsOpen, isOpen}) {
    let links = [{name: "Home", link: "/"}, {name:"Services", link: "/services"}, {name:"Insurances", link:"/insurances"},
        {name:"Contact", link: "/contact"}, {name:"About", link: "/about"}]
    return (
        <div className="flex w-full justify-center lg:hidden md:hidden">
            <ul className="text-s text-center font-medium text-gray-700 tracking-wider w-full z-10 fixed top-[10.5] left-0 bg-white">
                {links.map((link) =>
                    <li className="hover:bg-gray-400 py-5" onClick={() => setIsOpen(!isOpen)} ><Link to={link.link} >{link.name}</Link></li>
                )}
            </ul>
        </div>
    );
}

export default SmallMenu;