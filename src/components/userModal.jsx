import React,{useEffect,useState} from "react";


const UserModal =({isOpen, onClose})=>{
const [isSignIn,setIsSignIn]=useState(true);

useEffect(()=>{
    if(isOpen){
        document.body.style.overflow="hidden";
    }
    else{
        document.body.style.overflow ="auto";
    }
    return()=>
    (document.body.style.overflow="auto");
},[isOpen]);

if(!isOpen)return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
            <div className="bg-white rounded-lg w-full max-w-sm mx-4 md:mx-0 p-6 relative shadow-lg">
                {/* Close Button */}
                <button onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 text-xl hover:text-black"
                >
                    x
                    </button>
                    {/* Modal Header */}

                    <h2 className="text-xl font-semibold mb-4 text-center">
                        {isSignIn ? "Come On In" : "Join us Today"}
                    </h2>
                    {/* Toggle Buttons */}
                    <div className="flex justify-center mb-6 text-sm">
                        <button className={`px-4 font-semibold ${
                            isSignIn ?"border-b-2 border-black":"text-gray-500 hover:text-black"
                        }`}
                        onClick={()=>setIsSignIn(true)}
                        >
                            SIGN IN
                            </button>
                            <button className={`px-4 font-semibold ${
                                !isSignIn ? "border-b-2 border-black":"text-gray-500 hover:text-black"
                            }`} 
                            onClick={()=>setIsSignIn(false)}
                            >
                                I'M NEW HERE
                                </button>
                    </div>
                        {/* Form Content */}
                        <form className="space-y-4">
                            <input
                            type="email"
                            placeholder="Email address"
                            className ="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        {!isSignIn && (
                            <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        )}
                        <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 px-3 py-2"
                        />
                        {!isSignIn && (
                            <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        )}
                        {isSignIn && (
                         <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot your password?
                            </a>       
                        )}
                        
                        {/* Singup terms */}
                        {!isSignIn &&(
                            <div className="text-xs text-gray-600">
                                <p className="mb-2">By registering, you agree to our
                                    <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>,{""}
                                    <a href="#" className="text-blue-600 hover:underline">Privacy and Cookie Policy</a>
                                </p>
                                </div>
                        )}
                        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                            {isSignIn ? "Sign In" : "Register"}

                            </button>
                       </form>
                        {/* Bottom Toggle Text */}
                        <p>
                            {isSignIn ?(
                                <>
                                New to Stylo?{""}
                                <button className="text-blue-600 hover:underline"
                                onClick={()=>setIsSignIn(false)}
                                > 
                                    Register
                                    </button>
                                </>
                            ):(
                                <>
                                Already have an account?{""}
                                <button 
                                className="text-blue-600 hover:underline"
                                onClick={()=>setIsSignIn(true)}
                                >
                                    Sign In.
                                    </button>
                                </>
                                
                            )
                        }
                            </p>

                </div>
            </div>
    )
}
export default UserModal;
