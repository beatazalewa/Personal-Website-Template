import React from 'react';
import Animation from './Animation';
import './Hobby.css';

const Hobby = () => {
  return (
    <div className="hobby section" id="hobby">
      <h2>My Hobby: Beekeeping</h2>
      <div className="hobby-container">
        <div className="hobby-content">
          <div className="hobby-section">
            <h3>The Fascinating World of My Bees</h3>
            <p>
              Beekeeping has become one of my most rewarding hobbies. There's something magical about 
              working with these incredible creatures that have been essential to our ecosystem for 
              millions of years. Bees are not just honey producers; they are master architects, 
              complex communicators, and vital pollinators.
            </p>
            
            <h4>Why Bees Matter</h4>
            <p>
              Did you know that bees are responsible for pollinating about one-third of the food we eat? 
              From apples and almonds to cucumbers and coffee, bees play a crucial role in agriculture. 
              Their decline in recent years has made beekeeping not just a hobby, but a way to contribute 
              to environmental conservation.
            </p>
            
            <div className="hobby-facts-container">
              <h4>Amazing Bee Facts</h4>
              <ul>
                <li>🐝 A single bee colony can contain up to 60,000 bees</li>
                <li>🍯 Bees must visit about 2 million flowers to make one pound of honey</li>
                <li>💃 Bees communicate through the "waggle dance" to share location of flowers</li>
                <li>🔥 Bees can heat their bodies to 45°C to defend against hornets</li>
                <li>👑 A queen bee can live up to 5 years and lay up to 2,000 eggs per day</li>
              </ul>
            </div>
            
            <div className="hobby-journey-container">
              <h4>My Beekeeping Journey</h4>
              <p>
                What started as curiosity about these amazing insects has evolved into a passion 
                for sustainable beekeeping practices. I maintain several hives and focus on 
                natural beekeeping methods that prioritize bee health over honey production. 
                Every inspection reveals something new about their complex social structure 
                and incredible efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="hobby-animation">
          <Animation fileName="other-tech.json"/>
          <div className="hobby-illustration">
            <div className="hobby-bee-icon">🐝</div>
            <div className="hobby-hexagon-pattern">
              <div className="hobby-hexagon"></div>
              <div className="hobby-hexagon"></div>
              <div className="hobby-hexagon"></div>
              <div className="hobby-hexagon"></div>
              <div className="hobby-hexagon"></div>
              <div className="hobby-hexagon"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-marker"/>
    </div>
  );
};

export default Hobby;