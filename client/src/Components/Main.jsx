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


export default function Main() {
    return (
        <HashRouter>
            <div className="mx-20 max-w-8xl px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between mx-auto">
                    <div className="flex items-center">
                    <h1 className="text-left text-4xl font-bold text-gray-800">Alta</h1>
                    <ul className="flex flex-row gap-8 mt-2 px-6 py-3 text-left text-s font-medium text-gray-700 tracking-wider">
                        <li className="hover:underline "><Link to="/" className="selected">Home</Link></li>
                        <li className="hover:underline"><Link to="/services" >Services</Link></li>
                        <li className="hover:underline"><Link to="/insurances">Insurances</Link></li>
                        <li className="hover:underline"><Link to="/contact">Contact</Link></li>
                        <li className="hover:underline"><Link to="/about">About</Link></li>
                    </ul>
                    </div>
                    <div className="flex w-full items-center mt-2 px-6 py-3 w-full justify-end">
                        <p className="text-left text-s font-medium text-gray-700 tracking-wider mr-4">Call 1-718-897-2582</p>
                        <button className=" w-fit rounded-md border border-transparent bg-[#405cf5] py-2 px-4 text-sm font-medium text-white hover:border-b-2 hover:border-black ">Contact</button>
                    </div>
                </div>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/insurances" element={<Insurances/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}