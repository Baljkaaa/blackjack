import { useState ,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_gu1r93e',
        'template_4basxjl',
        {
          from_name: form.name,
          to_name: "Baljka",
          from_email: form.email,
          to_email: "enkujinne@gmail.com",
          message: form.message,
        },
        "uGU5UAOKb8UHv7FKN"
      )
      .then(
        () => {
          setLoading(false);
          alert("Баярлалаа! :))");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("ah crap, дахин оролдоно уу! :(");
        }
      );
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Холбоотой байгаарай</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='name' value={form.name} placeholder="Овог" onChange={handleChange} />
                    </Col>
                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Нэр" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col> */}
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='email' value={form.email} placeholder="Мэйл хаяг" onChange={handleChange} />
                    </Col>
                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Утасны дугаар" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col> */}
                    <Col size={12} className="px-1">
                      <textarea rows="6" name='message' value={form.message} placeholder="Зурвас" onChange={handleChange}></textarea>
                      <button type="submit">{loading ? "Илгээж байна..." : "Илгээх"}<span></span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
