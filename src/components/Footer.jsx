// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__row">
        {/* Left group */}
        <div className="footer__group footer__group--meta">
          <img src="/favicon.svg" alt="" className="footer__logo" aria-hidden="true" />
          <span className="footer__text">Task X</span>
          <span className="footer__copyright" aria-hidden="true">
            ©
          </span>
          <span className="footer__year">{year}</span>
        </div>

        {/* Right group */}
        <a
          href="https://fluxlinedigital.net"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <span className="footer__brand" aria-label="Fluxline Digital, all rights reserved">
            🔵 <strong>Fluxline Digital</strong> 🔵{' '}
            <span className="muted">All rights reserved.</span>
          </span>
        </a>
      </div>
    </footer>
  );
}
