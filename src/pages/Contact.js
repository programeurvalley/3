import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';


export default function Contact() {


    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        phone: "",
        newsLetter: false,
        message: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        console.log(feedback)
        alert(`Nom: ${feedback.name} \nEmail:${feedback.email}  \nPhone:${feedback.phone} \nNewsLetter:${feedback.newsLetter} \nComment:${feedback.message} \nThank for using our web site`)

        fetch('https://my-json-server.typicode.com/Walid-Berrouk/fake-server-json/profiles' , {
            method : 'POST' , 
            body : JSON.stringify(feedback) ,
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
    }


return (
    <>

        <header id="head" className="secondary"></header>
    
        {/* <!-- container --> */}
        <div className="container">

            <ol className="breadcrumb">
                <li><Link to="/main/home">Home</Link></li>
                <li className="active">Contact</li>
            </ol>

            <div className="row">
                
                {/* <!-- Article main content --> */}
                <article className="col-sm-9 maincontent">
                    <header className="page-header">
                        <h1 className="page-title">Contact us</h1>
                    </header>
                    
                    <p>
                        We’d love to hear from you. Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as I can. Please allow a couple days for me to respond.
                    </p>
                    <br />
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <input className="form-control" type="text" placeholder="Name" 
                                        value={feedback.name}
                                        onChange={(event) => setFeedback({...feedback, name: event.target.value})}/>
                                </div>
                                <div className="col-sm-4">
                                    <input className="form-control" type="text" placeholder="Email" 
                                        value={feedback.email}
                                        onChange={(event) => setFeedback({...feedback, email: event.target.value})}/>
                                </div>
                                <div className="col-sm-4">
                                    <input className="form-control" type="text" placeholder="Phone" 
                                        value={feedback.phone}
                                        onChange={(event) => setFeedback({...feedback, phone: event.target.value})}/>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <textarea placeholder="Type your message here..." className="form-control" rows="9"
                                        value={feedback.message}
                                        onChange={(event) => setFeedback({...feedback, message: event.target.value})}
                                        ></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="checkbox"><input type="checkbox" 
                                        checked={feedback.newsLetter}
                                        onChange={(event) => setFeedback({...feedback, newsLetter: event.target.checked})}/>
                                        Sign up for newsletter</label>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <input className="btn btn-action" type="submit" value="Send message" />
                                </div>
                            </div>
                        </form>

                </article>
                {/* <!-- /Article --> */}
                
                {/* <!-- Sidebar --> */}
                <aside className="col-sm-3 sidebar sidebar-right">

                    <div className="widget">
                        <h4>Address</h4>
                        <address>
                            2002 Holcombe Boulevard, Houston, TX 77030, USA
                        </address>
                        <h4>Phone:</h4>
                        <address>
                            (713) 791-1414
                        </address>
                    </div>

                </aside>
                {/* <!-- /Sidebar --> */}

            </div>
        </div>	
        {/* <!-- /container --> */}
        
        <section className="container-full top-space">
            <div id="map">
                {/* <GoogleMapReact
                    // bootstrapURLKeys={{ key: "" }}
                    defaultCenter={{
                        lat: 10.99835602,
                        lng: 77.01502627
                      }}
                    defaultZoom={11}
                >
                </GoogleMapReact> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103667.67296663678!2d-0.7082319782053832!3d35.711096110582254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8854841f537d%3A0x4187f63762f7290f!2sOran!5e0!3m2!1sfr!2sdz!4v1663300487119!5m2!1sfr!2sdz" style={{border: 0, width:"100%", height: "100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </>
  )
}
