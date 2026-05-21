import type { Metadata, Viewport } from "next";
import { Inter, Archivo } from "next/font/google";
import { business, areas } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "Plumber in Milton Keynes | BD Plumbing & Heating Services",
  description:
    "Looking for a plumber in Milton Keynes? BD Plumbing & Heating Services covers boiler repairs, installations, central heating, bathrooms and 24/7 emergency plumbing. Call 07472 792722.",
  keywords: [
    "plumber Milton Keynes",
    "plumbing services Milton Keynes",
    "emergency plumber Milton Keynes",
    "boiler repair Milton Keynes",
    "boiler installation Milton Keynes",
    "central heating Milton Keynes",
    "bathroom installation Milton Keynes",
    "landlord gas safety certificate Milton Keynes",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: business.url,
    siteName: business.name,
    title: "Plumber in Milton Keynes | BD Plumbing & Heating Services",
    description:
      "Plumber covering Milton Keynes. Boiler repairs, installations, central heating, bathrooms and 24/7 emergency call-outs. Call 07472 792722.",
    images: [
      {
        url: "/images/bathroom-grey.jpeg",
        width: 1200,
        height: 800,
        alt: "Plumbing and heating work in Milton Keynes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumber in Milton Keynes | BD Plumbing & Heating Services",
    description:
      "Plumber covering Milton Keynes. Boiler repairs, installations, central heating and 24/7 emergency call-outs.",
    images: ["/images/bathroom-grey.jpeg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#102f3a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": `${business.url}/#business`,
  name: business.name,
  description:
    "Plumber and heating engineer serving Milton Keynes: boiler repairs and installations, central heating, bathrooms and 24/7 emergency plumbing.",
  url: business.url,
  telephone: "+447472792722",
  email: business.email,
  image: `${business.url}/images/central-heating.jpeg`,
  priceRange: "££",
  foundingDate: String(business.since),
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.0406,
    longitude: -0.7594,
  },
  areaServed: areas.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: String(business.reviewCount),
    bestRating: "5",
  },
  slogan: "Your local plumber in Milton Keynes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${archivo.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
