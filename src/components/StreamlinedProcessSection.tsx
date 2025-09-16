import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const StreamlinedProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "1",
      title: "Give us a call",
      description: "Give us a call (312) 965-2997\nOR\nUse this link to request a call from an Intake Specialist\nRequest to Speak with an EAS Intake Specialist Today",
      type: "yellow"
    },
    {
      number: "2", 
      title: "We will work with your insurance",
      description: "Our team will work with your insurance! Once we gather your profile and required documents, our team will verify and share your benefits eligibility and ensure your insurance requirements are met.",
      type: "blue"
    },
    {
      number: "3",
      title: "We Will Conduct a Learner Assessment and Personalize a Treatment Plan", 
      description: "We will provide a 1:1 assessment through a variety of play, observation, and conversation. From there, our dedicated Clinical team will build a personalized therapy program tailored to your learner's individual needs.",
      type: "yellow"
    },
    {
      number: "4",
      title: "We Will Submit Our Therapy Plan To Your Insurance",
      description: "Our Clinic and Authorizations team will submit all required documents and clinical recommendations to your Insurance Carrier for approval to begin 1:1 therapy services.",
      type: "blue"
    },
    {
      number: "5",
      title: "Welcome to ABA Therapy with Early Autism Services!",
      description: "Once we receive approval from your Insurance Carrier, and have paired your learner with a qualified 1:1 therapist, we will begin your weekly ABA therapy program. Throughout your partnership with us, your clinical team will collaborate with you along the way to ensure success and progressive therapy throughout your program.",
      type: "yellow"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wave-animation');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Wave transition from previous section */}
      <div className="wave-divider">
        <svg
          className="w-full h-20 fill-primary"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      <section 
        ref={sectionRef}
        className="relative py-20 px-6 bg-primary text-primary-foreground overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Our Streamlined 5-Step Process
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg leading-relaxed opacity-90">
                Your next steps are the most crucial after your child receives an autism spectrum disorder (ASD) diagnosis. The clinicians at EAS are here to help you and your child get on the right path. Follow our five-step process for a personalized ABA therapy for ASD program for your child:
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`rounded-lg p-6 h-full min-h-[300px] flex flex-col ${
                  step.type === 'yellow' 
                    ? 'bg-yellow-400 text-gray-900' 
                    : 'bg-blue-800 text-white'
                }`}>
                  <div className="text-sm font-medium mb-2 opacity-70">
                    Step {step.number}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-4 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed flex-grow whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mb-8">
            {[0, 1, 2, 3, 4].map((dot) => (
              <div
                key={dot}
                className="w-2 h-2 rounded-full bg-white/30"
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Over 5,000 children empowered through Early Autism Services.
            </h3>
          </div>
        </div>
      </section>

      {/* Bottom wave transition */}
      <div className="wave-divider-bottom">
        <svg
          className="w-full h-20 fill-primary rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </>
  );
};

export default StreamlinedProcessSection;