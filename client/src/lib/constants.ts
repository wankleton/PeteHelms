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
  { id: "purpose", name: "Purpose" },
  { id: "value", name: "Value" },
  { id: "services", name: "Offerings" }
];

// Services
export const services = [
  {
    id: "workshops",
    icon: NetworkIcon,
    title: "Workshops",
    description: "For teams looking to implement AI.",
    features: [
      "AI Literacy",
      "Custom Workshops",
      "Implementation Support",
      "Staff Trainings"
    ]
  },
  {
    id: "advisory",
    icon: LightbulbIcon,
    title: "Advisory",
    description: "For business leaders looking for tech support.",
    features: [
      "Tech Support",
      "Digital Transformation",
      "Technology Consulting",
      "Strategic Planning"
    ]
  },
  {
    id: "development",
    icon: PieChartIcon,
    title: "Development",
    description: "For founders looking to develop custom solutions.",
    features: [
      "Custom applications",
      "AI system integration",
      "Process automation",
      "Technical consulting"
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
    quote: "Pete sees around corners in ways that consistently surprise me. His ability to connect seemingly unrelated trends into actionable strategy is remarkable.",
    name: "Sarah Chen",
    title: "Founder",
    company: "Next Horizon"
  },
  {
    quote: "What I appreciate most about Pete is his honesty. He tells you what you need to hear, not what you want to hear. That's rare and valuable.",
    name: "Michael Torres",
    title: "CEO",
    company: "Evolved Systems"
  },
  {
    quote: "Pete doesn't just think strategically—he thinks like someone who's actually built things. That practical wisdom makes all the difference.",
    name: "Lisa Park",
    title: "CTO",
    company: "Forward Labs"
  }
];

// Contact information
export const contactInfo = {
  email: "pete@devellp.com",
  phone: "(954) 589-4333",
  location: "Fort Lauderdale, FL"
};
