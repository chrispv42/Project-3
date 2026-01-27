// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <footer className="footer__row">
        <img src="/favicon.svg" alt="" className="footer__logo" aria-hidden="true" />

        <span className="footer__text">Task X </span>
        <span className="footer__copyright">©</span>
        <span className="footer__year">{year}</span>
        <a
          href="https://fluxlinedigital.net"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <span className="footer__brand">
            💠 <strong>Fluxline Digital</strong> 💠 All rights reserved.
          </span>
        </a>
      </footer>
    </div>
  );
}
