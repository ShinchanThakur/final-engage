import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './login.css'

const Signup = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })

    let name, value

    const handleInputs = (e) => {
        // console.log(e)
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault()      //This prevents default refresh/reload of page which is done by form component

        const { name, email, phone, work, password, cpassword } = user      //Object destruction

        if (name === "" || email === "" || phone === "" || work === "" || password === "" || cpassword === "") {
            window.alert(" Please Enter Details")
            return;
        }

        const res = await fetch("/register", {      //We have mentioned our server's port in package.json as proxy
            //If we will write it directly here like https://localhost:5000/register
            //then we will have CORS error which will not let us go and fetch it from external port
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({      //The server only understands string (Therefore converting it to string)
                name, email, phone, work, password, cpassword   //In reality, it is name: name, email: email, phone: phone and so on
                //But when the both key value pair have same name, then we can write only one
            })
        })
        const data = await res.json()

        if (!data || data.status === 422) {
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        } else {
            window.alert("Registration Successful")
            console.log("Registration Successful")

            navigate('/login')
        }
    }

    return (
        <>


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}



            <section className="vh-10 gradient-custom">
                <div className="container py-3 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-10 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-4 text-uppercase">Register</h2>
                                        {/* <p className="text-white-50 mb-5">Please Register Yourself</p> */}

                                        {/* <form method="POST" className="register-form" id="register-form"> */}


                                        {/* name */}
                                        <div className="form-group form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeEmailX">Name</label>
                                            <label htmlFor="name">
                                                {/* <i className="zmdi zmdi-account material-icons-name"></i> */}
                                            </label>{" "}
                                            <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs}
                                                placeholder="Your Name"
                                                className="form-control form-control-md"
                                            // style={{ marginTop:'1rem' , width:'15rem', height:'2rem'}}
                                            />

                                        </div>
                                        {/* name end */}

                                        {/* email */}
                                        <div className="form-group form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            <label htmlFor="email">
                                                {/* <i className="zmdi zmdi-email material-icons-name"></i> */}
                                            </label>{" "}
                                            <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs}
                                                placeholder="Your Email"
                                                className="form-control form-control-md"
                                            // style={{ marginTop:'1rem' , width:'15rem', height:'2rem'}}
                                            />

                                        </div>
                                        {/* email ends  */}

                                        {/* phone number  */}
                                        <div className="form-group form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeEmailX">Phone Number</label>
                                            <label htmlFor="phone">
                                                {/* <i className="zmdi zmdi-phone-in-talk material-icons-name"></i> */}
                                            </label>{" "}
                                            <input type="number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs}
                                                placeholder="Your Phone Number"
                                                className="form-control form-control-md"
                                            // style={{ marginTop:'1rem' , width:'15rem', height:'2rem'}}
                                            />
                                        </div>
                                        {/* phone number ends */}

                                        {/* profession start */}
                                        <div className="form-group form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeEmailX">Profession</label>
                                            <label htmlFor="work">
                                                {/* <i className="zmdi zmdi-slideshow material-icons-name"></i> */}
                                            </label>{" "}
                                            <input type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInputs}
                                                placeholder="Your Profession"
                                                className="form-control form-control-md"
                                            //  style={{ marginTop:'1rem' , width:'15rem', height:'2rem'}}
                                            />
                                        </div>
                                        {/* profession end */}

                                        {/* your password */}
                                        <div className="form-group form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeEmailX">Choose Password</label>
                                            <label htmlFor="password">
                                                {/* <i className="zmdi zmdi-lock material-icons-name"></i> */}
                                            </label>{" "}
                                            <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs}
                                                placeholder="Your Password"
                                                className="form-control form-control-md"
                                            // style={{ marginTop:'1rem' , width:'15rem', height:'2rem'}}
                                            />
                                        </div>
                                        {/* password end */}


                                        {/* confirm password */}
                                        <div className="form-group form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeEmailX">Confirm Password</label>
                                            <label htmlFor="cpassword">
                                                {/* <i className="zmdi zmdi-lock material-icons-name"></i> */}
                                            </label>{" "}
                                            <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs}
                                                placeholder="Confirm Your Password"
                                                className="form-control form-control-md"
                                            // style={{ marginTop:'1rem' , width:'15rem', height:'2rem'}}
                                            />
                                        </div>
                                        {/* confirm pass end */}

                                        {/* sign up button */}
                                        <div className="form-group form-button">
                                            <button className="btn btn-outline-light btn-lg px-5 form-submit" type="submit" name="signup" id="signup" value="register" onClick={PostData}> Register </button>
                                            <p className="mb-0">Have account?  </p>
                                            <NavLink to="/login" className="signup-image-link">Log In</NavLink>

                                        </div>
                                        
                                        {/* </form> */}

                                    </div>

                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
