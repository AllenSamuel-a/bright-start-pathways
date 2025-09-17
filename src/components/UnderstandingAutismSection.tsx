import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import fatherHelpingChild from "@/assets/6667b69606679fabd781b4d7_AdobeStock_177432387_1.webp";

const UnderstandingAutismSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Blue Content Container with Wave Effect */}
          <div className="lg:w-1/2 relative">
            <div 
              className={`bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl relative overflow-hidden transition-all duration-1000 ease-out ${
                isVisible ? 'animate-wave-flow' : ''
              }`}
              style={{
                willChange: 'transform, border-radius',
                transform: isVisible ? 'translateY(-10px)' : 'translateY(0)',
              }}
            >
              {/* Animated wave border effect */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary-foreground) / 0.1))',
                  filter: isVisible ? 'blur(0px)' : 'blur(2px)',
                  transition: 'all 1s ease-out',
                }}
              />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Understanding Autism: What's Next for My Child?
                </h2>
                
                <p className="text-lg leading-relaxed mb-8 opacity-95">
                  From understanding your child's diagnosis to starting a therapy program, there are a lot of steps along the way. Our team of clinicians are here to help. We can answer any questions you have and get you on the path to starting a personalized therapy program for your child. Below is a step-by-step guide of our process at EAS.
                </p>
              </div>
              
              {/* Flowing wave decoration */}
              <div 
                className="absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--primary-foreground)) 0%, transparent 70%)',
                  animation: isVisible ? 'float 6s ease-in-out infinite' : 'none',
                }}
              />
              <div 
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-15"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--primary-foreground)) 0%, transparent 70%)',
                  animation: isVisible ? 'float 8s ease-in-out infinite reverse' : 'none',
                }}
              />
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src={fatherHelpingChild} 
                alt="Father helping child with autism therapy activities" 
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingAutismSection;