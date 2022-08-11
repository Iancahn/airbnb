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
  // const cards = data.map(item => {
  //   return (
  //     <Card
  //       img={item.coverImg}
  //       rating=""
  //       reviewCount={6}
  //       country="USA"
  //       title="Life Lessons with Katie Zaferes"
  //       price={136}
  //     />
  //   )
  // })

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={77}
        location="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
