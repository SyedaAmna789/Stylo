import React from "react";

function ProductPage() {
    return (
        <div className="bg-white text-gray-900 w-full min-h-screen">
            <div className="px-4 py-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
                {/* Product image */}
                <div className="space-y-4">
                    <div className="w-full">
                        <img
                            src="/images/1.jpg"
                            alt="Marc Bag"
                            className="w-full max-h-[500px] object-contain rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="w-full aspect-square p-1 rounded-lg">
                                <img
                                    src="/images/1.jpg"
                                    alt={`Bag ${i = 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )

}
export default ProductPage;