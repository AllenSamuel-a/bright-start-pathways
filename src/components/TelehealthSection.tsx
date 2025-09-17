import { Button } from "@/components/ui/button";

const TelehealthSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Telehealth ABA Therapy Tailored for Your Child
            </h2>
            
            <p className="text-xl leading-relaxed text-foreground">
              At Early Autism Services, we offer personalized telehealth services tailored to meet each child's unique needs, providing the same quality care and support as our in-home programs but delivered remotely through electronic devices.
            </p>
            
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 rounded-full">
              Learn more
            </Button>
          </div>
          
          <div>
            <img 
              src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Father and child during telehealth session" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelehealthSection;