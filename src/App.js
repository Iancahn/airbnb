import React from 'react';
import './App.css';
// Import Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
// Import Data
import data from './data';
console.log(data);

function App() {
  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <Hero />
      {cards}

    </div>
  );
}

export default App;
