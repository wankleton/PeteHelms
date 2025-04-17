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
    description: "Develop an AI roadmap aligned with business goals. Identify priorities and create implementation plans.",
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
    description: "Restructure processes and teams to effectively integrate AI into your organization. Build internal capabilities and establish governance frameworks.",
    features: [
      "Organizational readiness assessment",
      "Change management and adoption planning",
      "Data strategy and infrastructure guidance",
      "Talent and capability development"
    ]
  },
  {
    id: "product-strategy",
    icon: PieChartIcon,
    title: "Product Strategy",
    description: "Develop AI-powered products that solve real customer problems. From ideation to market validation, create a roadmap for successful product development.",
    features: [
      "Market and competitive analysis",
      "User-centered design and validation",
      "MVP definition and development roadmap",
      "Pricing and go-to-market strategy"
    ]
  },
  {
    id: "executive-advisory",
    icon: UsersIcon,
    title: "Executive Advisory",
    description: "Ongoing guidance for leadership teams navigating AI implementation. Get expert perspective on technology trends, risks, and competitive landscape.",
    features: [
      "Regular technology trend briefings",
      "Competitive intelligence and market analysis",
      "Strategic planning and decision support",
      "Board and investor communication preparation"
    ]
  },
  {
    id: "ai-workshops",
    icon: GraduationCapIcon,
    title: "AI Workshops & Training",
    description: "Customized training programs to build AI literacy across your organization. Equip your teams with the knowledge to participate in AI initiatives.",
    features: [
      "Executive-level AI literacy sessions",
      "Technical team upskilling programs",
      "Business team AI applications training",
      "Interactive workshops with real-world cases"
    ]
  },
  {
    id: "ai-ethics",
    icon: FileTextIcon,
    title: "AI Ethics & Governance",
    description: "Develop frameworks for responsible AI deployment. Ensure your AI initiatives align with ethical principles and regulatory requirements.",
    features: [
      "Ethical framework development",
      "Bias detection and mitigation strategies",
      "Regulatory compliance guidance",
      "Transparency and explainability approaches"
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
