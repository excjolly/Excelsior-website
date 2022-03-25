// h2 for page title

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import { AppRoutes } from "./routes";

const App = () => {
    return (
        <Router>
            <Navbar />
            <AppRoutes />
            <Footer />
        </Router>
    );
};

export default App;
