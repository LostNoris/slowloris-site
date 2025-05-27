import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async";
import Socials from '../socialbuttons';
import logo from '../assets/logo.webp'
import rust from '../assets/grey-rust.webp'


export default function Landing() {
  return (
    <div className="min-h-screen w-full">
    <Helmet>
    <title>Slow Loris | Experimental Alt-Rock Band</title>
    <meta name="description" content="Slow Loris is an experimental alternative rock band from Leeds. 
    Listen now on Spotify, Bandcamp, and YouTube, or grab merch from our official site." />
    <link rel="canonical" href="https://slowlor.is/" />
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

      <Socials />
      <br />

    <main className="flex flex-1 flex-col items-center justify-center w-full px-6 text-center">
      <Card
       className="bg-zinc-500 border-zinc-700 max-w-xl shadow-xl rounded-2xl mx-auto"
       style={{
       backgroundImage: `url(${rust})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundBlendMode: 'overlay', // Makes background slightly transparent
       backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add overlay tint if needed
       }}>
       <CardContent className="p-4">
         <h2 className="text-xl text-white font-semibold mb-2">Join the Slow Loris mailing list</h2>
          <form
            action="https://6161f98c2e6911f0bef0e995868b836e.eo.page/sdz66"
            method="post"
            target="_blank"
          >
         <Button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
         >
           Subscribe
        </Button>
          </form>
       </CardContent>
      </Card>

      <br />

  </main>
  <br />
     
      <footer className="text-sm text-white p-4 text-center border-t border-zinc-700 mt-12">
        &copy; {new Date().getFullYear()} slowlor.is — All rights reserved.
      </footer>
    </div>
    </div>
  );
}
