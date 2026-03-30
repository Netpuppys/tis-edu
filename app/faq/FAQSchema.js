"use client";
import Script from "next/script";

export default function FAQSchema({ faqData }) {
  if (!faqData?.length) return null;

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer.replace(/<[^>]*>?/gm, ""),
            },
          })),
        }),
      }}
    />
  );
}