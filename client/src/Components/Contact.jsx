import React, {useRef} from 'react';
import * as emailjs from "emailjs-com";

function Contact(props) {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const form = useRef();

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
            result => console.log(result.text),
            error => console.log(error.text)
        )

        // e.target.reset();

    }
    return (
        <div className="container p-5">
            <div className="flex flex-col">
            <h1 className="text-center md:text-4xl font-bold text-gray-800 mb-10">Contact Us</h1>
        <div className="flex flex-row justify-evenly w-full">
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0419027172293!2d-73.86414068512703!3d40.71709404524177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e15997457e1%3A0x3e3b78d9234e79e9!2sAlta%20Medical%20Transportation!5e0!3m2!1sen!2sid!4v1676787880735!5m2!1sen!2sid"
                    width="700" height="600" style={{border:0}} allowFullScreen="" loading="eager"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="w-full flex flex-col justify-center items-center bg-gray-100">
            <form ref={form} className="w-5/6 p-9 m-auto">
               <div className="flex flex-col text-left ">
                   <label className="block text-left uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
                          htmlFor="name">
                        Full Name
                   </label>
                   <input className= "appearance-none w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight"
                          name="user_name"
                          type="text" placeholder="Name"
                          required/>
               {/*Email*/}
                   <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
                          htmlFor="email">
                       Email
                   </label>
                   <input className= "appearance-none w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight"
                          name="user_email"
                          type="email" placeholder="Please enter your email address"/>
               {/* Phone Number */}
                   <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
                          htmlFor="phone">
                       Phone
                   </label>
                   <input className= "appearance-none w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight"
                          name="user_phone"
                          type="tel" placeholder="Please enter your phone number" required/>
               {/* Date of transport */}
                   <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
                          htmlFor="tripDate">
                       Trip Date
                   </label>
                   <input className= "appearance-none w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight"
                          name="trip_date"
                          type="datetime-local" min={new Date().toISOString().slice(0, -8)} required/>
               {/* Wheel Chair */}
                   <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
                          htmlFor="wheelChair">
                       Wheel Chair
                   </label>
                   <div className="flex items-center mb-4">
                       <input id="default-radio-1" type="radio" value="Yes" name="user_WC"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label htmlFor="default-radio-1"
                                  className="ml-2 text-s font-medium text-gray-900 dark:text-gray-300">Yes</label>
                   </div>
                   <div className="flex items-center mb-4">
                       <input id="default-radio-1" type="radio" value="No" name="user_WC"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                       <label htmlFor="default-radio-1"
                              className="ml-2 text-s font-medium text-gray-900 dark:text-gray-300">No</label>
                   </div>
               </div>
                <button onClick={handleSubmit}
                    className=" w-full text-center rounded-md border border-transparent bg-[#405cf5] py-2 px-4 text-s font-medium text-white hover:border-b-2 hover:border-black ">Submit</button>

            </form>
        </div>
        </div>
            </div>
        </div>
    );

}

export default Contact;