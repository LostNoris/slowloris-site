import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from '../footer';
import art from '../assets/art-grey.png';
import logo from '../assets/logo.png'
import rust from '../assets/grey-rust.png'


export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${art})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <div className="flex flex-col items-center justify-center w-full px-2 text-center">
      <header className="p-6 flex justify-center items-center w-full">
        <h1 className="text-3xl font-bold tracking-tight">
          
        <img src={logo} alt="Logo" 
        className="w-full max-w-xs sm:max-w-sm h-auto filter brightness-100 hover:brightness-100 transition duration-300 transform hover:scale-110"
        />
        </h1>
      </header>

      <Footer />
      <br />

      <main className="flex flex-1 flex-col items-center justify-center w-full px-6 text-center">
       <Card
  className="bg-zinc-500 border-zinc-700 max-w-xl shadow-xl rounded-2xl mx-auto"
  style={{
    backgroundImage: `url(${rust})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay', // Makes background slightly transparent
    backgroundColor: 'rgba(255, 136, 0, 0.6)', // Add overlay tint if needed
  }}
>
  <CardContent className="p-3">
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
    <h2 className="text-xl text-black font-semibold mb-2">
      <br />
      For bookings and enquiries contact <br />
      <a
      href="mailto:info@Slowlor.is"
      className="text-white underline hover:text-orange-100">
      info@slowlor.is
    </a>

    </h2>
  </CardContent>
</Card>

      </main>
     
      <footer className="text-sm text-white p-4 text-center border-t border-zinc-700 mt-12">
        &copy; {new Date().getFullYear()} slowlor.is — All rights reserved.
      </footer>
    </div>
    </div>
  );
}
