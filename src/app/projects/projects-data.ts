export type Category = "SMEs" | "Large Enterprises" | "Cities";

export type ProjectColor =
  | "yellow"
  | "green"
  | "red"
  | "blue"
  | "gray"
  | "keune_umber"
  | "crouse_blue"
  | "raad_green"
  | "companies_red"
  | "aseh_gray"
  | "darasiab_green";

export interface ProjectSection1 {
  color: ProjectColor;
  clientName: string;
  // clientDescription: string;
  problem: string;
  communityLedSolution: string;
  prototype: string;
  // designatedGroup: string;
  target: string;
}

export interface ProjectSection2 {
  clientName: string;
  clientLogo: string;
  clientDepartment: string;
  clientDepartmentLogo: string;
  bloompointLogo: string;
  bloompointDepartment: string;
  bloompointClsTitle: string;
  blueprintLogo: string;
  blueprintTitle: string;
  blueprintDescription: string[];
  goalTitle: string;
  goalDescription: string[];
}

export interface ProjectSection3 {
  pdfUrl: string;
  pdfTitle: string;
}

export interface Project {
  id: string;
  name: string;
  category: Category;
  image: string;
  tagline: string;
  slug: string;
  section1?: ProjectSection1;
  section2?: ProjectSection2;
  section3?: ProjectSection3;
}

export const categories: Category[] = ["SMEs", "Large Enterprises", "Cities"];

export const projects: Project[] = [
  // SMEs (7)
  {
    id: "1",
    name: `Keune Care Ecosystem`,
    category: "SMEs",
    image: "/projects/sme-1.jpg",
    tagline: "community-wellbeing",
    slug: "keune-care",
    section1: {
      color: "keune_umber",
      clientName: "KEUNE Care",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `• Low Retention
                • Low Basket Confidence
                • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `• B2C Haircare Consultancy (BHC)
                  • Community Care Club (CCC)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Community Wellbeing",
    },
    section2: {
      clientName: "Keune Care",
      clientLogo: "/project-path/keune-care/keune-logo.png",
      clientDepartment: "KeuneCare-Iran | B2C Dept.",
      clientDepartmentLogo: "/project-path/keune-care/keune-care-logo.png",
      bloompointLogo: "/bp-logo-yellow.png",
      bloompointDepartment: "BloomPoint Studio",
      bloompointClsTitle: "Perspective",
      blueprintLogo: "/project-path/keune-care/keune-care-blueprint-logo.png",
      blueprintTitle: "Digital Dynamic System",
      blueprintDescription: [
        "B2C Online Haircare Consultancy (BHC)",
        "Care Community Club (CCC)",
      ],
      goalTitle: "Keune Care Ecosystem",
      goalDescription: [
        "Prototype | KeuneCare-Iran Community",
        "4000 Costumers & 6000 Salons",
        // "Viable Community Health & Wellbeing",
        // "Increased Retention & Loyalty",
      ],
    },
    section3: {
      pdfUrl: "/pdfs/keune-care.pdf",
      pdfTitle: "KEUNE Care Project Report",
    },
  },
  {
    id: "2",
    name: "PalletAbad Community",
    category: "SMEs",
    image: "/projects/sme-1.jpg",
    tagline: "coworking-spaces-communities",
    slug: "palletabad-community",
  },
  {
    id: "3",
    name: "BAHAMAN",
    category: "SMEs",
    image: "/projects/sme-3.jpg",
    tagline: "private-business-club",
    slug: "bahaman",
  },
  {
    id: "4",
    name: "MAKOKO",
    category: "SMEs",
    image: "/projects/sme-4.jpg",
    tagline: "floating-center",
    slug: "makoko",
  },
  {
    id: "5",
    name: "ASEH",
    category: "SMEs",
    image: "/projects/sme-5.jpg",
    tagline: "efficient-system",
    slug: "aseh",
  },
  {
    id: "6",
    name: "KIDSTADT",
    category: "SMEs",
    image: "/projects/sme-5.jpg",
    tagline: "dbst-after-School",
    slug: "kidstadt",
  },
  {
    id: "7",
    name: "DARASIAB",
    category: "SMEs",
    image: "/projects/sme-6.jpg",
    tagline: "experience-garden",
    slug: "darasiab",
  },

  // Large Enterprises (3)
  {
    id: "8",
    name: "Consumption Food Waste (CFW)",
    category: "Large Enterprises",
    image: "/projects/enterprise-1.jpg",
    tagline: "food-waste-management",
    slug: "cfw",
  },
  {
    id: "9",
    name: "Energy-Community-Sustainability (ECS)",
    category: "Large Enterprises",
    image: "/projects/enterprise-2.jpg",
    tagline: "industrial-sustainability",
    slug: "ecs",
  },
  {
    id: "10",
    name: "MAHRAM Co.",
    category: "Large Enterprises",
    image: "/projects/enterprise-3.jpg",
    tagline: "culinary-learning",
    slug: "mahram-co",
  },

  // Cities (6)
  {
    id: "11",
    name: "People With Disabilities (PWD)",
    category: "Cities",
    image: "/projects/city-1.jpg",
    tagline: "accessibility-&-adjustment (A&A)",
    slug: "pwd",
  },
  {
    id: "12",
    name: "? (PCC)",
    category: "Cities",
    image: "/projects/city-2.jpg",
    tagline: "community-health-wellbeing",
    slug: "pcc",
  },
  {
    id: "13",
    name: "EKBATANA",
    category: "Cities",
    image: "/projects/city-3.jpg",
    tagline: "complex-community",
    slug: "ekbatana",
  },
  {
    id: "14",
    name: "RESTROOMS",
    category: "Cities",
    image: "/projects/city-3.jpg",
    tagline: "urban-self-cleaning-toilets",
    slug: "restrooms",
  },
  {
    id: "15",
    name: "KIA",
    category: "Cities",
    image: "/projects/city-3.jpg",
    tagline: "coffee-grounds-upcycle-products",
    slug: "kia",
  },
  {
    id: "16",
    name: "Aviation Hub (AVH)",
    category: "Cities",
    image: "/projects/city-3.jpg",
    tagline: "engagement-&-experience-center",
    slug: "avh",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
