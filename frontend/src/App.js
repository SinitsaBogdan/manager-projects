import React from "react";
import "./assets/scss/index.scss";

import cardData from './data.json';

import { Card, Footer, Header } from "./components";

export default function App() {
    return (
        <div className="App">
            <Header />
            
            {
                cardData.map((card) => <Card content={card}/>)
            }
            <Footer />
        </div>
    );
}
