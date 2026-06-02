import React from 'react'

export const Project03 = (props) => {
  return (
    <div id="project03" className="project-section">
      <div className="container project-container">
        <div className="row">
          <div className="col-xs-12 col-md-8">
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

              <h3>Features</h3>

              <div className="project-list-style">
                <ul>
                  {props.data ? (
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

                <ul>
                  {props.data ? (
                    props.data.features2.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  ) : (
                    <>
                      <li>Aliquip ex ea commodo</li>
                      <li>Lorem ipsum dolor</li>
                      <li>Exercitation ullamco</li>
                      <li>Lorem ipsum dolor</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
