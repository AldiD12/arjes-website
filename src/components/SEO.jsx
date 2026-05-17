import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  type = 'website',
  schema
}) => {
  const siteUrl = 'https://arjes.al'; // Update when domain is final
  const siteName = 'Arjes — Private Albania Guide';
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = title ? `${title} | Arjes` : 'Arjes — Your Private Guide to the Real Albania';

  // Default LocalBusiness schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Arjes — Private Albania Guide",
    "description": "Licensed private tour guide offering authentic, curated travel experiences across Albania. Coastal Riviera, Albanian Alps, UNESCO heritage sites, and cultural immersion.",
    "url": siteUrl,
    "telephone": "+355698545440",
    "email": "concierge@arjes.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tirana",
      "addressCountry": "AL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3275,
      "longitude": 19.8187
    },
    "areaServed": {
      "@type": "Country",
      "name": "Albania"
    },
    "priceRange": "€€-€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://wa.me/355698545440"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="de_DE" />
      <meta property="og:locale:alternate" content="sq_AL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="AL" />
      <meta name="geo.placename" content="Tirana, Albania" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
