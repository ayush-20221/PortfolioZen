import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import intImg1 from "../assets/img/int-img1.png";
import intImg2 from "../assets/img/int-img2.png";
import intImg3 from "../assets/img/int-img3.png";
import achImg1 from "../assets/img/ach-img1.jpg";
import achImg2 from "../assets/img/ach-img2.jpg";
import achImg3 from "../assets/img/ach-img3.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Collab Hub",
      description: "The Creative Collaboration Doppelganger",
      imgUrl: projImg1,
    },
    {
      title: "SkyCast",
      description: "Unleashing Weather Insights",
      imgUrl: projImg2,
    },
    {
      title: "ShortiFy",
      description: "Shrink, Share, Simplify.",
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

  const achievements = [
    {
      title: "TechGiG Code Gladiators 2024",
      description: "Global rank of 3644",
      imgUrl: achImg1,
    },
    {
      title: "TCS CodeVita Seasson XI Round 2",
      description: "Global rank of 546",
      imgUrl: achImg2,
    },
    {
      title: "Google Kickstart 2022",
      description: "Rank 2675 in Round H and Rank 6616 in Round E",
      imgUrl: achImg3,
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
                      <Nav.Item>
                        <Nav.Link eventKey="achievements">Achievements</Nav.Link>
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
                          {internships.map((internship, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...internship}
                              />
                            )
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="achievements">
                        <Row>
                          {achievements.map((achievement, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...achievement}
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
