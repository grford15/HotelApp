import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Hero hero="defaultHero">
      <Banner
        title="Luxurios Rooms"
        subTitle="Deluxe rooms starting £199"
      >
        <Link to="/rooms" className="btn-primary">
          Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

Hero.defaultProps = {
  hero: 'defaultHero',
};

export default Home;
