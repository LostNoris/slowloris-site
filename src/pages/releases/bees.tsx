import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Socials from '../../socialbuttons';
import logo from '../../assets/logo.webp'
import rust from '../../assets/grey-rust.webp'
import bees from '../../assets/bees-art.webp';

export default function Bees() {
  return (
   <div className="min-h-screen w-full">
<Helmet>
  <title>Slow Loris | Bees Rude</title>
  <meta name="description" content="Find the full release details and stream the Slow Loris single 'Selling Shotguns'." />
  <link rel="canonical" href="https://slowlor.is/releases/bees-rude" />
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "MusicRecording",
      "@id": "https://slowlor.is/releases/bees-rude",
      "name": "Selling Shotguns",
      "url": "https://slowlor.is/releases/bees-rude",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://slowlor.is/releases/bees-rude"
      },
      "inAlbum": {
        "@type": "MusicAlbum",
        "name": "Singles",
        "url": "https://slowlor.is"
      },
      "byArtist": {
        "@id": "https://slowlor.is/#band"
      },
      "datePublished": "2025-08-23",
      "genre": "Math Rock, Experimental, Progressive, Metal",
      "duration": "PT5M11S",
      "sameAs": [
        "https://www.youtube.com/watch?v=oeM4p4uvbZ0",
        "https://slowloris.bandcamp.com/track/bees-rude"
        "https://soundcloud.com/slowlorisuk/bees-rude"
        "https://open.spotify.com/track/3u8t1AtZuLwl3hrJ4GitdP?si=c15f97a731964384"
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

<footer className="flex justify-center space-x-4 p-4 text-white border-t border-zinc-700">
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
  <Link to="https://slowlor.is/events" className="text-orange-500 underline hover:text-orange-300">
    Events
  </Link>
</footer>
<article>
    <main className="flex flex-1 flex-col items-center justify-center w-full px-6 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Bees Rude</h1>
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
        Leeds/Manchester-based experimental four-piece <strong>Slow Loris</strong> will release <em>“Bees Rude”</em> on August 24, 2025. A sprawling, rhythmically complex single, the track explores the tension between electronic soundscapes and nu-metal intensity.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Following the heavy dissonance of <em>Six One Nine</em>, <em>Bees Rude</em> expands the band’s sonic territory with jagged odd-time structures, layered textures, and a restless sense of movement. Produced by <strong>Sam Hobbs (Rebel Elements)</strong>, the track highlights Slow Loris’s growing reputation for genre-defying experimentation ahead of their debut full-length album.
      </p>

      <p className="text-base leading-relaxed font-medium">
        The accompanying video, directed by <strong>Chris Sellers (LostNoris)</strong>, collages images of cityscapes, traffic, and hive insects—bees, wasps, and ants—to create a surreal vision of modern urban existence. The result is a striking audiovisual metaphor for life as swarm, ritual, and survival.
      </p>

      <p className="text-base leading-relaxed font-medium">
        <em>Bees Rude</em> will be available on all major streaming platforms from Sunday, August 24, 2025, offering listeners another glimpse into the ambitious sound world of Slow Loris.
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
        
      </p>
    </div>
  </CardContent>
</Card>


    <br />
    <img src={bees} alt="pic" className="w-full sm:w-100 border-1 border-zinc-700 rounded-sm" />
    <br /> 

<h2 className="text-xl font-bold mb-2 text-white">Slow Loris – Bees Rude</h2>
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
      src="https://www.youtube.com/embed/oeM4p4uvbZ0?si=n5yImB5n9tqpQtjq"
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
