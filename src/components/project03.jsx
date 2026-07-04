import React from 'react'

export const Project03 = (props) => {
  return (
    <div id="project03" className="project-section">
      <div className="container project-container">
        <div className="row project-row">
          <div className="col-xs-12 col-md-7 project-left-col">
            <img
              src="img/portfolio/dog_united.png"
              className="img-responsive project-img"
              alt="Dog Walkers United"
            />
            <div className="project-text">
              <h2>Power Apps, SharePoint & Power Automate Business Solution</h2>
              <p>
                {props.data
                  ? props.data.paragraph
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.'}
              </p>
              {props.data && props.data.note ? (
                <p>
                  <em>{props.data.note}</em>
                </p>
              ) : null}
              <div className="project-btn-group">
                <span className="btn btn-custom btn-lg btn-disabled">
                  Try It Out (Disabled)
                </span>
                <a
                  href="https://mum0-my.sharepoint.com/:w:/r/personal/slukyamuzi_miu_edu/Documents/portfolio/Dog_Walkers_United_Project_Documentation_Updated.docx?d=w4db1a662947a4a93af69ce53929d49ae&csf=1&web=1&e=cRXMd7"
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
