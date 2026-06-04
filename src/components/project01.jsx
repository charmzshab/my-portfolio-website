import React from 'react'

export const Project01 = (props) => {
  return (
    <div id="project01" className="project-section">
      <div className="container project-container">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <img
              src="img/portfolio/LogicAppFormResponder.png"
              className="img-responsive project-img"
              alt="Logic App Form Responder"
            />

            <div className="project-text">
              <h2>Logic App Form Responder</h2>

              <p>
                {props.data
                  ? props.data.paragraph
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.'}
              </p>
              <a
                href="https://forms.cloud.microsoft/Pages/DesignPageV2.aspx?prevorigin=shell&origin=NeoPortalPage&subpage=design&id=mg39KCnlP0GI1X8z9nZ17-5rMyXOklRJisE8HLRdvXFUOTFJSkVURDBPNEU1VUI3Qk9MOFA3TVQzMC4u&topview=Preview"
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
