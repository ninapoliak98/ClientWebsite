import React, {useEffect, useState} from 'react';

function Services(props) {
    const [open, setOpen] = useState(false)


    return (
        <div className="container mx-auto ">
            <div className="p-5 w-full">
                <p className="text-center text-s font-medium text-gray-500 tracking-wide uppercase">we care for your safety, comfort, and transportation</p>
                <h1 className="text-center text-4xl font-bold text-gray-700 uppercase tracking-wider p-3">Our Services</h1>
                <p className="text-center text-s font-medium text-gray-500  tracking-tighter">we are on a mission to offer the best transportation experience.</p>
                <p className="text-center text-s font-medium text-gray-500  tracking-tighter">We will get you from your destination and home in comfort</p>
            </div>
                <ul className="text-gray-600 grid gap-4 text-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-full">
                    <div className="relative hover:scale-105">
                        <img src="https://images.pexels.com/photos/4064229/pexels-photo-4064229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             className="md:mt-4 sm:mt-10 mx-auto w-[450px] h-[500px] rounded drop-shadow-lg"/>
                        <li className="bg-white rounded absolute w-full opacity-95
                                        left-0 top-2/3 h-52 flex flex-col justify-center shadow-slate-700 shadow-lg">
                            <h1 className="text-xl font-bold text-gray-800"> Ambulate and Wheelchair Services</h1>
                            <p className="p-1 text-s font-medium text-gray-500  tracking-tighter">Alta's drivers are trained to transport and assist clients who are wheelchair-bound
                                and clients with disabling physical conditions who are unable to use a taxi, livery, a private vehicle or public transportation.</p>
                        </li>
                    </div>
                    <div className="relative  hover:scale-105">
                        <img src="https://images.pexels.com/photos/12168532/pexels-photo-12168532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             className="md:mt-4 sm:mt-10 mx-auto w-[450px] h-[500px] rounded drop-shadow-lg"/>
                        <li className="bg-white border border-2 rounded absolute w-full opacity-95 left-0 top-2/3
                                        h-52 flex flex-col justify-center shadow-slate-700 shadow-lg ">
                            <h1 className="text-xl font-bold text-gray-800">Transportation to Senior Services</h1>
                            <p className="p-2 text-s font-medium text-gray-500  tracking-tighter">
                                Alta Transportation offers door-to-door transportation for our clients to their day care service and senior programs. We will get you to your appointments in comfort.
                            </p>
                        </li>
                    </div>
                    <div className="relative  hover:scale-105">
                        <img src="https://images.pexels.com/photos/15452131/pexels-photo-15452131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                             className="md:mt-4 sm:mt-10 mx-auto w-[450px] h-[500px] rounded  drop-shadow-lg"/>
                        <li className="bg-white rounded absolute w-full opacity-95 left-0 top-2/3 h-52
                                        flex flex-col justify-center shadow-slate-700 shadow-lg">
                            <h1 className="text-xl font-bold text-gray-800">Transportation to Appointments</h1>
                            <p className="p-2 text-s font-medium text-gray-500  tracking-tighter">Alta provides transportation for seniors who need assistance and who are unable to access public transportation to personal,
                                business, and doctors appointments</p>
                        </li>
                    </div>
                </ul>
        </div>
    );
}

export default Services;