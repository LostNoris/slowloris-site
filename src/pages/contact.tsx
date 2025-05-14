import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom"
import Socials from '../socialbuttons';
import logo from '../assets/logo.png'
import rust from '../assets/grey-rust.webp'

export default function Contact() {
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

    <main className="flex flex-1 flex-col items-center justify-center w-full px-6 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Contact</h1>
    <Card
      className="bg-zinc-500 border border-zinc-700 max-w-xl shadow-xl rounded-2xl mx-auto my-8"
      style={{
        backgroundImage: `url(${rust})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <CardContent className="p-6">
    
        <div className="text-left text-white space-y-3 text-base leading-relaxed">
          <p>
            <strong>General enquiries:</strong><br />
            <a href="mailto:info@slowlor.is" className="underline hover:text-orange-600">
              info@slowlor.is
            </a>
          </p>
          <p>
            <strong>Bookings and booking enquiries:</strong><br />
            <a href="mailto:bookings@slowlor.is" className="underline hover:text-orange-600">
              bookings@slowlor.is
            </a>
          </p>
          <p>
            <strong>Press and interviews:</strong><br />
            <a href="mailto:press@slowlor.is" className="underline hover:text-orange-600">
              press@slowlor.is
            </a>
          </p>
          <p>
            You can also reach us on social media via Instagram or Facebook:<br />
            <span className="font-medium">@slowlorisUK</span>
          </p>
        </div>
      </CardContent>
    </Card>
  
  <br/>

  </main>

  <Socials />

      <footer className="text-sm text-white p-4 text-center border-t border-zinc-700 mt-12">
        &copy; {new Date().getFullYear()} slowlor.is — All rights reserved.
      </footer>

  </div>
  </div>
);
}