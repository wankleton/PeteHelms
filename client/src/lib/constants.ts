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
  { id: "services", name: "Offerings" },
  { id: "book", name: "Book Call" }
];

// Services
export const services = [
  {
    id: "executive-advisory",
    icon: LightbulbIcon,
    title: "Executive Advisory",
    description: "Strategic guidance for leadership teams navigating digital transformation and technology decisions.",
    features: [
      "Technology strategy development",
      "Digital transformation roadmaps",
      "Executive decision support",
      "Innovation planning"
    ]
  },
  {
    id: "ai-workshops",
    icon: NetworkIcon,
    title: "AI Workshops",
    description: "Hands-on training sessions to help teams understand and implement AI solutions effectively.",
    features: [
      "AI literacy training",
      "Custom workshop design",
      "Practical implementation guidance",
      "Team skill development"
    ]
  },
  {
    id: "software-development",
    icon: PieChartIcon,
    title: "Software Development",
    description: "Custom software solutions and AI-powered systems built to solve specific business challenges.",
    features: [
      "Custom application development",
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
  email: "hello@petehelms.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA (Remote worldwide)"
};
