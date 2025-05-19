import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Landing from "./pages/landing";
import Bio from "./pages/bio";
import Contact from "./pages/contact";
import Music from "./pages/music";
import Hoof from "./pages/releases/soundshoof";
import Shotguns from "./pages/releases/shotguns";
import Tickling from "./pages/releases/tickling";
import SixOneNine from "./pages/releases/619";
import art from './assets/art-grey.webp';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <div
        style={{
          backgroundImage: `url(${art})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "black",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/music" element={<Music />} />
            <Route path="/releases/sounds-hoof" element={<Hoof />} />
            <Route path="/releases/selling-shotguns" element={<Shotguns />} />
            <Route path="/releases/tickling-is-torture" element={<Tickling />} />
            <Route path="/releases/six-one-nine" element={<SixOneNine />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
