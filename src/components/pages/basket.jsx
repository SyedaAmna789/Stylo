import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import{useNavigate} from "react-router-dom";
const Basket = () => {
    const navigate=useNavigate();
    return (
        <div className="w-full bg-white text-black px-4 sm:px-6 md:px-10 lg:px-20 py-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Shopping Bags</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-gray-300">
                {/*Product section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex flex-col sm:flex-row flex-start gap-4 sm:gap-6 relative ">
                        {/*Product Image */}
                        <img
                            src="/images/1.jpg"
                            alt="product"
                            className="w-30 h-auto object-cover flex-shrink-0"
                        />
                        {/*product detail */}
                        <div className="flex-1 w-full flex flex-col justify-between">
                            {/*product name,prices,size */}
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-start mt-2 sm:mt-4 w-full">
                                {/*Brand info */}
                                <div className="text-sm space-y-1 min-w-[100px] sm:min-w-[150px]">
                                    <div className="font-semibold"> Stylo</div>
                                    <div>Its is fabolus Item</div>
                                    <div className="text-xs text-gray-500 ">Product ID:ATYGF657656 </div>
                                </div>
                                {/*price */}
                                <div className="text-sm space-y-1 text-center sm:text-left sm:min-w-[120px]">
                                    <div className="line-through text-gray-400">Rs/-9000 </div>
                                    <div className="flex justify-center sm:justify-start items-center gap-2">
                                        <span className="line-through text-gray-400">
                                            Rs/-5000
                                        </span>
                                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">30% Sale</span>
                                    </div>
                                    <div className="text-red-600 font-semibold">Rs/-4000</div>
                                </div>

                                {/*Quantity and size */}
                                <div className="text-sm text-left space-y-1 sm:min-w-[120px]">
                                    <div>
                                        Size:
                                        <span className="underline text-blue-700 cursor-pointer ">Xs</span>
                                    </div>
                                    <div>
                                        Quantity:
                                        <span className="underline text-blue-700 cursor-pointer ">1</span>
                                    </div>
                                </div>
                            </div>
                            {/*Wishlish */}
                            <div className="flex items-center gap-2 text-sm text-gray-700 mt-3">
                                <FaHeart />
                                <span className="underline cursor-pointer">Move to wishlist</span>
                            </div>
                        </div>
                        {/*Close button */}
                        <button>X</button>
                    </div>
                </div>
                {/*Summary section */}
                <div className="bg-white border border-gray-300 p-6 w-full h-fit top-6 sticky">
                    <h3 className="text-lg font-semibold mb-4">Summary</h3>
                    <div className="text-sm space-y-3">
                        <div className="flex justify-between">
                            <span>SubTotal</span>
                            <span>Rs/-450</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span>Rs/-250</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sale</span>
                            <span className="text-red-700">Rs/-150</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>Rs/-520</span>
                        </div>
                        <button className=" mt-4 py-2 w-full bg-black text-white rounded hover:bg-gray-900 transition-colors"
            onClick={()=>navigate("/checkout")}
            >
                            Go To Checkout
                        </button>
                    </div>
                </div>
            </div>
            {/*Bottom info section */}
            <div className="mt-10 border-t pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm text-gray-700">
                <div>
                    <div className="font-medium mb-1">Returns</div>
                    <p>Free Return Services</p>
                </div>

                <div> <div className="font-medium mb-1">Order</div>
                    <p>New order take you on step closer to unlock rewards</p>
                </div>
            <div>
                <div className="font-medium mb-1">Fast Delivery</div>
                <p>To your door in no time.</p>
            </div>

            </div>
        </div>
    )
}
export default Basket;