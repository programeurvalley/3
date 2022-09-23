import React from 'react'
import { Link } from 'react-router-dom'

export default function Testomonials() {
  return (
    <>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Testimonials example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                <a href="#" className="btn btn-primary my-2 mx-2">Main call to action</a>
                <a href="#" className="btn btn-secondary my-2 mx-2">Secondary action</a>
                </p>
            </div>
            </div>
        </section>
        <div className="album py-5 bg-light">
            <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <div className="card-body">
                        <h1 className='card-title'>Jeph Star</h1>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. It Will contain our testimonil content</p>
                        <Link to="/main/home/0" class="btn btn-primary">Go somewhere</Link>
                        <div className="d-flex justify-content-end align-items-center">
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
