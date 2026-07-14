import React from 'react'

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">Toggle navigation</span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Shaban Lukyamuzi
          </a>{' '}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>

            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#project01" className="page-scroll">
                    Logic App Form Responder
                  </a>
                </li>
                <li>
                  <a href="#project02" className="page-scroll">
                    Email Reminder Agent
                  </a>
                </li>
                <li>
                  <a href="#project03" className="page-scroll">
                    DOGWALKERSUNITED
                  </a>
                </li>
                <li>
                  <a href="#project04" className="page-scroll">
                    ElectroHub Copilot
                  </a>
                </li>
              </ul>
            </li>
            {/* <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
