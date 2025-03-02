import { useState } from 'react'
import 'react-awesome-slider/dist/styles.css';
import Slider from "react-slick";
import '../App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Instagram() {

    return (
        <>
            <div className="container p-4" style={{ background: 'rgb(28, 28, 103)' }}>
                <div className="row">
                    <h3 className="text-center text-white">Instagram Ads</h3>
                    <p className='text-white'>Home &gt; Instagram Ads</p>
                </div>
            </div>
        </>
    )
}

export default Instagram;
