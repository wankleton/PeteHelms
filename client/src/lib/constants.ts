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
    id: "for-clients",
    icon: LightbulbIcon,
    title: "For Clients",
    description: "Strategic consulting and custom software development designed to cut costs and drive results for growing businesses.",
    features: [
      "Operations simplification",
      "Cost reduction strategies (30-50%)",
      "Custom AI-powered systems",
      "Strategic consulting"
    ]
  },
  {
    id: "for-partners",
    icon: NetworkIcon,
    title: "For Partners",
    description: "Collaborative builds and product innovation with a lean, high-performing team that delivers exceptional results.",
    features: [
      "Joint product development",
      "Innovation partnerships",
      "Lean team collaboration",
      "Shared expertise projects"
    ]
  },
  {
    id: "for-investors",
    icon: PieChartIcon,
    title: "For Investors",
    description: "Insight and access to early-stage products rooted in real-world business needs with proven market validation.",
    features: [
      "Market-validated opportunities",
      "Early-stage product access",
      "Business needs insights",
      "Investment guidance"
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
