import React, { useState } from "react";

function ProductPage() {
    const [selectedImage, setSelectedImage] = useState("/images/1.jpg");
    const thumbnails = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

    return (
        <div className="bg-white text-gray-900 w-full min-h-screen">
            <div className="px-4 py-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Gallery Section */}
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="w-full bg-white rounded-lg flex items-center justify-center p-4">
                        <img
                            src={selectedImage}
                            alt="Marc Bag"
                            className="w-full max-h-[500px] object-contain"
                        />
                    </div>

                    {/* Thumbnails Row */}
                    <div className="grid grid-cols-3 gap-4">
                        {thumbnails.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(img)}
                                className={`overflow-hidden rounded-lg border-2 transition-all ${selectedImage === img
                                        ? "border-white ring-2 ring-white"
                                        : "border-gray-200 hover:border-gray-400"
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </button>
                        ))}
                    </div>
                </div>
                {/*Right side*/}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold">Stylo</h2>
                        <p className="text-sm text-gray-600">Its amaizing item of Stylo</p>
                    </div>
                    {/*Price tags */}
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-400 line-through text-lg">Rs/-8000</span>
                        <span className="text-red-600 font-semibold text-xl">Rs/-4000</span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">50%</span>

                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                            Add to Bag
                        </button>
                        <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 flex items-center">
                            Wishlist
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">Estimate delivery with 3-5 working days</p>
                </div>

            </div>
        </div>
    );
}

export default ProductPage;