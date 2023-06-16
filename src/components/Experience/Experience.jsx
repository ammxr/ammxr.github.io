import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="e-sec">

        <div className="e-title">
          <e-name>Experience</e-name>
          <div className="e-wave"></div>
        </div>

        <div className="e-timeline">  
          <div className="e-experience">
            <div className="e-year">2022</div>
            <div className="e-description">
              <h2>Experience Title 1</h2>
              <ul>
                <li>Create custom Discord Bots for moderation, utility, promotions and more</li>
                <li>Python based combined with external APIs (weather) and database integrations</li>
                <li>Advanced Image compiling with PIL</li>
                <li>Consistently updated software</li>
              </ul>  
            </div>
          </div>

          <div className="e-experience">
            <div className="e-year">2021</div>
            <div className="e-description">
              <h2>Experience Title 2</h2>
              <ul>
                <li>Volunteered teaching weekly Python and JavaScript to youth ages (4-16) based off premade lessons/assignments</li>
                <li>Self-made lessons, assignments, and testing for evaluation purposes</li>
                <li>Wrote Midterm + Final report cards alongside grading schemes</li>
                <li> Helped organize school events (For holidays, significant days etc)</li>
              </ul>  
            </div>
          </div>

          <div className="e-experience">
            <div className="e-year">2021</div>
            <div className="e-description">
              <h2>Experience Title 2</h2>
              <ul>
                <li>Served as an uncontracted Teacher Assistant helping youth ages 5-12 Python and Scratch courses.</li>
                <li> Assigned Curriculum based lessons/assignments</li>
                <li>1-1 Assistance Teaching</li>
              </ul>  
            </div>
          </div>
      
          <div className="e-experience">
            <div className="e-year">2021</div>
            <div className="e-description">
              <h2>Experience Title 2</h2>
              <ul>
                <li>Creating professional originals logo, Vectorizing premade Logos, Merchandise design/concepts</li>
                <li>Material simulation (for realism) through After Effects</li>
                <li>Made through Adobe Illustrator, Photoshop, and After Effects</li>
              </ul>  
            </div>
          </div>

          <div className="e-experience">
            <div className="e-year">2021</div>
            <div className="e-description">
              <h2>Experience Title 2</h2>
              <ul>
                <li>Served primarily as Cashier or sorting in the Returns Department</li>
                <li>Carts Disinfections, Sweeping, Front Facing Items, Stock Unboxing + Damaged Returns sorting</li>
                <li>Consistent 40 hour work weeks during school year</li>
              </ul>
            </div>
          </div>

      </div>
  </section>
  );
};

export default Experience;
