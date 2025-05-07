import React from "react"
import { Fragment } from "react"
import NavBar from "./Components/NavBar"
import HeroName from "./Components/HeroName"
import ProjectHeading from "./Components/ProjectHeading"
import ProjectCards from "./Components/ProjectCards/ProjectCard1"
import AboutImage from "./Components/AboutTextAndImage"
import AboutTextAndPicture from "./Components/AboutTextAndImage"
import ConnectViaCards from "./Components/ConnectVia"
import ConnectVia from "./Components/ConnectVia"
import ConnectViaCard from "./Components/ConnectVia"
import { useState } from "react"

function App() {


  return (
    <>
      <section className="bg-white text-black dark:bg-black dark:text-white font-Rubik font-medium">
        <NavBar/>
        <section id="Hero-Section" className="flex justify-center pt-[42vh] h-screen">
        <HeroName />
        </section>
        <section id="Project-Section" className="mb-20">
          <ProjectHeading Heading={"Projects"}/>
          <section className="gap-5">
            <ProjectCards/>
          </section>
        </section>
        <section id="About-Section" className="">
          <ProjectHeading Heading={"About"} />
          <AboutTextAndPicture/>
        </section>
        <section id="Resources-Section">
          <ProjectHeading Heading={"Resources"} />
        </section>
      </section>
    </>
  );
}

export default App