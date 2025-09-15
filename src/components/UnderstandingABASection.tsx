import momTeachingKids from "@/assets/mom-teaching-kids.webp";

const UnderstandingABASection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src={momTeachingKids} 
              alt="Mother teaching children with autism therapy" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="bg-primary p-8 rounded-lg text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Understanding ABA Therapy
            </h2>
            
            <div className="space-y-4">
              <p className="leading-relaxed">
                ABA therapy, grounded in the science of learning and behavior, aids children in developing essential skills across various domains. From fine and gross motor skills to language, communication, self-help, play, and social abilities, our therapy services target fundamental areas of development.
              </p>
              
              <p className="leading-relaxed">
                Autism presents unique challenges for skill acquisition, underscoring the importance of early intervention through ABA therapy for toddlers. Our curriculum integrates decades of research and experience in Applied Behavior Analysis to provide tailored support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingABASection;