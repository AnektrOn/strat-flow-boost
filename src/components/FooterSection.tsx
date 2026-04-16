const FooterSection = () => {
  return (
    <footer className="py-12 px-6 border-t border-n-border-subtle">
      <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-n-text tracking-wide">NOMOS</span>
        <div className="flex gap-6 text-[11px] text-n-subtle tracking-wider uppercase">
          <a href="#" className="hover:text-n-gold transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-n-gold transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-n-gold transition-colors">CGV</a>
        </div>
        <span className="text-[11px] text-n-subtle">
          © {new Date().getFullYear()} NOMOS. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
