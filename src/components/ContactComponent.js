import React, { Component } from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
    // const [state, handleSubmit] = useForm("mvodyyen");
    // if (state.succeeded) {
    //     return <div className="bg-gray-50 y-32 px-10 text-xl dark:bg-gray-800 text-gray-300">
    //         <div className="p-10 md:w-1/2 mx-auto">
    //                 <h1 className="text-5xl text-gray-900 flex justify-center pb-10 dark:text-gray-300">Contact</h1>
    //                 <p className="text-gray-900 dark:text-gray-300">Thanks for your email!</p></div>
    //         </div>
    // }
        return (
            <div className="bg-gray-50 h-96 text-xl dark:bg-gray-800 text-gray-300">
                <div className="p-10 max-w-6xl mx-auto">
                    <h1 className="text-5xl text-gray-900 flex justify-center pb-10 dark:text-gray-300">Contact</h1>
                    <p className="text-gray-900 leading-10 dark:text-gray-300">Hi there, I'm excited to take on new projects and collaborate with other developers. If you are interested in working together, shoot me an email directly at <a href="mailto:me@mattevans.dev">me@mattevans.dev</a>.</p>

                    
                </div>
                {/* <div className="pb-20">
                <form onSubmit={handleSubmit} class="md:w-1/2 mx-auto">
                    <div className="shadow-xl">
                        <div className="flex items-center bg-blue-800 rounded-t-lg border-b border-gray-500">
                            <label for="name" className="w-20 text-right mr-8 text-purple-200">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white" />
                        </div>
                        <div className="flex items-center bg-blue-800 border-b border-gray-500">
                            <label for="email" class="w-20 text-right mr-8 text-purple-200">Email</label>
                            <input type="text" id="email" name="email" placeholder="Your Email" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white" />
                        </div>
                        <div className="flex items-center bg-blue-800 rounded-b-lg mb-10">
                            <textarea type="textarea" id="message" name="message" placeholder="Type your Message Here" rows="10" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white" />
                        </div>
                    </div>
                    <button className="block w-full rounded bg-blue-500 py-3 text-white font-bold shadow" type="submit" disabled={state.submitting}>Submit</button>
                </form>
                </div> */}
            </div>
        )
}

export default Contact;