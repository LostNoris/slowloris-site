import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Socials from "../socialbuttons";
import logo from "../assets/logo.webp";
import shotguns from "../assets/shotguns-art.webp"
import six from "../assets/619-art.webp"
import bees from "../assets/bees-art.webp"
import hoof from "../assets/hoof-art.webp"
import tickling from "../assets/tickling-art.webp"
import rust from '../assets/grey-rust.webp'
import { Helmet } from "react-helmet-async";


// Example release data (can be externalized)
const releases = [
  {
    title: "Bees Rude",
    slug: "/releases/bees-rude",
    image: bees,
    type: "Single",
    year: "2025"
  },
  {
    title: "Six One Nine",
    slug: "/releases/six-one-nine",
    image: six,
    type: "Single",
    year: "2025"
  },
  {
    title: "Selling Shotguns",
    slug: "/releases/selling-shotguns",
    image: shotguns,
    type: "Single",
    year: "2025"
  },
  {
    title: "Sounds Hoof",
    slug: "/releases/sounds-hoof",
    image: hoof,
    type: "EP",
    year: "2021"
  },
  {
    title: "Tickling Is Torture",
    slug: "/releases/tickling-is-torture",
    image: tickling,
    type: "EP",
    year: "2018"
  },
];

export default function Music() {
  return (
<div className="min-h-screen w-full">
<Helmet>
<title>Slow Loris | Music</title>
<meta name="description" content="Listen to the full discography of Slow Loris including visuals and links." />
<link rel="canonical" href="https://slowlor.is/music" />
</Helmet>
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

        <h1 className="text-3xl font-bold mb-8 text-white">Music</h1>

<Card
       className="bg-zinc-500 border-zinc-700 max-w-xl shadow-xl rounded-2xl mx-auto w-full"
       style={{
       backgroundImage: `url(${rust})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundBlendMode: 'overlay', // Makes background slightly transparent
       backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add overlay tint if needed
       }}>
       <CardContent className="p-4">

        {/* Grid of Releases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {releases.map((release, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <Link to={release.slug} className="w-full">
              <div className="overflow-hidden rounded-xl shadow-lg w-full aspect-square bg-zinc-800">
                <img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              </Link>
              <Link className="text-md text-bold text-white leading-tight"
                to={release.slug}
              >
                {release.title} 
              </Link>
              <h2 className="text-sm text-white leading-tight">{release.type} {release.year}</h2>
            </div>
          ))}
        </div>
        </CardContent>
        </Card>

        {/* Optional Spotify Section */}
        <div className="w-full max-w-3xl mt-12">
          <h2 className="text-xl font-bold mb-2 text-white">Listen on Spotify</h2>
          <iframe
            src="https://open.spotify.com/embed/artist/60Hk8vFZ6lc4ILjVKneHKl?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        
          <br />
          <Socials />


        <footer className="text-sm text-white p-4 text-center border-t border-zinc-700 mt-12 w-full">
          &copy; {new Date().getFullYear()} slowlor.is — All rights reserved.
        </footer>
      </div>
    </div>
  );
}
