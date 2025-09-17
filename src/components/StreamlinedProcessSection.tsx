import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StreamlinedProcessSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const leftWaveRef = useRef<HTMLDivElement>(null);
  const rightWaveRef = useRef<HTMLDivElement>(null);

  // Debug log to ensure component is using latest version
  console.log("StreamlinedProcessSection loaded - using leftWaveRef and rightWaveRef");

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
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

  // Enhanced flowing wave animation effect
  useEffect(() => {
    if (!isVisible || !leftWaveRef.current || !rightWaveRef.current) return;

    let animationId: number;
    let startTime = Date.now();

    const animateWave = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed / 3000) % 1; // 3 second cycle for smoother flow
      
      // Create breathing, living wave effect
      const baseHeight = 1.57476; // Base height in rem
      const maxHeight = 3.2; // Max height in rem
      const heightVariation = (maxHeight - baseHeight) * (Math.sin(progress * Math.PI * 2) * 0.5 + 0.5);
      const currentHeight = baseHeight + heightVariation;
      
      if (leftWaveRef.current && rightWaveRef.current) {
        // Apply dynamic height to both wave halves
        leftWaveRef.current.style.willChange = 'width, height';
        rightWaveRef.current.style.willChange = 'width, height';
        leftWaveRef.current.style.height = `${currentHeight}rem`;
        rightWaveRef.current.style.height = `${currentHeight}rem`;
      }

      animationId = requestAnimationFrame(animateWave);
    };

    // Start animation after a brief delay for smooth entry
    const timeoutId = setTimeout(animateWave, 300);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  const steps = [
    {
      number: "1",
      title: "Give us a call",
      description: "Call (312) 965-2997 OR use this link to request a call from an Intake Specialist.",
      type: "yellow"
    },
    {
      number: "2", 
      title: "We will work with your insurance",
      description: "Our team verifies benefits and ensures requirements are met.",
      type: "blue"
    },
    {
      number: "3",
      title: "We Will Conduct a Learner Assessment and Personalize a Treatment Plan", 
      description: "We provide 1:1 assessment and build a personalized therapy program tailored to your learner's needs.",
      type: "yellow"
    },
    {
      number: "4",
      title: "We Will Submit Our Therapy Plan To Your Insurance",
      description: "Our team submits all required documents to your Insurance Carrier for approval.",
      type: "blue"
    },
    {
      number: "5",
      title: "Welcome to ABA Therapy with Early Autism Services!",
      description: "Once approved, we pair your learner with a qualified therapist and begin your weekly program.",
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
    <section 
      ref={sectionRef}
      className="dark-section relative bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Wave Divider - Two Mirrored Halves */}
      <div className="divider relative w-full">
        <div 
          ref={leftWaveRef}
          className="divider---half-2 absolute left-0 top-0 w-1/2 bg-background"
          style={{ 
            height: '1.57476rem',
            willChange: 'width, height',
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
          }}
        />
        <div 
          ref={rightWaveRef}
          className="divider---half-2 x-right absolute right-0 top-0 w-1/2 bg-background"
          style={{ 
            height: '1.57476rem',
            willChange: 'width, height',
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="container mx-auto py-16 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Streamlined 5-Step Process
          </h2>
          <p className="text-lg leading-relaxed opacity-90 max-w-4xl mx-auto">
            Your next steps are the most crucial after your child receives an autism spectrum disorder (ASD) diagnosis. 
            The clinicians at EAS are here to help you and your child get on the right path.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative mb-12">
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
                  <div className={`rounded-lg p-6 h-full min-h-[300px] flex flex-col ${
                    step.type === 'yellow' 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-blue-800 text-white'
                  }`}>
                    <div className="text-sm font-medium mb-3 opacity-70">
                      Step {step.number}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
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
        </div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden mobile-cards space-y-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className={`rounded-lg p-6 ${
              step.type === 'yellow' 
                ? 'bg-secondary text-secondary-foreground' 
                : 'bg-blue-800 text-white'
            }`}>
              <div className="text-sm font-medium mb-3 opacity-70">
                Step {step.number}
              </div>
              
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {step.title}
              </h3>
              
              <p className="text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
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
  );
};

export default StreamlinedProcessSection;