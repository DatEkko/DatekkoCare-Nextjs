"use client";
import { ToastContainer } from "react-toastify";

const ToastProvider = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    );
};

export default ToastProvider;
