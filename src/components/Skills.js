import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div class="skill-bx skill-slider">
              <h2>Skills</h2>
              <p>
                While learning programming and creating my personal projects, I
                have focused on learning <br></br> both front-end and back end
                technologies that will allow me to create fully functional
                applications.
              </p>

              <h3>Front-End Technologies</h3>
              <div className="item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="Image"
                />
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="Image"
                />
                <h5>CSS</h5>
              </div>
              <div className="item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="Image"
                />
                <h5>Javascript</h5>
              </div>
              <div className="item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="Image"
                />
                <h5>React</h5>
              </div>
              <div className="item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Image"
                />
                <h5>Bootstrap</h5>
              </div>
              <div className="item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                  alt="Image"
                />
                <h5>JQuery</h5>
              </div>
              <h3>Back-End Technologies</h3>
              <div className="item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="Image"
                />
                <h5>Node.js</h5>
              </div>
              <div className="item">
                <img
                  className="express"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Image"
                />
                <h5>Express.js</h5>
              </div>
              <div className="item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="Image"
                />
                <h5>MongoDB/Mongoose</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
}

export default Skills;
