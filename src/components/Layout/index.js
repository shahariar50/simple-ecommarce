import Header from "components/Header";
import Topbar from "components/Topbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
