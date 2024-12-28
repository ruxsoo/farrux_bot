
// import NavbarContainer from '../Components/Navbar'
// import FooterContainer from '../Components/Footer'

// Home.jsx
import React from 'react';
import './About.css';
import NavbarContainer from '../Components/Navbar';
import lave1 from "../assets/lave1.jpg"
import lip2 from "../assets/lip2.jpg"
import lip3 from "../assets/lip3.jpg"
import lip4 from "../assets/lip4.jpg"
import lip7 from "../assets/lip7.jpg"
import lip5 from "../assets/lip5.jpg"
import lip8 from "../assets/lip8.jpg"
import lip9 from "../assets/lip9.jpg"
import lip10 from "../assets/lip10.jpg"
import lip00 from "../assets/lip00.jpg"
import lip11 from "../assets/lip11.jpg"
import lip13 from "../assets/lip13.jpg"


const About = () => {
  return (
    <div className="home-container">
           <NavbarContainer/>
      <header className="home-header">
        <h1>Welcome MissAmerica.shop</h1>
        <p>Your one-stop destination for all things beauty!</p>
      </header>
      <section className="product-section">
        <div className="product-card">
          <img src={lave1} alt="Lipstick" />
          <h2>Lipstick</h2>
          <p>Perfect shades for every occasion.</p>
        </div>
        <div className="product-card">
          <img src={lip00} alt="Eyeshadow Palette" />
          <h2>Eyebrow gel</h2>
          <p>Bring out the artist in you!</p>
        </div>
        <div className="product-card">
          <img src={lip13} alt="Skincare" />
          <h2>Lip balm</h2>
          <p>Glow naturally with our top picks.</p>
        </div>
      </section>

{/* section2 */}


<section className="product-section">
        <div className="product-card">
          <img src={lip4} alt="Lipstick" />
          <h2>Sweatshirt</h2>
          <p>Perfect shades for every occasion.</p>
        </div>
        <div className="product-card">
          <img src={lip7} alt="Eyeshadow Palette" />
          <h2>Sweater</h2>
          <p>Bring out the artist in you!</p>
        </div>
        <div className="product-card">
          <img src={lip5} alt="Skincare" />
          <h2>Sweatshirt</h2>
          <p>Glow naturally with our top picks.</p>
        </div>
      </section>

      <section className="product-section">
        <div className="product-card">
          <img src={lip10} alt="Lipstick" />
          <h2>Set</h2>
          <p>Perfect shades for every occasion.</p>
        </div>
        <div className="product-card">
          <img src={lip9} alt="Eyeshadow Palette" />
          <h2>Set</h2>
          <p>Bring out the artist in you!</p>
        </div>
        <div className="product-card">
          <img src={lip8} alt="Skincare" />
          <h2>Set</h2>
          <p>Glow naturally with our top picks.</p>
        </div>
      </section>

      <header style={{marginTop:'80px'}} className="home-header">
       <p>For order ruhsora471@gmail.com</p>
       <p>Phone number:90-980-51-51</p>
       <p>Shop name:MissAmerica</p>
       <p>Online shop</p>
       <p>WE HAVE A TELEGRAMM CHANEL</p>
      </header>

    </div>
  );
};

export default About;