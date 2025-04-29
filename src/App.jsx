import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import WomenSale from "./components/sale";
import BestDressed from "./components/bestDressed";
import ProductPage from "./components/pages/productDetailpage";
function App() {

    return (
        <Router>
            <div className=" bg-white  min-h-screen text-gray-900 w-full">
                {/*Header*/}
                <Header />
                <main className="w-full px-4 py-12">
                    <Routes>
                        <Route path="/" element={
                            <>  
                             <WomenSale />
                                <BestDressed />
                            </>
                        } />
                        <Route path="/product/:id" element={<ProductPage />}  />
                   
                    </Routes>
                </main>
                {/*Footer*/}
                <Footer />
            </div>
        </Router>
    )
}
export default App;