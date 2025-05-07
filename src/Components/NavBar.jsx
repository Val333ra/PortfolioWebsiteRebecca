import { Fragment } from "react";
import React from "react";
import { useState } from "react";
import moonSvg from "../assets/moon.svg"
import sunSVG from "../assets/sun.svg"


export default function NavBar() {
    const [click, setclick] = useState(true);

    const [dark, setDark] = useState(false)

    const toggleTheme = () => {
      setDark(!dark)
      document.body.classList.toggle('dark')
    }
    return (
        <>
        <p className="text-[#000000cc] dark:text-[#ffffff75] font-bold text-lg mt-2 absolute top-0 left-1/2 -translate-x-1/2 z-[100]">portfolio-website</p>

        <div className={`${click ? "" : "rounded-tr-none"} fixed w-11/12 h-12 bottom-3 flex justify-between ml-4 dark:bg-[#00000081] bg-[#ffffff81] rounded-lg z-[100]`}>
            <img className="w-8 ml-3 content-center invert dark:invert-0" src={dark ? moonSvg : sunSVG} onClick={toggleTheme}/>

            <p className="text-lg bottom-6 underline font-medium content-center"><a href="#Connect-via">Get in Touch</a></p>

            <div id="menu" className="w-10 h-8 mr-3 mt-auto mb-auto z-[1]" onClick={() => setclick(!click)}>
                <span id="1" className={`${click ? "translate-y-0 transition duration-100 ease-in" : "-translate-y-[108px] transition duration-100 ease-in"} dark:bg-[#ffffff] bg-[#000000] w-10 h-2 fixed rounded-lg`}></span>
                <span id="2" className={`${click ? "translate-y-3 transition duration-100 ease-in" : "-translate-y-[76px] transition duration-100 ease-in"} dark:bg-[#ffffff] bg-[#000000] w-10 h-2 fixed rounded-lg`}></span>
                <span id="3" className={`${click ? "translate-y-6 transition duration-100 ease-in" : "-translate-y-[43px] transition duration-100 ease-in"} dark:bg-[#ffffff] bg-[#000000] w-10 h-2 fixed rounded-lg`}></span>
            </div>
            <ul className={`${click ? "translate-x-40 transition duration-100 ease-in" : "translate-x-0 transition duration-100 ease-in"} text-xl fixed bottom-[60px] right-5 text-right  dark:bg-[#00000081] bg-[#ffffff81] rounded-t-lg px-2`}>
                <li><a href="#" className="hover:underline focus:underline leading-relaxed" onClick={() => setclick(!click)}>Home</a></li>
                <li><a href="#Project-Section" className="hover:underline focus:underline leading-relaxed" onClick={() => setclick(!click)}>Projects</a></li>
                <li><a href="#About-Section" className="hover:underline focus:underline leading-relaxed" onClick={() => setclick(!click)}>About</a></li>
                <li><a href="#" className="hover:underline focus:underline leading-relaxed" onClick={() => setclick(!click)}>Resources</a></li>
            </ul>
        </div>
        {/* <section className="flex mt-2 text-sm fixed top-0">
        <section className="flex mt-1">
            <p className="ml-3 mr-7 text-[#ffffff75]">portfolio website</p>
            <ul className="flex gap-7">
                <li><a href="#" className="hover:underline focus:underline">Home</a></li>
                <li><a href="#Project-Section" className="hover:underline focus:underline">Projects</a></li>
                <li><a href="#About-Section" className="hover:underline focus:underline">About</a></li>
                <li><a href="#" className="hover:underline focus:underline">Resources</a></li>
            </ul>
        </section>
        <section className="flex gap-7 fixed right-0">
            <button className="bg-[#ffffff75] py-1 px-3 rounded-md">Get in Touch</button>
            <img className="w-7 mr-4" src={moonSvg}/>
        </section>
        </section> */}
        </>
    );
}