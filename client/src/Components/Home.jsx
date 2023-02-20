import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
            <div className="w-ful md:grid md:grid-cols-2 lg:grid-cols-2 items-center mt-8 sm:flex sm:flex-col">
                <div className="flex flex-col text-center">
                    <h1 className="md:text-4xl font-bold text-gray-800 md:my-4 sm:my-2">Safety, Quality, Professionalism</h1>
                    <h2 className="md:text-2xl font-bold text-gray-800 md:my-4 sm:my-2">It's time to ride with the best!</h2>
                    <p className="md:text-xl font-light text-gray-800 md:my-4 sm:my-2">Here will insert some inspiration stuff about why someone should hire us</p>
                    <Link to="/services">
                       <p className="text-m font-bold text-blue-800 my-0 underline hover:text-indigo-600">Services</p>
                    </Link>
                </div>
                <div className="w-full">
                    <img src="https://images.pexels.com/photos/1274799/pexels-photo-1274799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                         alt="" className="md:w-[800px] md:h-[600px] lg:w-[800px] lg:h-[700px] "/>
                </div>
            </div>
    );
}

export default Home;