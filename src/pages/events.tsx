import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Socials from "../socialbuttons";
import logo from "../assets/logo.webp";
import rust from "../assets/grey-rust.webp";

export default function Landing() {
  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <title>Slow Loris | Experimental Alt-Rock Band</title>
        <meta
          name="description"
          content="Slow Loris is an experimental alternative rock band from Leeds. 
          Listen now on Spotify, Bandcamp, and YouTube, or grab merch from our official site."
        />
        <link rel="canonical" href="https://slowlor.is/" />

        {/* Bandsintown widget script */}
        <script
          src="https://widgetv3.bandsintown.com/main.min.js"
          charSet="utf-8"
        />
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

        {/* Footer links */}
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
          <Link
            to="https://slowloris.bandcamp.com/merch"
            className="text-orange-500 underline hover:text-orange-300"
          >
            Merch
          </Link>
          <Link to="/events" className="text-orange-500 underline hover:text-orange-300">
            Events
          </Link>
        </footer>

        <div className="w-full max-w-3xl mx-auto my-8">
  <Card className="bg-zinc-900 border border-zinc-700 shadow-xl rounded-2xl p-6">
    <a className="bit-widget-initializer"
    
	data-artist-name="id_15587270"
	
	data-events-to-display=""
	data-background-color="rgba(0,0,0,1)"
	data-separator-color="rgba(255,255,255,1)"
	data-text-color="rgba(173,173,173,1)"
	data-font="Arial"
	data-auto-style="true"
	
	data-button-label-capitalization="uppercase"
	data-header-capitalization="uppercase"
	data-location-capitalization="capitalize"
	data-venue-capitalization="capitalize"
	data-display-local-dates="true"
	data-local-dates-position="tab"
	data-display-past-dates="false"
	data-display-details="false"
	data-display-lineup="false"
	data-display-start-time="false"
	data-social-share-icon="false"
	data-display-limit="all"
	
	data-date-format="MMM. D, YYYY"
	data-date-orientation="horizontal"
	data-date-border-color="#4A4A4A"
	data-date-border-width="1px"
	data-date-capitalization="capitalize"
	data-date-border-radius="10px"
	
	data-event-ticket-cta-size="medium"
	data-event-custom-ticket-text=""
	data-event-ticket-text="BUY TICKETS"
	data-event-ticket-icon="false"
	data-event-ticket-cta-text-color="rgba(255,255,255,1)"
	data-event-ticket-cta-bg-color="rgba(74,74,74,1)"
	data-event-ticket-cta-border-color="rgba(74,74,74,1)"
	data-event-ticket-cta-border-width="0px"
	data-event-ticket-cta-border-radius="2px"
	
	data-sold-out-button-text-color="rgba(255,255,255,1)"
	data-sold-out-button-background-color="rgba(74,74,74,1)"
	data-sold-out-button-border-color="rgba(74,74,74,1)"
	data-sold-out-button-clickable="true"
	
	data-event-rsvp-position="left"
	data-event-rsvp-cta-size="medium"
	data-event-rsvp-only-show-icon="false"
	data-event-rsvp-text="RSVP"
	data-event-rsvp-icon="false"
	data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
	data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
	data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
	data-event-rsvp-cta-border-width="1px"
	data-event-rsvp-cta-border-radius="2px"
	
	data-follow-section-position="top"
	data-follow-section-alignment="center"
	data-follow-section-header-text="Live Shows"
	data-follow-section-cta-size="medium"
	data-follow-section-cta-text="FOLLOW"
	data-follow-section-cta-icon="false"
	data-follow-section-cta-text-color="rgba(255,255,255,1)"
	data-follow-section-cta-bg-color="rgba(74,74,74,1)"
	data-follow-section-cta-border-color="rgba(74,74,74,1)"
	data-follow-section-cta-border-width="0px"
	data-follow-section-cta-border-radius="2px"
	
	data-play-my-city-position="bottom"
	data-play-my-city-alignment="center"
	data-play-my-city-header-text="Don’t see a show near you?"
	data-play-my-city-cta-size="medium"
	data-play-my-city-cta-text="REQUEST A SHOW"
	data-play-my-city-cta-icon="false"
	data-play-my-city-cta-text-color="rgba(255,255,255,1)"
	data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
	data-play-my-city-cta-border-color="rgba(74,74,74,1)"
	data-play-my-city-cta-border-width="0px"
	data-play-my-city-cta-border-radius="2px"
	
	data-optin-font=""
	data-optin-text-color=""
	data-optin-bg-color=""
	data-optin-cta-text-color=""
	data-optin-cta-bg-color=""
	data-optin-cta-border-width=""
	data-optin-cta-border-radius=""
	data-optin-cta-border-color=""
	
	data-language="en"
	data-layout-breakpoint="900"
	data-app-id=""
	data-affil-code=""
	data-bit-logo-position="bottomRight"
	data-bit-logo-color="rgba(173,173,173,1)"
	
    ></a>
  </Card>
</div>


        <Socials />
        <br />

        <main className="flex flex-1 flex-col items-center justify-center w-full px-6 text-center">
          <Card
            className="bg-zinc-500 border-zinc-700 max-w-xl shadow-xl rounded-2xl mx-auto"
            style={{
              backgroundImage: `url(${rust})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <CardContent className="p-4">
              <h2 className="text-xl text-white font-semibold mb-2">
                Join the Slow Loris mailing list
              </h2>
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
