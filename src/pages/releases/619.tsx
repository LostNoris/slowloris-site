import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom"
import Socials from '../../socialbuttons';
import logo from '../../assets/logo.webp'
import rust from '../../assets/grey-rust.webp'
import Six from '../../assets/619-art.webp'
import { Helmet } from "react-helmet-async";

export default function sixonenine() {
  return (
   <div className="min-h-screen w-full">
<Helmet>
<title>Slow Loris | Six One Nine</title>
<meta name="description" content="Find the full releases details and stream the Slow Loris single Six One Nine" />
<link rel="canonical" href="https://slowlor.is/releases/six-one-nine" />
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
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Six One Nine</h1>
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
        <strong>Friday the 13th of June 2025</strong> marks the release of <em>Six One Nine</em>, the second single from experimental four-piece <strong>Slow Loris</strong> as they continue building towards their anticipated debut full-length album.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Following the ferocious momentum of their first single <em>Selling Shotguns</em>, <em>Six One Nine</em> is a compact instrumental epic. It rises from dissonant textures into dense, odd-meter riffs that draw as much from the nu-metal power of <strong>Korn</strong> and <strong>Deftones</strong> as they do from the progressive complexity of <strong>King Crimson</strong>. This release presents two distinct versions of the same track, each offering a unique perspective on the band’s evolving sound.
      </p>

      <p className="text-base leading-relaxed font-medium">
        The studio version, produced by Rebel Elements’ <strong>Sam Hobbs</strong>, showcases Slow Loris’s commitment to crafting immersive sonic environments. It is accompanied by surreal, cinematic visuals created by <strong>Chris Sellers</strong>.
      </p>

      <p className="text-base leading-relaxed font-medium">
        The live session version captures the band in their rawest form, delivering an uncut performance that bursts with energy and precision. Filmed in vertical format by <strong>Dean Glover</strong>, the video is a deliberate artistic choice, embracing mobile-first visual culture and reflecting the band’s openness to new formats while staying true to their experimental spirit.
      </p>

<p className="text-base leading-relaxed font-medium">
        The live video will premiere on YouTube on the 20th of June, one week after the official studio version.
      </p>

      <p className="text-base leading-relaxed font-medium text-left">
      Learn more about Slow Loris on the <Link to="/bio">artist bio</Link> page, view previous Slow Loris <Link to="/music">releases</Link>, or <Link to="/contact" className="underline text-orange-500 hover:text-orange-300">get in touch</Link> for press and booking inquiries.
      <br />
      
    </p>

    </div>    
  </CardContent>
</Card>
 
<br />

  <iframe src="https://open.spotify.com/embed/album/13SA9PBCZayYlyO3KGDFX4?utm_source=generator" width="100%" height="352" 
  frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<br />

<h2 className="text-xl font-bold mb-2 text-white">Slow Loris – Six One Nine</h2>
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
      src="https://www.youtube.com/embed/ccLYp-aPZSg?si=gqBb0-cPOdbok8Hs"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>

<br />

<h2 className="text-xl font-bold mb-2 text-white">Slow Loris – Six One Nine (live session)</h2>
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
      src="https://www.youtube.com/embed/ead7sME6SEo?si=syMIjY-NWvlB8-P6"
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
