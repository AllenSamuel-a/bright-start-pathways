import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 ml-auto mr-8 text-white max-w-xl">
        <div className="bg-black/60 p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Empowering</span> children with autism
          </h1>
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Dedicated to compassionate and personalized support for children on the autism spectrum. Our mission is to foster their growth, development, and well-being through specialized programs and care.
          </p>
          <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;