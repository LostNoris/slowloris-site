import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom"
import Socials from '../socialbuttons';
import logo from '../assets/logo.webp'
import rust from '../assets/grey-rust.webp'
import Stage from '../assets/stage.png'
import { Helmet } from "react-helmet-async";

export default function Bio() {
  return (
   <div className="min-h-screen w-full">
<Helmet>
<title>Slow Loris | Biography Page</title>
<meta name="description" content="Read the biography of experimental alt-rock band Slow Loris." />
<link rel="canonical" href="https://slowlor.is/bio" />
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

    <main className="flex flex-1 flex-col items-center justify-center w-full px-6 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Bio.</h1>
        <br />
 <Card className="bg-zinc-500 border-zinc-700 w-full max-w-[20rem] sm:max-w-md md:max-w-xl lg:max-w-2xl shadow-xl rounded-2xl mx-auto"
  style={{
    backgroundImage: `url(${rust})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }}>
<CardContent className="p-6">
    <div className="flex flex-col text-left text-white space-y-4">
      <p className="text-base leading-relaxed font-medium">
        <strong>Slow Loris</strong> are an experimental rock four-piece based between Leeds and Manchester. They fuse jagged alt-rock, modern progressive structures, nu-metal weight, and electronic textures into intense instrumental journeys. Their music balances cinematic ambition with raw energy, landing somewhere between the mathier end of post-rock and the visceral pulse of the UK underground.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Their debut album <strong>Selling Shotguns</strong> is rolling out, beginning with the title track and followed by <strong>Six One Nine</strong> and the feral single <strong>Bees Rude</strong>. Next up is <strong>Faithless</strong>, arriving on 10.10. A deep, moody cut that explores the full range of Slow Loris’s textural gauntlet, fierce and packed with emotion.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Since forming, Slow Loris have made their mark across the UK’s alternative scenes, performing alongside acts like Waldo's Gift, No Violet, Petrol Girls, Yaatri, Bicurious, Gallops, Delta Sleep, and CLT DRP.
      </p>

      <p className="text-base leading-relaxed font-medium">
        <strong>Slow Loris are</strong> Sam Evans and Sam Lowther on guitars, Chris Sellers on bass, and Theo Goss on drums.
      </p>

      <p className="text-base leading-relaxed font-medium">
        Loud. Weird. Wired. Not to be missed.
      </p>
    </div>
  </CardContent>
</Card>


    <br />

    <img src={Stage} alt="pic" className="w-full sm:w-200 border-1 border-zinc-700 rounded-sm" />

    <br /> 
    </main>

    <Socials />
      <footer className="text-sm text-white p-4 text-center border-t border-zinc-700 mt-12">
        &copy; {new Date().getFullYear()} slowlor.is — All rights reserved.
      </footer>
    </div>
    </div>
  )
}
