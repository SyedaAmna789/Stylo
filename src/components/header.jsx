import React, { useState, useEffect } from "react";
import { FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import UserModal from "./userModal";

const Header = () => {
    const navigate =useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modal, setModal] =useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSidebarOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () =>
            window.removeEventListener("resize", handleResize);

    }, []);

    return (

        <header className="w-full border-b border-gray-200">
            {/*Top Bar*/}
            <div className="bg-black text-white text-center text-sm py-2 px-4">
                <a href="#" className="underline hover:text-gray-300 ">
                    We have a 5% discount

                </a>
            </div>
            {/* Main Navigation*/}
            <div className="flex items-center justify-between px-4 md:px-8 py-4 bg-white relative">
                {/*Left Navigation*/}
                <div className="hidden md:flex space-x-6 text-sm flex-1 justify-start">
                    <a href="#" className="font-semibold text-black hover:text-gray-600">Women Wear</a>
                    <a href="#" className="text-gray-700 hover:text-black">Men Wear</a>
                    <a href="#" className="text-gray-700 hover:text-black">Kids Wear</a>
                </div>
                {/*Center Navigation */}
                <div className="absolute left-1/2 top-1/2 transform-translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-center">Stylo</h1>

                </div>
                {/*Right Navigation */}
                <div className="flex items-center space-x-6 text-xl text-black flex-1 justify-end">
                    <FaUser className="hover:text-gray-600 cursor-pointer hidden md:block"
                    onClick={()=>setModal(true)}
                    />
                    <FaHeart className="hover:text-gray-600 cursor-pointer hidden md:block" />
                    <FaShoppingBag className="hover:text-gray-600 cursor-pointer hidden md:block" />
                    {/*Hamburger for mobile menu */}

                    <button className="flex md:hidden text-2xl text-black focus:outline-none" onClick={() => setSidebarOpen(true)}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>
            {/*Second Navigation */}
            <div className="hidden md:flex items-center justify-between px-4 md:px-8 py-3 bg-white">
                <div className="flex space-x-4 text-sm overflow-x-auto">
                    {[
                        "New Arrival",
                        "Ramadan",
                        "Clothing",
                        "Shoes",
                        "Bags",
                        "Accessories",
                        "Jewelary",
                        "Homeware",


                    ].map((link) => (
                        <a key={link} href="#" className="text-gray-700 hover:text-black font-medium">
                            {link}
                        </a>
                    ))}
                    <a href="#" className="text-red-600 font-medium hover:text-black">Sale</a>
                </div>
                <div className="flex items-center relative w-64">
                    <FaSearch className="text-gray-400 text-sm left-3 absolute" />
                    <input
                        className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2"
                        type="text"
                    />
                </div>
            </div>
            {/*Mobile sidebar */}
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <UserModal isOpen={modal} onClose={()=>setModal(false)} />
        </header>
    );
};
export default Header;