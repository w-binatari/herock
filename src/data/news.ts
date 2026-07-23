export type NewsImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  badge: string;
  oneLiner: string;
  excerpt: string;
  dateLabel: string;
  eventDate: string;
  eventVenue: string;
  coverImage: string;
  productImages: NewsImage[];
  eventImages: NewsImage[];
  presentationImages: NewsImage[];
  prizes: { place: string; amount: string }[];
  body: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "nae-top-8-finalist",
    title:
      "Herock Envirotech Makes Top 8 at Nigerian Academy of Engineering Innovation Competition",
    badge: "Top 8 Finalist – NAE National Innovation Competition 2026",
    oneLiner:
      "Turning chicken feathers into a solution for Nigeria's oil spill crisis.",
    excerpt:
      "Herock Envirotech's Chicken Feather-Based Biosorbent Pillows for Sustainable Oil Spill Remediation was shortlisted among the top 8 finalists in the Nigerian Academy of Engineering (NAE) 3rd National Innovation Competition — and earned a Certificate of Merit from the Academy.",
    dateLabel: "June 2026",
    eventDate: "Wednesday, 24 June 2026",
    eventVenue: "Balmoral Convention Centre, Sheraton, Ikeja, Lagos",
    coverImage: "/news/nae-2026/product-2.jpg",
    productImages: [
      {
        src: "/news/nae-2026/product-1.jpg",
        alt: "Chicken feather biosorbent pillows with mesh casing",
        caption: "CFOP biosorbent pillows — mesh casing, fibrous feather core",
      },
      {
        src: "/news/nae-2026/product-2.jpg",
        alt: "Stacked chicken feather absorbent pads",
        caption: "Processed feather mats ready for pillow assembly",
      },
      {
        src: "/news/nae-2026/product-3.jpg",
        alt: "Biosorbent pillows and mats on display",
        caption: "Pillows, mats, and packaged units at the competition booth",
      },
    ],
    eventImages: [
      {
        src: "/news/nae-2026/event-1.jpg",
        alt: "Herock Envirotech at The Real MVPs photo frame",
      },
      {
        src: "/news/nae-2026/event-2.jpg",
        alt: "Team member at NAE 2026 Apex Events backdrop",
      },
      {
        src: "/news/nae-2026/event-3.jpg",
        alt: "Herock Envirotech representative at NAE Apex Events",
      },
      {
        src: "/news/nae-2026/event-4.jpg",
        alt: "Handshake at the Nigerian Academy of Engineering dinner",
        caption: "Recognition moment at the Academy of Engineering gathering",
      },
    ],
    presentationImages: [
      {
        src: "/news/nae-2026/presentation-1.jpg",
        alt: "Presenting CFOP pillows to distinguished guests",
      },
      {
        src: "/news/nae-2026/presentation-2.jpg",
        alt: "Media interview at the Herock Envirotech booth",
      },
      {
        src: "/news/nae-2026/presentation-3.jpg",
        alt: "Interview about chicken feather biosorbent pillows",
      },
      {
        src: "/news/nae-2026/presentation-4.jpg",
        alt: "Explaining Oil Absorbent Pillows to competition visitors",
      },
      {
        src: "/news/nae-2026/presentation-5.jpg",
        alt: "Herock Envirotech booth presentation at NAE competition",
      },
      {
        src: "/news/nae-2026/presentation-6.jpg",
        alt: "Team and partners at the Herock Envirotech exhibition booth",
      },
      {
        src: "/news/nae-2026/presentation-7.jpg",
        alt: "Product demonstration with biosorbent pillows at the booth",
      },
    ],
    prizes: [
      { place: "First Prize", amount: "₦12M" },
      { place: "Second", amount: "₦6M" },
      { place: "Third", amount: "₦3M" },
    ],
    body: [
      "Herock Envirotech's Chicken Feather-Based Biosorbent Pillows for Sustainable Oil Spill Remediation was shortlisted among the top 8 finalists in the Nigerian Academy of Engineering (NAE) 3rd National Innovation Competition. From 108 applicants nationwide, only eight projects advanced to the final stage.",
      "The innovation converts poultry feather waste into high-performance, biodegradable oil sorbents — addressing agricultural waste and oil spill remediation in one circular solution tailored to Nigeria's blue economy.",
      "At the NAE Annual Dinner & Award Night on Wednesday, 24 June 2026 at the Balmoral Convention Centre, Sheraton, Ikeja, Lagos, the team was recognised with a Certificate of Merit and a commitment of continued support to further advance the product.",
      "The competition prize pool included First Prize of ₦12M, Second of ₦6M, and Third of ₦3M — celebrating home-grown engineering solutions to Nigeria's most pressing challenges.",
    ],
  },
];

export function getArticle(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

export const featuredArticle = newsArticles[0];
