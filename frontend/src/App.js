import React from "react";
import "./assets/scss/index.scss";

import { Card, Header, Footer } from "./components";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <Card />
        </div>
    );
}
