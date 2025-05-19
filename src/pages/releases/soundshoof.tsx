import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Socials from '../../socialbuttons';
import logo from '../../assets/logo.webp'
import rust from '../../assets/grey-rust.webp'
import Hoof from '../../assets/hoof-art.webp';

export default function SoundsHoof() {
  return (
   <div className="min-h-screen w-full">
    <Helmet>
    <title>Slow Loris | Sounds Hoof</title>
    <meta name="description" content="Find the full releases details and stream the Slow Loris EP Sounds Hoof" />
    <link rel="canonical" href="https://slowlor.is/releases/sounds-hoof" />
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
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Sounds Hoof EP</h1>
        <br />
<Card
  className="bg-zinc-500 border-zinc-700 w-full max-w-[20rem] sm:max-w-md md:max-w-xl lg:max-w-2xl shadow-xl rounded-2xl mx-auto"
  style={{
    backgroundImage: `url(${rust})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay', // Makes background slightly transparent
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add overlay tint if needed
  }}
>
  <CardContent className="p-6">
    <div className="flex flex-col text-left text-white space-y-4">
      <p className="text-base leading-relaxed font-medium">
        <strong>Sounds Hoof</strong> is a compelling 5-track EP released in 2021 by Slow Loris, an innovative artist in the electronic rock and experimental instrumental music scene. This EP takes listeners on a textured journey through a fusion of electronic rock, experimental textures, and instrumental rock, showcasing Slow Loris’s signature sound and sonic identity.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Following two successful singles, <em>Hammer</em>, the energetic opener, and the title track <em>Sounds Hoof</em>, which was accompanied by a psychedelic, cinematic music video; this EP cemented Slow Loris’s reputation for blending pulsing electronic beats with rich, layered harmonies and improvisational elements.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Highlights include the driving rhythms and rich harmonic textures of <em>Loose Handler</em>, the hypnotic experimental house beats in <em>Sounds Hoof</em>, and the captivating group improvisation featured in the closing track, <em>Borm</em>. The full tracklist includes: <em>Hammer</em>, <em>Loose Handler</em>, <em>Spooky House</em>, <em>Sounds Hoof</em>, and <em>Borm</em>.
      </p>

      <p className="text-base leading-relaxed font-medium">
        In May 2025, <strong>Sounds Hoof</strong> will be reissued in limited-edition cassette format, complete with a digital download available exclusively on Bandcamp. This rerelease is perfect for collectors and fans of electronic rock, experimental music, and physical music formats.
      </p>

<p className="text-base leading-relaxed font-medium text-left">
  Learn more about Slow Loris on the <Link to="/bio" 
  className="underline text-orange-500 hover:text-orange-300">artist bio</Link> page, or <Link to="/contact" 
  className="underline text-orange-500 hover:text-orange-300">get in touch</Link> for press and booking inquiries.
  <br/>
<a
  href="https://slowloris.bandcamp.com"
  target="_blank"
  rel="noopener noreferrer"
  className="underline text-orange-500 hover:text-orange-300"
>
  Buy the cassette on Bandcamp
</a>
</p>

    </div>

  </CardContent>
</Card>


    <br />
    <img src={Hoof} alt="pic" className="w-full sm:w-200 border-1 border-zinc-700 rounded-sm" />
    <br /> 

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
