import { useState, useEffect,useRef } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

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
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Шинэ мэдэгдэл авахыг хүсвэл мэйл хаягаа илгээгээрэй!</h3>
              {status === 'sending' && <Alert>Илгээж байна...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={form.email} type="email" onChange={handleChange} name="email" placeholder="Имэйл хаяг" />
                  <button type="submit">Илгээх</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
