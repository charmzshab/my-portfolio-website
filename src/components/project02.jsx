import React from 'react'

export const Project02 = (props) => {
  return (
    <div id="project02" className="project-section">
      <div className="container project-container">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <img
              src="img/portfolio/AIAgentReminderImage.png"
              className="img-responsive project-img"
              alt="Email Reminder Agent"
            />

            <div className="project-text">
              <h2>Email Reminder Agent</h2>

              <p>
                {props.data
                  ? props.data.paragraph
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.'}
              </p>
              <a
                href="https://aca-ais-demo-reminderagent-front.yellowsky-0e80e1f4.eastus.azurecontainerapps.io"
                className="btn btn-custom btn-lg"
              >
                Try It Out
              </a>

              <h3>Features</h3>

              <div className="project-list-style">
                <div className="col-lg-12 col-sm-6 col-xs-12">
                  <ul>
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
      </div>
    </div>
  )
}
