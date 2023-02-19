import {
    Route,
    NavLink,
    HashRouter, Routes, Link
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Insurances from "./Insurances";
import Services from "./Services";
import {useState} from "react";
import SmallMenu from "./SmallMenu";


export default function Main() {
    let links = [{name: "Home", link: "/"}, {name:"Services", link: "/services"}, {name:"Insurances", link:"/insurances"},
        {name:"Contact", link: "/contact"}, {name:"About", link: "/about"}]
    const [isOpen, setIsOpen] = useState(false);
    return (
        <HashRouter>
            <div className="mx-20 max-w-8xl sm:px-2 lg:px-8 h-screen ">
                <div className="flex justify-between mx-auto sticky top-0 z-50 bg-white">
                    <div className="flex items-center">
                    <h1 className="text-left text-4xl font-bold text-gray-800 ">Alta</h1>
                    <ul className="hidden gap-8 mt-2 px-6 py-3 text-left text-s font-medium text-gray-700 tracking-wider md:flex">
                        {links.map((link) =>
                            <li className="hover:underline py-6"><Link to={link.link} className="selected">{link.name}</Link></li>
                        )}
                    </ul>
                    </div>
                    <div className="w-full items-center mt-2 px-6 py-3 w-full justify-end hidden md:flex">
                        <p className="text-left text-s font-medium text-gray-700 tracking-wider mr-4 truncate md:hidden lg:block sm:hidden hidden">Call 1-718-897-2582</p>
                        <button className=" w-fit rounded-md border border-transparent bg-[#405cf5] py-2 px-4 text-sm font-medium text-white hover:border-b-2 hover:border-black ">Contact</button>
                    </div>
                    {/*Mobile menu*/}
                    <div className="flex lg:hidden md:hidden mt-3 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <div className="space-y-2">
                            <span className="block w-8 h-0.5 bg-gray-600"></span>
                            <span className="block w-8 h-0.5 bg-gray-600"></span>
                            <span className="block w-8 h-0.5 bg-gray-600"></span>
                        </div>
                    </div>
                </div>
                {isOpen ? <SmallMenu setIsOpen={setIsOpen} isOpen={isOpen}/> : <></>}
                {/*end of mobile menu*/}

                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/insurances" element={<Insurances/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
        </HashRouter>
    );
}