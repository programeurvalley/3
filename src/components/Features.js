import React from 'react'
import { useEffect , useState } from 'react'


import { FaRegUserCircle } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { BsToggles2, BsCollection } from 'react-icons/bs'


export default function Features() {

  const [response , setFeatures] = useState([])


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Walid-Berrouk/fake-server-json/features')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(response => setFeatures(response))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

    
  },[])

  let arr =[];

  for(let i = 0 ; i<response.length ; i++){
    arr[i] = response[i].id;
  }

  console.log(arr)

  const Img = [{
    image: <BsCollection size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>
  },{
    image: <FaRegUserCircle size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>
  },{
    image: <BsToggles2 size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>
  }]
  
  const divList = arr.map(e  => <div key={e} className="feature col">
            <div className="">
            {Img[e].image}
            </div>
            <h2>{response[e].title}</h2>
            <p>{response[e].description}</p>
            <a href={response[e].link} className="icon-link">
              Call to action
              <FiChevronRight />
            </a>
          </div>)

  return (
    <div className='container'>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {divList}
        </div>
    </div>
  )
}

