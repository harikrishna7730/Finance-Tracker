import React, { useState } from 'react';
import './Hero.css';
import slide1 from '../../assets/second-img.avif';
import slide2 from '../../assets/first-img.jpg';
import slide3 from '../../assets/third-img.jpg';
import homeMainImg from "../../assets/home-main.png"
import { useNavigate } from 'react-router-dom';

const images = [slide1, slide2, slide3];

function Carousel() {
  const navigate=useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
<<<<<<< HEAD
    <div className='main-box'>
=======
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
    <div className='Hero-container'>
      <div className='hero-content'>
      <h1>Welcome to Finance Tracker — Your Personal <span style={{color:"#8461D4"}}>Finance Tracker!</span></h1>
      <p> we believe that managing your finances should be simple, transparent, and stress-free. Our intuitive finance tracker is designed to help you take control of your financial journey. Whether you're looking to track everyday expenses, set saving goals, or plan for the future, we've got you covered. With real-time updates, detailed reports, and easy-to-use tools, you can manage your money more effectively and make smarter financial decisions. Start today and take the first step toward a more organized and secure financial future.</p>
      <button className='Hero-explore-btn' onClick={()=>navigate("/addtransaction")}>Add Transaction Now <span>→</span></button>
      </div>
      <div className='hero-img'>
<<<<<<< HEAD
        <img src={homeMainImg} alt=""  height={480} width={480}/>
=======
        <img src={homeMainImg} alt=""  height={500} width={500}/>
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
      </div>
    </div>
    <div className='carousel-container'>
    <div className="carousel">
<<<<<<< HEAD
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}  />
=======
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
      <button onClick={goToPrev} className="nav-btn left">❮</button>
      <button onClick={goToNext} className="nav-btn right">❯</button>
    </div>
    </div>
<<<<<<< HEAD
    </div>
=======
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
    </>
  );
}

export default Carousel;
