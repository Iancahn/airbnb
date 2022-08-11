import React from 'react';
import './App.css';
// Import Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card
        img=""
        rating=""
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
