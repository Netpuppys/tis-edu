export default function Head() {
  return (
    <>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat&family=Bree+Serif&family=Pacifico&display=swap"
        rel="stylesheet"
      />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: "Tula's International School",
            alternateName: "TIS",
            url: "https://tis.edu.in/",
            logo: "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "0135-2699666",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["en", "Hindi"],
              },
              {
                "@type": "ContactPoint",
                telephone: "+91-9837983791",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["en", "Hindi"],
              },
            ],
            sameAs: [
              "https://www.facebook.com/tulasinternationalschool",
              "https://www.instagram.com/tulasinternationalschool",
              "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
              "https://www.linkedin.com/in/tulasinternationalschool/",
              "https://x.com/Tulas_IntSchool",
            ],
          }),
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tula's International School",
            image:
              "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png",
            url: "https://tis.edu.in/",
            telephone: "0135-2699444",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Tula's International School, Dhoolkot, P.O –Selaqui, Chakrata Road, Dehradun",
              postalCode: "248011",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </>
  );
}
