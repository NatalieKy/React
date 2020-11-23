import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {ProductList} from "./components/ProductList/ProductList";


function App() {

    return (
            <div>
              <Header/>
              <ProductList/>
            </div>
    );
}
export default App;

