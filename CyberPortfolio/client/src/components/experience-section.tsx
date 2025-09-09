import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Security Consultant",
      company: "CyberSec Solutions Inc.",
      duration: "2022 - Present",
      description: "Lead penetration testing engagements for Fortune 500 clients, conduct security assessments, and provide strategic security consulting services.",
      skills: ["Penetration Testing", "Security Consulting", "Team Leadership"]
    },
    {
      title: "Security Analyst",
      company: "TechGuard Systems",
      duration: "2020 - 2022",
      description: "Performed vulnerability assessments, incident response, and security monitoring. Developed custom security tools and automation scripts.",
      skills: ["Incident Response", "SIEM Management", "Python Scripting"]
    },
    {
      title: "Junior Security Engineer",
      company: "SecureNet Corp",
      duration: "2018 - 2020",
      description: "Started career focusing on network security, firewall management, and basic vulnerability scanning. Gained foundational experience in enterprise security operations.",
      skills: ["Network Security", "Firewall Config", "Vuln Scanning"]
    }
  ];


  return (
    <section id="experience" className="py-20" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="experience-title">
            Professional <span className="text-matrix">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">
            Career background and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center" data-testid="experience-work-title">
              <Briefcase className="text-accent mr-3 h-6 w-6" />
              Professional Experience
            </h3>

            {experiences.map((exp, index) => (
              <div key={exp.title} className="cyber-border p-6 rounded-lg" data-testid={`experience-${index}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold" data-testid={`experience-title-${index}`}>{exp.title}</h4>
                    <p className="text-accent font-medium" data-testid={`experience-company-${index}`}>{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono" data-testid={`experience-duration-${index}`}>{exp.duration}</span>
                </div>
                <p className="text-muted-foreground mb-3" data-testid={`experience-description-${index}`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-mono"
                      data-testid={`experience-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="cyber-border p-6 rounded-lg" data-testid="education-card">
              <h4 className="font-semibold mb-4 flex items-center">
                <GraduationCap className="text-accent mr-2 h-5 w-5" />
                Education
              </h4>
              <div className="space-y-2">
                <p className="font-medium" data-testid="education-degree">M.S. Cybersecurity</p>
                <p className="text-accent" data-testid="education-university">Carnegie Mellon University</p>
                <p className="text-sm text-muted-foreground" data-testid="education-year">2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
