import React from 'react';

function About(props) {
    return (
        <div className="container bg-gray-100 flex flex-row p-20 rounded">
            <div className="w-full flex flex-col mr-4 items-center justify-center">
                <h1 className="text-center md:text-4xl font-bold text-gray-800 mb-10">About Us</h1>
                <p className="p-1 text-left text-lg font-medium text-gray-600 ">
                    For us your experience comes first!

                    We are the medical transportation company that you can rely on. Our staff of specially trained and experienced drivers will guarantee a safe and enjoyable trip. And not only will you get to your destination in a timely manner, you will get there with a smile on your face because our company truly cares about your well-being.

                    We know that traversing the New York streets can be stressful and that is why we picked the best and most experienced drivers for you. Not only are our drives great we have cars that are equipped to drive wheelchair bound and disabled clients.

                    Elderly, or disabled we have the tools that you need to have a comfortable ride. So choose our company and you wont regret it. </p>
            </div>

                <img src="https://images.pexels.com/photos/5637572/pexels-photo-5637572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-[800px] h-[600px]"/>

        </div>
    );
}

export default About;