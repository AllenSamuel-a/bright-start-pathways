import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StreamlinedProcessSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, steps.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, steps.length - 2)) % Math.max(1, steps.length - 2));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Wave transition from previous section */}
      <div className="relative">
        <svg
          className="w-full h-16 fill-primary"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <section 
        className="relative py-16 px-6 bg-primary text-primary-foreground overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
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

          {/* Carousel Container */}
          <div className="relative mb-12">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden mx-16">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="flex-shrink-0 w-1/3">
                    <div className={`rounded-lg p-6 h-full min-h-[350px] flex flex-col ${
                      step.type === 'yellow' 
                        ? 'bg-yellow-400 text-gray-900' 
                        : 'bg-blue-800 text-white'
                    }`}>
                      <div className="text-sm font-medium mb-3 opacity-70">
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
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: Math.max(1, steps.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
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
    </>
  );
};

export default StreamlinedProcessSection;