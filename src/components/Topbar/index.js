import { Link } from "react-router-dom";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <div className={`${styles.topbar} py-4`}>
      <div className="container">
        <div
          className={`${styles.topbar} d-flex justify-content-between items-center`}
        >
          <p className="text-white">Free shipping on all UK orders!</p>
          <ul>
            <li className="mx-2">
              <Link to="/">
                <img src="/static/icons/facebook.png" alt="facebook" />
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/">
                <img src="/static/icons/instagram.png" alt="instagram" />
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/">
                <img src="/static/icons/pinterest.png" alt="pinterest" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
