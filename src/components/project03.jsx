import React from 'react'

export const Project03 = (props) => {
  return (
    <div id="project03" className="project-section">
      <div className="container project-container">
        <div className="row project-row">
          <div className="col-xs-12 col-md-7 project-left-col">
            <img
              src="img/portfolio/03-large.jpg"
              className="img-responsive project-img"
              alt="Portfolio Project 03"
            />
            <div className="project-text">
              <h2>Portfolio Project 03</h2>
              <p>
                {props.data
                  ? props.data.paragraph
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.'}
              </p>
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
