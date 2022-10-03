import React from 'react'
import { useState , useEffect } from 'react'

// Data
import HeroImg from '../assets/bootstrap-docs.png'

export default function Hero() {


  const [response , setHero] = useState({
    isLoading : true,
    content : {},
    err: ''
  })


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Walid-Berrouk/fake-server-json/hero')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(response => setHero(response))    //print data to console (response  => { ...hero,isLoading:false , content : res.data })
    .catch(err => console.log('Request Failed', err)); // Catch errors (err => ...hero,isLoading:false,arr : arr.message)
  },[])
    


  return (
    <div className="container my-5">
      {
        /* hero.isLoading ?
          <div class="spinner" ></dvi>  : !hero.err (message error of axios) ? <div>content of fatching</div>
        */
      }
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">{response.title}</h1>
        <p className="lead">{response.description}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src={HeroImg} alt="" width="720" />
      </div>
    </div>
  </div>
  )
}
