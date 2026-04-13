import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import MainContent from "../components/home/MainContent";
import "../styles/homePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <Header />

      <div className="main">
        {" "}
        <MainContent />
      </div>

      <Footer />
    </div>
  );
};
export default HomePage;
