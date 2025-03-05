import 'react-awesome-slider/dist/styles.css';
import Slider from "react-slick";
import '../App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

function Website() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <>
            <div className="container p-4" style={{ background: 'rgb(28, 28, 103)' }}>
                <div className="row">
                    <h3 className="text-center text-white">WEbsite Desiging</h3>
                    <p className='text-white'></p>
                </div>
            </div>

            <div className="container p-3">
                <div className="row">
                    <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                        <h4 className='mb-2'>Website Designing</h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam sequi corporis officia id minus blanditiis architecto quam labore explicabo dicta enim ullam molestias, quasi odio voluptates necessitatibus eum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero facere nihil voluptates nesciunt quisquam minus sunt eligendi? Iste ullam nihil quo veniam ut sed laborum ad explicabo natus maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugit debitis inventore quasi quos dicta consequuntur minus incidunt ab, accusamus dolore est assumenda. Dolore illo, nihil repellat inventore a cupiditate.
                        <button className='butn2 mt-2'>Button</button>
                    </div>
                    <div className="col-md-6 p-4 dfjcac">
                        <img src="/static/images/demo.jpeg" alt="" height='250' />
                    </div>
                </div>
            </div>

            <div className="mt-4 mb-4">
                <h2 className="text-center">Our Digital Marketing Services</h2>
                <p className="text-center mt-3 ps-4 pe-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corrupti vitae, temporibus, voluptatum, ipsum a officiis quas minima natus quis quod labore quidem? Sapiente magni odit similique reprehenderit libero aspernatur?</p>
            </div>

            <div className="container p-3">
                <div className="row">
                    <div className="col-md-6 p-4 dfjcac">
                        <img src="/static/images/demo.jpeg" alt="" height='250' />
                    </div>
                    <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                        <div className='d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" className="tickmark bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa nam reiciendis, eaque voluptates ea animi illo corporis, omnis sit placeat necessitatibus asperiores harum debitis cumque iusto iure dolorem at?</p>
                        </div>

                        <div className='d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" className="tickmark bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa nam reiciendis, eaque voluptates ea animi illo corporis, omnis sit placeat necessitatibus asperiores harum debitis cumque iusto iure dolorem at?</p>
                        </div>

                        <div className='d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" className="tickmark bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa nam reiciendis, eaque voluptates ea animi illo corporis, omnis sit placeat necessitatibus asperiores harum debitis cumque iusto iure dolorem at?</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container p-3 bg-theme">
                <div className="row">
                    <div className="col-md-12 p-4 dfjcac">
                        <h2 className='ps-4'>Long-term SEO Marketing Strategy for Startups </h2>
                        <p className='ps-4 mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam sequi corporis officia id minus blanditiis architecto quam labore explicabo dicta enim ullam molestias, quasi odio voluptates necessitatibus eum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero facere nihil voluptates nesciunt quisquam minus sunt eligendi? Iste ullam nihil quo veniam ut sed laborum ad explicabo natus maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugit debitis inventore quasi quos dicta consequuntur minus incidunt ab, accusamus dolore est assumenda. Dolore illo, nihil repellat inventore a cupiditate.
                        </p>
                        <button className='butn ms-4 mt-3 ps-4 pe-4'>Button</button>
                    </div>
                </div>
            </div>
            <div className="mt-4 mb-4">
                <h2 className="text-center">Our Digital Marketing Services</h2>
                <p className="text-center mt-3 ps-4 pe-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corrupti vitae, temporibus, voluptatum, ipsum a officiis quas minima natus quis quod labore quidem? Sapiente magni odit similique reprehenderit libero aspernatur?</p>
            </div>

            <div className="container p-3">
                <div className="row">
                    <div className="col-md-6 p-4 dfjcac">
                        <img src="/static/images/demo.jpeg" alt="" height='250' />
                    </div>
                    <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                        <div className='d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" className="tickmark bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa nam reiciendis, eaque voluptates ea animi illo corporis, omnis sit placeat necessitatibus asperiores harum debitis cumque iusto iure dolorem at?</p>
                        </div>

                        <div className='d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" className="tickmark bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa nam reiciendis, eaque voluptates ea animi illo corporis, omnis sit placeat necessitatibus asperiores harum debitis cumque iusto iure dolorem at?</p>
                        </div>

                        <div className='d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" className="tickmark bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa nam reiciendis, eaque voluptates ea animi illo corporis, omnis sit placeat necessitatibus asperiores harum debitis cumque iusto iure dolorem at?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-4 mt-4" style={{ background: 'rgb(28, 28, 103)' }}>
                <div className="row">
                    <div className="col-md-7 dfjcac">
                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-md-5 dfjcac">
                        <button className='butn ps-4 pe-4'><h5>Request a Callback</h5></button>
                    </div>
                </div>
            </div>
             {/* -------client feedback */}
             <div className="container p-4">
                <h3 className="text-center mb-4">Our Happy Customers</h3>

                <Slider {...settings}>
                    <div className='dfjcac pt-4 bg-theme' >
                        <div className='dfjcac'>
                            <img src="/static/images/demo.jpeg" alt="" height='80' className='rounded-circle' />
                        </div>
                        <div className="feedback dfjcac">
                            <h5 className="text-center">Name</h5>
                            <b cl>Occupation</b>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
                            </p>
                        </div>
                    </div>

                    <div className='dfjcac pt-4 bg-theme' >
                        <div className='dfjcac'>
                            <img src="/static/images/demo.jpeg" alt="" height='80' className='rounded-circle' />
                        </div>
                        <div className="feedback dfjcac">
                            <h5 className="text-center">Name</h5>
                            <b cl>Occupation</b>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
                            </p>
                        </div>
                    </div>

                    <div className='dfjcac pt-4 bg-theme' >
                        <div className='dfjcac'>
                            <img src="/static/images/demo.jpeg" alt="" height='80' className='rounded-circle' />
                        </div>
                        <div className="feedback dfjcac">
                            <h5 className="text-center">Name</h5>
                            <b cl>Occupation</b>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
                            </p>
                        </div>
                    </div>

                    <div className='dfjcac pt-4 bg-theme' >
                        <div className='dfjcac'>
                            <img src="/static/images/demo.jpeg" alt="" height='80' className='rounded-circle' />
                        </div>
                        <div className="feedback dfjcac">
                            <h5 className="text-center">Name</h5>
                            <b cl>Occupation</b>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
                            </p>
                        </div>
                    </div>

                    <div className='dfjcac pt-4 bg-theme' >
                        <div className='dfjcac'>
                            <img src="/static/images/demo.jpeg" alt="" height='80' className='rounded-circle' />
                        </div>
                        <div className="feedback dfjcac">
                            <h5 className="text-center">Name</h5>
                            <b cl>Occupation</b>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
                            </p>
                        </div>
                    </div>

                    <div className='dfjcac pt-4 bg-theme' >
                        <div className='dfjcac'>
                            <img src="/static/images/demo.jpeg" alt="" height='80' className='rounded-circle' />
                        </div>
                        <div className="feedback dfjcac">
                            <h5 className="text-center">Name</h5>
                            <b cl>Occupation</b>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
                            </p>
                        </div>
                    </div>

                </Slider>
            </div>

            <h3 className="text-center mb-4 mt-4">Frequently Asked Question</h3>
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-4 p-4 dfjcac">
                        <img src="/static/images/demo.jpeg" alt="" height='250' />
                    </div>
                    <div className="col-md-8 p-4 d-flex flex-column justify-content-center">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div className="container">
        <h3 className='text-center mt-4 mb-4'>Recent Blog Posts        </h3>
        <div className="row ">
          <div className="col-md-4 pt-2 dfjcac">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/static/images/demo.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 p-2 dfjcac">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/static/images/demo.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 p-2 dfjcac">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/static/images/demo.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <h3 className="text-center">Contact Form</h3>
        <p className="text-center mt-3 fs-4">Want to get in touch? We'd love to hear from you. Just fill in the form below.</p>
        <div className="row row2 dfjcac flex-row mt-4">
          <div className="col-md-3">

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

          </div>
          <div className="col-md-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </div>
          <div className="col-md-9">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </div>
         
        </div>
       <div className="w-100 d-flex justify-content-center">
       <button className='butn2 ps-4 pe-4 pt-2 pb-2'>Button</button>
       </div>
      </div>
        </>
    )
}

export default Website;
