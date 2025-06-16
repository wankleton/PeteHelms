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
    title: "AI Strategy Consulting",
    description: "Build your AI roadmap. Strategic planning that delivers ROI.",
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
    title: "AI Transformation",
    description: "Transform your organization. Build AI capabilities that scale.",
    features: [
      "Readiness assessment",
      "Change management",
      "Data strategy",
      "Capability development"
    ]
  },
  {
    id: "product-strategy",
    icon: PieChartIcon,
    title: "Product Strategy",
    description: "Build AI products customers love. From concept to market success.",
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
    description: "Strategic guidance for leadership teams. Navigate AI trends and competitive threats.",
    features: [
      "Technology trend briefings",
      "Competitive intelligence",
      "Strategic planning",
      "Board communication prep"
    ]
  },
  {
    id: "ai-workshops",
    icon: GraduationCapIcon,
    title: "AI Workshops & Training",
    description: "Upskill your teams. Build AI literacy that drives adoption.",
    features: [
      "Executive AI literacy",
      "Technical team upskilling",
      "Business team training",
      "Interactive workshops"
    ]
  },
  {
    id: "ai-ethics",
    icon: FileTextIcon,
    title: "AI Ethics & Governance",
    description: "Build responsible AI. Ensure compliance and ethical implementation.",
    features: [
      "Ethical frameworks",
      "Bias detection",
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
