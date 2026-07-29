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
  title: string;
  images: string[];
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
      problem: `  Low Retention
                • Low Basket Confidence
                • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `  B2C Haircare Consultancy (BHC)
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
      title: "KEUNE Care Project Report",
      images: [
        "/project-path/keune-care/section3/keune_01.jpg",
        "/project-path/keune-care/section3/keune_02.jpg",
        "/project-path/keune-care/section3/keune_03.jpg",
        "/project-path/keune-care/section3/keune_04.jpg",
        "/project-path/keune-care/section3/keune_05.jpg",
        "/project-path/keune-care/section3/keune_06.jpg",
        "/project-path/keune-care/section3/keune_07.jpg",
        "/project-path/keune-care/section3/keune_08.jpg",
        "/project-path/keune-care/section3/keune_09.jpg",
        "/project-path/keune-care/section3/keune_10.jpg",
      ],
    },
  },

  // {
  //   id: "2",
  //   name: "PalletAbad Community",
  //   category: "SMEs",
  //   image: "/projects/sme-1.jpg",
  //   tagline: "coworking-spaces-communities",
  //   slug: "palletabad-community",
  // },
  // {
  //   id: "3",
  //   name: "BAHAMAN",
  //   category: "SMEs",
  //   image: "/projects/sme-3.jpg",
  //   tagline: "private-business-club",
  //   slug: "bahaman",
  // },
  // {
  //   id: "4",
  //   name: "MAKOKO",
  //   category: "SMEs",
  //   image: "/projects/sme-4.jpg",
  //   tagline: "floating-center",
  //   slug: "makoko",
  // },
  {
    id: "5",
    name: "ASEH",
    category: "SMEs",
    image: "/projects/sme-5.jpg",
    tagline: "efficient-system",
    slug: "aseh",
    section1: {
      color: "aseh_gray",
      clientName: "ASEH",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `  Low Retention
                • Low Basket Confidence
                • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `  B2C Haircare Consultancy (BHC)
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
      title: "ASEH Project Report",
      images: [
        "/project-path/aseh/section3/aseh_01.jpg",
        "/project-path/aseh/section3/aseh_02.jpg",
        "/project-path/aseh/section3/aseh_03.jpg",
        "/project-path/aseh/section3/aseh_04.jpg",
        "/project-path/aseh/section3/aseh_05.jpg",
        "/project-path/aseh/section3/aseh_06.jpg",
        "/project-path/aseh/section3/aseh_07.jpg",
      ],
    },
  },
  {
    id: "6",
    name: `DBST`,
    category: "SMEs",
    image: "/projects/sme-6.jpg",
    tagline: "dbst-after-School",
    slug: "dbst",
    section1: {
      color: "companies_red",
      clientName: "DBST",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `  Low Retention
                • Low Basket Confidence
                • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `  B2C Haircare Consultancy (BHC)
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
      title: "DBST Project Report",
      images: [
        "/project-path/dbst/section3/dbst_01.jpg",
        "/project-path/dbst/section3/dbst_02.jpg",
        "/project-path/dbst/section3/dbst_03.jpg",
        "/project-path/dbst/section3/dbst_04.jpg",
        "/project-path/dbst/section3/dbst_05.jpg",
        "/project-path/dbst/section3/dbst_06.jpg",
        "/project-path/dbst/section3/dbst_07.jpg",
        "/project-path/dbst/section3/dbst_08.jpg",
        "/project-path/dbst/section3/dbst_09.jpg",
        "/project-path/dbst/section3/dbst_10.jpg",
      ],
    },
  },

  {
    id: "7",
    name: `DARASIAB`,
    category: "SMEs",
    image: "/projects/sme-7.jpg",
    tagline: "experience-garden",
    slug: "darasiab",
    section1: {
      color: "darasiab_green",
      clientName: "DARASIAB",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `  Low Retention
                • Low Basket Confidence
                • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `  B2C Haircare Consultancy (BHC)
                  • Community Care Club (CCC)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Community Wellbeing",
    },
    section2: {
      clientName: "DARASIAB",
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
      title: "DARASIAB Project Report",
      images: [
        "/project-path/darasiab/section3/darasiab_01.jpg",
        "/project-path/darasiab/section3/darasiab_02.jpg",
        "/project-path/darasiab/section3/darasiab_03.jpg",
        "/project-path/darasiab/section3/darasiab_04.jpg",
        "/project-path/darasiab/section3/darasiab_05.jpg",
        "/project-path/darasiab/section3/darasiab_06.jpg",
        "/project-path/darasiab/section3/darasiab_07.jpg",
        "/project-path/darasiab/section3/darasiab_08.jpg",
        "/project-path/darasiab/section3/darasiab_09.jpg",
        "/project-path/darasiab/section3/darasiab_10.jpg",
      ],
    },
  },

  // Large Enterprises (3)
  {
    id: "8",
    name: "CROUSE - Consumption Food Waste (CFW)",
    category: "Large Enterprises",
    image: "/projects/enterprise-1.jpg",
    tagline: "food-waste-management",
    slug: "cfw",
    section1: {
      color: "crouse_blue",
      clientName: "CROUSE",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `  Low Retention
                • Low Basket Confidence
                • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `  B2C Haircare Consultancy (BHC)
                  • Community Care Club (CCC)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Community Wellbeing",
    },
    section2: {
      clientName: "CROUSE",
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
      title: "CROUSE-CFW Project Report",
      images: [
        "/project-path/cfw/section3/cfw_01.jpg",
        "/project-path/cfw/section3/cfw_02.jpg",
        "/project-path/cfw/section3/cfw_03.jpg",
        "/project-path/cfw/section3/cfw_04.jpg",
        "/project-path/cfw/section3/cfw_05.jpg",
        "/project-path/cfw/section3/cfw_06.jpg",
        "/project-path/cfw/section3/cfw_07.jpg",
        "/project-path/cfw/section3/cfw_08.jpg",
        "/project-path/cfw/section3/cfw_09.jpg",
        "/project-path/cfw/section3/cfw_10.jpg",
        "/project-path/cfw/section3/cfw_11.jpg",
        "/project-path/cfw/section3/cfw_13.jpg",
        "/project-path/cfw/section3/cfw_14.jpg",
      ],
    },
  },

  {
    id: "9",
    name: "MAMMUT Energy-Community-Sustainability (ECS)",
    category: "Large Enterprises",
    image: "/projects/enterprise-2.jpg",
    tagline: "industrial-sustainability",
    slug: "mammut",
    section1: {
      color: "companies_red",
      clientName: "MAMMUT",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `  Low Retention
                • Low Basket Confidence
                • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `  B2C Haircare Consultancy (BHC)
                  • Community Care Club (CCC)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Community Wellbeing",
    },
    section2: {
      clientName: "MAMMUT",
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
      title: "MAMMUT Project Report",
      images: [
        "/project-path/mammut/section3/mammut_01.jpg",
        "/project-path/mammut/section3/mammut_02.jpg",
        "/project-path/mammut/section3/mammut_03.jpg",
        "/project-path/mammut/section3/mammut_04.jpg",
        "/project-path/mammut/section3/mammut_05.jpg",
        "/project-path/mammut/section3/mammut_06.jpg",
        "/project-path/mammut/section3/mammut_07.jpg",
        "/project-path/mammut/section3/mammut_08.jpg",
        "/project-path/mammut/section3/mammut_09.jpg",
        "/project-path/mammut/section3/mammut_10.jpg",
        "/project-path/mammut/section3/mammut_11.jpg",
        "/project-path/mammut/section3/mammut_12.jpg",
        "/project-path/mammut/section3/mammut_13.jpg",
        "/project-path/mammut/section3/mammut_14.jpg",
      ],
    },
  },

  {
    id: "10",
    name: "MAHRAM Co.",
    category: "Large Enterprises",
    image: "/projects/enterprise-3.jpg",
    tagline: "culinary-learning",
    slug: "mahram-co",
    section1: {
      color: "companies_red",
      clientName: "MAHRAM CO.",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `  Low Retention
                • Low Basket Confidence
                • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `  B2C Haircare Consultancy (BHC)
                  • Community Care Club (CCC)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Community Wellbeing",
    },
    section2: {
      clientName: "MAHRAM CO.",
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
      title: "MAHRAM CO. Project Report",
      images: [
        "/project-path/mahram-co/section3/mahram_01.jpg",
        "/project-path/mahram-co/section3/mahram_02.jpg",
        "/project-path/mahram-co/section3/mahram_03.jpg",
        "/project-path/mahram-co/section3/mahram_04.jpg",
        "/project-path/mahram-co/section3/mahram_05.jpg",
        "/project-path/mahram-co/section3/mahram_06.jpg",
        "/project-path/mahram-co/section3/mahram_07.jpg",
        "/project-path/mahram/section3/mahram_08.jpg",
      ],
    },
  },

  // Cities (6)
  // {
  //   id: "11",
  //   name: "People With Disabilities (PWD)",
  //   category: "Cities",
  //   image: "/projects/city-1.jpg",
  //   tagline: "accessibility-&-adjustment (A&A)",
  //   slug: "pwd",
  // },
  // {
  //   id: "12",
  //   name: "? (PCC)",
  //   category: "Cities",
  //   image: "/projects/city-2.jpg",
  //   tagline: "community-health-wellbeing",
  //   slug: "pcc",
  // },
  // {
  //   id: "13",
  //   name: "EKBATANA",
  //   category: "Cities",
  //   image: "/projects/city-3.jpg",
  //   tagline: "complex-community",
  //   slug: "ekbatana",
  // },
  // {
  //   id: "14",
  //   name: "RESTROOMS",
  //   category: "Cities",
  //   image: "/projects/city-3.jpg",
  //   tagline: "urban-self-cleaning-toilets",
  //   slug: "restrooms",
  // },
  // {
  //   id: "15",
  //   name: "KIA",
  //   category: "Cities",
  //   image: "/projects/city-3.jpg",
  //   tagline: "coffee-grounds-upcycle-products",
  //   slug: "kia",
  // },
  // {
  //   id: "16",
  //   name: "Aviation Hub (AVH)",
  //   category: "Cities",
  //   image: "/projects/city-3.jpg",
  //   tagline: "engagement-&-experience-center",
  //   slug: "avh",
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
