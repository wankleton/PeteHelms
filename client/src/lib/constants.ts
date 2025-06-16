import {
  LightbulbIcon,
  NetworkIcon,
  PieChartIcon,
  UsersIcon,
  GraduationCapIcon,
  FileTextIcon
} from "lucide-react";

// Navigation items
export const navigationItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "testimonials", name: "Testimonials" },
  { id: "contact", name: "Contact" }
];

// Services
export const services = [
  {
    id: "ai-strategy",
    icon: LightbulbIcon,
    title: "Innovation Strategy",
    description: "Build breakthrough roadmaps. Strategic innovation that drives growth.",
    features: [
      "Opportunity assessment",
      "ROI analysis",
      "Technology selection",
      "Risk mitigation"
    ]
  },
  {
    id: "ai-transformation",
    icon: NetworkIcon,
    title: "Business Transformation",
    description: "Revolutionize operations. Scale breakthrough innovations across your organization.",
    features: [
      "Readiness assessment",
      "Change management",
      "Technology strategy",
      "Capability development"
    ]
  },
  {
    id: "product-strategy",
    icon: PieChartIcon,
    title: "Product Innovation",
    description: "Build breakthrough products customers love. From concept to market domination.",
    features: [
      "Market analysis",
      "User-centered design",
      "MVP definition",
      "Go-to-market strategy"
    ]
  },
  {
    id: "executive-advisory",
    icon: UsersIcon,
    title: "Executive Advisory",
    description: "Strategic guidance for leadership teams. Navigate innovation trends and market disruption.",
    features: [
      "Innovation trend briefings",
      "Competitive intelligence",
      "Strategic planning",
      "Board communication prep"
    ]
  },
  {
    id: "ai-workshops",
    icon: GraduationCapIcon,
    title: "Innovation Workshops",
    description: "Upskill your teams. Build innovation capabilities that drive competitive advantage.",
    features: [
      "Executive innovation literacy",
      "Technical team upskilling",
      "Business team training",
      "Interactive workshops"
    ]
  },
  {
    id: "ai-ethics",
    icon: FileTextIcon,
    title: "Technology Governance",
    description: "Build responsible innovation. Ensure compliant and ethical technology deployment.",
    features: [
      "Governance frameworks",
      "Risk assessment",
      "Compliance guidance",
      "Transparency solutions"
    ]
  }
];

// Process steps
export const processSteps = [
  {
    title: "Discovery & Assessment",
    description: "Analyze business objectives and AI opportunities."
  },
  {
    title: "Strategy Development",
    description: "Create AI roadmap with resource planning and ROI projections."
  },
  {
    title: "Implementation Planning",
    description: "Define technical approach and organizational requirements."
  },
  {
    title: "Execution Support",
    description: "Provide guidance during implementation, ensuring strategic alignment."
  },
  {
    title: "Measurement & Refinement",
    description: "Evaluate outcomes and refine for continuous improvement."
  }
];

// Testimonials
export const testimonials = [
  {
    quote: "Pete's guidance helped us navigate AI adoption with a practical approach that delivered tangible business outcomes.",
    name: "Michael Roberts",
    title: "CTO",
    company: "TechInnovate"
  },
  {
    quote: "Pete transforms complex AI concepts into exceptional business value.",
    name: "Sarah Johnson",
    title: "CEO",
    company: "DataDriven Inc."
  },
  {
    quote: "His strategic insights helped us prioritize AI initiatives with the highest ROI for our transformation.",
    name: "David Chen",
    title: "COO",
    company: "Global Solutions"
  }
];

// Contact information
export const contactInfo = {
  email: "hello@petehelms.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA (Remote worldwide)"
};
