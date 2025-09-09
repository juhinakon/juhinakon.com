import { Bug, Network, Search, Database, AlertTriangle, Code } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: Bug,
      title: "Penetration Testing",
      description: "Web application, network, and mobile penetration testing using industry-standard methodologies.",
      technologies: ["OWASP", "Burp Suite", "Metasploit"]
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Network architecture analysis, firewall configuration, and intrusion detection systems.",
      technologies: ["Nmap", "Wireshark", "pfSense"]
    },
    {
      icon: Bug,
      title: "Bug Hunt",
      description: "Identifying and exploiting security vulnerabilities through systematic bug bounty hunting.",
      technologies: ["HackerOne", "Bugcrowd", "Manual Testing"]
    },
    {
      icon: Code,
      title: "WordPress Malware Remove",
      description: "Detection, analysis, and removal of malware from compromised WordPress websites.",
      technologies: ["WordPress", "PHP", "Security Plugins"]
    },
    {
      icon: Search,
      title: "Digital Forensics",
      description: "Incident response, evidence collection, and forensic analysis of digital artifacts.",
      technologies: ["Volatility", "Autopsy", "YARA"]
    },
    {
      icon: Database,
      title: "SQL",
      description: "SQL injection detection, database security testing, and secure database configuration.",
      technologies: ["MySQL", "PostgreSQL", "SQLMap"]
    },
    {
      icon: AlertTriangle,
      title: "XSS Vulnerability",
      description: "Cross-site scripting vulnerability identification, exploitation, and mitigation strategies.",
      technologies: ["DOM XSS", "Reflected XSS", "Stored XSS"]
    }
  ];

  return (
    <section id="skills" className="py-20" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-title">
            Skills & <span className="text-matrix">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">
            Comprehensive cybersecurity capabilities across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.title} className="cyber-border p-6 rounded-lg glow-hover" data-testid={`skill-card-${index}`}>
                <div className="flex items-center mb-4">
                  <IconComponent className="text-accent text-2xl mr-3 h-8 w-8" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm font-mono"
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
