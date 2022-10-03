import React from 'react'
import { useState } from 'react';

import { useSelector } from 'react-redux'


export default function Home(props) {

    const highLights = useSelector(state => state.highLightsReducer);
    const faq = useSelector(state => state.faqReducer);

    const highLightsList = highLights.value.map(highlight => (
        <div key={highlight.id} className="col-md-3 col-sm-6 highlight">
            <div className="h-caption">
                <h4>{highlight.image}<br /> {highlight.title}</h4>
            </div>
            <div className="h-body text-center">
                <p>{highlight.description}</p>
            </div>
        </div>
    ))

    const faqList = faq.value.map((faqSet, index) => (
        <div key={index} className="row">
            {
                faqSet.map(singleFaq => (
                    <div key={singleFaq.id} className="col-sm-6">
                        <h3>{singleFaq.question}</h3>
                        {singleFaq.answer}
                    </div>
                ))
            }
        </div>
    ))


  return (
    <>

        {/* <!-- Header --> */}
        <header id="head">
            <div className="container">
                <div className="row">
                    <h1 className="lead">AWESOME, CUSTOMIZABLE, FREE</h1>
                    <p className="tagline">PROGRESSUS: free business bootstrap template by <a href="http://www.gettemplate.com/?utm_source=progressus&amp;utm_medium=template&amp;utm_campaign=progressus">GetTemplate</a></p>
                    <p><a className="btn btn-default btn-lg" role="button">MORE INFO</a> <a className="btn btn-action btn-lg" role="button">DOWNLOAD NOW</a></p>
                </div>
            </div>
        </header>
        {/* <!-- /Header --> */}

        {/* <!-- Intro --> */}
        <div className="container text-center">
            <br /> 
            <br />
            <h2 className="thin">The best place to tell people why they are here</h2>
            <p className="text-muted">
                The difference between involvement and commitment is like an eggs-and-ham breakfast:
                <br /> 
                the chicken was involved; the pig was committed.
            </p>
        </div>
        {/* <!-- /Intro--> */}
            
        {/* <!-- Highlights - jumbotron --> */}
        <div className="jumbotron top-space">
            <div className="container">
                
                <h3 className="text-center thin">Reasons to use this template</h3>
                
                <div className="row">
                    {highLightsList}
                </div> 
                {/* <!-- /row  --> */}
            
            </div>
        </div>
        {/* <!-- /Highlights --> */}

        {/* <!-- container --> */}
        <div className="container">

            <h2 className="text-center top-space">Frequently Asked Questions</h2>
            <br />

            {faqList}

            <div className="jumbotron top-space">
                <h4>Dicta, nostrum nemo soluta sapiente sit dolor quae voluptas quidem doloribus recusandae facere magni ullam suscipit sunt atque rerum eaque iusto facilis esse nam veniam incidunt officia perspiciatis at voluptatibus. Libero, aliquid illum possimus numquam fuga.</h4>
                <p className="text-right"><a className="btn btn-primary btn-large">Learn more »</a></p>
            </div>

    </div>	
    {/* <!-- /container --> */}
        
        {/* <!-- Social links. @TODO: replace by link/instructions in template --> */}
        <section id="social">
            <div className="container">
                <div className="wrapper clearfix">
                    {/* <!-- AddThis Button BEGIN --> */}
                    <div className="addthis_toolbox addthis_default_style">
                    {/* <a className="addthis_button_facebook_like" fb:like:layout="button_count"></a> */}
                    <a className="addthis_button_tweet"></a>
                    <a className="addthis_button_linkedin_counter"></a>
                    {/* <a className="addthis_button_google_plusone" g:plusone:size="medium"></a> */}
                    </div>
                    {/* // <!-- AddThis Button END --> */}
                </div>
            </div>
        </section>
        {/* // <!-- /social links --> */}

    </>
  )
}
