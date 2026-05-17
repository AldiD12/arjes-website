import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Advantages from '../components/Advantages';
import Experiences from '../components/Experiences';
import Contact from '../components/Contact';

const HomePage = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Arjes — Private Albania Guide",
    "description": "Licensed private tour guide offering authentic, curated travel experiences across Albania. Albanian Riviera, Alps, UNESCO heritage, and cultural immersion tours.",
    "url": "https://arjes.al",
    "email": "concierge@arjes.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tirana",
      "addressCountry": "AL"
    },
    "areaServed": { "@type": "Country", "name": "Albania" },
    "priceRange": "€€-€€€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Albania Tour Collections",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "Coastal Riviera Collection",
            "description": "Secluded coves, stone villas, and the Albanian Riviera at its finest"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "Alpine Adventures Collection",
            "description": "High mountain passes, traditional guesthouses, and the Accursed Mountains"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title={null}
        description="Discover the real Albania with Arjes, your licensed private guide. Curated tours of the Albanian Riviera, Alps, UNESCO sites, and hidden cultural gems. Limited availability each season."
        path="/"
        schema={homeSchema}
      />
      <Hero />
      <About />
      <Advantages />
      <Experiences />
      <Contact />
    </>
  );
};

export default HomePage;
