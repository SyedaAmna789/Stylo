import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
const products = [
  {
    id: 1,
    image: "/images/1.jpg",
    brand: "Stylo",
    name: "Bag for Girls",
    originalPrice: "Rs/-4000",
    discountedPrice: "Rs/-2000",
    discount: "5%",
    category: "Bags",
  },
  {
    id: 2,
    image: "/images/2.jpg",
    brand: "Stylo",
    name: "Bag for Girls",
    originalPrice: "Rs/-15000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Bags",
  },
  {
    id: 3,
    image: "/images/3.jpg",
    brand: "Stylo",
    name: "Dress for Girls",
    originalPrice: "Rs/-30000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Dress",
  },
  {
    id: 4,
    image: "/images/4.jpg",
    brand: "Stylo",
    name: "Dress for Girls",
    originalPrice: "Rs/-40000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Dress",
  },
  {
    id: 5,
    image: "/images/5.jpg",
    brand: "Stylo",
    name: "Dress for Girls",
    originalPrice: "Rs/-20000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Dress",
  },
  {
    id: 6,
    image: "/images/6.jpg",
    brand: "Stylo",
    name: "Shoes for Girls",
    originalPrice: "Rs/-7000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Shoes",
  },
  {
    id: 7,
    image: "/images/7.jpg",
    brand: "Stylo",
    name: "Shoes for Girls",
    originalPrice: "Rs/-9000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Shoes",
  },

  {
    id: 8,
    image: "/images/9.jpg",
    brand: "Stylo",
    name: "Accessories for Girls",
    originalPrice: "Rs/-14000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Accessories",
  },
  
  {
    id: 9,
    image: "/images/8.jpg",
    brand: "Stylo",
    name: "Jewelary for Girls",
    originalPrice: "Rs/-14000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Jewelary",
  },
  {
    id: 10,
    image: "/images/10.jpg",
    brand: "Stylo",
    name: "Jewelary for Girls",
    originalPrice: "Rs/-14000",
    discountedPrice: "Rs/-2000",
    discount: "10%",
    category: "Jewelary",
  },

];

function ProductPage() {
    const [selectedImage, setSelectedImage] = useState("/images/1.jpg");
    const thumbnails = ["/images/1.jpg", "/images/2.jpg", "/images/1.jpg"];

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
            {/* Additional info  */}
            <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-800">
                <div className="md:col-span-1 space-y-4">
                    <h3 className="text-xs font-semibold uppercase text-gray-500">The Details</h3>  
               
                <div>
                <h4 className="font-semibold">Stylo</h4>
                <p>Its a luxurious item of our store.It has so many new feature.You will enjoy a lot.</p>
                </div>
                <div>
                    <h5 className="font-semibold mt-4 mb-1">Hightlights</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Leather Strap</li>
                        <li>Leather all side </li>
                        <li>Fine zip</li>
                        <li>5 Pockets</li>
                    </ul>
                </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold">Stylo Article:</p>
                    <p>99867643323</p>
                  </div>

                </div>
                {/*Product image */}
                <div className="space-y-6">
                    <div>
                        <p className="font-semibold">Stylo: 1822789</p>
                        <p>Brand style ID:2662BAHADAR</p>
                    </div>
                    <div className="mt-4">
                        <img 
                        src="/images/1.jpg"
                        alt="Product Side Veiw"
                        className="w-full object-contain rounded-lg"
                        />

                    </div>

                </div>
            </section>
            <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Recommendations</h2>
              <button className="px-5 py-2 text-sm rounded-full border border-gray-400 hover:bg-black hover:text-white transition">
                Shop Now
              </button>
            </div>

            {/*Products*/}
            <div className="relative flex justify-center mt-8">
              <div
                className="flex gap-6 w-max px-1 custom-scrollbar"
                style={{
                  maxWidth: "75%",
                  overflowX: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "black transparent",
                  marginTop: "20px",
                }}
              >
                {products.slice(0, 10).map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[220px] max-w-[220px] bg-white p-3 flex flex-col hover:shadow-md transition"
                  >
                    <div className="w-full h-[200px] flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-contain h-full max-h-[180px]"
                      />
                    </div>
                    <div className="mt-4 text-sm">
                      <p className="text-gray-400">New Season</p>
                      <p className="text-black font-semibold">{item.brand}</p>
                      <p className="text-gray-600 line-clamp-1">{item.name}</p>
                      <p className="text-red-600 font-bold mt-1">
                        {item.discountedPrice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Scrollbar Styling */}
            <style jsx>{`
    .custom-scrollbar::-webkit-scrollbar {
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: black;
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: #222;
    }
  `}</style>
          </div>
        </div>
    );
}

export default ProductPage;