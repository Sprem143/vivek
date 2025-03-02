import { useState } from 'react'
import 'react-awesome-slider/dist/styles.css';
import Slider from "react-slick";
import '../App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Termcondition() {

    return (
        <>
            <div className="container p-4" style={{ background: 'rgb(28, 28, 103)' }}>
                <div className="row">
                    <h3 className="text-center text-white">Terms & Conditions</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cum ducimus magnam fugiat quae quis, ea sunt alias consequatur aliquam! Molestias repellendus, quibusdam corporis excepturi sint atque omnis cumque quo!</p>
                </div>
            </div>
        </>
    )
}

export default Termcondition;
