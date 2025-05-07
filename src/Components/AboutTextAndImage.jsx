import { Fragment } from "react";
import randomMan from "../assets/RandomDude.jpg";
import InstagramIcon from "../assets/Instagram_Icon.svg";
import XIcon from "../assets/X_Icon.svg";
import LinkedInIcon from "../assets/LinkedIn_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";

export default function AboutTextAndPicture() {
    return (
        <>
        <section className="mt-10 ml-auto mr-auto w-11/12"> 
                <img src={randomMan} className="rounded-xl"/>
            <section className="mt-2">
                <h3 className="text-xl">Rebecca Büscher</h3>
                <p className="font-normal dark:text-[#ffffff60] text-[#00000cc]"> Hi! My name is Rebecca Büscher. I am an aspiring software engineer
                currently studying as a first year @UDE. I want to use this personal Website 
                not only to showcase my work but also offer resources for everyone
                interested in a software engineering career. Take a look around!</p>
            </section>
            <section className="flex gap-2 mt-5">
                <h3 className="text-lg">Connect via</h3>
            <section id="Connect-via" className="ml-auto">
                <div className="dark:bg-[#D9D9D9] bg-[#000000cc] flex gap-2 rounded-md mb-2"><img src={InstagramIcon} className="w-7 m-1 invert dark:invert-0"/>
                <p className="dark:text-black text-white ml-auto mr-auto content-center pr-3"><a href="#" className="hover:underline active:underline">Instagram</a></p>
                </div>

                <div className="dark:bg-[#D9D9D9] bg-[#000000cc] flex w-[250px] gap-2 rounded-md mb-2"><img src={XIcon} className="w-7 m-1 invert dark:invert-0"/>
                <p className="dark:text-black text-white ml-auto mr-auto content-center pr-3"><a href="#" className="hover:underline active:underline">Twitter</a></p>
                </div>

                <div className="dark:bg-[#D9D9D9] bg-[#000000cc] flex  min-w-[250px] gap-2 rounded-md mb-2"><img src={LinkedInIcon} className="w-7 m-1 invert dark:invert-0"/>
                <p className="dark:text-black text-white ml-auto mr-auto content-center pr-3"><a href="#" className="hover:underline active:underline">LinkedIn</a></p>
                </div>

                <div className="dark:bg-[#D9D9D9] bg-[#000000cc] flex  min-w-[250px] gap-2 rounded-md mb-2"><img src={GithubIcon} className="w-7 m-1 invert dark:invert-0"/>
                <p className="dark:text-black text-white ml-auto mr-auto content-center pr-3"><a href="#" className="hover:underline active:underline">Github</a></p>
                </div>
            </section>
            </section>
        </section>
        </>
    );
}