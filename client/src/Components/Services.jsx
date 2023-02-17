import React, {useEffect, useState} from 'react';

function Services(props) {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="w-full text-center">
                <ul className="grid grid-cols-3 h-screen place-items-center">
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
        </div>
    );
}

export default Services;