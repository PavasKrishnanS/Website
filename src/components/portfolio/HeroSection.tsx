import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, FileText, Sparkles, BarChart3 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/pavas.jpg";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgAttachment, setBgAttachment] = useState<'fixed' | 'scroll'>('fixed');
  const fullText = "Empowering American Business through Data & AI | Crafting Scalable Analytics for Game-Changing Insights";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Make background-attachment fixed on larger screens for a parallax feel,
  // but switch to 'scroll' on small screens for better mobile performance.
  useEffect(() => {
    const updateAttachment = () => {
      setBgAttachment(window.innerWidth > 768 ? 'fixed' : 'scroll');
    };
    updateAttachment();
    window.addEventListener('resize', updateAttachment);
    return () => window.removeEventListener('resize', updateAttachment);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden neural-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(3,7,18,0.45), rgba(3,7,18,0.45)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: bgAttachment
      }}
    >
      {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-background/60" />
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mt-32 mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Pavas Krishnan Shanmugasundaram"
                className="w-40 h-40 rounded-full border-4 border-accent/50 neural-glow floating"
              />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="h-8 w-8 text-accent animate-pulse" />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="gradient-neural bg-clip-text text-transparent">
                Pavas Krishnan
              </span>
              <br />
              <span className="text-foreground">
                Shanmugasundaram
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl lg:text-2xl text-accent font-medium">
                {displayedText}
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Turning Raw Data into Strategic Insights | Powering Intelligent Solutions & Pioneering Innovation through AI/ML. Passionate About Using Advanced Analytics to Tackle Real-World Challenges and Drive Tangible Results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="neural" size="lg" className="px-8 py-3" onClick={scrollToAbout}>
              Explore My Work
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/PavasKrishnanS" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://public.tableau.com/app/profile/pavas/vizzes" target="_blank" rel="noopener noreferrer">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Tableau
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="/assets/Pavas_Krishnan_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-5 w-5 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center text-muted-foreground hover:text-accent transition-smooth"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;