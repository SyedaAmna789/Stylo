import React, { useState } from "react";
import { FaFilter, FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
const filters = ["Clothing", "Bags","Dress", "Shoes", "Accessories", "Jewelary"];



export default function StyloSale() {

 const [selectedFilter,setSelectedFilter]=useState("AllFilters");

  const filteredProducts = selectedFilter === "AllFilters"
  ? [...products]
  : products.filter((product)=> product.category === selectedFilter);

    return (
        <div className="max-w-full p-2 mx-auto text-left">

            <nav className="text-sm text-gray-500 mb-4">
                <span>Women Wear</span> <span className="font-semibold">Sale</span>
            </nav>

            <h1 className="text-4xl font-bold mb-6 tex-left">THE STYLO SALE FOR WOMEN</h1>

            <div className="mb-4 flex gap-6 text-lg font-semibold">
                <span className="text-black">Women Shop</span>
                <span className="text-black">Men Shop</span>
                <span className="text-black">Kids Shop</span>
            </div>

            {/* Filtering and sorting */}
            <div className="flex justify-between items-center mb-6">
                {/* Filters */}
                <div className="flex flex-wrap gap-3">
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-gray-700
                     hover:bg-gray-200 transition"
                     onClick={()=>setSelectedFilter("AllFilters")}
                     >
                        <FaFilter className="w-4 h-4 mr-2" />
                        All Filters
                    </button>
                   {filters.slice(1).map((filter, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 border rounded-full
                              transition ${
                                selectedFilter === filter
                              ? "bg-black text-white border-black"
                              : "text-gray-700 border-gray-300 hover:bg-gray-200"
                             }`}
                             onClick={()=>setSelectedFilter(filter)}
                        >
                            {filter}
                        </button>
                    )
                    )
                    }
                </div>

                {/* Sorting */}
                <button className="flex items-center text-gray-700 text-lg">
                    Sort By <FaChevronDown className="w-5 h-5 ml-1" />
                </button>
              </div>
            
{filteredProducts.length === 0 ? (
  <div className="text-center text-gray-500 text-lg py-16">
    There is not any filtered product.
  </div>
) : (
  <>
    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-start w-full">
      {filteredProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
        <div
          key={product.id}
          className="relative group bg-white rounded-lg p-4 text-left w-full"
        >
          <div className="w-full flex items-center justify-center h-[250px]">
            <img
              src={product.image}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-4 text-left">
            <p className="text-gray-500 text-sm">{product.brand}</p>
            <p className="text-gray-500 text-sm">{product.name}</p>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-gray-400 line-through text-sm">
              {product.originalPrice}
            </span>
            <span className="text-red-600 font-semibold">
              {product.discountedPrice}
            </span>
          </div>
          <span className="text-xs rounded-lg bg-red-500 text-white px-2 py-1 mt-1 inline-block">
            {product.discount}
          </span>
        </div>
        </Link>
      ))}
    </div>
  </>
)}
          {/* Recommendations */}
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
      )
}