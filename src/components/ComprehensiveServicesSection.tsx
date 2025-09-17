import { Button } from "@/components/ui/button";
import telehealthTherapy from "@/assets/67af327729932c64adfaa54d_Telehealth_aba_therapy.jpg";
import inHomeTherapy from "@/assets/67af3640aadccd061b1db2d0_In-home_ABA_therapy-3.jpg";
import centerBasedTherapy from "@/assets/67af3f916d58d2b8079ce30e_Center_based_therapy.jpg";

const ComprehensiveServicesSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        {/* First row - Main comprehensive services section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={telehealthTherapy}
              alt="Telehealth ABA therapy session" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 relative">
            {/* Blue overlay box */}
            <div className="bg-primary p-12 rounded-2xl text-primary-foreground shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Autism Therapy & Parent Support: Our Comprehensive Services
              </h2>
              
              <p className="text-xl leading-relaxed mb-8">
                No two children with autism are alike, which is why at EAS, we offer many services to help your child based on their specific needs. Bring your child to our center for a play-based learning environment with their peers and a Behavior Technician, or have your child receive therapy services at home to avoid disrupting their routine.
              </p>
              
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 rounded-full">
                Get in touch
              </Button>
            </div>
          </div>
        </div>

        {/* Second row - In-Home ABA Therapy section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              In-Home ABA Therapy Tailored for Your Child
            </h2>
            
            <p className="text-xl leading-relaxed text-foreground">
              Personalized one-on-one ABA therapy at Early Autism Services (EAS), provided in the comfort of your own home. Our approach focuses on building functional skills within your child's natural environment.
            </p>
            
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 rounded-full">
              Learn more
            </Button>
          </div>
          
          <div>
            <img 
              src={inHomeTherapy}
              alt="Mother and child brushing teeth together in home environment" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Third row - Center-Based ABA Therapy section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={centerBasedTherapy}
              alt="Child playing with colorful blocks in therapy center with therapist" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Center-Based ABA Therapy Tailored for Your Child
            </h2>
            
            <p className="text-xl leading-relaxed text-foreground">
              Our center-based ABA therapy offers a fun, play-based environment where your child learns through interactive activities like table time, peer play, and free play. With dedicated one-on-one therapy, a Behavior Technician works closely with your child under the supervision of a Board Certified Behavior Analyst.
            </p>
            
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 rounded-full">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesSection;