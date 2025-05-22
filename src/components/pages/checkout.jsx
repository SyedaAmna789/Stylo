import React,{useState} from "react";

const Checkout =()=>{
    const[paymentMethod,setPaymentMethod]=useState("code");
    return(
   <div className="px-4 py-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-6">
        <div>
            <h2 className="font-semibold text-xl">Delivery Address</h2>
            <p className="text-sm text-gray-600">Add your delivery address</p>
        </div>
        <form className="space-y-6">
            {/*Personal info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="border rounded p-2" placeholder= "First Name" />
              <input className="border rounded p-2" placeholder= "Last Name" />
            </div>
             {/*Country info */}
            <select className="border p-2 rounded w-full">
                <option>Pakistan</option>
                <option>India</option>
                <option>USA</option>
            </select>
               {/*Address */}
            <div className="space-y-2">
                <input placeholder="Address" className="border p-2 rounded w-full" />
                 <input placeholder="Add another line" className="border p-2 rounded w-full" />
            </div>
            {/*City,state,zip code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <input placeholder="City" className="border p-2 rounded w-full" />
                   <input placeholder="State" className="border p-2 rounded w-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <input placeholder="Postal or zip code" className="border p-2 rounded w-full" />
                 <div className="flex ">
                    <select className="border p-2 rounded-l">
                        <option>+92</option>
                         <option>+91</option>
                          <option>+1</option>
                    </select>
                    <input placeholder="Phone" className="border p-2 rounded w-full" />
                 </div>
            </div>
            {/*Payment method */}
                <div className="space-y-2">
                <label className="font-medium text-lg">Payment Method</label>
                <div className="space-y-2">
                <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"}
                    onChange={()=> setPaymentMethod("cod")}
                    />
                    <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-2"> 
                <input type="radio" name="payment" value="card" checked={paymentMethod ==="card"}
                onChange={()=>setPaymentMethod("card")}
                />
            <span>Credit/Debit Card</span>
                </label>

                        </div>
                        </div>
          {/*Cards */}
          {paymentMethod ==="card" && (
            <div className="space-y-3">
                <input type="text" placeholder="Cardholder Name" className="border p-2 rounded w-full" />
                  <input type="text" placeholder="Card Number" className="border p-2 rounded w-full" />
            <div className="grid grid-cols-2 gap-4">
                <input className="border p-2 rounded w-full" placeholder="Expiry (MM/YY)" type="text" />
                <input className="border p-2 rounded w-full" placeholder="CVV" type="text" />

            </div>
            </div>
          )}
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700 transition">
          Place Order
          </button>
         
         

        </form>

    </div>

   </div>
    )
}
export default Checkout;