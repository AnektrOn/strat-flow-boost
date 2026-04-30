type MobileCTABarProps = {
  href?: string;
  label?: string;
};

const MobileCTABar = ({ href = "#audit", label = "Candidater pour l'audit" }: MobileCTABarProps) => (
  <div className="mobile-cta-bar sm:hidden">
    <a href={href} className="btn-primary">
      {label}
    </a>
  </div>
);

export default MobileCTABar;
