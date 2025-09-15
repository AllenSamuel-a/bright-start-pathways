import { Button } from "@/components/ui/button";

const ComprehensiveServicesSection = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* First row - Main comprehensive services section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src="/src/assets/67af3640aadccd061b1db2d0_In-home ABA therapy.jpg"
              alt="Mother and child brushing teeth together" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 relative">
            {/* Blue overlay box */}
            <div className="bg-primary p-8 rounded-lg text-primary-foreground shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Autism Therapy & Parent Support: Our Comprehensive Services
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                No two children with autism are alike, which is why at EAS, we offer many services to help your child based on their specific needs. Bring your child to our center for a play-based learning environment with their peers and a Behavior Technician, or have your child receive therapy services at home to avoid disrupting their routine.
              </p>
              
              <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3">
                Get in touch
              </Button>
            </div>
          </div>
        </div>

        {/* Second row - In-Home ABA Therapy section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              In-Home ABA Therapy Tailored for Your Child
            </h2>
            
            <p className="text-lg leading-relaxed text-foreground">
              Personalized one-on-one ABA therapy at Early Autism Services (EAS), provided in the comfort of your own home. Our approach focuses on building functional skills within your child's natural environment.
            </p>
            
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3">
              Learn more
            </Button>
          </div>
          
          <div>
            <img 
              src="/src/assets/67af3f916d58d2b8079ce30e_Center based therapy.jpg"
              alt="Child and therapist playing with colorful blocks in therapy center" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesSection;