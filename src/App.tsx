import React, { useState, useEffect, useRef } from "react";
import { FA } from "./types";
import { ReportCover } from "./components/ReportCover";
import { WorldCupGuaranteeReview } from "./components/sections/WorldCupGuaranteeReview";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("cover");

  // References to section elements for scrolling and scroll spying
  const sectionRefs = {
    cover: useRef<HTMLDivElement>(null),
    "fk-world-cup-review": useRef<HTMLDivElement>(null),
  };

  // Set document title
  useEffect(() => {
    document.title = FA.pageTitle;
  }, []);

  // Scrollspy logic to automatically highlight active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find which section is currently in view
      let currentSection = "cover";
      for (const [key, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = key;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section jump helper
  const scrollToSection = (id: string) => {
    const ref = sectionRefs[id as keyof typeof sectionRefs];
    if (ref && ref.current) {
      const offsetTop = ref.current.offsetTop - 80; // Offset for header
      window.scrollTo({
        top: offsetTop,
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="report-shell min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-50 antialiased">
      {/* Print-only Header (visible when printing) */}
      <div className="hidden print:flex items-center justify-between border-b-2 border-black pb-3 mb-10 text-base font-black text-slate-900">
        <span>{FA.printHeaderLeft}</span>
      </div>

      {/* Workspace Container */}
      <div className="flex-1 flex w-full py-8 md:py-10">
        {/* Main Content Area */}
        <main className="report-main flex-1 w-full space-y-14 print:space-y-20">
          {/* Cover & Directory */}
          <div ref={sectionRefs.cover} className="scroll-mt-6">
            <ReportCover />
          </div>

          {/* SJB Guarantee Review */}
          <div ref={sectionRefs["fk-world-cup-review"]} className="scroll-mt-6">
            <WorldCupGuaranteeReview />
          </div>

          {/* Report End Page */}
          <footer className="pt-24 pb-32 text-center print:hidden">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="flex flex-col items-center gap-4">
                <div className="h-1 w-16 bg-slate-900" />
                <div className="text-slate-900 font-black text-base">
                  汇报结束
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
