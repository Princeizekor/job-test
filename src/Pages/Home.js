import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="company">
                <div className="left-page">
                    <div className="comp">
                    <img src="/img/Ellipse 341.svg" alt="company image" />
                    <h3>SPACEX</h3>
                    </div>
                    <div className="ceo">
                        <p>CEO</p>
                        <h4>Elon Musk</h4>
                    </div>
                    <div className="cto">
                        <p>CTO</p>
                        <h4>Elon Musk</h4>
                    </div>
                </div>
                <img src="/img/Frame 9359.svg" alt="company notification" className="right-page"/>
            </div>
        </div>
    )
}

export default Home
