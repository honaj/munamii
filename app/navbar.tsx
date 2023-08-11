'use client'
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Navbutton from "@/app/navbutton";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex items-center justify-between flex-wrap p-4 bg-teal-400">
            <div className="flex items-center flex-shrink-0 text-gray-100 mr-6">
                <h1 className="text-4xl">Munamii Cakery</h1>
            </div>
            <button onClick={toggle} className="block lg:hidden">
                {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                <div className="text-lg lg:flex-grow">
                    <Navbutton name="Home" link={"/app"}/>
                    <Navbutton name="About" link={"/pages/about"}/>
                    <Navbutton name={"Products"} link={"/pages/products"}/>
                    <Navbutton name={"Contact"} link={"/pages/contact"}/>
                    <Link href="/pages/contact/page">
                        <h2 className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-gray-400">
                            BABA
                        </h2>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;