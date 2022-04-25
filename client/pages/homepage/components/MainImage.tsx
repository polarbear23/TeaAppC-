import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const MainImage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade" className="homepage-main-image">
      <div data-aos="fade-right" className="homepage-main-image-text-container">
        <h3 data-aos="fade-right" className="homepage-main-image-title">
          Peppermint Tea
        </h3>
        <p data-aos="fade-right" className="peppermint-tea-desc">
          Peppermint Tea for a refreshing and cleansing cup to brighten up your day.
        </p>
        <p data-aos="fade-right" className="peppermint-tea-desc">
          We choose only the finest peppermint leaves for our tea, picked during the warmest months when they swell with essential oils.
        </p>
        <p data-aos="fade-right" className="peppermint-tea-desc">
          It ensures a minty and invigorating taste that aids digestion after meals. Like all of our products, our Peppermint Tea is made with ethically sourced
          ingredients.
        </p>
        <Link to={'/store/peppermint'}>
          <button data-aos="fade-up" className="peppermint-tea-btn">
            Explore our peppermint options
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainImage;
