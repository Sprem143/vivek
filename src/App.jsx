import { useState } from 'react'
import Form from 'react-bootstrap/Form';


import './App.scss'

function App() {

  return (
    <>
      <div className="container p-4 m-0 homecontact">
        <div className="row p-0 m-0 parentheight">
          <div className="col-lg-8 col-md-6 pe-4 d-flex flex-column justify-content-center parentheight" >
            <h4>heading 001</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni deleniti facilis? Repellendus doloremque molestiae et asperiores dolorum excepturi debitis dolor inventore, possimus, veritatis sequi quos enim harum ut dolore.</p>
            <button className='butn'>Button</button>

          </div>
          <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center parentheight">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>

        </div>
      </div>

      <div className="container p-3">
        <div className="row">
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <h2>About Company</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam sequi corporis officia id minus blanditiis architecto quam labore explicabo dicta enim ullam molestias, quasi odio voluptates necessitatibus eum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero facere nihil voluptates nesciunt quisquam minus sunt eligendi? Iste ullam nihil quo veniam ut sed laborum ad explicabo natus maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugit debitis inventore quasi quos dicta consequuntur minus incidunt ab, accusamus dolore est assumenda. Dolore illo, nihil repellat inventore a cupiditate.
            <button className='butn2'>Button</button>
          </div>
          <div className="col-md-6 p-4 dfjcac">
            <img src="/static/images/demo.jpeg" alt="" height='250' />
          </div>
        </div>
      </div>
      <div className="container p-4" style={{ background: 'rgb(28, 28, 103)' }}>
        <div className="row">
          <div className="col-md-7 dfjcac">
            <h3 className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className="col-md-5 dfjcac">
            <button className='butn ps-4 pe-4'><h4>Button</h4></button>

          </div>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <h2 className="text-center">Our Digital Marketing Services</h2>
      </div>

      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 mt-3 dfjcac borderbox">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
            <p className='tac'>Lorem1 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
          </div>

          <div className="col-md-6 mt-3 dfjcac borderbox">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
            <p className='tac'>Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
          </div>

          <div className="col-md-6 mt-3 dfjcac borderbox">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
            <p className='tac'>Lorem3 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
          </div>

          <div className="col-md-6 mt-3 dfjcac borderbox">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
            <p className='tac'>Lorem4 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
          </div>
        </div>
      </div>

      <div className="container p-4" style={{ background: 'rgb(28, 28, 103)' }}>
        <div className="row">
          <div className="col-md-7 dfjcac">
            <h3 className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className="col-md-5 dfjcac">
            <button className='butn ps-4 pe-4'><h4>Button</h4></button>

          </div>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <h2 className="text-center">Our Digital Marketing Services</h2>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-evenly">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="smbox dfjcac">
              <img src="/static/images/logo.jpeg" alt="logo" height='100' />
              <h4 className="text-center">10+ Year</h4>
              <p className='text-center'>Digital Marketing</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="smbox dfjcac p-0">
              <img src="/static/images/logo.jpeg" alt="logo" height='100' />
              <h4 className="text-center">10+ Year</h4>
              <p className='text-center'>Digital Marketing</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="smbox dfjcac p-0">
              <img src="/static/images/logo.jpeg" alt="logo" height='100' />
              <h4 className="text-center">10+ Year</h4>
              <p className='text-center'>Digital Marketing</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="smbox dfjcac p-0">
              <img src="/static/images/logo.jpeg" alt="logo" height='100' />
              <h4 className="text-center">10+ Year</h4>
              <p className='text-center'>Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4 mt-4" style={{ background: 'rgb(28, 28, 103)' }}>
        <div className="row">
          <div className="col-md-7 dfjcac">
            <h3 className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className="col-md-5 dfjcac">
            <button className='butn ps-4 pe-4'><h4>Button</h4></button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
