import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="bg-gray-50 py-32 px-10 min-h-screen text-xl">
                <div className="p-10 md:w-1/2 mx-auto">
                    <p>Hey there! This is the page where I tell you I get lots of email and read them all but can't reply to everything. It's easiest to find me on Instagram: <a href="https://www.instagram.com/mattevans.dev/">@mattevans.dev.</a></p>
                </div>
                <form action="" class="md:w-1/2 mx-auto">
                    <div class="shadow-xl">
                        <div class="flex items-center bg-blue-800 rounded-t-lg border-b border-gray-500">
                            <label for="name" className="w-20 text-right mr-8 text-purple-200">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white" />
                        </div>
                        <div class="flex items-center bg-blue-800 border-b border-gray-500">
                            <label for="email" class="w-20 text-right mr-8 text-purple-200">Email</label>
                            <input type="text" id="email" name="email" placeholder="Your Email" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white" />
                        </div>
                        <div class="flex items-center bg-blue-800 rounded-b-lg mb-10">
                            <textarea type="textarea" id="message" name="message" placeholder="Type your Message Here" rows="10" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white" />
                        </div>
                    </div>
                    <button class="block w-full rounded bg-blue-500 py-3 text-white font-bold shadow">Submit</button>

                </form>

            </div>
        )
    }
}

export default Contact;