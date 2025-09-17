import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import easLogo from "@/assets/eas-logo.svg";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={easLogo} alt="Early Autism Services" className="h-12 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
            Home
          </a>
          <a href="#" className="flex items-center text-primary-foreground hover:text-secondary transition-colors font-medium">
            About <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#" className="flex items-center text-primary-foreground hover:text-secondary transition-colors font-medium">
            Services <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#" className="flex items-center text-primary-foreground hover:text-secondary transition-colors font-medium">
            Locations <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#" className="text-primary-foreground hover:text-secondary transition-colors font-medium">
            Careers
          </a>
          <a href="#" className="flex items-center text-primary-foreground hover:text-secondary transition-colors font-medium">
            Resources <ChevronDown className="ml-1 h-4 w-4" />
          </a>
        </nav>
        
        <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 py-2">
          Contact an EAS Intake Specialist
        </Button>
      </div>
    </header>
  );
};

export default Header;