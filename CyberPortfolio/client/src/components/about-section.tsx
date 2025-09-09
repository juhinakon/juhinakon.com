export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="about-title">
            About <span className="text-matrix">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            Passionate cybersecurity professional with expertise in ethical hacking,
            penetration testing, and security architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="cyber-border p-6 rounded-lg" data-testid="mission-card">
              <h3 className="text-xl font-semibold mb-4 text-accent">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To help organizations strengthen their security posture through comprehensive
                vulnerability assessments, penetration testing, and strategic security consulting.
                I believe in proactive defense through understanding the attacker's mindset.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="cyber-border p-4 rounded-lg text-center" data-testid="stat-audits">
                <div className="text-2xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">Security Audits</div>
              </div>
              <div className="cyber-border p-4 rounded-lg text-center" data-testid="stat-vulnerabilities">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Vulnerabilities Found</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
              alt="Ethical hacker workstation setup"
              className="rounded-lg shadow-lg w-full"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
