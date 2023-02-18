import React, {useEffect, useState} from 'react';

function Services(props) {
    const [open, setOpen] = useState(false)

    return (
        <div className="container mx-auto mt-10">
                <ul className="grid gap-4 text-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <li className="p-20 border border-2 rounded">
                        {/*<img src="https://images.pexels.com/photos/4064229/pexels-photo-4064229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=""/>*/}
                        <h1 className="text-xl font-bold text-gray-800"> Ambulate and Wheelchair Services</h1>
                        <p className="hover:underline cursor-pointer" onClick={() => setOpen(!open)}>Read More</p>
                    </li>
                    <li className="p-20 border border-2 rounded ">
                        <h1 className="text-xl font-bold text-gray-800">Transportation to Senior Services</h1>
                        <p className="hover:underline cursor-pointer" onClick={() => setOpen(!open)}>Read More</p>
                    </li>
                    <li className="p-20 border border-2 rounded">
                        <h1 className="text-xl font-bold text-gray-800">Transportation to Appointments</h1>
                        <p className="hover:underline cursor-pointer" onClick={() => setOpen(!open)}>Read More</p>
                    </li>
                </ul>
        </div>
    );
}

export default Services;