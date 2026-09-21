export type Category =
  | "Medium-Sized Businesses"
  | "Large Enterprises"
  | "Educational Institutions"
  | "Cities";

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
  problem?: string;
  communityLedSolution?: string;

  prototypeOrEcosystem?: {
    label: "Prototype" | "Ecosystem";
    value: string;
  };

  target?: string;
  // clientDescription: string;
  // designatedGroup: string;
  // link?: string;
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

export interface ProjectSection4Item {
  //problem / need
  image?: string;
  title?: string;
  text?: string;
}
export type ProjectSection4 = ProjectSection4Item[];

export interface ProjectSection5Item {
  //community led solution
  image?: string;
  title?: string;
  text?: string;
}
export type ProjectSection5 = ProjectSection5Item[];

export interface ProjectSection6Item {
  //prototype / ecosystem
  image?: string;
  title?: string;
  text?: string;
}
export type ProjectSection6 = ProjectSection6Item[];

export interface ProjectSection7Item {
  //result / target
  title?: string;
  text?: string;
  image?: string;
}
export type ProjectSection7 = ProjectSection7Item[];

export interface Project {
  id: string;
  name: string;
  subName: string;
  category: Category;
  image?: string;
  tagline?: string;
  state: "old" | "latest";
  ongoing?: true | false;
  slug: string;
  overview?: string; // badan nabayad optional bashe, chon hame daran

  section1?: ProjectSection1;
  // section2?: ProjectSection2;
  section3?: ProjectSection3;
  section4?: ProjectSection4;
  section5?: ProjectSection5;
  section6?: ProjectSection6;
  section7?: ProjectSection7;
}

export const categories: Category[] = [
  "Medium-Sized Businesses",
  "Educational Institutions",
  "Large Enterprises",
  "Cities",
];

export const projects: Project[] = [
  {
    id: "1",
    name: "CROUSE",
    subName: "FOOD WASTE MANAGEMENT",
    category: "Large Enterprises",
    image: "/projects-cover-image/LEs/crouse.jpg",
    tagline: "food-waste-management",
    state: "old",
    slug: "crouse",

    section1: {
      color: "crouse_blue",
      clientName: "CROUSE CO. - Manifacturing Industries (15,000 People)",
      problem: `Daily Food Waste (12,000 Portion per Day)`,
      communityLedSolution: "Food Waste Management Program",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: "Consumption | Food | Waste (CFW)",
      },

      target: "Food Waste Reduction",
    },
    // clientDescription: "Community-Driven Wellbeing Perspective",
    // designatedGroup: "Keune Care Club Members",

    // section2: {
    //   clientName: "CROUSE CO.",
    //   clientLogo: "/project-path/crouse/section2/crouse-logo.png",
    //   clientDepartment: "Crouse Co. | CSR Dept.",
    //   clientDepartmentLogo: "/project-path/crouse/section2/crouse-logo.png",
    //   bloompointLogo: "/bp-logo-yellow.png",
    //   bloompointDepartment: "BloomPoint",
    //   bloompointClsTitle: "Program",
    //   blueprintLogo: "/project-path/crouse/section2/crouse-blueprint-logo.png",
    //   blueprintTitle: "Consumption | Food | Waste",
    //   blueprintDescription: [
    //     "Food Waste Management Program",
    //     "Waste Reduction",
    //   ],
    //   goalTitle: "Optimizaition of Food Waste",
    //   goalDescription: [
    //     "Prototype | R&I & IT Teams (300 People)",
    //     "R&I Dining Hall Users (300-400 People)",
    //     // "Viable Community Health & Wellbeing",
    //     // "Increased Retention & Loyalty",
    //   ],
    // },

    section3: {
      title: "CROUSE-CFW Project",
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

    section4: [
      {
        image: "/projects/crouse/problem-1.jpg",
        title: "High Food Waste",
        text: "12,000 portions of food were wasted every day.",
      },
      {
        image: "/projects/crouse/problem-2.jpg",
        title: "Lack of Awareness",
        text: "Employees had limited awareness of food waste.",
      },
    ],
    section5: [
      {
        image: "/projects/crouse/problem-1.jpg",
        title: "High Food Waste",
        text: "12,000 portions of food were wasted every day.",
      },
      {
        image: "/projects/crouse/problem-2.jpg",
        title: "Lack of Awareness",
        text: "Employees had limited awareness of food waste.",
      },
      {
        image: "/projects/crouse/problem-3.jpg",
        title: "No Measurement",
        text: "There was no systematic process for measuring waste.",
      },
    ],
    section6: [
      {
        image: "/projects/crouse/problem-1.jpg",
        title: "High Food Waste",
        text: "12,000 portions of food were wasted every day.",
      },
      {
        image: "/projects/crouse/problem-2.jpg",
        title: "Lack of Awareness",
        text: "Employees had limited awareness of food waste.",
      },
      {
        image: "/projects/crouse/problem-3.jpg",
        title: "No Measurement",
        text: "There was no systematic process for measuring waste.",
      },
    ],
    section7: [
      {
        image: "/projects/crouse/problem-1.jpg",
        title: "High Food Waste",
        text: "12,000 portions of food were wasted every day.",
      },
      {
        image: "/projects/crouse/problem-2.jpg",
        title: "Lack of Awareness",
        text: "Employees had limited awareness of food waste.",
      },
      {
        image: "/projects/crouse/problem-3.jpg",
        title: "No Measurement",
        text: "There was no systematic process for measuring waste.",
      },
    ],
  },

  {
    id: "2",
    name: `KEUNE`,
    subName: `CARE ECOSYSTEM`,
    category: "Medium-Sized Businesses",
    image: "/projects-cover-image/SMEs/keune-care.jpg",
    tagline: "community-wellbeing",
    state: "latest",
    ongoing: true,
    slug: "keune-care",

    section1: {
      color: "keune_umber",
      clientName: "Keune Care",

      problem: `• Consultant Overload`,

      communityLedSolution: "Keune Care Ecosystem",

      prototypeOrEcosystem: {
        label: "Ecosystem",
        value: `• Online Haircare Consultancy (OHC)
        • Community Care Club (CCC)`,
      },

      target: "Community Wellbeing",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
      // link: "https://keunecare.com/",
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
    //     "Ecosystem | KeuneCare-Iran Community",
    //     "4000 Costumers & 6000 Salons",
    //     // "Viable Community Health & Wellbeing",
    //     // "Increased Retention & Loyalty",
    //   ],
    // },
    section3: {
      title: "Keune Care Project",
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
    id: "3",
    name: "MAHRAM",
    subName: "CULINARY ACADEMY",
    category: "Educational Institutions",
    image: "/projects-cover-image/LEs/mahram.jpg",
    tagline: "culinary-learning",
    slug: "mahram",
    state: "old",
    section1: {
      color: "companies_red",
      clientName: "MAHRAM CO. - Food Industries (Since 1970)",
      problem: `Cooking with Mahram Products`,
      communityLedSolution: "Culinary Academy",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `Culinary Master Classes - Online | In-Person`,
      },

      target: "Regenerating Culinary Learning",

      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
    },
    // section2: {
    //   clientName: "MAHRAM CO.",
    //   clientLogo: "/project-path/mahram/section2/mahram-logo.png",
    //   clientDepartment: "Mahram | Horeca Dept.",
    //   clientDepartmentLogo: "/project-path/mahram/section2/mahram-logo.png",
    //   bloompointLogo: "/bp-logo-yellow.png",
    //   bloompointDepartment: "BloomPoint",
    //   bloompointClsTitle: "Academy",
    //   blueprintLogo: "/project-path/mahram/section2/mahram-logo.png",
    //   blueprintTitle: "Culinary Academy",
    //   blueprintDescription: ["Cooking Master Classes", "Online | In person"],
    //   goalTitle: "Regenerating Culinary Learning",
    //   goalDescription: [
    //     "Prototype | Mahram Horeca Community",
    //     "1200 Restaurants",
    //     // "Viable Community Health & Wellbeing",
    //     // "Increased Retention & Loyalty",
    //   ],
    // },
    section3: {
      title: "MAHRAM CO. Project",
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

  {
    id: "4",
    name: "AVH",
    subName: "Aviation Hub",
    category: "Cities",
    image: "/projects-cover-image/Cities/avh.jpg",
    tagline: "engagement-&-experience-center",
    state: "latest",
    ongoing: true,
    slug: "avh",

    section1: {
      color: "avh_blue",
      clientName: "Iranian Aviation Community",

      problem: `• Not Existing An Iranian Aviation Community`,

      communityLedSolution: "Aviation Experience and Engagement Center",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `Aviation Hub (AVH)`,
      },

      target: "Engaging People To Aviation Industry",

      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
      // link: "http://avh.center/",
    },
  },

  {
    id: "5",
    name: "RESTROOMS",
    subName: "SMART SELF-CLEANER",
    category: "Cities",
    image: "/projects-cover-image/Cities/restrooms.jpg",
    tagline: "tourism-industry",
    state: "old",
    slug: "restrooms",
  },

  {
    id: "6",
    name: "MAMMUT",
    subName: "GREEN INDUSTRIES",
    category: "Large Enterprises",
    image: "/projects-cover-image/LEs/mammut.jpg",
    tagline: "industrial-sustainability",
    state: "latest",
    slug: "mammut",
    overview: "Lorem epsum sdkfjhs; djf ;sdlksjd f;ksad jfhg lkd sfjh ;ddghfgf",

    section1: {
      color: "companies_red",
      clientName: "MAMMUT CO. - Manifacturing Industries (20,000 People)",
      problem: `Daily Food Waste (4800-5700 Portion per Day)`,
      communityLedSolution: "Energy Efficiency Perspective (ECS)",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `Consumption | Food | Waste (CFW)`,
      },

      target: " Industrial Green Management",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
    },
    // section2: {
    //   clientName: "MAMMUT",
    //   clientLogo: "/project-path/mammut/section2/mammut-logo.png",
    //   clientDepartment: "MAMMUT | Energy Dept.",
    //   clientDepartmentLogo: "/project-path/mammut/section2/talashim-logo.png",
    //   bloompointLogo: "/bp-logo-yellow.png",
    //   bloompointDepartment: "BloomPoint",
    //   bloompointClsTitle: "Perspective",
    //   blueprintLogo: "/project-path/mammut/section2/mammut-blueprint-logo.png",
    //   blueprintTitle: "Consumption | Food | Waste (CFW)",
    //   blueprintDescription: [
    //     "Energy | Community | Sustainability (ECS) Perspective",
    //   ],
    //   goalTitle: "ECS Perspective Prototype",
    //   goalDescription: [
    //     "Prototype | Mammut World Complex (5000 People)",
    //     "4800 Meal Portions per Day",
    //     "4 Dining Halls",
    //     // "Viable Community Health & Wellbeing",
    //     // "Increased Retention & Loyalty",
    //   ],
    // },
    section3: {
      title: "MAMMUT Project",
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
    id: "7",
    name: `DBST`,
    subName: `KIDSTADT AFTER SCHOOL`,
    category: "Educational Institutions",
    image: "/projects-cover-image/SMEs/dbst.jpg",
    tagline: "dbst-after-School",
    state: "latest",
    slug: "dbst",

    section1: {
      color: "companies_red",
      clientName:
        "Deutsche Botschaftsschule Teheran (DBST) | German Embassy School Tehran",

      problem: `• Low Environmental Awareness
        • Limited Hands-On Learning`,

      communityLedSolution: "After School Academy",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `5th-8th Grades (100 Students)`,
      },

      target: "Environmental Awareness",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
    },
    // section2: {
    //   clientName: "DBST",
    //   clientLogo: "/project-path/dbst/section2/dbst-logo.png",
    //   clientDepartment: "DBST | Principal Dept.",
    //   clientDepartmentLogo: "/project-path/dbst/section2/dbst-logo.png",
    //   bloompointLogo: "/bp-logo-yellow.png",
    //   bloompointDepartment: "BloomPoint",
    //   bloompointClsTitle: "After School",
    //   blueprintLogo: "/project-path/dbst/section2/dbst-blueprint-logo.png",
    //   blueprintTitle: "After School Academy Project",
    //   blueprintDescription: [
    //     "City & Architecture Awearness",
    //     "Environment",
    //     "Belonging",
    //   ],
    //   goalTitle: "Environmental Awareness",
    //   goalDescription: [
    //     "Prototype | 5th-8th Grades (100 Students)",
    //     // "Viable Community Health & Wellbeing",
    //     // "Increased Retention & Loyalty",
    //   ],
    // },
    section3: {
      title: "DBST Project",
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
    id: "8",
    name: "BAHAMAN",
    subName: "PRIVATE BUSINESS CLUB",
    category: "Medium-Sized Businesses",
    image: "/projects-cover-image/SMEs/bahaman.jpg",
    tagline: "private-business-club",
    state: "old",
    ongoing: true,
    slug: "bahaman",

    section1: {
      color: "darasiab_green",
      clientName: "BAHAMAN",
      problem: `Not Existing A Private Club for C-Levels`,
      communityLedSolution: "Private Clubworking Space",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `BAHAMAN Clubworking Space (BCS)`,
      },

      target: "Providing a Clubworking Space for C-Levels",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
      // link: "https://thebahaman.com/",
    },
  },

  {
    id: "9",
    name: "PWD",
    subName: "ACCESSIBILITY & ADJUSTMENT",
    category: "Cities",
    image: "/projects-cover-image/Cities/raad.jpg",
    tagline: "accessibility-&-adjustment (A&A)",
    state: "old",
    slug: "pwd",

    section1: {
      color: "raad_green",
      clientName: "RAAD Educational Institute",
      problem: `Inadequacy of Spaces For People With Dsabilities`,
      communityLedSolution: "Adapting Dpaces For People  With Disabilities",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `People With Disabilities (PWD)`,
      },

      target: "Increasing People Awareness & Space Functionality",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
      // link: "",
    },

    section3: {
      title: "Raad's PWD Project",
      images: [
        "/project-path/pwd/section3/pwd_02.jpg",
        "/project-path/pwd/section3/pwd_03.jpg",
        "/project-path/pwd/section3/pwd_04.jpg",
        "/project-path/pwd/section3/pwd_05.jpg",
        "/project-path/pwd/section3/pwd_06.jpg",
        "/project-path/pwd/section3/pwd_07.jpg",
        "/project-path/pwd/section3/pwd_08.jpg",
        "/project-path/pwd/section3/pwd_09.jpg",
      ],
    },
  },

  {
    id: "10",
    name: "HAFT-O-HASHT",
    subName: "PALLET ABAD COMMUNITY",
    category: "Medium-Sized Businesses",
    image: "/projects-cover-image/SMEs/palletabad.jpg",
    tagline: "coworking-spaces-communities",
    state: "old",
    slug: "pallet-abad",

    section1: {
      color: "palletabad_orange",
      clientName: "Haft-o-Hasht",
      problem: `Lack of Coworking Among the Existence Businesses`,
      communityLedSolution: "Community Events",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `• Events
        • Talks
        • Civic Visits`,
      },

      target: "Empathy Sharing",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
      // link: "http://patogh.my.canva.site/haftohasht-palletabad-community",
    },

    // section3: {
    //   title: "Keune Care Project",
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
    id: "11",
    name: "ASEH",
    subName: "ACADEMY",
    category: "Educational Institutions",
    image: "/projects-cover-image/SMEs/aseh.jpg",
    tagline: "efficient-system",
    state: "old",
    ongoing: true,
    slug: "aseh",

    section1: {
      color: "aseh_gray",
      clientName: "ASEH CO. - Refrigeration Manufacturer",

      problem: `• Inefficient Installation Practices
      • Lack of Structured Technical Training`,

      communityLedSolution: "Learning by Doing Academy",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `Installers Community (1200 People)`,
      },

      target: "Raising Industrial Efficiency",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // communityLedSolution: "Keune Care Ecosystem",
      // designatedGroup: "Keune Care Club Members",
    },
    // section2: {
    //   clientName: "ASEH",
    //   clientLogo: "/project-path/aseh/section2/aseh-logo.png",
    //   clientDepartment: "ASEH | R&D Dept.",
    //   clientDepartmentLogo: "/project-path/aseh/section2/aseh-logo.png",
    //   bloompointLogo: "/bp-logo-yellow.png",
    //   bloompointDepartment: "BloomPoint",
    //   bloompointClsTitle: "Academy",
    //   blueprintLogo: "/project-path/aseh/section2/aseh-logo.png",
    //   blueprintTitle: "ASEH Academy",
    //   blueprintDescription: ["Academy for Installers"],
    //   goalTitle: "Industrial Efficiency",
    //   goalDescription: [
    //     "Prototype | Refrigeration Installers Community (1200 People)",
    //     // "Viable Community Health & Wellbeing",
    //     // "Increased Retention & Loyalty",
    //   ],
    // },
    section3: {
      title: "ASEH Project",
      images: [
        "/project-path/aseh/section3/aseh_02.jpg",
        "/project-path/aseh/section3/aseh_03.jpg",
        "/project-path/aseh/section3/aseh_04.jpg",
        "/project-path/aseh/section3/aseh_05.jpg",
        "/project-path/aseh/section3/aseh_06.jpg",
      ],
    },
  },

  {
    id: "12",
    name: `DARASIAB`,
    subName: `EXPERIENCE GARDEN`,
    category: "Educational Institutions",
    image: "/projects-cover-image/SMEs/darasiab.jpg",
    tagline: "experience-garden",
    state: "old",
    slug: "darasiab",

    section1: {
      color: "darasiab_green",
      clientName: "DARASIAB",

      problem: `• Theoretical Environmental Education
      • Lack of Experiential Learning`,

      communityLedSolution: "Experience Garden for Kids",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `International Schools (20 Schools)`,
      },

      target: "Environmental Awareness",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
    },
    // section2: {
    //   clientName: "DARASIAB",
    //   clientLogo: "/project-path/darasiab/section2/darasiab-logo.png",
    //   clientDepartment: "DARASIAB | Principal Dept.",
    //   clientDepartmentLogo: "/project-path/darasiab/section2/darasiab-logo.png",
    //   bloompointLogo: "/bp-logo-yellow.png",
    //   bloompointDepartment: "BloomPoint",
    //   bloompointClsTitle: "After School",
    //   blueprintLogo: "/project-path/darasiab/section2/darasiab-logo.png",
    //   blueprintTitle: "Experience Garden Community",
    //   blueprintDescription: ["Nature Awareness", "Environment", "Nurturing"],
    //   goalTitle: "Environmental Awareness",
    //   goalDescription: [
    //     "Prototype | International Schools (20 Schools)",
    //     "Nature-Based Experiences",
    //     // "Viable Community Health & Wellbeing",
    //     // "Increased Retention & Loyalty",
    //   ],
    // },
    section3: {
      title: "DARASIAB Project",
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

  {
    id: "13",
    name: "NIKAN",
    subName: "COMMUNITY HEALTH & WELL-BEING",
    category: "Large Enterprises",
    image: "/projects-cover-image/Cities/nikan.jpg",
    tagline: "community-health-wellbeing",
    state: "old",
    ongoing: true,
    slug: "nikan",

    section1: {
      color: "nikan_yellow",
      clientName: "Nikan Chain Hospitals",

      problem: `• Increasing Awareness
      • Disease Prevention
      • A Deeper Connection Between Nikan Hospital & the Public`,

      communityLedSolution: "Building Health Through Community",

      prototypeOrEcosystem: {
        label: "Prototype",
        value: `Prevention | Community | Care (PCC)`,
      },

      target: "Deepr Relation & Increasing People Awareness",
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
      // link: "?",
    },
  },

  // {
  //   id: "14",
  //   name: "KIA",
  //   subName: "COFFEE INDUSTRY PROVIDER",
  //   category: "Medium-Sized Businesses",
  //   image: "/projects-cover-image/SMEs/kia.jpg",
  //   tagline: "coffee-grounds-upcycle-products",
  //   state: "old",
  //   slug: "kia",

  //   section1: {
  //     color: "keune_umber",
  //     clientName: "KIA",
  //     // clientDescription: "Community-Driven Wellbeing Perspective",
  //     problem: `-`,
  //     communityLedSolution: "-",
  //     prototype: `-`,
  //     // designatedGroup: "Keune Care Club Members",
  // target: "-",
  //     // link: "https://thebahaman.com/",
  //   },
  // },

  {
    id: "15",
    name: "EKBATANA",
    subName: "COMPLEX SERVICES",
    category: "Cities",
    image: "/projects-cover-image/Cities/ekbatana.jpg",
    tagline: "",
    state: "old",
    slug: "ekbatana",

    section1: {
      color: "darasiab_green",
      clientName: "EKBATANA COMPLEX",
      problem: `-`,
      communityLedSolution: "-",
      prototypeOrEcosystem: {
        label: "Prototype",
        value: `-`,
      },
      // clientDescription: "Community-Driven Wellbeing Perspective",
      // designatedGroup: "Keune Care Club Members",
      // target: "-",
      // link: "https://thebahaman.com/",
    },
  },

  // {
  //   id: "16",
  //   name: "MAKOKO",
  //   subName: "SUSTAINABLE SCHOOL",
  //   category: "Educational Institutions",
  //   image: "/projects-cover-image/SMEs/makoko.jpg",
  //   tagline: "floating-center",
  //   state: "old",
  //   slug: "makoko",
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
