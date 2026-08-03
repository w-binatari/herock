export type NewsImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "figure"; src: string; alt: string; caption?: string }
  | { type: "gallery"; images: NewsImage[] }
  | {
      type: "facts";
      items: { label: string; value: string }[];
    };

export type NewsArticle = {
  slug: string;
  title: string;
  badge: string;
  oneLiner: string;
  excerpt: string;
  dateLabel: string;
  publishedLabel: string;
  eventDate: string;
  eventVenue: string;
  coverImage: string;
  coverCaption: string;
  productImages: NewsImage[];
  eventImages: NewsImage[];
  presentationImages: NewsImage[];
  prizes: { place: string; amount: string }[];
  blocks: ArticleBlock[];
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
    publishedLabel: "24 June 2026",
    eventDate: "Wednesday, 24 June 2026",
    eventVenue: "Balmoral Convention Centre, Sheraton, Ikeja, Lagos",
    coverImage: "/news/nae-2026/event-4.jpg",
    coverCaption:
      "Recognition at the Nigerian Academy of Engineering Awards Night, Ikeja, Lagos.",
    productImages: [
      {
        src: "/news/nae-2026/product-1.jpg",
        alt: "Chicken feather biosorbent pillows with mesh casing",
        caption: "CFOP biosorbent pillows — mesh casing over a fibrous feather core.",
      },
      {
        src: "/news/nae-2026/product-2.jpg",
        alt: "Stacked chicken feather absorbent pads",
        caption: "Processed feather mats ready for pillow assembly.",
      },
      {
        src: "/news/nae-2026/product-3.jpg",
        alt: "Biosorbent pillows and mats on display",
        caption: "Pillows and mats prepared for demonstration.",
      },
    ],
    eventImages: [
      {
        src: "/news/nae-2026/event-1.jpg",
        alt: "Herock Envirotech at The Real MVPs photo frame",
        caption: "Celebrating the moment in the NAE “Real MVPs” frame.",
      },
      {
        src: "/news/nae-2026/event-2.jpg",
        alt: "Team member at NAE 2026 Apex Events backdrop",
        caption: "On the NAE 2026 Apex Events backdrop.",
      },
      {
        src: "/news/nae-2026/event-3.jpg",
        alt: "Group photo in the Real MVPs frame at NAE",
        caption: "With peers and partners at the Academy’s Apex Events.",
      },
      {
        src: "/news/nae-2026/event-4.jpg",
        alt: "Handshake at the Nigerian Academy of Engineering awards night",
        caption: "Awards Night recognition — Balmoral Convention Centre, Ikeja.",
      },
    ],
    presentationImages: [
      {
        src: "/news/nae-2026/presentation-1.jpg",
        alt: "Presenting Oil Absorbent Pillows at the Herock booth",
        caption: "Walking visitors through the First Response Kit and SDG alignment.",
      },
      {
        src: "/news/nae-2026/presentation-2.jpg",
        alt: "Herock Envirotech booth with Oil Absorbent Pillows banner",
        caption: "The Herock Envirotech exhibition booth at the competition.",
      },
      {
        src: "/news/nae-2026/presentation-3.jpg",
        alt: "Herock Envirotech with APWEN Lagos members",
        caption: "Encouragement from APWEN Lagos Chapter and fellow engineers.",
      },
      {
        src: "/news/nae-2026/presentation-4.jpg",
        alt: "Team and guests at the NAE Apex Events banner",
        caption: "Standing with guests at the Nigerian Academy of Engineering.",
      },
    ],
    prizes: [
      { place: "First Prize", amount: "₦12M" },
      { place: "Second", amount: "₦6M" },
      { place: "Third", amount: "₦3M" },
    ],
    blocks: [
      {
        type: "p",
        text: "Herock Envirotech’s Chicken Feather-Based Biosorbent Pillows for Sustainable Oil Spill Remediation has been shortlisted among the top 8 finalists in the Nigerian Academy of Engineering (NAE) 3rd National Innovation Competition. From 108 applicants nationwide, only eight projects advanced to the final stage — and Herock’s team left with a Certificate of Merit from the Academy.",
      },
      {
        type: "p",
        text: "Turning chicken feathers into a solution for Nigeria’s oil spill crisis is no longer just a laboratory idea. At the NAE Apex Events in Lagos, the Chicken Feather Oil Pillow (CFOP) stood among the country’s strongest home-grown engineering innovations.",
      },
      {
        type: "figure",
        src: "/news/nae-2026/event-2.jpg",
        alt: "Herock Envirotech at NAE 2026 Apex Events",
        caption:
          "Representing Herock Envirotech at the Nigerian Academy of Engineering 2026 Apex Events.",
      },
      { type: "h2", text: "The innovation behind the pillows" },
      {
        type: "p",
        text: "CFOP converts poultry feather waste into high-performance, biodegradable oil sorbents. The keratin-rich fibres bind hydrocarbons while repelling water — a practical answer to two Nigerian challenges at once: agricultural waste management and oil spill remediation across the blue economy.",
      },
      {
        type: "p",
        text: "Packaged as absorbent pillows and first-response kits, the product is designed for rapid deployment by operators, agencies, and communities dealing with fuel, lubricant, and crude spills.",
      },
      {
        type: "gallery",
        images: [
          {
            src: "/news/nae-2026/product-1.jpg",
            alt: "Chicken feather biosorbent pillows",
            caption: "Mesh-cased biosorbent pillows.",
          },
          {
            src: "/news/nae-2026/product-2.jpg",
            alt: "Processed feather absorbent mats",
            caption: "Processed feather mats.",
          },
          {
            src: "/news/nae-2026/product-3.jpg",
            alt: "Pillows prepared for demonstration",
            caption: "Ready for demonstration.",
          },
        ],
      },
      { type: "h2", text: "On the exhibition floor" },
      {
        type: "p",
        text: "At the competition exhibition, the Herock booth put the product in visitors’ hands — pillows, mats, and the First Response Kit — alongside clear messaging on hydrophobic behaviour, industrial durability, and alignment with UN Sustainable Development Goals.",
      },
      {
        type: "figure",
        src: "/news/nae-2026/presentation-1.jpg",
        alt: "Presenting CFOP at the Herock Envirotech booth",
        caption:
          "Presenting Oil Absorbent Pillows and the First Response Kit at the Herock Envirotech booth.",
      },
      {
        type: "figure",
        src: "/news/nae-2026/presentation-2.jpg",
        alt: "Herock Envirotech exhibition booth",
        caption:
          "The Herock Envirotech stand — Oil Absorbent Pillows for oil spill first response.",
      },
      {
        type: "p",
        text: "Judges, fellows, and guests stopped by to examine the materials and hear how agricultural by-products can become a tool for environmental remediation. The Association of Professional Women Engineers of Nigeria (APWEN) Lagos Chapter was among those who came to encourage the team.",
      },
      {
        type: "gallery",
        images: [
          {
            src: "/news/nae-2026/presentation-3.jpg",
            alt: "With APWEN Lagos and fellow engineers",
            caption: "With APWEN Lagos Chapter and fellow engineers.",
          },
          {
            src: "/news/nae-2026/presentation-4.jpg",
            alt: "Team and guests at NAE Apex Events",
            caption: "With guests at the Academy’s Apex Events.",
          },
        ],
      },
      { type: "h2", text: "Award Night in Lagos" },
      {
        type: "p",
        text: "Final rankings were announced at the NAE Annual Dinner & Award Night on Wednesday, 24 June 2026 at the Balmoral Convention Centre, Sheraton, Ikeja, Lagos. The evening celebrated innovators building solutions for Nigeria — one project at a time.",
      },
      {
        type: "figure",
        src: "/news/nae-2026/event-4.jpg",
        alt: "Handshake at NAE Awards Night",
        caption:
          "Awards Night at Balmoral Convention Centre — recognition for the Chicken Feather Oil Pillow team.",
      },
      {
        type: "p",
        text: "Herock Envirotech received a Certificate of Merit and a commitment of continued support to further advance the product. The competition’s prize pool underscored the Academy’s investment in home-grown engineering: First Prize ₦12M, Second ₦6M, and Third ₦3M.",
      },
      {
        type: "gallery",
        images: [
          {
            src: "/news/nae-2026/event-1.jpg",
            alt: "Real MVPs frame at NAE",
            caption: "“The Real MVPs” — Nigerian Academy of Engineering.",
          },
          {
            src: "/news/nae-2026/event-3.jpg",
            alt: "Group in the Real MVPs frame",
            caption: "Celebrating with peers at Apex Events.",
          },
        ],
      },
      {
        type: "quote",
        text: "Turning chicken feathers into a solution for Nigeria's oil spill crisis.",
      },
      { type: "h2", text: "What comes next" },
      {
        type: "p",
        text: "For Herock Envirotech, Top 8 finalist status and the Certificate of Merit mark a national milestone: proof that locally driven environmental innovation belongs on Nigeria’s engineering stage. The team continues advancing CFOP toward wider deployment — protecting waterways, valuing agricultural waste, and building Africa’s circular economy through science.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

export const featuredArticle = newsArticles[0];
