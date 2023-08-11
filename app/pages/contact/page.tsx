// pages/contact.js
import React from 'react';

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col w-full p-8 space-y-8 text-center md:w-1/2">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <form className="flex flex-col space-y-4">
                    <input type="text" className="px-3 py-2 border border-gray-400 rounded-md" placeholder="Your name" required/>
                    <input type="email" className="px-3 py-2 border border-gray-400 rounded-md" placeholder="Your email" required/>
                    <input type="text" className="px-3 py-2 border border-gray-400 rounded-md" placeholder="Subject" required/>
                    <textarea className="px-3 py-2 border border-gray-400 rounded-md" placeholder="Your message" required></textarea>
                    <button className="px-3 py-2 text-white bg-blue-500 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default page