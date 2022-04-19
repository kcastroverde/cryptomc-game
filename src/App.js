import React from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Delivery from './routes/Delivery';
import Home from './routes/Home';
import Inventory from './routes/Inventory';
import Shop from './routes/Shop';
import Tools from './routes/Tools';
import Whitepaper from './routes/Whitepaper';
export default function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/home" element={<Home/>}/>
              <Route index element={<Inventory/>}/>
              <Route path="/inventory" element={<Inventory/>}/>
              <Route path="/tools" element={<Tools/>}/>
              <Route path="/delivery" element={<Delivery/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/whitepaper" element={<Whitepaper/>}/>
            </Route>
        </Routes>
    </HashRouter>
  )
}
