import "./Footer.css";
import { footerData } from "./footerData";
function Footer() {
  return (
    <footer className="footer-container p-5">
      <ul className="list-none footer-ul p-1">
        <li className="list-head bold">SHOP BY</li>
        {footerData
          .filter(({key}) =>key === "shop")
          .map(({id,title}) => (
            <li key={id} className="footer-link">
              {title}
            </li>
          ))}
      </ul>

      <ul className="list-none footer-ul p-1">
        <li className="list-head bold">SHED</li>
        {footerData
          .filter(({key}) => key === "shed")
          .map(({id,title}) => (
            <li key={id} className="footer-link">
              {title}
            </li>
          ))}
      </ul>

      <ul className="list-none footer-ul p-1">
        <li className="list-head bold">ABOUT US</li>
        {footerData
          .filter(({key}) => key === "companyRelated")
          .map(({id,title}) => (
            <li key={id} className="footer-link">
              {title}
            </li>
          ))}
      </ul>
    </footer>
  );
}

export { Footer };
