export type Category = "SMEs" | "Large Enterprises" | "Cities";

export interface Project {
  id: string;
  name: string;
  category: Category;
  image: string;
  slug: string;
}

export const categories: Category[] = ["SMEs", "Large Enterprises", "Cities"];

export const projects: Project[] = [
  // SMEs (10)
  { id: "1", name: "Digital Marketing Agency", category: "SMEs", image: "/projects/sme-1.jpg", slug: "digital-marketing-agency" },
  { id: "2", name: "E-Commerce Platform", category: "SMEs", image: "/projects/sme-2.jpg", slug: "ecommerce-platform" },
  { id: "3", name: "Tech Startup", category: "SMEs", image: "/projects/sme-3.jpg", slug: "tech-startup" },
  { id: "4", name: "Design Studio", category: "SMEs", image: "/projects/sme-4.jpg", slug: "design-studio" },
  { id: "5", name: "Content Creator", category: "SMEs", image: "/projects/sme-5.jpg", slug: "content-creator" },
  { id: "6", name: "Fitness Coaching", category: "SMEs", image: "/projects/sme-6.jpg", slug: "fitness-coaching" },
  { id: "7", name: "Consulting Firm", category: "SMEs", image: "/projects/sme-7.jpg", slug: "consulting-firm" },
  { id: "8", name: "Local Bakery", category: "SMEs", image: "/projects/sme-8.jpg", slug: "local-bakery" },
  { id: "9", name: "Software Developer", category: "SMEs", image: "/projects/sme-9.jpg", slug: "software-developer" },
  { id: "10", name: "Event Planning", category: "SMEs", image: "/projects/sme-10.jpg", slug: "event-planning" },

  // Large Enterprises (5)
  { id: "11", name: "Global Tech Corporation", category: "Large Enterprises", image: "/projects/enterprise-1.jpg", slug: "global-tech-corporation" },
  { id: "12", name: "Financial Services Group", category: "Large Enterprises", image: "/projects/enterprise-2.jpg", slug: "financial-services-group" },
  { id: "13", name: "Healthcare Network", category: "Large Enterprises", image: "/projects/enterprise-3.jpg", slug: "healthcare-network" },
  { id: "14", name: "Retail Chain", category: "Large Enterprises", image: "/projects/enterprise-4.jpg", slug: "retail-chain" },
  { id: "15", name: "Manufacturing Corp", category: "Large Enterprises", image: "/projects/enterprise-5.jpg", slug: "manufacturing-corp" },

  // Cities (3)
  { id: "16", name: "Smart City Initiative", category: "Cities", image: "/projects/city-1.jpg", slug: "smart-city-initiative" },
  { id: "17", name: "Urban Development", category: "Cities", image: "/projects/city-2.jpg", slug: "urban-development" },
  { id: "18", name: "Metro Integration", category: "Cities", image: "/projects/city-3.jpg", slug: "metro-integration" },
];
