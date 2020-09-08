import React, { useEffect } from 'react';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    useEffect(() => {
        gsap.to(".e", {translateY: 150, duration: 3, opacity: 1, ease: Power3})
        gsap.to(".d1", {translateY: 150, duration: 3, opacity: 1})
        gsap.to(".d2", {translateY: 150, duration: 3, opacity: 1})
        gsap.to(".y", {translateY: 150, duration: 3, opacity: 1})
        gsap.to(".kid-eddy", {opacity: 1, duration: 3})
        gsap.from(".bio-text-one", {translateX: 150, duration: 3})
        gsap.from(".bio-text-two", {translateX: 150, duration: 3})
        gsap.to(".pronouns", {opacity: 1, duration: 3})
        gsap.from(".kid-eddy", {translateY: 300, duration: 3})
    })

    return (
        <div className="home-page-container">
            {/* this is where the picture of kid eddy is */}
            <img className="kid-eddy" src="./2127.jpg"></img>
            <div className="name-container">
                <h1 className="e">e</h1>
                <h1 className="d1">d</h1>
                <h1 className="d2">d</h1>
                <h1 className="y">y</h1>
            </div>
        </div>
    )
}

export default Home;