import spot from './assets/spot-orange.webp';
import insta from './assets/insta-orange.webp';
import bc from './assets/bc-orange.webp';
import yt from './assets/yt-orange.webp';
import fb from './assets/fb-orange.webp';
import sc from './assets/sound-orange.webp';
import { Card, CardContent } from "@/components/ui/card";
import rust from './assets/grey-rust.webp';

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
           
          <footer className="w-full flex flex-wrap justify-center items-center gap-1.25 sm:gap-6 py-1">
            <a href="https://open.spotify.com/artist/60Hk8vFZ6lc4ILjVKneHKl?si=N5ylZolAS_KGM5gaAz28FQ" 
            target="_blank" rel="noopener noreferrer"
            aria-label="Listen to Slow Loris on Spotify">
              <img src={spot} alt="Listen to Slow Loris on Spotify" 
              className="w-12 h-12 sm:w-17 sm:h-17  filter sm:brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://instagram.com/slowlorisuk" target="_blank" rel="noopener noreferrer"
            aria-label="Follow Slow Loris on Instagram">
              <img src={insta} alt="Follow Slow Loris on Instagram" 
              className="w-12 h-12 sm:w-17 sm:h-17  filter sm:brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://slowloris.bandcamp.com" target="_blank" rel="noopener noreferrer"
            aria-label="Buy official Slow Loris merchandise on Bandcamp">
              <img src={bc} alt="Buy official Slow Loris merchandise on Bandcamp" 
              className="w-12 h-12 sm:w-17 sm:h-17  filter sm:brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://youtube.com/@slowlorisuk" target="_blank" rel="noopener noreferrer"
            aria-label="Watch official Slow Loris videos on YouTube">
              <img src={yt} alt="Watch official Slow Loris videos on YouTube" 
              className="w-12 h-12 sm:w-17 sm:h-17  filter sm:brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://facebook.com/slowlorisuk" target="_blank" rel="noopener noreferrer"
            aria-label="Follow Slow Loris on Facebook">
              <img src={fb} alt="Follow Slow Loris on Facebook" 
              className="w-12 h-12 sm:w-17 sm:h-17  filter sm:brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://soundcloud.com/slowlorisuk" target="_blank" rel="noopener noreferrer"
            aria-label="Listen to Slow Loris on Sound Cloud">
              <img src={sc} alt="Listen to Slow Loris on Sound Cloud" 
              className="w-12 h-12 sm:w-17 sm:h-17 filter sm:brightness-70 sm:hover:brightness-100 transition duration-300 transform hover:scale-110" />
            </a>
          </footer>
        </CardContent>
      </Card>
    </main>
  );
}


export default Footer;
