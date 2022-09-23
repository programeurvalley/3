import React from 'react'


import { FaRegUserCircle } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { BsToggles2, BsCollection } from 'react-icons/bs'



export default function Features() {
  return (
    <div className='container'>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="">
              <BsCollection size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action
              <FiChevronRight />
            </a>
          </div>
          <div className="feature col">
            <div className="">
              <FaRegUserCircle size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action
              <FiChevronRight />
            </a>
          </div>
          <div className="feature col">
          <div className="">
              <BsToggles2 size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action
              <FiChevronRight />
            </a>
          </div>
        </div>
    </div>
  )
}
