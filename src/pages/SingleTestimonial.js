import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleTestimonial() {

    const { id } = useParams();
    
    const [response , setPersonne] = useState({})
    const [post , setPost] = useState([])

    useEffect(() => {
        getPersonne();
    },[])

    useEffect(() => {
        getPost();
    },[])

    
    const getPersonne = () => {
        fetch(`https://my-json-server.typicode.com/Walid-Berrouk/fake-server-json/profiles/${id}`)
        // Handle success
        .then(response => response.json())  // convert to json
        .then(response => setPersonne(response))    //print data to console
        .catch(err => console.log('Request Failed', err)); // Catch errors
    }

    const getPost = () => {
        fetch(`https://my-json-server.typicode.com/Walid-Berrouk/fake-server-json/testimonials?author_id=${id}`)
        // Handle success
        .then(post => post.json())  // convert to json
        .then(post => setPost(post))    //print data to console
        .catch(err => console.log('Request Failed', err)); // Catch errors
    }

    let arr =[];

    for(let i = 0 ; i<post.length ; i++){
    arr[i] = i;
    }

    console.log(arr)

    const postList = arr.map(e  => <p key={e} className="card-text my-2">{post[e].content}<small className="text-muted">- {post[e].time}</small></p>)


    return (
    <>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">{response.firstname + " " + response.lastname}</h1>
    <p className="lead text-muted">Here you can find {response.firstname + " " + response.lastname} Profile Testimonials</p>
            </div>
            </div>
        </section>
        <div className='container my-4'>
            <div className="card shadow-sm">
                <div className="card-body">
                <h1 className='card-title'>{response.firstname + " " + response.lastname}</h1>
                <h6 class="card-subtitle mb-2 text-muted">{response.job}</h6>
                <p className="card-text">{response.age} years old</p>
                <code>{response.codeName}</code>
                </div>
            </div>
        </div>
        <div className='container my-4'>
            <div className="card shadow-sm">
                <div className="card-body">
                <h1 className='card-title'>{response.firstname + " " + response.lastname} Testimonials</h1>
                {postList}
                </div>
            </div>
</div>
    </>
)
}
