import React from 'react';
import Page from '../../shared/components/Page';
import Hero from '../../shared/components/Hero';
import Header from '../../shared/components/Header';
import Button from '../../shared/components/Button';
function Home() {
  return (
    <Page>
      <div className="intro">
        <Header><span>Retro</span> is a nostalgia trip through time, right in the feels</Header>
        <p>Explore all sorts of retro music, videos, gifs, and all sorts of other radical things we know you miss in 2017.</p>
      </div>
      <Hero>
        Ride the wave with us and explore Vaporwave music from around the world
      </Hero>
      <Button>Check It Out</Button>
    </Page>
  );
}

export default Home;
