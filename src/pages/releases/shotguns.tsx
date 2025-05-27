import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Socials from '../../socialbuttons';
import logo from '../../assets/logo.webp'
import rust from '../../assets/grey-rust.webp'
import Shotguns from '../../assets/shotguns-art.webp';

export default function SellingShotguns() {
  return (
   <div className="min-h-screen w-full">
<Helmet>
  <title>Slow Loris | Selling Shotguns</title>
  <meta name="description" content="Find the full release details and stream the Slow Loris single 'Selling Shotguns'." />
  <link rel="canonical" href="https://slowlor.is/releases/selling-shotguns" />
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "MusicRecording",
      "@id": "https://slowlor.is/releases/selling-shotguns",
      "name": "Selling Shotguns",
      "url": "https://slowlor.is/releases/selling-shotguns",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://slowlor.is/releases/selling-shotguns"
      },
      "inAlbum": {
        "@type": "MusicAlbum",
        "name": "Singles",
        "url": "https://slowlor.is"
      },
      "byArtist": {
        "@id": "https://slowlor.is/#band"
      },
      "datePublished": "2025-04-18",
      "genre": "Math Rock, Experimental, Progressive, Metal",
      "duration": "PT4M04S",
      "sameAs": [
        "https://open.spotify.com/track/2AjhcJcbpSlbtf5yG3o1H0?si=e370f17e7a094ce1",
        "https://youtu.be/dRIN_ib_n-M?si=SGKfi0ycTiHR_6bm",
        "https://slowloris.bandcamp.com/track/selling-shotguns"
      ]
    }`}
  </script>
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
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Selling Shotguns</h1>
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
        Leeds/Manchester-based experimental four-piece <strong>Slow Loris</strong> released <em>“Selling Shotguns”</em> on April 18, 2025. A dark, aggressive, and genre-defying track that marked the beginning of a bold new chapter for the band.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Following the critical success of their 2021 EP <em>Sounds Hoof</em>, <em>Selling Shotguns</em> delivered a raw and chaotic soundscape, fusing heavy, distorted guitar riffs with haunting electronic textures. The single showcased Slow Loris’s evolving sonic identity and signalled the direction of their upcoming full-length album, a collection of eight intense, genre-blending tracks.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Influenced by the visceral energy of bands like <strong>Deftones</strong> and <strong>Korn</strong>, along with the experimental electronic innovation of <strong>Hessle Audio</strong> and <strong>Objekt</strong>, <em>Selling Shotguns</em> stood out as a fearless, confrontational release. The track challenged conventional genre boundaries while maintaining Slow Loris’s signature blend of electronic rock and experimental noise.
      </p>

      <p className="text-base leading-relaxed font-medium">
        <em>Selling Shotguns</em> became available on all major streaming platforms on Friday, April 18, 2025, offering both longtime fans and new listeners a glimpse into the band’s most ambitious project to date.
      </p>

<p className="text-base leading-relaxed font-medium text-left">
      Learn more about Slow Loris on the <Link to="/bio" className="underline text-orange-500 hover:text-orange-300">artist bio</Link> page, or <Link to="/contact" className="underline text-orange-500 hover:text-orange-300">get in touch</Link> for press and booking inquiries.
      <br />
      <a
        href="https://slowloris.bandcamp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-orange-500 hover:text-orange-300"
      >
        Listen on Bandcamp
      </a>
      <br />
      <Link to="/watch/selling-shotguns" className="underline text-orange-500 hover:text-orange-300">Visit the watch page</Link>
      
    </p>

    </div>

    
  </CardContent>
</Card>


    <br />
    <img src={Shotguns} alt="pic" className="w-full sm:w-100 border-1 border-zinc-700 rounded-sm" />
    <br /> 

<h2 className="text-xl font-bold mb-2 text-white">Slow Loris – Selling Shotguns</h2>
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
