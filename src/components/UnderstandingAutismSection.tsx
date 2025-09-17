import React from "react";
import fatherHelpingChild from "@/assets/6667b69606679fabd781b4d7_AdobeStock_177432387_1.webp";

const UnderstandingAutismSection = () => {
  return (
    <section className="wave-section relative">
      {/* Wave Divider */}
      <div className="wave-divider relative w-full h-16">
        <svg
          className="w-full h-full fill-background"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Two Column Layout */}
      <div className="bg-background py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="column image">
              <img 
                src={fatherHelpingChild} 
                alt="Dad teaching his kid how to write"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Blue Card */}
            <div className="column blue-card">
              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Understanding Autism: What's Next for My Child?
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                  From understanding your child's diagnosis, to starting a therapy program, 
                  there are a lot of steps along the way. Our team of clinicians are here 
                  to help. We can answer any questions you have and get you on the path to 
                  starting a personalized therapy program for your child. Below is a step 
                  by step guide of our process at EAS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingAutismSection;