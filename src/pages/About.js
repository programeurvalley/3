import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function About(props) {
    const aboutContent = useSelector(state => state.aboutContentReducer);

    const aboutContentList = aboutContent.value.map(singleAboutContent => (
        <div key={singleAboutContent.id}>
            <h3>{singleAboutContent.title}</h3>
            {singleAboutContent.image ? singleAboutContent.image : <></>}
            {singleAboutContent.content.map(singleContent => (
                <p>{singleContent}</p>
            ))}
        </div>
    ))


  return (
    <>
        <header id="head" className="secondary"></header>

        {/* <!-- container --> */}
        <div className="container">

            <ol className="breadcrumb">
                <li><Link to="/main/home">Home</Link></li>
                <li className="active">About</li>
            </ol>

            <div className="row">
                
                {/* <!-- Article main content --> */}
                <article className="col-sm-8 maincontent">
                    <header className="page-header">
                        <h1 className="page-title">About us</h1>
                    </header>
                    {aboutContentList}
                </article>
                {/* <!-- /Article --> */}
                
                {/* <!-- Sidebar --> */}
                <aside className="col-sm-4 sidebar sidebar-right">

                    <div className="widget">
                        <h4>Vacancies</h4>
                        <ul className="list-unstyled list-spaces">
                            <li><a href="">Lorem ipsum dolor</a><br /><span className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, laborum.</span></li>
                            <li><a href="">Totam, libero, quis</a><br /><span className="small text-muted">Suscipit veniam debitis sed ipsam quia magnam eveniet perferendis nisi.</span></li>
                            <li><a href="">Enim, sequi dignissimos</a><br /><span className="small text-muted">Reprehenderit illum quod unde quo vero ab inventore alias veritatis.</span></li>
                            <li><a href="">Suscipit, consequatur, aut</a><br /><span className="small text-muted">Sed, mollitia earum debitis est itaque esse reiciendis amet cupiditate.</span></li>
                            <li><a href="">Nam, illo, veritatis</a><br /><span className="small text-muted">Delectus, sapiente illo provident quo aliquam nihil beatae dignissimos itaque.</span></li>
                        </ul>
                    </div>

                </aside>
                {/* <!-- /Sidebar --> */}

            </div>
        </div>	
        {/* <!-- /container --> */}
    </>
  )
}
