export default function Footer() {
  return (
    <footer className="py-12 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-bold text-matrix font-mono mr-8" data-testid="footer-logo">
              {">"} JA_
            </span>
            <p className="text-muted-foreground" data-testid="footer-copyright">
              © 2024 Juhin Akon. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200" data-testid="footer-linkedin">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200" data-testid="footer-github">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200" data-testid="footer-twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="mailto:akonjuhin3@gmail.com" className="text-muted-foreground hover:text-accent transition-colors duration-200" data-testid="footer-email">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
