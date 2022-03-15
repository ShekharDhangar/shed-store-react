import "./Footer.css";
import { footerData } from "./footerData";
function Footer() {
  return (
    <footer className="footer-container p-5">
      <ul className="list-none footer-ul p-1">
        <li className="list-head bold">SHOP BY</li>
        {footerData
          .filter((links) => links.key === "shop")
          .map((links) => (
            <li key={links.id} className="footer-link">
              {links.title}
            </li>
          ))}
      </ul>

      <ul className="list-none footer-ul p-1">
        <li className="list-head bold">SHED</li>
        {footerData
          .filter((links) => links.key === "shed")
          .map((links) => (
            <li key={links.id} className="footer-link">
              {links.title}
            </li>
          ))}
      </ul>

      <ul className="list-none footer-ul p-1">
        <li className="list-head bold">ABOUT US</li>
        {footerData
          .filter((links) => links.key === "companyRelated")
          .map((links) => (
            <li key={links.id} className="footer-link">
              {links.title}
            </li>
          ))}
      </ul>
    </footer>
  );
}

export { Footer };
