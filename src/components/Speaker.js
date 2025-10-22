import React from 'react';
import Animation from './Animation';
import './Speaker.css';

const Speaker = () => {
  return (
    <div className="speaker section" id="speaker">
      <h2>Speaking</h2>
      <div className="speaker-container">
        <div className="speaker-content">
          <p>
            I am a passionate public speaker who enjoys sharing practical stories,
            technical lessons, and career insights with developer communities and
            product teams. I focus on making complex topics approachable and actionable.
          </p>

          <div className="speaker-highlights">
            <h4>Topics I speak about</h4>
            <ul>
              <li>Modern Web Development and Frontend Architecture</li>
              <li>APIs, Backend Design, and Reliability</li>
              <li>Data, Automation, and Developer Productivity</li>
              <li>Career Growth and Communication for Engineers</li>
            </ul>
          </div>

          <div className="speaker-events">
            <h4>Selected talks</h4>
            <ul className="speaker-talk-list">
              <li>
                <span className="talk-title">From Idea to Production: Shipping Features Fast</span>
                <span className="talk-meta">TechConf · Keynote</span>
              </li>
              <li>
                <span className="talk-title">Reliable APIs: Patterns that Scale</span>
                <span className="talk-meta">API Summit · Session</span>
              </li>
              <li>
                <span className="talk-title">Human Skills for Engineers</span>
                <span className="talk-meta">DevMeetup · Fireside</span>
              </li>
            </ul>
          </div>

          <div className="speaker-cta">
            <a href="#contact" className="speaker-cta-link">Invite me to speak</a>
          </div>
        </div>

        <div className="speaker-animation">
          <Animation fileName="frontend-purple.json" width="12rem" />
        </div>
      </div>

      <div id="hobby-marker" />
    </div>
  );
};

export default Speaker;
