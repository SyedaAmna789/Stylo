
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


const BestDressed = () => {
    const [show,ImageTransition, setShow] = useState(true);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16 bg-white ">
            {/*Left Section*/}
            <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0">
           
          
         
                <h2 className="text-xl font-medium mb-4  transition-transform duration-500  hover:scale-100 translate-x-0 hover:translate-x-2">The Best Dress ✨</h2>
             
        
               
                <p className="text-gray-600 mb-6 hover:text-sky-900">Its a beautiful product of our store.You will enjoy it!.</p>
               

                <button onClick={() => setShow(!show)}className=" border border-black rounded hover:bg-black px-5 py-2 hover:text-white transition">Shop Now</button>

            </div>
          
            {/*Right Section for image*/}
            
            <div className="lg:-w-1/2 w-full flex justify-center">
                <img
                    src="/images/6.jpg"
                    alt="Best Dress"
                    className="w-full  max-w-md object-cover  transition-transform duration-500  hover:scale-100 translate-x-0 hover:translate-x-2"
                   
                    
                   
                />
         
            </div>
        </div>
        
    );
};
export default BestDressed;