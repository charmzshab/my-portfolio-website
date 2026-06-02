import React from 'react'

export const About = (props) => {
  return (
    <div id="about">
      <div className="container about-section-box">
        <div className="about-row">
          <div className="about-image-column">
            <img
              src="img/about.jpeg"
              className="img-responsive about-profile-img"
              alt="About Shaban Lukyamuzi"
            />
          </div>

          <div className="about-content-column">
            <div className="about-text custom-about-text">
              <h2>About Me</h2>

              <p>
                I am a dedicated and passionate Software Developer focused on
                building beautiful, functional, and reliable applications. My
                goal is to deliver high-quality solutions using modern web
                technologies, cloud platforms, and AI-powered tools to solve
                real-world problems.
              </p>

              <h3>Why Choose Me?</h3>

              <div className="about-list-style">
                <ul>
                  <li>Full-stack development experience</li>
                  <li>React and modern frontend skills</li>
                  <li>ASP.NET Core Web API development</li>
                  <li>Database and backend design</li>
                </ul>

                <ul>
                  <li>AWS and Azure cloud projects</li>
                  <li>REST API design and testing</li>
                  <li>AI agents and automation interest</li>
                  <li>Strong learning mindset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
