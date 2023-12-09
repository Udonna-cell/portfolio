import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Products from "./pages/Products/Products"
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Navigation from "./components/Navigation/Navigation";
// import Single_product from "./pages/Single_product/Single_product"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/" element={<Navigation />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={ErrorPage}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;