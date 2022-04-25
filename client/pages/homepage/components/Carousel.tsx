import '../../../styles/carousel.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateItem(activeItem + 1);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeItem]);

  const maxNumberOfCarouselItems: number = 5;
  const minIndex: number = 0;
  const updateItem = (newItem: number): void => {
    if (newItem < minIndex) {
      newItem = maxNumberOfCarouselItems - 1;
    } else if (newItem >= maxNumberOfCarouselItems) {
      newItem = minIndex;
    }
    setActiveItem(newItem);
  };

  return (
    <section className="homepage-carousel">
      <div className="inner" style={{ transform: `translateX(-${activeItem * 100}%)` }}>
        <div className="carousel-item tree" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="images/treeteas.gif" alt="teacup with trees inside" />
          <h2 className="carousel-title">Our tea is sustainable</h2>
          <h3 className="carousel-subtitle">... and 100% organic</h3>
          <Link to={'/aboutus'}>
            <button className="carousel-btn">Check out our sustainability Policy</button>
          </Link>
        </div>
        <div className="carousel-item mountain" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="/images/mountaintea.gif" alt="teacup with mountains inside" />
          <h2 className="carousel-title">Farmed in small batches</h2>
          <h3 className="carousel-subtitle">...from the mountains</h3>
          <Link to={'/mountainteas'}>
            <button className="carousel-btn">Check out our mountain teas</button>
          </Link>
        </div>
        <div className="carousel-item desert" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="images/deserttea.gif" alt="teacup with desert cacti inside" />
          <h2 className="carousel-title">...to the Deserts</h2>
          <Link to={'/desertteas'}>
            <button className="carousel-btn-single">Check out our desert teas</button>
          </Link>
        </div>
        <div className="carousel-item desert" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="images/beachtea.gif" alt="teacup with ship inside" />
          <h2 className="carousel-title">Shipped from all around the world</h2>
          <Link to={'/store'}>
            <button className="carousel-btn-single">Check out our store</button>
          </Link>
        </div>
        <div className="carousel-item mountain" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="images/hometea.gif" alt="teacup with house inside" />
          <h2 className="carousel-title">We bring the most unique teas</h2>
          <h3 className="carousel-subtitle">...right to your home</h3>
          <Link to={'/delivery'}>
            <button className="carousel-btn">Find out if we deliver to you</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
