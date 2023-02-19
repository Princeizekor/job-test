import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Verification() {
    const [detail, setDetail] = useState({
        email: '',
        password: ''
    })

    const location = useHistory()

    const handleFormSubmition = (e) => {
        e.preventDefault();
        if (detail.email !== '' || detail.password !== '') {
            setDetail({
                email: '',
                password: ''
            })
         location?.push("/home")
        }

    };
    return (
        <div className="verify">
            <div className="intro">
                <img src="/img/Moneey App Icon 1.svg" alt="app-logo" />
                <h2 className="intro-text1">Hi there, see what’s new</h2>
                <p className="intro-text2">Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
                <img src="/img/Frame 7.png" alt="image 1" className="images" />
                <img src="/img/Frame 5.png" alt="image 2" className="images" />
                <img src="/img/Frame 9259.svg" alt="image 3" className="images" />
            </div>
            <div className="form">
                <form className="card" onSubmit={handleFormSubmition}>
                    <h5 className="text1">Login to your dashboard</h5>
                    <p className="text2">Provide details to login to your account </p>
                    <label htmlFor="html">Email</label>
                    <input type="email" name="email" id="user" placeholder="Email" value={detail?.firstName} onChange={(e) => setDetail({
                        ...detail,
                        email: e.target.value
                    })} required/>
                    <label htmlFor="html">Password</label>
                    <input type="password" name="password" id="pass" placeholder="Password" value={detail?.firstName} onChange={(e) => setDetail({
                        ...detail,
                        password: e.target.value
                    })} required/>
                    <button type="submit" className="login-btn">login</button>
                </form>
            </div>
        </div>
    )
}

export default Verification
