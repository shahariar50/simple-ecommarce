import Footer from "components/Footer";
import Header from "components/Header";
import Topbar from "components/Topbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
