import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
// import projImg4 from "../assets/img/project-img1.png";
// import projImg5 from "../assets/img/project-img2.png";
// import projImg6 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import brochure1 from "../assets/img/broshur2.jpg";
import brochure2 from "../assets/img/broshur1.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from "../assets/cv/CV.pdf";
export const Projects = () => {

  const projects = [
    {
      title: "Website",
      description: "CV болон портфолио",
      imgUrl: projImg1,
    },
    {
      title: "Website",
      description: "CV болон портфолио",
      imgUrl: projImg2,
    },
    {
      title: "Website",
      description: "Байгууллагын сайт",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg4,
    // },
    // {
    //   title: "Yeah!",
    //   description: "Development",
    //   imgUrl: projImg5,
    // },
    // {
    //   title: "Rocket science ks",
    //   description: "Design & Development",
    //   imgUrl: projImg6,
    // },
  ];
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(cv).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = cv;
            alink.click();
        })
    })
}
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Миний ажиллаж байсан төслүүд</h2>
                <p>Always craving for knowledge....<br></br>Бүхий л зүйлсийг туршиж үзэх мөн дээрээс нь тасралтгүй сурах эрмэлзэлтэй учир нь Knowledge>Money I guess
                .</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Developer stuffs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">PS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Curriculum vitae</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                     <div>
                     <p>Photoshop "2022" ашиглан brochure хийж гүйцэтгэсэн байдал:</p>
                     <p>Нүүр</p>
                      <img src={brochure1} alt="brocure" ></img>
                     </div>
                     <div>
                     <p>Ар тал:</p>
                      <img src={brochure2}></img>
                     </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <a class="text-secondary text-bold" target="_blank" onClick={onButtonClick} href="" >CV татах:Монгол</a>
                    </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <h2>Interesting facts about me</h2>
                <p>Дуртай зохиол:"Chopin - Etude Op.25 No.1 "Aeolian Harp" сонсоод үзээрэй
                <br></br><br></br>Сүүлд уншсан ном:"Methamorphosis by Franz Kafka" 
                <br></br><br></br>Fav song: "Nobody" by Mitski
                <br></br><br></br>Wannabe bands: "YOASOBI"  <br></br>"THE Chainsmokers","ikimonogakari","Coldplay","RADWIMPS"
                <br></br><br></br>Constellation: Aries♈
                <br></br><br></br>Age: I'm still child bleh
                <br></br><br></br>MBTI: INTJ-T
                <br></br><br></br>Fav character:Esdeath from "Akame ga kill"
                <br></br><br></br>Fav person: Someone whom working as if dying
                <br></br><br></br>What you wanna say: DM me haha!
                </p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
