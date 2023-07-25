import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import intImg1 from "../assets/img/int-img1.png";
import intImg2 from "../assets/img/int-img2.png";
import intImg3 from "../assets/img/int-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "PortfoliZen",
      description: "My Creative Sanctuary",
      imgUrl: projImg1,
    },
  
    {
      title: "ForecastFox",
      description: "Unleashing Weather Insights",
      imgUrl: projImg2,
    },
    {
      title: "TunesTwin",
      description: "The Music Streaming Doppelganger",
      imgUrl: projImg3,
    }
  ];

  const internships = [
    {
      title: "Chegg",
      description: "Subject Matter Expert",
      imgUrl: intImg1,
    },
    {
      title: "Geeks For Geeks",
      description: "Technical Content Writer",
      imgUrl: intImg2,
    },
    {
      title: "iNeuBytes",
      description: "Web Developer Intern",
      imgUrl: intImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="projects">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="projects">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="internships">Internships</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="projects">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="internships">
                        <Row>
                          {internships.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
