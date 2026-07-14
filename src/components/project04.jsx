import React from 'react'

export const Project04 = (props) => {
  return (
    <div id="project04" className="project-section">
      <div className="container project-container">
        <div className="row project-row">
          <div className="col-xs-12 col-md-7 project-left-col">
            <img
              src="img/portfolio/ElectroHub_Copilot_Architecture.svg"
              className="img-responsive project-img"
              alt="ElectroHub Copilot Agent"
            />
            <div className="project-text">
              <h2>ElectroHub Copilot Agent</h2>
              <p>
                {props.data
                  ? props.data.paragraph
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.'}
              </p>
              <div className="project-btn-group">
                <a
                  href="https://mum0-my.sharepoint.com/:w:/r/personal/slukyamuzi_miu_edu/Documents/portfolio/ElectroHub_Tech_Guide_Project_Documentation.docx?d=w34ca397f99da45578eb5c770953f3ced&csf=1&web=1&e=PGdacE"
                  className="btn btn-custom btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-5 project-right-col">
            <div className="project-features-panel">
              <div className="project-features-header">
                <h3>Features</h3>
              </div>
              <ul className="project-features-list">
                {props.data && props.data.features1 ? (
                  props.data.features1.map((d, i) => (
                    <li key={`${d}-${i}`}>{d}</li>
                  ))
                ) : (
                  <>
                    <li>Lorem ipsum dolor</li>
                    <li>Tempor incididunt</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Incididunt ut labore</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
