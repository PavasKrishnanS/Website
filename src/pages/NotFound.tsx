import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero neural-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center space-y-8 px-6">
        <div className="space-y-4">
          <AlertTriangle className="h-24 w-24 text-accent mx-auto animate-pulse" />
          <h1 className="text-6xl lg:text-8xl font-bold gradient-neural bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Looks like this page got lost in the neural network! The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button variant="neural" size="lg" asChild className="px-8 py-3">
            <a href="/">
              <Home className="h-5 w-5 mr-2" />
              Return to Home
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Or navigate using the menu above to explore other sections
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
