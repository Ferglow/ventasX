import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from '../index'
export function MyRoutes() {
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
}