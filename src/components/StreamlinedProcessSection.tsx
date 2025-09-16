import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StreamlinedProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('wave-animation');
          } else {
            setIsVisible(false);
            entry.target.classList.remove('wave-animation');
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

  useEffect(() => {
    const handleScroll = () => {
      if (waveRef.current && isVisible) {
        const scrollY = window.scrollY;
        const baseHeight = 3.27772; // rem
        const maxHeight = 4; // rem
        const animationHeight = baseHeight + (Math.sin(scrollY * 0.01) * 0.5);
        const finalHeight = Math.min(Math.max(animationHeight, baseHeight), maxHeight);
        
        waveRef.current.style.willChange = 'width, height';
        waveRef.current.style.height = `${finalHeight}rem`;
      }
    };

    if (isVisible) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

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
      <div ref={waveRef} className="wave-divider" style={{ height: '3.27772rem' }}>
        <svg
          className="w-full h-full fill-primary"
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

          {/* Carousel Container */}
          <div className="relative mb-16">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-300 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="flex-shrink-0 w-1/3">
                    <div className={`rounded-lg p-8 h-full min-h-[400px] flex flex-col ${
                      step.type === 'yellow' 
                        ? 'bg-yellow-400 text-gray-900' 
                        : 'bg-blue-800 text-white'
                    }`}>
                      <div className="text-sm font-medium mb-4 opacity-70">
                        Step {step.number}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-6 leading-tight">
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
          <div className="flex justify-center gap-2 mb-8">
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