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
  { id: "services", name: "Work" },
  { id: "testimonials", name: "Testimonials" },
  { id: "contact", name: "Contact" }
];

// Services
export const services = [
  {
    id: "strategy-sessions",
    icon: LightbulbIcon,
    title: "Strategy Sessions",
    description: "Deep dive conversations to clarify your biggest challenges and identify breakthrough opportunities. Perfect for when you need to think through complex decisions.",
    features: [
      "90-minute focused sessions",
      "Strategic problem-solving",
      "Opportunity identification", 
      "Action plan development"
    ]
  },
  {
    id: "advisory-partnership",
    icon: NetworkIcon,
    title: "Advisory Partnership",
    description: "Ongoing strategic guidance for leaders navigating transformation. Think of it as having an experienced advisor in your corner.",
    features: [
      "Monthly strategic check-ins",
      "Real-time decision support",
      "Team alignment sessions",
      "Strategic planning facilitation"
    ]
  },
  {
    id: "executive-workshops",
    icon: PieChartIcon,
    title: "Executive Workshops",
    description: "Custom workshops designed to align your leadership team around complex challenges and build strategic thinking capabilities.",
    features: [
      "Leadership team alignment",
      "Strategic thinking development",
      "Innovation methodology",
      "Decision-making frameworks"
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
