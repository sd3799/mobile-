import React from 'react';
import banner from '../assets/banner.jpg';

const Home = () => (
  <section className="home">
    <img src={banner} alt="ANDI banner" className="home__banner" />
    <h1>Welcome to ANDI Software Solutions</h1>
    <p>
      We deliver cutting-edge IT products and services that help businesses
      grow, streamline operations, and delight customers.
    </p>
  </section>
);

export default Home;
