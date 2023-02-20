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
        <div className="container flex justify-center mx-auto p-10">
            <div className="flex flex-col">
            <h1 className="text-center md:text-4xl font-bold text-gray-800 p-5">Contact Information</h1>
        <div className="grid gap-14 mt-10 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
            {/*Map with office address*/}
            <div className="w-full mr-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0419027172293!2d-73.86414068512703!3d40.71709404524177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e15997457e1%3A0x3e3b78d9234e79e9!2sAlta%20Medical%20Transportation!5e0!3m2!1sen!2sid!4v1676787880735!5m2!1sen!2sid"
                    width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <form ref={form} className="w-full">
               <div className="flex flex-col text-left">
                   {/*Name*/}
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="name">
                        Full Name
                   </label>
                   <input className= "appearance-none w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight"
                          name="user_name"
                          type="text" placeholder="Please enter your first and last name"
                          required/>
               {/*Email*/}
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email">
                       Email
                   </label>
                   <input className= "appearance-none w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight"
                          name="user_email"
                          type="email" placeholder="Please enter your email address"/>
               {/* Phone Number */}
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="phone">
                       Phone
                   </label>
                   <input className= "appearance-none w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight"
                          name="user_phone"
                          type="tel" placeholder="Please enter your phone number" required/>
               {/* Date of transport */}
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="tripDate">
                       Trip Date
                   </label>
                   <input className= "appearance-none w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight"
                          name="trip_date"
                          type="datetime-local" min={new Date().toISOString().slice(0, -8)} required/>
               {/* Wheel Chair */}
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="wheelChair">
                       Wheel Chair
                   </label>
                   <div className="flex items-center mb-4">
                       <input id="default-radio-1" type="radio" value="Yes" name="user_WC"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label htmlFor="default-radio-1"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                   </div>
                   <div className="flex items-center mb-4">
                       <input id="default-radio-1" type="radio" value="No" name="user_WC"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                       <label htmlFor="default-radio-1"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                   </div>
               </div>
                <button onClick={handleSubmit}
                    className=" w-2/3 text-center rounded-md border border-transparent bg-[#405cf5] py-2 px-4 text-sm font-medium text-white hover:border-b-2 hover:border-black ">Submit</button>

            </form>
        </div>
        </div>
        </div>
    );

}

export default Contact;