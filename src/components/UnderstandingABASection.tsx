import momTeachingKids from "@/assets/mom-teaching-kids.webp";

const UnderstandingABASection = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="relative">
          {/* Image container with rounded corners */}
          <div className="relative">
            <img 
              src={momTeachingKids} 
              alt="Mother teaching children with autism therapy" 
              className="w-full max-w-2xl h-auto rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Overlaid content box */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary p-8 rounded-2xl text-primary-foreground shadow-xl max-w-2xl w-full lg:w-3/5">
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