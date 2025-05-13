import spot from './assets/spot-orange.png';
import insta from './assets/insta-orange.png';
import bc from './assets/bc-orange.png';
import yt from './assets/yt-orange.png';
import fb from './assets/fb-orange.png';
import { Card, CardContent } from "@/components/ui/card";
import rust from './assets/grey-rust.png';

function Footer() {
  return (
    <main className="flex flex-col items-center justify-center w-full px-2 text-center">
      <Card className="bg-zinc-500 border-zinc-700 w-full max-w-[20rem] sm:max-w-md md:max-w-xl lg:max-w-2xl shadow-xl rounded-2xl mx-auto"
        style={{
    backgroundImage: `url(${rust})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay', // Makes background slightly transparent
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add overlay tint if needed
  }}>
        <CardContent className="p-0">
           
          <footer className="w-full flex flex-wrap justify-center items-center gap-1 sm:gap-6 py-1 sm:py-4">
            <a href="https://open.spotify.com/artist/60Hk8vFZ6lc4ILjVKneHKl?si=N5ylZolAS_KGM5gaAz28FQ" target="_blank" rel="noopener noreferrer">
              <img src={spot} alt="Spotify" 
              className="w-14 h-14 sm:w-20 sm:h-20 filter brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://instagram.com/slowlorisuk" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" 
              className="w-14 h-14 sm:w-20 sm:h-20 filter brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://slowloris.bandcamp.com" target="_blank" rel="noopener noreferrer">
              <img src={bc} alt="Bandcamp" 
              className="w-14 h-14 sm:w-20 sm:h-20 filter brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://youtube.com/@slowlorisuk" target="_blank" rel="noopener noreferrer">
              <img src={yt} alt="YouTube" 
              className="w-14 h-14 sm:w-20 sm:h-20 filter brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://facebook.com/slowlorisuk" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebok" 
              className="w-14 h-14 sm:w-20 sm:h-20 filter brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
          </footer>
        </CardContent>
      </Card>
    </main>
  );
}


export default Footer;
