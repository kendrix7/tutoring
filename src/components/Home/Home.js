import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='home' >
                <div className='home_top'>
                    <div className='home_top_left' >
                        <Link className='link' data-link='ACT' to='/ACT' >ACT</Link >
                        <Link className='link' id='SAT_link' data-link='SAT' to='SAT' >SAT</Link >
                    </div>

                    <div className='home_top_right'>
                        <div className='' ></div>
                    </div>
                </div>

                <div>

                </div>

            </div>
        )
    }
}