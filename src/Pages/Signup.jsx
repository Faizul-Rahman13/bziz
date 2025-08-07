import React from "react";
import { Link } from "react-router-dom";

function Signup(){

    return(

        <>

        <div className="auth-container">

        {/* <!-- Header --> */}

        <div className="auth-header">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join our sales network</p>
        </div>

        {/* <!-- Registration Form --> */}

        <div className="auth-body">
            <div className="account-type">
                <input type="radio" className="btn-check" name="accountType" id="personal" autocomplete="off" />
                <label className="btn" for="personal">
                    <i className="fas fa-user"></i>
                    Personal
                </label>

                <input type="radio" className="btn-check" name="accountType" id="company" autocomplete="off"/>
                <label className="btn" for="company">
                    <i className="fas fa-building"></i>
                    Company
                </label>
            </div>

            <form>
                <input type="text" className="form-control" placeholder="Full Name" />
                <input type="email" className="form-control" placeholder="Email Address" />
                <input type="tel" className="form-control" placeholder="Phone Number" />
                <input type="password" className="form-control" placeholder="Password" />
                <input type="password" className="form-control" placeholder="Confirm Password" />

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="terms" />
                    <label className="form-check-label" for="terms">
                        I agree to the <a href="#">Terms & Conditions</a>
                    </label>
                </div>

                < Link to="/Dashboard"><button type="submit" className="btn btn-primary">Sign Up</button></Link>

            </form>

           

            <div className="login-link">
                Already have an account? <a href="#">Login</a>
            </div>
        </div>
    </div>
    
        
        </>
    )
}

export default Signup