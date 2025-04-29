import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes, FaSearch } from "react-icons/fa";


const Sidebar = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("HOME");

    if (!isOpen) return null;

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const menuData = {
        HOME: [
            "New Arrival",
            "Ramadan",
            "Clothing",
            "Shoes",
            "Winter",
            "Summer",
        ],
        SETTING: [
            "Menware  Homeoage",
            "New Arrival",
            "Winter",
            "Summer",
            "Sale",
        ],
        PROFILE: [
            "Kids Homeoage",
            "New Arrival",
            "Baby (0-36Month)",
            "Kids(2-12yrs)",
            "Teen (13-16yrs)"

        ]

    };
    const currentMenu = menuData[activeTab];
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">
            {/* Sidebar Container*/}
            <div className="fixed top-0 left-0 w-80 max-w-full h-full bg-white z-50 p-4 flex flex-col">
                {/* Sidebar Header*/}
                <div className="flex items-center justify-between pb-4 mb-4">
                    <div className="text-xl font-bold">Stylo</div>
                    <button onClick={onClose}>
                        <FaTimes className="text-xl text-black" />
                    </button>
                </div>
                {/* Top Bar */}
                <div className="flex space-x-4 text-sm mb-4">
                    {["HOME", "SETTING", "PROFILE"].map((tab) => (
                        <button key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`font-semibold uppercase ${activeTab === tab ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-black"}`}>

                            {tab}
                        </button>
                    ))}
                </div>
                {/* Navigation Links */}

                <div className="flex-1 overflow-y-auto">
                    <ul className="space-y-4 text-sm">
                        {currentMenu.map((item, index) => {
                            const isSale = item.toLowerCase().includes("sale");
                            return (
                                <li key={index} className={`flex justify-between items-center cursor-pointer ${isSale ?
                                    "hover:text-red-600"
                                    : "hover:text-black"
                                    }`}>
                                    <span className={`${isSale ? "text-red-600" : ""}`}>
                                        {item}
                                    </span>
                                    <span className={`text-xl ${isSale ? "text-red-600" : ""}`}>
                                    </span>
                                </li>
                            );

                        })}

                    </ul>
                </div>
                {/* Footer Buttons */}
                <div className="mt-2 space-y-3 px-1">
                    <h3 className="text-sm font-semibold text-gray-600">My Account</h3>
                    <button className="w-full py-2 bg-black text-white rounded text-sm font-medium ">
                        Sign In
                    </button>
                    <button className="w-full py-2 border border-black text-black rounded text-sm font-medium">
                        Register
                    </button>
                </div>


            </div>

        </div>
    )
}
export default Sidebar;
