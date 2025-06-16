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
    id: "strategic-thinking",
    icon: LightbulbIcon,
    title: "Strategic Thinking",
    description: "I help leaders see possibilities others miss. Years of building companies taught me to spot patterns and connect dots that others overlook.",
    features: [
      "Pattern recognition",
      "Systems thinking", 
      "Future scenario planning",
      "Decision frameworks"
    ]
  },
  {
    id: "innovation-guidance",
    icon: NetworkIcon,
    title: "Innovation Guidance",
    description: "Having lived through the messy reality of innovation, I guide teams through the human side of transformation.",
    features: [
      "Problem reframing",
      "Solution architecture",
      "Team alignment",
      "Execution planning"
    ]
  },
  {
    id: "technology-wisdom",
    icon: PieChartIcon,
    title: "Technology Wisdom",
    description: "Multiple tech cycles have shown me what actually works. I share practical insights from the trenches.",
    features: [
      "Technology selection",
      "Implementation strategy",
      "Risk mitigation",
      "Team development"
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
