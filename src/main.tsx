import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Bio from "./pages/bio";
import Contact from "./pages/contact";
import Music from "./pages/music";
import art from './assets/art-grey.webp'; // Import your image from the assets folder
import "./index.css"; // Global styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrapper div for the background */}
    <div
      style={{
        backgroundImage: `url(${art})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "black", // Fallback color
        minHeight: "100vh", // Ensure the background covers the full screen
        width: "100%",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
