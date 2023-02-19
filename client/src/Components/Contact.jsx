import React from 'react';

function Contact(props) {
    return (
        <div className="w-full grid grid-cols-2">
            <div className="">Map will go here</div>
            <form className="">
               <div className="w-full">
                   {/*Name*/}
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="name">
                        Full Name
                   </label>
                   <input className= "appearance-none w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight" id="name" type="text" placeholder="Full Name"/>
               {/*Email*/}
               {/* Phone Number */}
               {/* Subject */}
               {/* Message */}
               </div>
            </form>
        </div>
    );
}

export default Contact;