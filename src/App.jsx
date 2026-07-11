import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgiq.com/widgiq-widget.iife.js";
    script.setAttribute("data-widgiq-widget", "");
    script.setAttribute("data-api-key", import.meta.env.VITE_WIDGIQ_API_KEY);
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "white",
              color: "black",
              borderRadius: "12px",
            },
          }}
        />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
