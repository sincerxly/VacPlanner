import React from "react";
import Home from "./pages/main";
import GlobalStyle from "./GlobalStyle";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <GlobalStyle />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <Home />
        </>
    );
}

export default App;
