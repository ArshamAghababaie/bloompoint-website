export type Category = "SMEs" | "Large Enterprises" | "Cities";

export type ProjectColor =
  | "yellow"
  | "green"
  | "red"
  | "blue"
  | "gray"
  | "keune_umber"
  | "palletabad_orange"
  | "crouse_blue"
  | "avh_blue"
  | "raad_green"
  | "companies_red"
  | "aseh_gray"
  | "darasiab_green"
  | "nikan_yellow";

export interface ProjectSection1 {
  color: ProjectColor;
  clientName?: string;
  // clientDescription: string;
  problem?: string;
  communityLedSolution?: string;
  prototype?: string;
  // designatedGroup: string;
  target?: string;
  link?: string;
}

export interface ProjectSection2 {
  clientName?: string;
  clientLogo?: string;
  clientDepartment?: string;
  clientDepartmentLogo?: string;
  bloompointLogo?: string;
  bloompointDepartment?: string;
  bloompointClsTitle?: string;
  blueprintLogo?: string;
  blueprintTitle?: string;
  blueprintDescription?: string[];
  goalTitle?: string;
  goalDescription?: string[];
}

export interface ProjectSection3 {
  title?: string;
  images?: string[];
}

export interface Project {
  id?: string;
  name?: string;
  category?: Category;
  image?: string;
  tagline?: string;
  state?: "latest" | "old";
  slug?: string;
  section1?: ProjectSection1;
  section2?: ProjectSection2;
  section3?: ProjectSection3;
}

export const categories: Category[] = ["SMEs", "Large Enterprises", "Cities"];

export const projects: Project[] = [
  // SMEs (7)
  {
    id: "1",
    name: `Keune Care`,
    category: "SMEs",
    image: "/projects-cover-image/SMEs/keune-care.jpg",
    tagline: "community-wellbeing",
    state: "latest",
    slug: "keune-care",
    section1: {
      color: "keune_umber",
      clientName: "Keune Care",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `• Low Retention
      • Low Basket Confidence
      • Weak Belonging & Loyalty`,
      communityLedSolution: "Keune Care Ecosystem",
      prototype: `• B2C Haircare Consultancy (BHC)
      • Community Care Club (CCC)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Community Wellbeing",
      link: "https://keunecare.com/",
    },
    section2: {
      clientName: "Keune Care",
      clientLogo: "/project-path/keune-care/section2/keune-logo.png",
      clientDepartment: "Keune Care-Iran | B2C Dept.",
      clientDepartmentLogo:
        "/project-path/keune-care/section2/keune-care-logo.png",
      bloompointLogo: "/bp-logo-yellow.png",
      bloompointDepartment: "BloomPoint",
      bloompointClsTitle: "Perspective",
      blueprintLogo:
        "/project-path/keune-care/section2/keune-care-blueprint-logo.png",
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
      title: "Keune Care Project Report",
      images: [
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
  {
    id: "2",
    name: "PalletAbad",
    category: "SMEs",
    image: "/projects-cover-image/SMEs/palletabad.jpg",
    tagline: "coworking-spaces-communities",
    state: "old",
    slug: "palletabad",

    section1: {
      color: "palletabad_orange",
      clientName: "Haft-o-Hasht",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `Lack of Coworking Among the Existence Businesses`,
      communityLedSolution: "Community Events",
      prototype: `• Events
      • Talks
      • Civic Visits`,
      // designatedGroup: "Keune Care Club Members",
      target: "Empathy Sharing",
      link: "http://patogh.my.canva.site/haftohasht-palletabad-community",
    },
    // section2: {
    //   clientName: "Keune Care",
    //   clientLogo: "/project-path/keune-care/section2/keune-logo.png",
    //   clientDepartment: "Keune Care-Iran | B2C Dept.",
    //   clientDepartmentLogo:
    //     "/project-path/keune-care/section2/keune-care-logo.png",
    //   bloompointLogo: "/bp-logo-yellow.png",
    //   bloompointDepartment: "BloomPoint",
    //   bloompointClsTitle: "Perspective",
    //   blueprintLogo:
    //     "/project-path/keune-care/section2/keune-care-blueprint-logo.png",
    //   blueprintTitle: "Digital Dynamic System",
    //   blueprintDescription: [
    //     "B2C Online Haircare Consultancy (BHC)",
    //     "Care Community Club (CCC)",
    //   ],
    //   goalTitle: "Keune Care Ecosystem",
    //   goalDescription: [
    //     "Prototype | KeuneCare-Iran Community",
    //     "4000 Costumers & 6000 Salons",
    //     // "Viable Community Health & Wellbeing",
    //     // "Increased Retention & Loyalty",
    //   ],
    // },
    // section3: {
    //   title: "Keune Care Project Report",
    //   images: [
    //     "/project-path/palletabad/section3/palletabad_01.jpg",
    //     "/project-path/palletabad/section3/palletabad_02.jpg",
    //     "/project-path/palletabad/section3/palletabad_03.jpg",
    //     "/project-path/palletabad/section3/palletabad_04.jpg",
    //     "/project-path/palletabad/section3/palletabad_05.jpg",
    //     "/project-path/palletabad/section3/palletabad_06.jpg",
    //   ],
    // },
  },
  {
    id: "3",
    name: "BAHAMAN",
    category: "SMEs",
    image: "/projects-cover-image/SMEs/bahaman.jpg",
    tagline: "private-business-club",
    state: "old",
    slug: "bahaman",

    section1: {
      color: "darasiab_green",
      clientName: "BAHAMAN",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `Not Existing A Private Club for C-Levels`,
      communityLedSolution: "Private Clubworking Space",
      prototype: `BAHAMAN Clubworking Space (BCS)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Providing a Clubworking Space for C-Levels",
      // link: "https://thebahaman.com/",
    },
  },

  // {
  //   id: "4",
  //   name: "MAKOKO",
  //   category: "SMEs",
  //   image: "/projects/sme-4.jpg",
  //   tagline: "floating-center",
  // state: "old",
  //   slug: "makoko",
  // },
  {
    id: "5",
    name: "ASEH CO.",
    category: "SMEs",
    image: "/projects-cover-image/SMEs/aseh.jpg",
    tagline: "efficient-system",
    state: "old",
    slug: "aseh",
    section1: {
      color: "aseh_gray",
      clientName: "ASEH CO. - Refrigeration Manufacturer",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `• Inefficient Installation Practices
• Lack of Structured Technical Training`,

      communityLedSolution: "Learning by Doing Academy",
      // communityLedSolution: "Keune Care Ecosystem",
      prototype: `Installers Community (1200 People)`,

      // designatedGroup: "Keune Care Club Members",
      target: "Raising Industrial Efficiency",
    },
    section2: {
      clientName: "ASEH",
      clientLogo: "/project-path/aseh/section2/aseh-logo.png",
      clientDepartment: "ASEH | R&D Dept.",
      clientDepartmentLogo: "/project-path/aseh/section2/aseh-logo.png",
      bloompointLogo: "/bp-logo-yellow.png",
      bloompointDepartment: "BloomPoint",
      bloompointClsTitle: "Academy",
      blueprintLogo: "/project-path/aseh/section2/aseh-logo.png",
      blueprintTitle: "ASEH Academy",
      blueprintDescription: ["Academy for Installers"],
      goalTitle: "Industrial Efficiency",
      goalDescription: [
        "Prototype | Refrigeration Installers Community (1200 People)",
        // "Viable Community Health & Wellbeing",
        // "Increased Retention & Loyalty",
      ],
    },
    section3: {
      title: "ASEH Project Report",
      images: [
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
    image: "/projects-cover-image/SMEs/dbst.jpg",
    tagline: "dbst-after-School",
    state: "latest",
    slug: "dbst",
    section1: {
      color: "companies_red",
      clientName:
        "Deutsche Botschaftsschule Teheran (DBST) | German Embassy School Tehran",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `• Low Environmental Awareness
      • Limited Hands-On Learning`,
      communityLedSolution: "After School Academy",
      prototype: `5th-8th Grades (100 Students)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Environmental Awareness",
    },
    section2: {
      clientName: "DBST",
      clientLogo: "/project-path/dbst/section2/dbst-logo.png",
      clientDepartment: "DBST | Principal Dept.",
      clientDepartmentLogo: "/project-path/dbst/section2/dbst-logo.png",
      bloompointLogo: "/bp-logo-yellow.png",
      bloompointDepartment: "BloomPoint",
      bloompointClsTitle: "After School",
      blueprintLogo: "/project-path/dbst/section2/dbst-blueprint-logo.png",
      blueprintTitle: "After School Academy Project",
      blueprintDescription: [
        "City & Architecture Awearness",
        "Environment",
        "Belonging",
      ],
      goalTitle: "Environmental Awareness",
      goalDescription: [
        "Prototype | 5th-8th Grades (100 Students)",
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
    image: "/projects-cover-image/SMEs/darasiab.jpg",
    tagline: "experience-garden",
    state: "old",
    slug: "darasiab",
    section1: {
      color: "darasiab_green",
      clientName: "DARASIAB",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `• Theoretical Environmental Education
• Lack of Experiential Learning`,

      communityLedSolution: "Experience Garden for Kids",
      prototype: `  International Schools (20 Schools)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Environmental Awareness",
    },
    section2: {
      clientName: "DARASIAB",
      clientLogo: "/project-path/darasiab/section2/darasiab-logo.png",
      clientDepartment: "DARASIAB | Principal Dept.",
      clientDepartmentLogo: "/project-path/darasiab/section2/darasiab-logo.png",
      bloompointLogo: "/bp-logo-yellow.png",
      bloompointDepartment: "BloomPoint",
      bloompointClsTitle: "After School",
      blueprintLogo: "/project-path/darasiab/section2/darasiab-logo.png",
      blueprintTitle: "Experience Garden Community",
      blueprintDescription: ["Nature Awareness", "Environment", "Nurturing"],
      goalTitle: "Environmental Awareness",
      goalDescription: [
        "Prototype | International Schools (20 Schools)",
        "Nature-Based Experiences",
        // "Viable Community Health & Wellbeing",
        // "Increased Retention & Loyalty",
      ],
    },
    section3: {
      title: "DARASIAB Project Report",
      images: [
        "/project-path/darasiab/section3/darasiab_02.jpg",
        "/project-path/darasiab/section3/darasiab_03.jpg",
        "/project-path/darasiab/section3/darasiab_04.jpg",
        "/project-path/darasiab/section3/darasiab_05.jpg",
        "/project-path/darasiab/section3/darasiab_06.jpg",
        "/project-path/darasiab/section3/darasiab_07.jpg",
      ],
    },
  },

  // Large Enterprises (3)
  {
    id: "8",
    name: "CROUSE CO.",
    category: "Large Enterprises",
    image: "/projects-cover-image/LEs/crouse.jpg",
    tagline: "food-waste-management",
    state: "latest",
    slug: "crouse",
    section1: {
      color: "crouse_blue",
      clientName: "CROUSE CO. - Manifacturing Industries (15,000 People)",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `Daily Food Waste (12,000 Portion per Day)`,
      communityLedSolution: "Food Waste Management Program",
      prototype: `Consumption | Food | Waste (CFW)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Food Waste Reduction",
    },
    section2: {
      clientName: "CROUSE CO.",
      clientLogo: "/project-path/crouse/section2/crouse-logo.png",
      clientDepartment: "Crouse Co. | CSR Dept.",
      clientDepartmentLogo: "/project-path/crouse/section2/crouse-logo.png",
      bloompointLogo: "/bp-logo-yellow.png",
      bloompointDepartment: "BloomPoint",
      bloompointClsTitle: "Program",
      blueprintLogo: "/project-path/crouse/section2/crouse-blueprint-logo.png",
      blueprintTitle: "Consumption | Food | Waste",
      blueprintDescription: [
        "Food Waste Management Program",
        "Waste Reduction",
      ],
      goalTitle: "Optimizaition of Food Waste",
      goalDescription: [
        "Prototype | R&I & IT Teams (300 People)",
        "R&I Dining Hall Users (300-400 People)",
        // "Viable Community Health & Wellbeing",
        // "Increased Retention & Loyalty",
      ],
    },
    section3: {
      title: "CROUSE-CFW Project Report",
      images: [
        "/project-path/crouse/section3/cfw_02.jpg",
        "/project-path/crouse/section3/cfw_03.jpg",
        "/project-path/crouse/section3/cfw_04.jpg",
        "/project-path/crouse/section3/cfw_05.jpg",
        "/project-path/crouse/section3/cfw_06.jpg",
        "/project-path/crouse/section3/cfw_07.jpg",
        "/project-path/crouse/section3/cfw_08.jpg",
        "/project-path/crouse/section3/cfw_09.jpg",
        "/project-path/crouse/section3/cfw_10.jpg",
        "/project-path/crouse/section3/cfw_11.jpg",
        "/project-path/crouse/section3/cfw_13.jpg",
        "/project-path/crouse/section3/cfw_14.jpg",
      ],
    },
  },

  {
    id: "9",
    name: "MAMMUT CO.",
    category: "Large Enterprises",
    image: "/projects-cover-image/LEs/mammut.jpg",
    tagline: "industrial-sustainability",
    state: "old",
    slug: "mammut",
    section1: {
      color: "companies_red",
      clientName: "MAMMUT CO. - Manifacturing Industries (20,000 People)",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `Daily Food Waste (4800-5700 Portion per Day)`,
      communityLedSolution: "Energy Efficiency Perspective (ECS)",
      prototype: `Consumption | Food | Waste (CFW)`,
      // designatedGroup: "Keune Care Club Members",
      target: " Industrial Green Management",
    },
    section2: {
      clientName: "MAMMUT",
      clientLogo: "/project-path/mammut/section2/mammut-logo.png",
      clientDepartment: "MAMMUT | Energy Dept.",
      clientDepartmentLogo: "/project-path/mammut/section2/talashim-logo.png",
      bloompointLogo: "/bp-logo-yellow.png",
      bloompointDepartment: "BloomPoint",
      bloompointClsTitle: "Perspective",
      blueprintLogo: "/project-path/mammut/section2/mammut-blueprint-logo.png",
      blueprintTitle: "Consumption | Food | Waste (CFW)",
      blueprintDescription: [
        "Energy | Community | Sustainability (ECS) Perspective",
      ],
      goalTitle: "ECS Perspective Prototype",
      goalDescription: [
        "Prototype | Mammut World Complex (5000 People)",
        "4800 Meal Portions per Day",
        "4 Dining Halls",
        // "Viable Community Health & Wellbeing",
        // "Increased Retention & Loyalty",
      ],
    },
    section3: {
      title: "MAMMUT Project Report",
      images: [
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
    name: "MAHRAM CO.",
    category: "Large Enterprises",
    image: "/projects-cover-image/LEs/mahram.jpg",
    tagline: "culinary-learning",
    slug: "mahram",
    state: "old",
    section1: {
      color: "companies_red",
      clientName: "MAHRAM CO. - Food Industries (Since 1970)",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `Cooking with Mahram Products`,
      communityLedSolution: "Culinary Academy",
      prototype: `Culinary Master Classes - Online | In-Person`,
      // designatedGroup: "Keune Care Club Members",
      target: "Regenerating Culinary Learning",
    },
    section2: {
      clientName: "MAHRAM CO.",
      clientLogo: "/project-path/mahram/section2/mahram-logo.png",
      clientDepartment: "Mahram | Horeca Dept.",
      clientDepartmentLogo: "/project-path/mahram/section2/mahram-logo.png",
      bloompointLogo: "/bp-logo-yellow.png",
      bloompointDepartment: "BloomPoint",
      bloompointClsTitle: "Academy",
      blueprintLogo: "/project-path/mahram/section2/mahram-logo.png",
      blueprintTitle: "Culinary Academy",
      blueprintDescription: ["Cooking Master Classes", "Online | In person"],
      goalTitle: "Regenerating Culinary Learning",
      goalDescription: [
        "Prototype | Mahram Horeca Community",
        "1200 Restaurants",
        // "Viable Community Health & Wellbeing",
        // "Increased Retention & Loyalty",
      ],
    },
    section3: {
      title: "MAHRAM CO. Project Report",
      images: [
        "/project-path/mahram/section3/mahram_02.jpg",
        "/project-path/mahram/section3/mahram_03.jpg",
        "/project-path/mahram/section3/mahram_04.jpg",
        "/project-path/mahram/section3/mahram_05.jpg",
        "/project-path/mahram/section3/mahram_06.jpg",
        "/project-path/mahram/section3/mahram_07.jpg",
        "/project-path/mahram/section3/mahram_08.jpg",
      ],
    },
  },

  // Cities (6)
  {
    id: "11",
    name: "Raad", //People With Disabilities (PWD)
    category: "Cities",
    image: "/projects-cover-image/Cities/raad.jpg",
    tagline: "accessibility-&-adjustment (A&A)",
    slug: "raad",
    section1: {
      color: "raad_green",
      clientName: "RAAD Educational Institute",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `Inadequacy of Spaces For People With Dsabilities`,
      communityLedSolution: "Adapting Dpaces For People  With Disabilities",
      prototype: `People With Disabilities (PWD)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Increasing People Awareness & Space Functionality",
      // link: "https://thebahaman.com/",
    },
  },
  {
    id: "12",
    name: "Nikan",
    category: "Cities",
    image: "/projects-cover-image/Cities/nikan.jpg",
    tagline: "community-health-wellbeing",
    slug: "nikan",
    section1: {
      color: "nikan_yellow",
      clientName: "Nikan Chain Hospitals",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `• Increasing Awareness
• Disease Prevention
• A Deeper Connection Between Nikan Hospital & the Public`,
      communityLedSolution: "Building Health Through Community",
      prototype: `Prevention | Community | Care (PCC)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Deepr Relation & Increasing People Awareness",
      // link: "?",
    },
  },
  {
    id: "13",
    name: "EKBATANA",
    category: "Cities",
    image: "/projects-cover-image/Cities/ekbatana.jpg",
    tagline: "complex-community",
    slug: "ekbatana",
    section1: {
      color: "darasiab_green",
      clientName: "EKBATANA Management Complex ",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `?`,
      communityLedSolution: "?",
      prototype: `?`,
      // designatedGroup: "Keune Care Club Members",
      target: "?",
      // link: "https://thebahaman.com/",
    },
  },
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
  {
    id: "16",
    name: "Aviation Hub",
    category: "Cities",
    image: "/projects-cover-image/Cities/avh.jpg",
    tagline: "engagement-&-experience-center",
    slug: "avh",

    section1: {
      color: "avh_blue",
      clientName: "Iranian Aviation Community",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      problem: `• Not Existing An Iranian Aviation Community
      • Lack of A Shared Place To Learn & Engagement`,
      communityLedSolution: "Aviation Experience and Engagement Center",
      prototype: `Aviation Hub (AVH)`,
      // designatedGroup: "Keune Care Club Members",
      target: "Engaging People To Aviation Industry",
      link: "http://avh.center/",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
