import { Button } from "@/components/ui/button";
import inHomeTherapy from "@/assets/in-home-aba-therapy.jpg";

const ComprehensiveServicesSection = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Autism Therapy & Parent Support: Our Comprehensive Services
            </h2>
            
            <p className="text-lg leading-relaxed text-foreground">
              No two children with autism are alike, which is why at EAS, we offer many services to help your child based on their specific needs. Bring your child to our center for a play-based learning environment with their peers and a Behavior Technician, or have your child receive therapy services at home to avoid disrupting their routine.
            </p>
            
            <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3">
              Get in touch
            </Button>
          </div>
          
          <div>
            <img 
              src={inHomeTherapy} 
              alt="In-home ABA therapy session" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesSection;