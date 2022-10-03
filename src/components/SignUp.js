import React from 'react'
import { useState , useEvent } from 'react'

export default function SignUp() {

  const [singup, setSingUp] = useState({
    id: "",
    firstname: "",
    lastname: "",
    job: "",
    age:"",
    codeName: "",
    email: "",
    password:""
})

const handleSubmit = event => {
  event.preventDefault()
  console.log(singup)

  fetch('http://localhost:3000/profiles' , {
            method : 'POST' , 
            body : JSON.stringify(singup) ,
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
}

  // https://my-json-server.typicode.com/Walid-Berrouk/fake-server-json/profiles

  // http://localhost:3000/profiles

  // https://my-json-server.typicode.com/programeurvalley/Fake_Server_JSON/profile

  // cd C:\Users\Marco\Desktop\ReduxToolKit\redux-toolkit-test\src\shared

  // json-server --watch data.json

  // json-server --watch db.json

  
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit} >
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="John" value={singup.firstname} onChange={(event) => setSingUp({...singup, firstname: event.target.value})}/>
            <label for="floatingInput">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Doe" value={singup.lastname} onChange={(event) => setSingUp({...singup, lastname: event.target.value})}/>
            <label for="floatingInput">Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Doe" value={singup.job} onChange={(event) => setSingUp({...singup, job: event.target.value})}/>
            <label for="floatingInput">Job</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="floatingInput" placeholder="Doe" value={singup.age} onChange={(event) => setSingUp({...singup, age: event.target.value})}/>
            <label for="floatingInput">Age</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Doe" value={singup.codeName} onChange={(event) => setSingUp({...singup, codeName: event.target.value})}/>
            <label for="floatingInput">Code Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={singup.email} onChange={(event) => setSingUp({...singup, email: event.target.value})}/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={singup.password} onChange={(event) => setSingUp({...singup, password: event.target.value})}/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr className="my-4" />
          <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
  )
}
