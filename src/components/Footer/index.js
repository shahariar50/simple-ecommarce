import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={`${styles.footerTop} row py-120`}>
          <div className="col-md-4">
            <div className={styles.companyShortDetails}>
              <h3 className="mb-2">Funshion</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className={`${styles.linksLists} row`}>
              <div className="col-md-4">
                <h4 className="mb-3">Need Help?</h4>
                <ul className="m-0 p-0">
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Get Started</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of like</Link>
                  </li>
                  <li>
                    <Link to="/">Privecy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="mb-3">Need Help?</h4>
                <ul className="m-0 p-0">
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Get Started</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of like</Link>
                  </li>
                  <li>
                    <Link to="/">Privecy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="mb-3">Need Help?</h4>
                <ul className="m-0 p-0">
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Get Started</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of like</Link>
                  </li>
                  <li>
                    <Link to="/">Privecy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-30">Copyright @ Funshion. All Right Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
