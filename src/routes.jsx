import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './Containers/Home/App'
import Order from './Containers/Orders'
function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/orders" element={<Order />}/>
            </Routes>
    </BrowserRouter>
    )
}

export default Router