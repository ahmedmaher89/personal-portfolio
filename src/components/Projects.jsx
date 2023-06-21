import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/landing1.png";
import projImg2 from "../assets/img/landing2.png";
import projImg3 from "../assets/img/landing3.png";
import projImg4 from "../assets/img/easybank.png";
import projImg5 from "../assets/img/cal2..png";
import projImg6 from "../assets/img/EA-Games-master.PNG";
import projImg7 from "../assets/img/hudle.png.jfif";
import projImg8 from "../assets/img/rafal.png.jfif";
import projImg9 from "../assets/img/black bank.png.png";
import projImg10 from "../assets/img/design.png";
import clone from "../assets/img/face.png";
import clone2 from "../assets/img/amazon.png";
import clone3 from "../assets/img/ntflix.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg6,
    },
    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg4,
    },
  ];
  const projects2 = [
    {
      title: "Fashion Theme",
      description: "Clone",
      imgUrl: clone,
    },
    {
      title: "Fashion Theme",
      description: "Clone",
      imgUrl: clone2,
    },
    {
      title: "Fashion Theme",
      description: "Clone",
      imgUrl: clone3,
    },
    {
      title: "Fashion Theme",
      description: "Clone",
      imgUrl: projImg10,
    },
  ];
  const projects3 = [
    {
      title: "Fashion Theme",
      description: "Development",
      imgUrl: projImg7,
    },
    {
      title: "Fashion Theme",
      description: "Development",
      imgUrl: projImg8,
    },
    {
      title: "Fashion Theme",
      description: "Development",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Developed modern user interfaces using HTML, CSS, and
                    JavaScript- Designed and developed interactive and engaging
                    user experiences using the latest technologies and popular
                    frameworks such as ReactJS and Vue.js
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
