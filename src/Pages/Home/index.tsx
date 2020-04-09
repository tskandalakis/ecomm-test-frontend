import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import HomeCarouselSlide from '../../Components/Home/CarouselSlide';
import HomeCards from '../../Components/Home/Cards';
import HomeFooter from '../../Components/Home/Footer';

function Home() {
  return (
    <Container className="content-container" fluid>
      <HomeCarouselSlide/>
      <HomeCards/>
      <HomeFooter/>
    </Container>
  );
}

export default Home;
