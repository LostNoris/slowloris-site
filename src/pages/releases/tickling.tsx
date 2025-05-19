import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async";
import Socials from '../../socialbuttons';
import logo from '../../assets/logo.webp'
import rust from '../../assets/grey-rust.webp'
import Tickling from '../../assets/tickling-art.webp';

export default function TicklingIsTorture() {
  return (
   <div className="min-h-screen w-full">
    <Helmet>
<title>Slow Loris | Tickling is Torture</title>
<meta name="description" content="Find the full releases details and stream the Slow Loris EP Tickling is Torture" />
<link rel="canonical" href="https://slowlor.is/releases/tickling-is-torture" />
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
<article>
    <main className="flex flex-1 flex-col items-center justify-center w-full px-6 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Tickling is Torture</h1>
        <br />
<Card
  className="bg-zinc-500 border-zinc-700 w-full max-w-[20rem] sm:max-w-md md:max-w-xl lg:max-w-2xl shadow-xl rounded-2xl mx-auto"
  style={{
    backgroundImage: `url(${rust})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }}
>
  <CardContent className="p-6">
    <div className="flex flex-col text-left text-white space-y-4">
      <p className="text-base leading-relaxed font-medium">
        <strong>Tickling Is Torture</strong> was the debut 3-track EP from Slow Loris, released in 2018. It captured the band’s formative years, marked by a stronger jazz influence and a more progressive rock orientation. Tracks like <em>Tree Man</em> and <em>OG</em> lean heavily into jazz and prog, while still weaving in the dark, metal-inspired riffs that would later become part of the band's signature intensity.
      </p>

      <p className="text-base leading-relaxed font-medium">
        It’s the closing track, <em>Bradford Bassline</em>, that offers an early glimpse of the evolving sound Slow Loris would explore more fully in their 2021 EP <em>Sounds Hoof</em> and the 2025 single <em>Selling Shotguns</em>. Though the band has since moved into heavier, more electronic territory, <em>Tickling Is Torture</em> remains a testament to their creative foundations and commitment to sonic evolution.
      </p>

<p className="text-base leading-relaxed font-medium text-left">
      Discover more about the band on the <Link to="/bio" className="underline text-orange-500 hover:text-orange-300">artist bio</Link> page, or <Link to="/contact" className="underline text-orange-500 hover:text-orange-300">get in touch</Link> for press and booking inquiries.
      <br />
      <a
        href="https://slowloris.bandcamp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-orange-500 hover:text-orange-300"
      >
        Listen on Bandcamp
      </a>
    </p>

    </div>

    
  </CardContent>
</Card>



    <br />
    <img src={Tickling} alt="pic" className="w-full sm:w-200 border-1 border-zinc-700 rounded-sm" />
    <br /> 

<h2 className="text-xl font-bold mb-2 text-white">Slow Loris – Bradford Bassline</h2>
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
      src="https://www.youtube.com/embed/gTjckUVK20M?si=UMfylWGd_thqbG-w"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>

<br />
    </main>
    </article>
    <Socials />
      <footer className="text-sm text-white p-4 text-center border-t border-zinc-700 mt-12">
        &copy; {new Date().getFullYear()} slowlor.is — All rights reserved.
      </footer>
    </div>
    </div>
    
  )
}
