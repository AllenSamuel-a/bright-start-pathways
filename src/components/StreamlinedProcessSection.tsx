import { Button } from "@/components/ui/button";
import telehealthTherapy from "@/assets/67af327729932c64adfaa54d_Telehealth_aba_therapy.jpg";
import fatherTeaching from "@/assets/6667b69606679fabd781b4d7_AdobeStock_177432387_1.webp";

const StreamlinedProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Give us a call",
      description: "Call us at (312) 965-2997 to get started with our personalized ABA therapy program for your child.",
    },
    {
      number: "2", 
      title: "Insurance Verification",
      description: "We will work with your insurance! Our team will work with your insurance! Once we gather your profile and required documents, our team will verify and share your benefits eligibility and ensure your insurance requirements are met.",
    },
    {
      number: "3",
      title: "Assessment & Evaluation", 
      description: "Our Board Certified Behavior Analysts conduct a comprehensive assessment to understand your child's unique needs and develop a personalized treatment plan.",
    },
    {
      number: "4",
      title: "Program Implementation",
      description: "We begin implementing your child's personalized ABA therapy program, whether in-home, center-based, or through telehealth services.",
    },
    {
      number: "5",
      title: "Ongoing Support & Progress",
      description: "Our team provides continuous support, regular progress monitoring, and program adjustments to ensure your child's success.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Streamlined 5-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Your next steps are the most crucial after your child receives an autism spectrum disorder (ASD) diagnosis. 
            The clinicians at EAS are here to help you and your child get on the right path. Follow our five-step process 
            for a personalized ABA therapy for ASD program for your child:
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number Circle */}
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                {step.number}
              </div>
              
              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Images Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Telehealth ABA Therapy
            </h3>
            <h4 className="text-2xl font-semibold text-primary">
              Tailored for Your Child
            </h4>
            <p className="text-lg leading-relaxed text-foreground">
              At Early Autism Services, we offer personalized telehealth services tailored to meet each child's unique needs, 
              providing the same quality care and support as our in-home programs but delivered remotely through electronic devices.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3">
              Learn more
            </Button>
          </div>
          
          <div className="grid gap-6">
            <img 
              src={telehealthTherapy} 
              alt="Family participating in telehealth ABA therapy session" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src={fatherTeaching} 
              alt="Father teaching child during therapy session" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Over 5,000 children empowered through Early Autism Services
          </h3>
          <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3">
            Contact an EAS Intake Specialist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StreamlinedProcessSection;