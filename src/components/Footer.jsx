// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__row">
        {/* Left group */}
        <div className="footer__group footer__group--meta">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.svg`}
            alt=""
            className="footer__logo"
            aria-hidden="true"
          />
          <span className="footer__text">Task X</span>
          <span className="footer__copyright" aria-hidden="true">
            ©
          </span>
          <span className="footer__year">{year}</span>
        </div>

        {/* Right group */}
        <div className="footer__group">
          <span>🔵</span>

          <a
            href="https://fluxlinedigital.net"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <strong>Fluxline Digital</strong>
          </a>

          <span>🔵</span>
          <span className="muted">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
