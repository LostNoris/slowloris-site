import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Socials from '../../socialbuttons';
import logo from '../../assets/logo.webp';

export default function SoundsHoofWatch() {
  return (
    <div className="min-h-screen w-full bg-none text-white">
      <Helmet>
        <title>Slow Loris | Sounds Hoof (Official Video)</title>
        <meta name="description" content="Watch the official video for 'Sounds Hoof' by Slow Loris. Now streaming on YouTube." />
        <link rel="canonical" href="https://slowlor.is/watch/sounds-hoof" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "@id": "https://slowlor.is/watch/sounds-hoof",
            "name": "Sounds Hoof (Official Video)",
            "description": "Watch the official video for 'Sounds Hoof' by Slow Loris. Now streaming on YouTube.",
            "thumbnailUrl": "https://i.ytimg.com/vi/MSPdHplI-Mk/maxresdefault.jpg",
            "uploadDate": "2020-04-10",
            "duration": "PT4M59S",
            "contentUrl": "https://slowlor.is/watch/sounds-hoof",
            "embedUrl": "https://www.youtube.com/embed/MSPdHplI-Mk",
            "url": "https://www.youtube.com/watch?v=MSPdHplI-Mk",
            "publisher": {
              "@type": "Organization",
              "name": "Slow Loris",
              "url": "https://slowlor.is",
              "logo": {
                "@type": "ImageObject",
                "url": "https://slowlor.is/SLicon.png"
              }
            }
          }`}
        </script>
      </Helmet>

      <header className="p-6 flex justify-center items-center w-full">
        <h1 className="text-3xl font-bold tracking-tight">
          <Link to="/">
            <img
              src={logo}
              alt="Slow Loris Logo"
              className="w-full max-w-xs sm:max-w-sm h-auto hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Sounds Hoof – Official Video</h2>

        <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-4xl" style={{ paddingBottom: '56.25%' }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <iframe
              className="w-full h-full rounded-md border border-zinc-700"
              src="https://www.youtube.com/embed/MSPdHplI-Mk?si=afSBktvJsd7UEKAh"
              title="Sounds Hoof - Official Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-sm text-zinc-400 mt-4">Released January 1, 2021 — Available on all streaming platforms.</p>

        <div className="mt-6">
          <Link to="/releases/sounds-hoof" className="text-orange-500 underline hover:text-orange-300">
            ← Full release details
          </Link>
        </div>
      </main>

      <Socials />

      <footer className="text-sm text-white p-4 text-center border-t border-zinc-700 mt-12">
        &copy; {new Date().getFullYear()} slowlor.is — All rights reserved.
      </footer>
    </div>
  );
}
