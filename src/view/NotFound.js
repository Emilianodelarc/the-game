import React, {useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

function NotFound() {
    const [video, setVideo]= useState(true)
    let history = useNavigate()
    const handleClick = ()=>{
        setVideo(false)
    }
    console.log(useLocation());
    const handleProgress=(pr)=>{
        if(Math.round(pr.playedSeconds) === 28){
         history('/')
        }
    }

  return (
    <div className='body-notFound'>
        { video ? <section className="notFound">
            <div className="img">
                <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
                <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
            </div>
            <div className="text">
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <h3>BACK TO HOME?</h3>
                <Link to={'/'} className="yes">YES</Link>
                <button className='no' onClick={handleClick}>NO</button>
            </div>
        </section> :
        <div className='video'>
            <ReactPlayer
            url='https://www.youtube.com/embed/G3AfIvJBcGo'
            className='react-player'
            playing
            width='100%'
            height='100%'
            onProgress={(pr)=> handleProgress(pr)}
            />
        </div>}
    </div>
    
  )
}

export default NotFound