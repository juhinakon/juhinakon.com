import { Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center matrix-bg relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-60"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold" data-testid="hero-title">
                <span className="text-foreground">Juhin</span>{" "}
                <span className="text-matrix">Akon</span>
              </h1>
              <div className="flex items-center space-x-2">
                <span className="text-matrix font-mono text-lg">{">"}</span>
                <h2 className="text-xl md:text-2xl text-muted-foreground font-mono" data-testid="hero-subtitle">
                  Cybersecurity Specialist & Ethical Hacker
                </h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg" data-testid="hero-description">
              Specialized in penetration testing, vulnerability assessments, and security consulting.
              Protecting digital infrastructure through offensive security methodologies and ethical hacking techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#portfolio")}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 glow-hover transition-all duration-200"
                data-testid="button-portfolio"
              >
                <Shield className="mr-2 h-4 w-4" />
                View Portfolio
              </Button>
              <Button
                variant="secondary"
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors duration-200 border border-border"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200" data-testid="link-linkedin">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200" data-testid="link-github">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200" data-testid="link-twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Cybersecurity specialist at work"
              className="rounded-2xl shadow-2xl glow"
              data-testid="hero-image"
            />
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-mono text-sm pulse-glow" data-testid="status-indicator">
              Status: Online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
