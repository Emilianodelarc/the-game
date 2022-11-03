import React,{useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import bg from '../imagen/bg.jpg'
import logo from '../imagen/logoPB.png'
import man from '../imagen/men.png'

gsap.registerPlugin(ScrollTrigger)



function Banner() {
    let bgImg = useRef(null)
    let person = useRef(null)


    
    useEffect(()=>{
        gsap.to('#bg', {
        scrollTrigger:{
            scrub:1
        },
        scale: 1.5
        })


        gsap.to('#perso', {
        scrollTrigger:{
            scrub:1
        },
        x:-500,
        })

        
    },[])

  return (
    <section className="banner">
        <img src={bg} ref={bgImg} id="bg"/>
        <img src={logo} className='text' id='text'/>
        <img src={man} ref={person} id="perso" /> 
    </section>
  )
}

export default Banner