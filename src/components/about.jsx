import React from 'react'

const skills = [
  'Full-stack .NET development',
  'React & modern frontend',
  'ASP.NET Core Web API',
  'Database & backend design',
  'SQL Server & Entity Framework',
  'AWS and Azure cloud',
  'Power Apps & Power Automate',
  'SharePoint integration',
  'Azure Logic Apps',
  'Copilot Studio',
  'Azure AI Foundry',
  'REST API design & testing',
  'Docker & container deployment',
  'GitHub Actions & CI/CD',
  'AI agents & automation',
  'Strong learning mindset',
]

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-wrapper">

          <div className="about-photo-col">
            <div className="about-photo-frame">
              <img
                src="img/about.jpeg"
                className="about-photo"
                alt="Shaban Lukyamuzi"
              />
            </div>
            <p className="about-name-tag">Shaban Lukyamuzi</p>
            <span className="about-role-badge">Software Developer</span>
          </div>

          <div className="about-content-col">
            <h2 className="about-heading">About Me</h2>
            <p className="about-bio">
              I am a dedicated and passionate Software Developer focused on
              building beautiful, functional, and reliable applications. My
              goal is to deliver high-quality solutions using modern web
              technologies, cloud platforms, Power Platform, and AI-powered
              automation tools to solve real-world business problems.
            </p>

            <h3 className="about-skills-heading">What I Bring</h3>
            <div className="about-skills-grid">
              {skills.map((skill, i) => (
                <span key={i} className="about-skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
