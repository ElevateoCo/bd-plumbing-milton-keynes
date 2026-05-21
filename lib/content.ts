// All editable business content for the BD Plumbing & Heating Services demo site.
// Phone is the real number from the Google Business listing.
// Email is a placeholder for the demo; swap before launch.

export const business = {
  name: "BD Plumbing & Heating Services",
  shortName: "BD Plumbing & Heating",
  city: "Milton Keynes",
  region: "Buckinghamshire",
  phoneDisplay: "07472 792722",
  phoneHref: "tel:+447472792722",
  email: "info@bdplumbingmk.co.uk",
  since: 2016,
  rating: "5.0",
  reviewCount: 47,
  url: "https://bdplumbingmk.co.uk",
};

export const hours = [
  { day: "Monday to Friday", time: "8:00am to 6:00pm" },
  { day: "Saturday", time: "9:00am to 4:00pm" },
  { day: "Sunday", time: "Emergency call-outs only" },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "boiler-installation",
    icon: "Flame",
    title: "Boiler Installation",
    description:
      "Supply and fit of A-rated combi, system and conventional boilers, with smart controls and a tidy, fully certified installation.",
    image: "/images/central-heating.jpeg",
    alt: "New boiler installation in a Milton Keynes home",
  },
  {
    id: "boiler-repair",
    icon: "Wrench",
    title: "Boiler Repair & Servicing",
    description:
      "Fast fault finding, repairs and annual boiler servicing across Milton Keynes to keep your heating safe and running well.",
    image: "/images/magnaclean-pump.jpeg",
    alt: "Boiler servicing and repair work in Milton Keynes",
  },
  {
    id: "central-heating",
    icon: "Droplets",
    title: "Central Heating",
    description:
      "Full central heating installs, power flushing, radiator upgrades and hot water cylinders for warmer, cheaper-to-run homes.",
    image: "/images/twin-cylinders.jpeg",
    alt: "Central heating cylinders installed in Milton Keynes",
  },
  {
    id: "bathroom-installation",
    icon: "ShowerHead",
    title: "Bathroom Installation",
    description:
      "Complete bathroom fitting: showers, suites, taps and tiling, finished to a high standard by your local plumber.",
    image: "/images/bathroom-grey.jpeg",
    alt: "Modern bathroom installation in Milton Keynes",
  },
  {
    id: "emergency-plumbing",
    icon: "Siren",
    title: "Emergency Plumbing",
    description:
      "Burst pipes, leaks and blockages handled fast, with 24/7 emergency call-outs right across Milton Keynes.",
    image: "/images/soil-stack.jpeg",
    alt: "Emergency plumbing and leak repair in Milton Keynes",
  },
  {
    id: "gas-safety",
    icon: "FileCheck",
    title: "Landlord Gas Safety (CP12)",
    description:
      "Landlord safety checks and CP12 certificates, booked quickly to keep your Milton Keynes rental compliant.",
    image: "/images/manifold-valves.jpeg",
    alt: "Landlord gas safety certificate inspection in Milton Keynes",
  },
];

export type Value = { icon: string; title: string; text: string };

export const values: Value[] = [
  {
    icon: "MapPin",
    title: "Milton Keynes Based",
    text: "A local team that knows the area and reaches you quickly across MK.",
  },
  {
    icon: "Wrench",
    title: "Experienced Engineers",
    text: "Years of hands-on plumbing and heating work behind every job.",
  },
  {
    icon: "PoundSterling",
    title: "Upfront Fixed Pricing",
    text: "Clear, honest quotes before we start. No hidden fees, ever.",
  },
  {
    icon: "Clock",
    title: "Fast Response",
    text: "Same-day appointments and round-the-clock cover for emergencies.",
  },
  {
    icon: "Sparkles",
    title: "Tidy & Respectful",
    text: "We protect your home and clean up fully after every job.",
  },
  {
    icon: "BadgeCheck",
    title: "Work Guaranteed",
    text: "Every job is backed by our workmanship and satisfaction guarantee.",
  },
];

export const stats = [
  { value: "9+", label: "Years working across Milton Keynes" },
  { value: "1,000+", label: "Local jobs completed" },
  { value: "5.0", label: "Average customer rating" },
  { value: "24/7", label: "Emergency call-out cover" },
];

export const areas = [
  "Central Milton Keynes",
  "Bletchley",
  "Wolverton",
  "Stony Stratford",
  "Newport Pagnell",
  "Woburn Sands",
  "Walnut Tree",
  "Kingston",
  "Wavendon",
  "Furzton",
  "Shenley Brook End",
  "Westcroft",
  "Bradwell",
  "Great Linford",
  "Broughton",
  "Olney",
];

export type Review = { name: string; area: string; text: string };

export const reviews: Review[] = [
  {
    name: "James T.",
    area: "Bletchley",
    text: "Our boiler packed in overnight and BD had us back up and running by lunchtime. Honest, tidy and fairly priced. Exactly what you want from a plumber.",
  },
  {
    name: "Priya S.",
    area: "Stony Stratford",
    text: "Booked a full bathroom installation and the work is brilliant. They kept everything clean and on schedule. Easily the best plumber in Milton Keynes.",
  },
  {
    name: "Mark D.",
    area: "Newport Pagnell",
    text: "Quick response for a burst pipe on a Sunday. Calm, professional and sorted it fast. I would not call anyone else now.",
  },
];

export const serviceOptions = [
  "Boiler Installation",
  "Boiler Repair & Servicing",
  "Central Heating",
  "Bathroom Installation",
  "Emergency Plumbing",
  "Landlord Gas Safety (CP12)",
  "Something else",
];
