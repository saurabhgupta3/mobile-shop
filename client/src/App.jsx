import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CreateMobile from "./pages/CreateMobile";

import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create-mobile" element={<CreateMobile/>}/>
            </Routes>
        </BrowserRouter>
    )
}