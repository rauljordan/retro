import React from 'react';
import Page from '../../shared/components/Page';
import Hero from '../../shared/components/Hero';
import Header from '../../shared/components/Header';

function Home() {
  return (
    <Page>
      <div className="intro">
        <Header><span>Glitch</span> is the friendly community where you{`'`}ll build the app of your dreams</Header>
        <p>With working example apps to remix, a code editor to modify them, instant hosting and deployment - anybody can build a web app on Glitch, for free.</p>
      </div>
      <Hero>
        Hello World
      </Hero>
    </Page>
  );
}

export default Home;
