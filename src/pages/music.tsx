import { Link } from "react-router-dom";
import Socials from '../socialbuttons';
import logo from '../assets/logo.webp'

export default function Music() {
  return (
   <div className="min-h-screen w-full">
    <div className="flex flex-col items-center justify-center w-full px-2 text-center">
      <header className="p-6 flex justify-center items-center w-full">
        <h1 className="text-3xl font-bold tracking-tight">
          <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="w-full max-w-xs sm:max-w-sm h-auto filter brightness-100 hover:brightness-100 transition duration-300 transform hover:scale-110"
           />
          </Link>
        </h1>
      </header> 

<footer className="flex justify-center space-x-6 p-4 text-white border-t border-zinc-700">
  <Link to="/" className="text-orange-500 underline hover:text-orange-300">
    Home
  </Link>
  <Link to="/bio" className="text-orange-500 underline hover:text-orange-300">
    About
  </Link>
  <Link to="/contact" className="text-orange-500 underline hover:text-orange-300">
    Contact
  </Link>
  <Link to="/music" className="text-orange-500 underline hover:text-orange-300">
    Music
  </Link>
  <Link to="https://slowloris.bandcamp.com/merch" className="text-orange-500 underline hover:text-orange-300">
    Merch
  </Link>
</footer>

<div className="mb-4">
  <label htmlFor="releases" className="text-white font-semibold mr-2">Jump to Release:</label>
  <select
    id="releases"
    className="bg-zinc-800 text-white p-2 rounded"
    onChange={(e) => {
      if (e.target.value) {
        window.location.href = e.target.value;
      }
    }}
  >
    <option value="">Select a release</option>
    <option value="/releases/ticking-is-torture">Ticking Is Torture</option>
    <option value="/releases/sounds-hoof">Sounds Hoof</option>
    <option value="/releases/selling-shotguns">Selling Shotguns</option>
  </select>
</div>


      <h1 className="text-3xl font-bold mb-6 text-white">Music</h1>

      {/* Selling Shotguns Video */}
      <h2 className="text-xl font-bold mb-2 text-white">Slow Loris – Sounds Hoof</h2>
<div
  className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto"
  style={{
    paddingBottom: '56.25%', // default 16:9 aspect ratio
  }}
>
  <div
    className="absolute top-0 left-0 w-full h-full"
    style={{
      paddingBottom: '0',
    }}
  >
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/dRIN_ib_n-M?si=wDl0d39lv08nn_vd"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>
     
<br />
      {/* Sounds Hoof Video */}
        <h2 className="text-xl font-bold mb-2 text-white">Slow Loris – Sounds Hoof</h2>
<div
  className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto"
  style={{
    paddingBottom: '56.25%', // default 16:9 aspect ratio
  }}
>
  <div
    className="absolute top-0 left-0 w-full h-full"
    style={{
      paddingBottom: '0',
    }}
  >
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/MSPdHplI-Mk?si=afSBktvJsd7UEKAh"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>

<br />
      {/* Spotify Player */}
      <div className="w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-2 text-white">Listen on Spotify</h2>
        <iframe src="https://open.spotify.com/embed/artist/60Hk8vFZ6lc4ILjVKneHKl?utm_source=generator&theme=0" 
        width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
        </iframe>
      </div>
    <br />
    <Socials />
    
    <footer className="text-sm text-white p-4 text-center border-t border-zinc-700 mt-12">
        &copy; {new Date().getFullYear()} slowlor.is — All rights reserved.
      </footer>
    </div>
    </div>
  );
}
