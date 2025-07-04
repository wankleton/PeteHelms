import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InteractiveCursor from "@/components/ui/interactive-cursor";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import { FloatingElements } from "@/components/ui/floating-elements";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="font-sans bg-background text-secondary-900 antialiased min-h-screen flex flex-col">
      <ScrollIndicator />
      <InteractiveCursor />
      <FloatingElements />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
