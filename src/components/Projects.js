import { Nav, Tab, Row, Col, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/grow-together.png";
import projImg2 from "../assets/img/keeper-app.png";
import projImg3 from "../assets/img/secrets.png";
import projImg4 from "../assets/img/simon.png";
import projImg5 from "../assets/img/todo.png";
import projImg6 from "../assets/img/blog.png";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Grow Together",
      description:
        "Grow Together is a platform that provides many learning tools such as a habit tracker and Pomodoro timer. I've used Node.js, JavaScript and PassportJS to build this application.",
      imgUrl: projImg1,
      githubLink: "https://github.com/UmutEkerdiker/grow-together",
      liveLink: "https://grow-together.onrender.com",
    },
    {
      title: "Keeper App",
      description:
        "Keeper App is a Google Keep style note taking application built with React.",
      imgUrl: projImg2,
      githubLink: "https://github.com/UmutEkerdiker/keeper-app",
      liveLink: "https://umutekerdiker.github.io/keeper-app/",
    },
    {
      title: "Secrets App",
      description:
        "Secrets App is a full stack web application that allows users to submit anonymous secrets and view others' secrets. Node.js, JavaScript and EJS were used to build this application.",
      imgUrl: projImg3,
      githubLink: "https://github.com/UmutEkerdiker/secretsProject",
      liveLink: "https://secretsproject.onrender.com",
    },
    {
      title: "Simon Game",
      description:
        "This is a pure JavaScript application. Try to remember the pattern and copy it!",
      imgUrl: projImg4,
      githubLink: "https://github.com/UmutEkerdiker/SimonGame",
      liveLink: "https://umutekerdiker.github.io/SimonGame/",
    },
    {
      title: "ToDo App",
      description:
        "This is a full stack to-do app that allows you to create custom lists by simply changing the URL! Node.js, JavaScript and EJS were used to build this application.",
      imgUrl: projImg5,
      githubLink: "https://github.com/UmutEkerdiker/MyToDoList",
      liveLink: "https://mytodolist-94qd.onrender.com",
    },
    {
      title: "Blog App",
      description:
        "This is a full-stack blog application. Simply go to /compose to create and save new entries! Node.js, JavaScript and EJS were used to build this application.",
      imgUrl: projImg6,
      githubLink: "https://github.com/UmutEkerdiker/BlogProject",
      liveLink: "https://blogproject-oohq.onrender.com",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <h5>Hover over the project for descriptions!</h5>
                  <p>
                    I have created many interesting projects to improve and
                    showcase my skills. Please check them out!
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">My Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Future Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Future Projects 2</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="project-text">
                  Contact me for future ideas!
                </Tab.Pane>
                <Tab.Pane eventKey="third" className="project-text">
                  Contact me for future ideas!
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
}

export default Projects;
