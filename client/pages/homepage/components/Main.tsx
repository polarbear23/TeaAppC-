import '../../../styles/homepageMain.css';
import MainImage from './MainImage';

const Main = () => {
  return (
    <section className="homepage-main-section">
      <h2 data-aos="fade-down" className="section-title">
        Explore our specialty teas below
      </h2>
      <MainImage />
    </section>
  );
};

export default Main;
