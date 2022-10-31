import { Col, Button } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, githubLink, liveLink }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="proj-buttonbx">
        <a href={githubLink}><Button variant="light" className="proj-button">
            <i class="devicon-github-original"> </i>
          GitHub </Button></a>
          <a href={liveLink}><Button variant="light" className="proj-button"><i class="devicon-webpack-plain"> </i>Live Site</Button></a>
      </div>
    </Col>
  );
}

export default ProjectCard;
