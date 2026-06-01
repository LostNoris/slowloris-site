import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Socials from '../../socialbuttons';
import logo from '../../assets/logo.webp'
import rust from '../../assets/grey-rust.webp'
import art from '../../assets/ID-art.webp';

export default function ID() {
  return (
   <div className="min-h-screen w-full">
<Helmet>
  <title>Slow Loris | ID</title>
  <meta name="description" content="Find the full release details and stream the Slow Loris single 'ID'." />
  <link rel="canonical" href="https://slowlor.is/releases/bees-rude" />
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "MusicRecording",
      "@id": "https://slowlor.is/releases/id",
      "name": "ID",
      "url": "https://slowlor.is/releases/id",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://slowlor.is/releases/id"
      },
      "inAlbum": {
        "@type": "MusicAlbum",
        "name": "Singles",
        "url": "https://slowlor.is"
      },
      "byArtist": {
        "@id": "https://slowlor.is/#band"
      },
      "datePublished": "2026-06-05",
      "genre": "Math Rock, Experimental, Progressive, Metal",
      "duration": "PT3M50S",
      "sameAs": [
        "https://www.youtube.com/watch?v=Q20aTqvKlVo"
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
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">ID</h1>
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
      Leeds/Manchester experimental four-piece <strong>Slow Loris</strong> return with <em>“ID”</em>, a slow-burning new single that finds the band exploring a more restrained and reflective side of their sound. Released as the latest preview of their forthcoming debut album, the track unfolds patiently before erupting into one of the heaviest and most cathartic finales in the band's catalogue.
    </p>

    <p className="text-base leading-relaxed font-medium">
      Built on spacious atmospheres, hypnotic rhythms, and layers of evolving texture, <em>ID</em> balances tension and release with Slow Loris’s characteristic blend of post-metal weight and electronic experimentation. What begins as a meditative journey gradually gathers momentum, culminating in a crushing closing riff that lingers long after the final note fades.
    </p>

    <p className="text-base leading-relaxed font-medium">
      Accompanying the single is an exclusive remix by Manchester electronic artist <strong>Dom Hz</strong>, who reimagines the track through an IDM lens. Fragmented rhythms, intricate programming, and shimmering synthetic textures transform the source material into a compelling companion piece, offering a fresh perspective on the themes and atmosphere of the original composition.
    </p>

    <p className="text-base leading-relaxed font-medium">
      Both versions are accompanied by dedicated visualiser videos on YouTube. The original track features visuals created by <strong>Chris Sellers (LostNoris)</strong>, while the remix is paired with its own bespoke visual experience produced by <strong>Dom Hz</strong>, extending the sonic identities of each version into the visual realm.
    </p>

    <p className="text-base leading-relaxed font-medium">
      <em>ID</em> and the <em>Dom Hz Remix</em> are available now on all major streaming platforms, presenting two distinct interpretations of the same composition and offering another glimpse into the evolving world of Slow Loris.
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
    <img src={art} alt="pic" className="w-full sm:w-100 border-1 border-zinc-700 rounded-sm" />
    <br /> 

<h2 className="text-xl font-bold mb-2 text-white">Slow Loris – ID</h2>
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
      src="https://www.youtube.com/embed/Q20aTqvKlVo?si=1DdsgsAL2NJLBqMO"
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
