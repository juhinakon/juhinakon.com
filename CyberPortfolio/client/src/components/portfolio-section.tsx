import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Enterprise Network Assessment",
      status: "Completed",
      statusColor: "bg-accent text-accent-foreground",
      description: "Comprehensive penetration testing of a Fortune 500 company's network infrastructure, identifying critical vulnerabilities in their perimeter security.",
      technologies: ["Network Scanning", "Vulnerability Assessment", "Reporting"],
      date: "Q3 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Web Application Security Audit",
      status: "Ongoing",
      statusColor: "bg-primary text-primary-foreground",
      description: "Full-scale security assessment of a fintech application, including OWASP Top 10 testing, authentication bypass attempts, and data validation checks.",
      technologies: ["OWASP Testing", "SQL Injection", "XSS"],
      date: "Q4 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "IoT Device Security Research",
      status: "Published",
      statusColor: "bg-accent text-accent-foreground",
      description: "Research project analyzing security vulnerabilities in popular IoT devices, resulting in responsible disclosure of three CVEs.",
      technologies: ["IoT Security", "CVE Research", "Responsible Disclosure"],
      date: "Q2 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Cloud Infrastructure Assessment",
      status: "Completed",
      statusColor: "bg-accent text-accent-foreground",
      description: "Security review of AWS infrastructure for a healthcare startup, focusing on HIPAA compliance and data protection measures.",
      technologies: ["AWS Security", "HIPAA Compliance", "Cloud Architecture"],
      date: "Q1 2024"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="portfolio-title">
            Featured <span className="text-matrix">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="portfolio-subtitle">
            Recent security assessments and research projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="cyber-border rounded-lg overflow-hidden glow-hover" data-testid={`project-card-${index}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold" data-testid={`project-title-${index}`}>{project.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm font-mono ${project.statusColor}`} data-testid={`project-status-${index}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-mono"
                      data-testid={`project-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground flex items-center" data-testid={`project-date-${index}`}>
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                  <button className="text-accent hover:text-accent/80 font-medium flex items-center" data-testid={`project-details-${index}`}>
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors duration-200 border border-border"
            data-testid="button-view-all-projects"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
