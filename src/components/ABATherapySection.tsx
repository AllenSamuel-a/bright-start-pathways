import { Button } from "@/components/ui/button";
import kidLearning from "@/assets/kid-learning-3.webp";
import momTeaching from "@/assets/mom-teaching-kid.webp";
import momTeaching2 from "@/assets/mom-teaching-kid-2.webp";

const ABATherapySection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Empowering Children Through Personalized ABA Therapy
            </h2>
            
            <div className="space-y-4 text-foreground">
              <p className="text-lg leading-relaxed">
                For over a decade, Early Autism Services has provided effective, ABA therapy for children with autism. In 2008, EAS began offering in-home Applied Behavioral Analysis (ABA) therapy in the greater Chicago area. A little more than a decade later, our team now helps families throughout the United States. It is our mission to ensure that high quality therapy is available for all children with autism.
              </p>
              
              <p className="text-lg leading-relaxed">
                We offer in-home, center-based therapy, Telehealth therapy, social skills groups, tutoring, parent education, and more! What makes our programs effective is our personalized approach to each child's needs.
              </p>
            </div>
            
            <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3">
              Get in touch
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={momTeaching} 
                alt="Mother teaching child with autism" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src={kidLearning} 
                alt="Child learning with educational materials" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="pt-8">
              <img 
                src={momTeaching2} 
                alt="Therapist working with child" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABATherapySection;