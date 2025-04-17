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
    description: "Develop a comprehensive AI roadmap aligned with your business objectives. Identify opportunities, prioritize initiatives, and create an implementation plan.",
    features: [
      "Opportunity assessment and prioritization",
      "ROI analysis and business case development",
      "Technology selection and vendor evaluation",
      "Risk assessment and mitigation strategies"
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
    description: "Understand your business objectives, current capabilities, and opportunities for AI implementation."
  },
  {
    title: "Strategy Development",
    description: "Create a roadmap aligning AI initiatives with business goals, including resource planning and ROI projections."
  },
  {
    title: "Implementation Planning",
    description: "Define the technical approach, data requirements, and organizational changes needed for success."
  },
  {
    title: "Execution Support",
    description: "Provide ongoing guidance during implementation, addressing challenges and ensuring alignment with strategy."
  },
  {
    title: "Measurement & Refinement",
    description: "Evaluate outcomes against objectives, capture learnings, and refine the approach for continuous improvement."
  }
];

// Testimonials
export const testimonials = [
  {
    quote: "Pete's strategic guidance helped us navigate the complexities of AI adoption. His approach is both visionary and practical, resulting in tangible business outcomes.",
    name: "Michael Roberts",
    title: "CTO",
    company: "TechInnovate"
  },
  {
    quote: "Working with Pete has transformed how we approach AI. His ability to translate complex technical concepts into business value is exceptional.",
    name: "Sarah Johnson",
    title: "CEO",
    company: "DataDriven Inc."
  },
  {
    quote: "Pete's strategic insights helped us prioritize our AI initiatives and focus on those with the highest ROI. His guidance was invaluable in our digital transformation journey.",
    name: "David Chen",
    title: "COO",
    company: "Global Solutions"
  }
];

// Contact information
export const contactInfo = {
  email: "hello@petehelms.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA (Available for remote consultation worldwide)"
};
