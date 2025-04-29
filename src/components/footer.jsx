import React from "react";
import { FaInstagram, FaSnapchat, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 text-sm">
            {/* Top Section*/}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/*Column 1*/}
                    <div>
                        <h4 className="font-semibold text-lg mb-5 text-white">Customer Service</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:underline">FAQ's</a></li>
                            <li><a href="#" className="hover:underline">Order and delivery</a></li>
                            <li><a href="#" className="hover:underline">Retures and Refunds</a></li>
                        </ul>
                    </div>
                    {/*Column 2*/}
                    <div>
                        <h4 className="font-semibold text-lg mb-5 text-white">About Stylo</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">About us</a></li>
                            <li><a href="#" className="hover:underline">Stylo Partner</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                        </ul>
                    </div>
                    {/*Column 3*/}
                    <div>
                        <h4 className="font-semibold text-lg mb-5 text-white">About Stylo</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Membership </a></li>
                            <li><a href="#" className="hover:underline">Discounts updates</a></li>
                            <li><a href="#" className="hover:underline">Affillate program</a></li>
                        </ul>
                        <h4 className="font-semibold text-lg mb-4 text-white">Follow us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white text-xl">  <FaInstagram /></a>
                            <a href="#" className="text-gray-300 hover:text-white text-xl">  <FaSnapchat /></a>
                            <a href="#" className="text-gray-300 hover:text-white text-xl">  <FaYoutube /></a>
                            <a href="#" className="text-gray-300 hover:text-white text-xl">  <FaYoutube /> </a>
                            <a href="#" className="text-gray-300 hover:text-white text-xl">  <FaTwitter /> </a>
                        </div>
                    </div>

                </div>

            </div>
            {/* Top Section*/}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-wrap justify-center gap-x-6 text-xs text-white-400 mb-5">
                        <a href="#" className="hover:underline">Private policy</a>
                        <a href="#" className="hover:underline">Terms and Conditions</a>
                        <a href="#" className="hover:underline">Accessibility </a>

                    </div>
                    <p className="text-center text-xs text-white mb-2">This is new startup having discounts come and enjoy shopping!</p>
                    <p className="text-center text-xs text-white mb-2">Copyrights 2025 Stylo Pakistan Limited.All rights reserved.</p>

                </div>

            </div>
        </footer>
    );
};
export default Footer;