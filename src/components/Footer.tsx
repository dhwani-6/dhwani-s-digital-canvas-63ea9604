export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-display text-xl font-bold gradient-text">
            DP
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-body text-center">
            © {currentYear} Dhwani Pandya. Designed with passion.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
