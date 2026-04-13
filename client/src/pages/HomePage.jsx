import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import MainContent from "../components/home/MainContent";
import "../styles/homepage.css";

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
export default HomePage;
